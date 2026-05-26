'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Youtube() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      id="youtube"
      className="relative py-36 px-4 lg:px-8 overflow-hidden bg-[#121212]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(244,63,94,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div ref={headRef} className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, #f43f5e, #fb923c)' }}
            />
            <span className="text-[11px] text-rose-400 tracking-[0.3em] uppercase font-semibold">
              Content Creator
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white leading-[1.05] mb-6"
          >
            Drive with <br className="hidden lg:block" />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #f43f5e, #fb923c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kunal
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 space-y-4"
          >
            <p>
              Welcome to <strong>&apos;Drive with Kunal&apos;</strong> — my creative outlet where a deep passion for the automotive world comes to life.
            </p>
            <p>
              Beyond writing code, I produce high-quality, engaging videos covering comprehensive car and bike reviews, industry updates, and motoring experiences for a growing community of automotive enthusiasts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-3 px-6 backdrop-blur-md">
              <span className="text-2xl font-black text-white">13K+</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Subscribers</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-3 px-6 backdrop-blur-md">
              <span className="text-2xl font-black text-white">380+</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Videos</span>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            href="https://www.youtube.com/c/DrivewithKunal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all group"
            style={{
              background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
              boxShadow: '0 8px 32px rgba(225, 29, 72, 0.25)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Channel
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>

        {/* Visual mockup side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={headInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-md lg:max-w-none relative mx-auto"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Abstract Player UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="w-20 h-20 rounded-full bg-rose-500/20 flex items-center justify-center mb-6 backdrop-blur-md border border-rose-500/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#f43f5e" className="ml-2">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="w-2/3 h-2 bg-white/10 rounded-full mb-3" />
              <div className="w-1/3 h-2 bg-white/5 rounded-full" />
            </div>
            
            {/* Play bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div className="h-full w-1/3 bg-rose-500" />
            </div>
            
            {/* Channel Icon Floating */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -left-4 -bottom-6 bg-[#1a1a1a] p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                DWK
              </div>
              <div className="flex flex-col gap-1.5 pr-2">
                <div className="text-xs font-semibold text-white">Drive with Kunal</div>
                <div className="text-[9px] text-gray-500">13K subscribers</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
