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
    title: 'KidsChaupal',
    description: 'KidsChaupal is a discovery platform which introduces your child to a world of opportunities, trusted by over thousands of parents. It brings together mentors and students to make learning happen effectively, without eliminating the fun quotient.',
    tech: ['Dart', 'Flutter'],
    year: '2023',
    category: 'Mobile App',
    accentColor: '#00d4ff',
    accentColorDim: 'rgba(0,212,255,0.12)',
    number: '01',
    link: 'https://play.google.com/store/apps/details?id=com.kidschaupal.app&hl=en_IN',
  },
  {
    id: 2,
    title: 'DigiSakshar',
    description: 'DigiSakshar is a free to use app for all with the aim to learn and be digitally literate. DigiSakshar gives an opportunity to access, explore and use the power of internet to avail all the digital services and knowledge available at the click of a button.',
    tech: ['Dart', 'Flutter'],
    year: '2023',
    category: 'Mobile App',
    accentColor: '#4ecdc4',
    accentColorDim: 'rgba(78,205,196,0.12)',
    number: '02',
    link: 'https://play.google.com/store/apps/details?id=com.vfnf.digisakshar&hl=en_IN',
  },
  {
    id: 3,
    title: 'Credvisor',
    description: 'Credvisor is a financial lead-sharing and business networking platform that connects agents and service providers offering financial products. The app enables users to share client requirements, track lead progress, and manage communication.',
    tech: ['Dart', 'Flutter'],
    year: '2024',
    category: 'Mobile App',
    accentColor: '#8b5cf6',
    accentColorDim: 'rgba(139,92,246,0.12)',
    number: '03',
    link: 'https://apps.apple.com/in/app/credvisor/id6744828115',
  },
  {
    id: 4,
    title: 'Mattress Fab',
    description: 'Mattress Fabric App brings you a wide range of high-quality mattress fabrics and textile materials directly from trusted manufacturers. Our platform is designed to make fabric selection, product browsing, and ordering simple, fast, and reliable.',
    tech: ['Dart', 'Flutter'],
    year: '2024',
    category: 'Mobile App',
    accentColor: '#f43f5e',
    accentColorDim: 'rgba(244,63,94,0.12)',
    number: '04',
    link: 'https://apps.apple.com/in/app/mattress-fab/id6759448291',
  },
  {
    id: 5,
    title: 'Addon Pharma ERP',
    description: 'Manage your pharma wholesale business smarter with Addon Pharma ERP — A complete billing, accounting, and inventory solution designed specifically for pharmaceutical wholesalers and distributors.',
    tech: ['Dart', 'Flutter'],
    year: '2025',
    category: 'Mobile App',
    accentColor: '#f59e0b',
    accentColorDim: 'rgba(245,158,11,0.12)',
    number: '05',
    link: 'https://play.google.com/store/apps/details?id=com.addonpharma.erp&hl=en',
  },
  {
    id: 6,
    title: 'Wheelboard',
    description: 'Wheelboard is redefining the India’s commercial transport industry, by empowering Fleet Owners, Professionals, and Automotive Service Providers with a unified digital platform. Smart Operations, Sustainable growth and Greater Value for all stakeholders.',
    tech: ['Dart', 'Flutter'],
    year: '2025',
    category: 'Mobile App',
    accentColor: '#10b981',
    accentColorDim: 'rgba(16,185,129,0.12)',
    number: '06',
    link: 'https://play.google.com/store/apps/details?id=com.wheelboard.app&hl=en',
  }
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
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-3xl overflow-hidden h-full block"
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
      </a>
    </motion.div>
  )
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────
const stats = [
  { value: '4+', label: 'Years' },
  { value: '12+', label: 'Apps Shipped' },
  { value: '10+', label: 'Tech Stack' },
  { value: '100%', label: 'Dedication' },
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
      </div>
    </section>
  )
}
