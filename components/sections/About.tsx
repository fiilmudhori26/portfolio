'use client'

import { motion } from 'framer-motion'
import { about, education } from '@/lib/data'

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-sub">About</span>
          <h2 className="display-lg">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted leading-relaxed mb-6">
              {about.professionalSummary}
            </p>
            <p className="text-muted-2 leading-relaxed text-sm">
              {about.personality}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-6">
              {about.strengths.map((s) => (
                <span key={s} className="text-xs font-semibold text-muted-2 uppercase tracking-wider">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl uppercase tracking-wide text-cream/60 mb-2">Education</h3>
              <p className="text-cream font-medium text-sm">{education[0].institution}</p>
              <p className="text-muted-2 text-sm mt-0.5">{education[0].major} &mdash; {education[0].period}</p>
            </div>
            <div>
              <h3 className="font-display text-xl uppercase tracking-wide text-cream/60 mb-2">Interests</h3>
              <p className="text-muted text-sm">{about.interests.join(', ')}.</p>
            </div>
            <div>
              <h3 className="font-display text-xl uppercase tracking-wide text-cream/60 mb-2">Goal</h3>
              <p className="text-muted text-sm leading-relaxed">{about.careerGoals}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About