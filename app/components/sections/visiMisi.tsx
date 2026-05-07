'use client';

import { motion, type Variants } from 'motion/react';
import { Building2, Eye, ListChecks, Quote } from 'lucide-react';
import { visionMissionData } from '@/app/data/visiMisi';

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const iconMap = {
  Visi: Eye,
  Misi: ListChecks,
  Motto: Quote,
} as const;

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};
export default function VisiMisiSection() {
  return (
    <section
      id="visi-misi"
      aria-labelledby="visi-misi-heading"
      className="relative overflow-hidden bg-[#f8faf9] py-20 sm:py-24">
      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-highlight/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.h1
              variants={fadeUpVariants}
              id="visi-misi-heading"
              className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Nilai yang Menjadi Dasar Perusahaan
            </motion.h1>

            <motion.div
              variants={fadeUpVariants}
              className="mt-6 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-highlight" />
              <div className="h-1 w-8 rounded-full bg-accent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visionMissionData.map((item, index) => {
            const Icon = iconMap[item.title as keyof typeof iconMap];
            const isMotto = item.title === 'Motto';

            return (
              <motion.article
                variants={cardVariants}
                key={item.title}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                    ease: 'easeOut',
                  },
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl md:p-8">
                {/* Top Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="absolute inset-x-0 top-0 h-1 origin-left bg-highlight"
                />

                {/* Card Number */}
                <div className="absolute right-6 top-6 text-6xl font-black leading-none text-primary/4">
                  0{index + 1}
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    whileHover={{
                      rotate: -6,
                      scale: 1.08,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-highlight shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>

                  <span className="rounded-full bg-highlight/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {item.title}
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-bold text-primary">
                  {item.title} Perusahaan
                </h2>

                {Array.isArray(item.content) ? (
                  <ul className="mt-6 flex-1 space-y-4">
                    {item.content.map((content, contentIndex) => (
                      <motion.li
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: 0.15 + contentIndex * 0.08,
                          ease: 'easeOut',
                        }}
                        key={content}
                        className="flex gap-3 text-sm leading-7 text-primary/70">
                        <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight text-primary">
                          <Building2 className="h-3 w-3" aria-hidden="true" />
                        </span>

                        <span>{content}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : isMotto ? (
                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <blockquote className="relative text-2xl font-bold leading-10 text-primary">
                      <motion.div
                        initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}>
                        <Quote
                          className="mb-4 h-8 w-8 text-highlight"
                          aria-hidden="true"
                        />
                      </motion.div>
                      “{item.content}”
                    </blockquote>
                  </div>
                ) : (
                  <p className="mt-6 flex-1 text-sm leading-7 text-primary/70 sm:text-base">
                    {item.content}
                  </p>
                )}

                {/* Bottom Decorative Line */}
                <div className="mt-8 h-px w-full bg-primary/10" />
                <div className="mt-4 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
