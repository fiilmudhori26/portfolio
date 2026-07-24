'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Music, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-sub">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display-hero text-center mt-8"
        >
          LET&apos;S<br />TALK
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mt-10"
        >
          <p className="text-sm text-muted max-w-md text-center">
            Got a question, proposal, or project? I&apos;m always open to new opportunities and conversations.
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline !px-8 !py-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={15} />
            Send an Email
          </motion.a>

          <div className="flex items-center gap-4 mt-4">
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
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-muted-2 hover:text-cream hover:border-cream/30 transition-colors"
                title={link.label}
              >
                <link.icon size={17} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact