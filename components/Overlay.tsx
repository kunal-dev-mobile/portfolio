'use client'

import { motion } from 'framer-motion'

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement>
}

export function Overlay({ containerRef }: OverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="flex flex-col items-center"
      >
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
    </div>
  )
}
