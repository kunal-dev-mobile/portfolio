'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '4+', label: 'Years Experience', color: '#00d4ff' },
  { value: '12+', label: 'Apps Shipped', color: '#4ecdc4' },
  { value: '10+', label: 'Tech Stack', color: '#a78bfa' },
  { value: '∞', label: 'Cups of Coffee', color: '#f59e0b' },
]

const skills = [
  {
    category: 'Languages & Core',
    color: '#00d4ff',
    items: ['Dart', 'Java', 'Kotlin', 'Basic JavaScript', 'SQLite', 'Firestore'],
  },
  {
    category: 'Frameworks & State',
    color: '#4ecdc4',
    items: ['Flutter', 'Android SDK', 'Provider', 'GetX', 'Bloc'],
  },
  {
    category: 'APIs & Web',
    color: '#8b5cf6',
    items: ['RESTful APIs', 'GraphQL', 'Firebase', 'Node.js (Basics)'],
  },
  {
    category: 'Practices & Tools',
    color: '#f59e0b',
    items: ['Agile/Scrum', 'CI/CD', 'Git/GitHub', 'TDD', 'Jira/Trello'],
  },
]

const journey = [
  {
    year: '2022 - 2023',
    title: 'Techweiler Softwares Pvt. Ltd.',
    detail: 'Mobile App developer: Developed and maintained cross-platform mobile applications using Flutter (Dart), along with native development in Java and Kotlin.',
    color: '#00d4ff',
  },
  {
    year: '2023 - 2024',
    title: 'Bluelupin Technologies Pvt. Ltd.',
    detail: 'Flutter developer: Developed and maintained cross-platform mobile applications using Flutter, ensuring high performance and seamless user experiences on both Android and iOS platforms.',
    color: '#4ecdc4',
  },
  {
    year: '2025 - 2025',
    title: 'Techweiler Softwares Pvt. Ltd.',
    detail: 'Flutter developer: Developed and maintained high-performance, cross-platform mobile applications using Flutter and Dart, ensuring robust functionality.',
    color: '#8b5cf6',
  },
  {
    year: '2025 - Present',
    title: 'Addon Shareware Private Limited',
    detail: 'Sr. Software engineer: Leading Flutter application development for Android & iOS. Implementing scalable architecture using MVVM and GetX.',
    color: '#f59e0b',
  },
]

export function Experience() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' })

  return (
    <section
      id="experience"
      className="relative py-36 px-4 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #121212 0%, #0d1017 50%, #121212 100%)',
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section header ─────────────────────────── */}
        <div ref={headRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(to right, #00d4ff, #4ecdc4)' }}
            />
            <span className="text-[11px] text-cyan-400 tracking-[0.3em] uppercase font-semibold">
              The Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.95]"
          >
            Experience &{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </motion.h2>
        </div>

        {/* ── Stats row ─────────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-8 px-6 rounded-2xl text-center overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${stat.color}20`,
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${stat.color}10 0%, transparent 70%)`,
                }}
              />
              <div
                className="text-4xl lg:text-5xl font-black mb-2 relative z-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}bb)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-600 tracking-widest uppercase font-semibold relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Two column layout ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Timeline */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-10 flex items-center gap-3 tracking-widest uppercase">
              <span
                className="w-6 h-[1px]"
                style={{ background: 'linear-gradient(to right, #00d4ff, transparent)' }}
              />
              Timeline
            </h3>

            <div className="relative pl-7">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-[1px]"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(78,205,196,0.3), transparent)',
                }}
              />

              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mb-10 last:mb-0 group"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.55rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0d1017] transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Ring on hover */}
                  <div
                    className="absolute -left-[1.9rem] top-[2px] w-5 h-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 12px ${item.color}` }}
                  />

                  <div className="pl-5">
                    <span
                      className="text-[10px] font-black tracking-[0.25em] uppercase"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-white font-semibold mt-1 mb-1.5 text-[15px]">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-10 flex items-center gap-3 tracking-widest uppercase">
              <span
                className="w-6 h-[1px]"
                style={{ background: 'linear-gradient(to right, #00d4ff, transparent)' }}
              />
              Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl group relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: `1px solid ${group.color}20`,
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${group.color}10 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${group.color}50, transparent)` }}
                  />

                  <h4
                    className="text-[10px] font-black tracking-[0.3em] uppercase mb-5 relative z-10"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h4>

                  <div className="flex flex-col gap-3 relative z-10">
                    {group.items.map((skill) => (
                      <div key={skill} className="flex items-center gap-2.5">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: group.color, opacity: 0.7 }}
                        />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
