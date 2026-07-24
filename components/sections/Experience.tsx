'use client'

import { motion } from 'framer-motion'
import { experience, organization, awards } from '@/lib/data'

const allItems = [
  ...experience.map(e => ({ ...e, tag: 'work' })),
  ...organization.map(o => ({ id: o.id, role: o.role, company: o.organization, period: o.period, tag: 'org', description: o.description, contributions: o.achievements, tech: [] as string[] })),
  ...awards.map(a => ({ id: a.id, role: a.title, company: a.issuer, period: a.date, tag: 'award', description: a.description, contributions: [] as string[], tech: [] as string[] })),
].sort((a, b) => parseInt(b.period.match(/\d{4}/)?.[0] || '0') - parseInt(a.period.match(/\d{4}/)?.[0] || '0'))

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-sub">Experience</span>
          <h2 className="display-lg">Timeline</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10 mt-12">
          {allItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-cream">{item.role}</h3>
                  <p className="text-muted text-sm mt-0.5">{item.company}</p>
                </div>
                <span className="text-xs text-muted-2 whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-muted-2 text-sm leading-relaxed">{item.description}</p>
              {item.contributions.length > 0 && (
                <div className="mt-3 space-y-1">
                  {item.contributions.slice(0, 2).map((c, i) => (
                    <p key={i} className="text-muted-2/70 text-sm ml-4">&mdash; {c}</p>
                  ))}
                </div>
              )}
              {item.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience