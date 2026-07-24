'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { TiltCard, TiltCardContent } from '@/components/TiltCard'

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-sub">Projects</span>
          <h2 className="display-lg">MY PROJECTS</h2>
        </motion.div>

        <div className="space-y-6 mt-12 perspective">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard tiltDegree={5}>
                <div className="card rounded-xl overflow-hidden group">
                  <TiltCardContent depth={20}>
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative h-48 md:h-auto bg-dark-3 flex items-center justify-center overflow-hidden">
                        <div className="text-center">
                          <motion.div
                            className="w-16 h-16 rounded-full bg-dark-2 border border-cream/[0.06] flex items-center justify-center mx-auto mb-2"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                          >
                            <span className="font-display text-2xl text-cream/40">{project.title[0]}</span>
                          </motion.div>
                          <p className="text-[10px] font-mono text-muted-2/40">{project.tagline}</p>
                        </div>
                      </div>

                      <div className="md:col-span-3 p-6 flex flex-col justify-center">
                        <h3 className="font-display text-2xl uppercase tracking-wide text-cream/80">{project.title}</h3>
                        <p className="text-muted text-sm leading-relaxed mt-1 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 bg-dark-3 border border-border rounded-md text-[10px] font-semibold text-muted-2 uppercase tracking-wider">{tech}</span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {[
                            { href: project.github, icon: Github, label: 'Code' },
                            { href: project.live, icon: ExternalLink, label: 'Demo' },
                          ].map((btn) => (
                            <motion.a
                              key={btn.label}
                              href={btn.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-muted-2 hover:text-cream hover:border-cream/30 transition-colors"
                              title={btn.label}
                            >
                              <btn.icon size={15} />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCardContent>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects