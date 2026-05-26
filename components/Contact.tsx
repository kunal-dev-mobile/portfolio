'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const contactMethods = [
  {
    label: 'Email',
    value: 'kunal.developer1@gmail.com',
    href: 'mailto:kunal.developer1@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    label: 'Phone',
    value: '+91-8826264415',
    href: 'tel:+918826264415',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#4ecdc4',
  },
  {
    label: 'Location',
    value: 'Sanjay Nagar, Ghaziabad',
    href: 'https://maps.google.com/?q=Sanjay+Nagar,+Ghaziabad',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#8b5cf6',
  },
  {
    label: 'LinkedIn',
    value: 'Kunal Bhardwaj',
    href: 'https://www.linkedin.com/in/kunal-bhardwajflutter/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: '#f43f5e',
  },
]

function ContactCard({
  method,
  index,
}: {
  method: (typeof contactMethods)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={method.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-4 p-7 rounded-2xl text-center"
      style={{
        background: hovered
          ? `rgba(255,255,255,0.05)`
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? method.color + '35' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: hovered
          ? `0 0 40px ${method.color}18, 0 20px 60px rgba(0,0,0,0.4)`
          : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, ${method.color}12 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${method.color}50, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 transition-all duration-400"
        style={{
          background: `${method.color}${hovered ? '20' : '10'}`,
          border: `1px solid ${method.color}${hovered ? '45' : '25'}`,
          color: method.color,
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {method.icon}
      </div>

      <div className="relative z-10">
        <p
          className="text-[10px] font-black tracking-[0.3em] uppercase mb-1"
          style={{ color: method.color }}
        >
          {method.label}
        </p>
        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
          {method.value}
        </p>
      </div>
    </motion.a>
  )
}

export function Contact() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section
      id="contact"
      className="relative py-36 px-4 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #121212 0%, #0a0d14 100%)',
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(78,205,196,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* ── Header ──────────────────────────────────── */}
        <div ref={headRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-[11px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              Get in Touch
            </span>
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[0.95] mb-6"
          >
            Let&apos;s build something{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              exceptional.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed"
          >
            Whether it&apos;s a project, a collaboration, or just a conversation about
            tech — I&apos;m always open to connecting.
          </motion.p>
        </div>

        {/* ── Contact methods ──────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <ContactCard key={method.label} method={method} index={i} />
          ))}
        </div>

        {/* ── Primary CTA ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-24"
        >
          <motion.a
            href="mailto:kunal.developer1@gmail.com"
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 60px rgba(0,212,255,0.4), 0 0 120px rgba(0,212,255,0.15)',
            }}
            whileTap={{ scale: 0.97 }}
            className="relative px-12 py-4 rounded-full font-bold text-[#0a0d14] text-sm tracking-wide overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 100%)',
            }}
          >
            {/* Shine sweep */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
                transform: 'skewX(-20deg)',
              }}
            />
            <span className="relative z-10">Send me a message →</span>
          </motion.a>
        </motion.div>

        {/* ── Footer ──────────────────────────────────── */}
        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-700 text-xs tracking-wider">
            © {new Date().getFullYear()} Kunal Bhardwaj · Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </section>
  )
}
