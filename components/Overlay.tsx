'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement>
}

// ─── Word split animation ────────────────────────────────────────────────────
function AnimatedWord({
  word,
  delay = 0,
  color,
}: {
  word: string
  delay?: number
  color?: string
}) {
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ verticalAlign: 'bottom' }}
    >
      <motion.span
        className="inline-block"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={color ? { color } : {}}
      >
        {word}
      </motion.span>
    </span>
  )
}

// ─── Section wrapper with parallax ──────────────────────────────────────────
function ParallaxSection({
  children,
  opacity,
  y,
  x,
  className = '',
}: {
  children: React.ReactNode
  opacity: any
  y?: any
  x?: any
  className?: string
}) {
  return (
    <motion.div
      className={`absolute inset-0 flex pointer-events-none ${className}`}
      style={{ opacity, y, x }}
    >
      {children}
    </motion.div>
  )
}



export function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ── Section 1: Hero (0–20%) ─────────────────────────────────────────────
  const hero_opacity = useTransform(scrollYProgress, [0, 0.06, 0.2], [0, 1, 0])
  const hero_y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-10%'])

  // ── Section 2: Left (22–52%) ────────────────────────────────────────────
  const s2_opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.58], [0, 1, 1, 0])
  const s2_x = useTransform(scrollYProgress, [0.2, 0.32], ['-5%', '0%'])

  // ── Section 3: Right (58–84%) ───────────────────────────────────────────
  const s3_opacity = useTransform(scrollYProgress, [0.58, 0.67, 0.83, 0.9], [0, 1, 1, 0])
  const s3_x = useTransform(scrollYProgress, [0.58, 0.7], ['5%', '0%'])

  // ── Section 4: Outro (90–100%) ──────────────────────────────────────────
  const s4_opacity = useTransform(scrollYProgress, [0.9, 0.97], [0, 1])
  const s4_y = useTransform(scrollYProgress, [0.9, 1], ['6%', '0%'])

  // Scroll indicator fade
  const scrollIndicator_opacity = useTransform(scrollYProgress, [0, 0.07], [1, 0])

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* ─────────────── Section 1: Hero ─────────────────────────────── */}
      <ParallaxSection
        opacity={hero_opacity}
        y={hero_y}
        className="items-center justify-center text-center px-6"
      >
        <div className="flex flex-col items-center max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="mb-8 px-5 py-1.5 rounded-full flex items-center gap-2"
            style={{
              border: '1px solid rgba(0,212,255,0.25)',
              background: 'rgba(0,212,255,0.05)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#00d4ff' }}
            />
            <span className="text-[10px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              Available for projects · 2025
            </span>
          </motion.div>

          {/* Name lines */}
          <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-black tracking-tight leading-[0.9] text-white mb-6 select-none">
            <div className="overflow-hidden">
              <AnimatedWord word="Kunal" delay={0.4} />
            </div>
            <div className="overflow-hidden mt-1">
              <AnimatedWord
                word="Bhardwaj"
                delay={0.55}
                color="transparent"
              />
            </div>
          </h1>

          {/* Gradient "Bhardwaj" layer — sits absolutely below */}
          <div
            className="absolute pointer-events-none select-none text-center"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, calc(-50% + 0.45em))',
              fontSize: 'clamp(3.5rem,11vw,8rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              backgroundImage: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 50%, #a78bfa 100%)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 5s linear infinite',
              zIndex: 1,
            }}
          >
            {/* invisible — only here for space */}
            Bhardwaj
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="text-base lg:text-lg text-gray-500 font-light tracking-widest mt-2"
          >
            Flutter · Android (Java/Kotlin) · Mobile Architecture
          </motion.p>
        </div>
      </ParallaxSection>

      {/* ─────────────── Section 2: Left ──────────────────────────────── */}
      <ParallaxSection
        opacity={s2_opacity}
        className="items-center justify-start px-8 sm:px-12 lg:px-20 xl:px-28"
      >
        <motion.div style={{ x: s2_x }} className="max-w-lg">
          {/* Giant ghost number */}
          <div
            className="text-[11rem] font-black leading-none select-none -ml-3 mb-1"
            style={{
              WebkitTextStroke: '1px rgba(0,212,255,0.12)',
              color: 'transparent',
            }}
          >
            01
          </div>

          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white leading-[1.1] -mt-10 mb-5">
            I build{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              high-performance
            </span>
            <br />
            digital experiences.
          </h2>

          <div className="w-10 h-[1px] bg-cyan-400/50 mb-5" />

          <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-7">
            From real-time chat systems to scalable production architectures —
            shipping code that performs at the edge with millisecond precision.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Dart', 'Java', 'Kotlin', 'Firebase'].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-[11px] font-semibold rounded-full tracking-wider"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: '#67e8f9',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </ParallaxSection>

      {/* ─────────────── Section 3: Right ─────────────────────────────── */}
      <ParallaxSection
        opacity={s3_opacity}
        className="items-center justify-end px-8 sm:px-12 lg:px-20 xl:px-28"
      >
        <motion.div style={{ x: s3_x }} className="max-w-lg text-right">
          <div
            className="text-[11rem] font-black leading-none select-none -mr-3 mb-1"
            style={{
              WebkitTextStroke: '1px rgba(78,205,196,0.12)',
              color: 'transparent',
            }}
          >
            02
          </div>

          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white leading-[1.1] -mt-10 mb-5">
            Bridging{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4ecdc4, #a78bfa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              design
            </span>{' '}
            and
            <br />
            engineering.
          </h2>

          <div className="w-10 h-[1px] bg-teal-400/50 mb-5 ml-auto" />

          <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-7">
            I think in systems and feel in pixels. Every micro-interaction is
            intentional. Every architecture decision is deliberate.
          </p>

          <div className="flex flex-wrap gap-2 justify-end">
            {['Provider', 'GetX', 'REST APIs', 'SQLite', 'Firestore'].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-[11px] font-semibold rounded-full tracking-wider"
                style={{
                  background: 'rgba(78,205,196,0.08)',
                  border: '1px solid rgba(78,205,196,0.2)',
                  color: '#5eead4',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </ParallaxSection>

      {/* ─────────────── Section 4: Outro ─────────────────────────────── */}
      <ParallaxSection
        opacity={s4_opacity}
        className="items-center justify-center text-center px-6"
      >
        <motion.div style={{ y: s4_y }} className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-cyan-400/40" />
            <span className="text-[10px] text-cyan-400/70 tracking-[0.35em] uppercase font-medium">
              Explore More Below
            </span>
            <div className="w-6 h-[1px] bg-cyan-400/40" />
          </div>

          <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-white leading-[0.95] mb-3" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Developer
          </h2>
          <p
            className="text-[clamp(1.5rem,3vw,2.5rem)] font-black mb-6 tracking-wider"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 60%, #a78bfa 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
            }}
          >
            &amp; Content Creator.
          </p>
          <p className="text-gray-600 text-sm tracking-widest">
            4+ years · Flutter · Android · Full Stack Developer
          </p>

          {/* Bouncing down arrow */}
          <div
            className="mt-10 flex flex-col items-center gap-1 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-cyan-400/60" />
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              style={{ color: '#00d4ff', opacity: 0.5 }}
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* ─────────────── Scroll indicator ──────────────────────────────── */}
      <motion.div
        style={{ opacity: scrollIndicator_opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-gray-600 tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </div>
  )
}
