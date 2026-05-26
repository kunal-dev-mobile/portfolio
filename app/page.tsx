'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import { ScrollyCanvas } from '@/components/ScrollyCanvas'
import { Overlay } from '@/components/Overlay'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Youtube } from '@/components/Youtube'
import { Contact } from '@/components/Contact'

// ─── Custom Cursor ────────────────────────────────────────────────────────────
function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [onLink, setOnLink] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setOnLink(
        target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          !!target.closest('a') ||
          !!target.closest('button')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkLink)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.documentElement.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkLink)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.documentElement.style.cursor = ''
    }
  }, [cursorX, cursorY, dotX, dotY, visible])

  if (!visible) return null

  return (
    <>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: onLink ? 44 : clicking ? 28 : 36,
          height: onLink ? 44 : clicking ? 28 : 36,
          borderColor: onLink ? 'rgba(0,212,255,0.9)' : 'rgba(0,212,255,0.5)',
          mixBlendMode: 'difference',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicking ? 6 : 4,
          height: clicking ? 6 : 4,
          mixBlendMode: 'difference',
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />
    </>
  )
}

// ─── Noise Overlay ────────────────────────────────────────────────────────────
function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        opacity: 0.028,
        mixBlendMode: 'overlay',
      }}
    />
  )
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function Navbar({ scrollProgress }: { scrollProgress: number }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const showBg = scrollProgress > 0.015

  const navLinks = ['Work', 'Experience', 'YouTube', 'Contact']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: showBg ? 'rgba(12,12,12,0.8)' : 'transparent',
        backdropFilter: showBg ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: showBg ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black text-[#0a0d14] tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
              boxShadow: '0 0 20px rgba(0,212,255,0.3)',
            }}
          >
            KB
          </div>
          <span className="text-sm font-semibold text-white/70 hidden sm:block tracking-wide">
            Kunal Bhardwaj
          </span>
        </motion.div>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] text-gray-500 hover:text-white transition-colors duration-300 relative group tracking-wide"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}

          <motion.a
            href="mailto:kunal.developer1@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="text-[12px] font-semibold px-5 py-2.5 rounded-xl text-[#0a0d14] tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
            }}
          >
            Hire me
          </motion.a>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span
              className="block h-[1px] bg-current transition-all duration-400 origin-center"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(7.5px)' : 'none' }}
            />
            <span
              className="block h-[1px] bg-current transition-all duration-400"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }}
            />
            <span
              className="block h-[1px] bg-current transition-all duration-400 origin-center"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10,10,10,0.95)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="text-gray-300 hover:text-white text-xl font-semibold tracking-wide transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="mailto:kunal.developer1@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-2 text-sm font-semibold px-5 py-3.5 rounded-xl text-[#0a0d14] text-center"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)' }}
              >
                Hire me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[1.5px] bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress,
          background: 'linear-gradient(to right, #00d4ff, #4ecdc4, #a78bfa)',
          boxShadow: '0 0 8px rgba(0,212,255,0.6)',
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0 }}
      />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <main className="w-full bg-[#121212] overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Noise film grain */}
      <NoiseOverlay />

      {/* Global progress bar */}
      <ProgressBar progress={scrollProgress} />

      {/* Navbar */}
      <Navbar scrollProgress={scrollProgress} />

      {/* ── Hero: Autoplay Frame Animation ──────────────────────── */}
      <div ref={containerRef} className="relative">
        <ScrollyCanvas />
        <div className="absolute inset-0 pointer-events-none z-10">
          <Overlay containerRef={containerRef} />
        </div>
      </div>

      {/* ── Below-fold sections ──────────────────────────────────── */}
      <Projects />
      <Experience />
      <Youtube />
      <Contact />
    </main>
  )
}
