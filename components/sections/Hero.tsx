'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Music } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { TiltCard, TiltCardContent } from '@/components/TiltCard'
import { AnimatedCounter } from '@/components/AnimatedCounter'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-cream/[0.008] blur-[150px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-cream/[0.005] blur-[100px]" />
      </div>

      <div className="container-wide relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <TiltCard tiltDegree={15}>
                <TiltCardContent depth={40} className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-dark-2 border-2 border-cream/10 flex items-center justify-center overflow-hidden">
                  <span className="font-display text-5xl sm:text-6xl text-cream/80">{personalInfo.initials}</span>
                </TiltCardContent>
              </TiltCard>
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-cream/40 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="display-hero text-left"
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-muted text-sm sm:text-base max-w-xl mt-4"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center gap-4 mt-6"
            >
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <div className="flex items-center gap-3">
                {[
                  { href: personalInfo.social.github, icon: Github, label: 'GitHub' },
                  { href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: personalInfo.social.tiktok, icon: Music, label: 'TikTok' },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-muted-2 hover:text-cream hover:border-cream/30 transition-colors"
                    title={link.label}
                  >
                    <link.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-border"
        >
          {[
            { label: 'Projects Built', to: 6, suffix: '+' },
            { label: 'Years Learning', to: 3, suffix: '+' },
            { label: 'Tech Stack', to: 15, suffix: '+' },
            { label: 'Juz Hafidz', to: 30, suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-cream">
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-2 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero