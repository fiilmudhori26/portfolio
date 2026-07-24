'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

const groups = [
  { title: 'Frontend', items: skills.frontend },
  { title: 'Backend', items: skills.backend },
  { title: 'DevOps & Tools', items: skills.tools },
  { title: 'Marketing', items: skills.digitalMarketing },
  { title: 'Design', items: skills.design },
  { title: 'Soft Skills', items: skills.softSkills.map(s => ({ name: s, level: 90 })) },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-sub">Skills</span>
          <h2 className="display-lg">Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-lg uppercase tracking-wide text-cream/60 mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(i => (
                  <span key={i.name} className="px-3 py-1.5 bg-dark-2 border border-border rounded-md text-xs text-muted font-medium">{i.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills