'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  year: string
  category: string
  accentColor: string
  accentColorDim: string
  number: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Real-time Chat Application',
    description:
      'Production-grade chat with real-time messaging, voice calls, and file sharing. Built for scale with WebRTC peer-to-peer connections and Firebase Cloud Messaging.',
    tech: ['Flutter', 'Firebase', 'WebRTC', 'Dart'],
    year: '2024',
    category: 'Mobile App',
    accentColor: '#00d4ff',
    accentColorDim: 'rgba(0,212,255,0.12)',
    number: '01',
    link: '#',
  },
  {
    id: 2,
    title: 'WhatsApp-style Video Calling',
    description:
      'Full-featured video calling with screen sharing, group calls, and end-to-end encryption. Achieved sub-200ms latency in production.',
    tech: ['Flutter', 'WebRTC', 'Socket.io', 'Node.js'],
    year: '2023',
    category: 'Mobile App',
    accentColor: '#4ecdc4',
    accentColorDim: 'rgba(78,205,196,0.12)',
    number: '02',
    link: '#',
  },
  {
    id: 3,
    title: 'Full Stack Admin Dashboard',
    description:
      'Comprehensive analytics platform with real-time data visualization, user management, and automated reporting. Handles 10k+ daily active users.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    year: '2024',
    category: 'Web App',
    accentColor: '#8b5cf6',
    accentColorDim: 'rgba(139,92,246,0.12)',
    number: '03',
    link: '#',
  },
  {
    id: 4,
    title: 'Automotive Content Platform',
    description:
      'Content management system for automotive reviews with video integration, SEO optimization, and analytics — powering the "Drive with Kunal" channel.',
    tech: ['Next.js', 'Headless CMS', 'Video API', 'Tailwind'],
    year: '2023',
    category: 'Web Platform',
    accentColor: '#f43f5e',
    accentColorDim: 'rgba(244,63,94,0.12)',
    number: '04',
    link: '#',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-3xl overflow-hidden h-full"
        style={{
          background: hovered
            ? `linear-gradient(145deg, ${project.accentColorDim}, rgba(255,255,255,0.04))`
            : 'rgba(255,255,255,0.025)',
          border: `1px solid ${hovered ? project.accentColor + '35' : 'rgba(255,255,255,0.07)'}`,
          backdropFilter: 'blur(24px)',
          boxShadow: hovered
            ? `0 0 60px ${project.accentColor}18, 0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`
            : '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
          transform: hovered ? 'translateY(-10px) scale(1.005)' : 'translateY(0) scale(1)',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Animated glowing border top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${project.accentColor}60, transparent)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Ambient glow spot */}
        <div
          className="absolute top-0 left-0 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${project.accentColor}18 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transform: 'translate(-30%, -30%)',
          }}
        />

        <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">
          {/* Top row */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              {/* Number */}
              <div
                className="text-5xl font-black leading-none select-none transition-all duration-500"
                style={{
                  WebkitTextStroke: `1.5px ${project.accentColor}${hovered ? '50' : '25'}`,
                  color: 'transparent',
                }}
              >
                {project.number}
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: project.accentColor }}
                >
                  {project.category}
                </span>
                <span className="text-[11px] text-gray-600">{project.year}</span>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              animate={{
                x: hovered ? 0 : -4,
                opacity: hovered ? 1 : 0,
                rotate: hovered ? 0 : -10,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: `${project.accentColor}15`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-auto group-hover:text-gray-400 transition-colors duration-300">
            {project.description}
          </p>

          {/* Divider */}
          <div
            className="h-[1px] my-7 transition-all duration-500"
            style={{
              background: hovered
                ? `linear-gradient(to right, ${project.accentColor}40, rgba(255,255,255,0.06), transparent)`
                : 'rgba(255,255,255,0.06)',
            }}
          />

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[11px] font-semibold rounded-full tracking-wide transition-all duration-300"
                style={{
                  background: hovered ? `${project.accentColor}12` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${hovered ? project.accentColor + '35' : 'rgba(255,255,255,0.08)'}`,
                  color: hovered ? project.accentColor : '#6b7280',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────
const stats = [
  { value: '4+', label: 'Years' },
  { value: '20+', label: 'Apps Shipped' },
  { value: '50K+', label: 'YT Subscribers' },
  { value: '99%', label: 'Client Satisfaction' },
]

export function Projects() {
  const headingRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headingRef, { once: true, margin: '-80px' })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' })

  return (
    <section id="work" className="relative py-36 px-4 lg:px-8 bg-[#121212] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-60 right-[-100px] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(78,205,196,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section header ─────────────────────────── */}
        <div ref={headingRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, #00d4ff, #4ecdc4)' }}
            />
            <span className="text-[11px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              Selected Work
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.95]"
            >
              Featured
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-500 text-base max-w-sm leading-relaxed lg:text-right"
            >
              A curated selection pushing the boundaries of what's possible on mobile and web.
            </motion.p>
          </div>
        </div>

        {/* ── Stats strip ───────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative py-5 px-6 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="text-3xl lg:text-4xl font-black mb-1"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-600 tracking-widest uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Project grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/kunalbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-medium text-gray-400 hover:text-white transition-all duration-400"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-60 group-hover:opacity-100 transition-opacity"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View all on GitHub</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
