'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Config ────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 75
const FPS = 15 // frames per second (0.066s delay = ~15fps)
const LOOP = true // loop the animation

function getFramePath(index: number): string {
  const pad = String(index).padStart(2, '0')
  return `/sequence/frame_${pad}_delay-0.066s.png`
}

// ─── Object-fit COVER using logical (CSS) dimensions ───────────────────────
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  logicalW: number,
  logicalH: number
) {
  if (!img || !img.naturalWidth || !img.naturalHeight) return

  const imgRatio = img.naturalWidth / img.naturalHeight
  const canvasRatio = logicalW / logicalH

  let drawW: number, drawH: number, offsetX: number, offsetY: number

  if (imgRatio > canvasRatio) {
    drawH = logicalH
    drawW = drawH * imgRatio
    offsetX = (logicalW - drawW) / 2
    offsetY = 0
  } else {
    drawW = logicalW
    drawH = drawW / imgRatio
    offsetX = 0
    offsetY = (logicalH - drawH) / 2
  }

  ctx.drawImage(img, offsetX, offsetY, drawW, drawH)
}

// ─── Component ─────────────────────────────────────────────────────────────
interface ScrollyCanvasProps {
  onReady?: () => void
  onProgress?: (progress: number) => void
}

export function ScrollyCanvas({ onReady, onProgress }: ScrollyCanvasProps) {
  const canvasRef      = useRef<HTMLCanvasElement>(null)
  const imagesRef      = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null))
  const currentFrameRef = useRef(0)
  const rafRef         = useRef<number | null>(null)
  const lastTimeRef    = useRef<number>(0)
  const isPlayingRef   = useRef(false)

  // Logical (CSS) pixel dimensions
  const logicalW = useRef(0)
  const logicalH = useRef(0)

  const [loadProgress, setLoadProgress] = useState(0)
  const [firstFrameReady, setFirstFrameReady] = useState(false)
  const [allLoaded, setAllLoaded] = useState(false)

  // ── Render a specific frame ─────────────────────────────────────────────
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    const img    = imagesRef.current[frameIndex]
    if (!canvas || !img || !img.complete || !img.naturalWidth) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    ctx.fillStyle = '#121212'
    ctx.fillRect(0, 0, logicalW.current, logicalH.current)
    drawCover(ctx, img, logicalW.current, logicalH.current)
  }, [])

  // ── Resize → update canvas size ─────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w   = window.innerWidth
      const h   = window.innerHeight

      logicalW.current = w
      logicalH.current = h

      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`

      const ctx = canvas.getContext('2d', { alpha: false })
      if (ctx) {
        ctx.resetTransform()
        ctx.scale(dpr, dpr)
      }

      renderFrame(currentFrameRef.current)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [renderFrame])

  // ── Preload ALL frames concurrently ────────────────────────────────────
  useEffect(() => {
    let isCancelled = false
    let loadedCount = 0

    const onFrameLoad = (index: number, img: HTMLImageElement) => {
      if (isCancelled) return
      imagesRef.current[index] = img
      loadedCount++

      const progress = loadedCount / TOTAL_FRAMES
      setLoadProgress(progress)
      onProgress?.(progress)

      if (index === 0) {
        setFirstFrameReady(true)
        requestAnimationFrame(() => renderFrame(0))
      }

      if (loadedCount >= TOTAL_FRAMES) {
        setAllLoaded(true)
        onReady?.()
      }
    }

    const onFrameError = (index: number) => {
      if (isCancelled) return
      loadedCount++
      const progress = loadedCount / TOTAL_FRAMES
      setLoadProgress(progress)
      
      if (index === 0) {
        setFirstFrameReady(true)
      }

      if (loadedCount >= TOTAL_FRAMES) {
        setAllLoaded(true)
        onReady?.()
      }
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (imagesRef.current[i]) {
        // Already loaded from a previous StrictMode execution
        onFrameLoad(i, imagesRef.current[i]!)
        continue
      }
      const img = new Image()
      const idx = i
      img.onload  = () => onFrameLoad(idx, img)
      img.onerror = () => onFrameError(idx)
      img.src = getFramePath(i)
    }

    return () => {
      isCancelled = true
    }
  }, [renderFrame, onReady, onProgress])

  // ── Autoplay loop — starts once all frames are loaded ──────────────────
  useEffect(() => {
    if (!allLoaded || isPlayingRef.current) return

    isPlayingRef.current = true
    const interval = 1000 / FPS // ms per frame

    const tick = (timestamp: number) => {
      if (timestamp - lastTimeRef.current >= interval) {
        lastTimeRef.current = timestamp

        const next = LOOP
          ? (currentFrameRef.current + 1) % TOTAL_FRAMES
          : Math.min(currentFrameRef.current + 1, TOTAL_FRAMES - 1)

        currentFrameRef.current = next
        renderFrame(next)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      isPlayingRef.current = false
    }
  }, [allLoaded, renderFrame])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#121212]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ display: 'block' }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 38%, rgba(18,18,18,0.6) 100%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(18,18,18,0.85) 80%, #121212 100%)',
        }}
      />

      {/* Loading screen */}
      <AnimatePresence>
        {!firstFrameReady && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50"
          >
            {/* Pulsing logo ring */}
            <div className="relative mb-10">
              <div
                className="w-20 h-20 rounded-full border border-cyan-400/20 absolute inset-0 animate-ping"
                style={{ animationDuration: '2.5s' }}
              />
              <div
                className="w-20 h-20 rounded-full border border-cyan-400/40 absolute inset-0 animate-ping"
                style={{ animationDuration: '2s', animationDelay: '0.4s' }}
              />
              <div className="w-20 h-20 rounded-full border border-cyan-400/70 flex items-center justify-center relative z-10">
                <span className="text-xl font-black text-cyan-400 tracking-tight">KB</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-56 h-[1px] bg-white/10 rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{
                  background: 'linear-gradient(to right, #00d4ff, #4ecdc4)',
                  width: `${loadProgress * 100}%`,
                }}
              />
            </div>

            <p className="text-[10px] text-gray-600 tracking-[0.4em] uppercase">
              {Math.round(loadProgress * 100)}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
