'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import {
  businessFields,
  companyLinks,
  companyProfile,
  companyStats,
  companyValues,
} from '@/app/data/profilePerusahaan';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

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
      ease: easeOutExpo,
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
      ease: easeOutExpo,
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProfilePerusahaanSection() {
  return (
    <section
      id="profil-perusahaan"
      aria-labelledby="profil-perusahaan-heading"
      className="relative overflow-hidden bg-white py-2 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: easeOutExpo }}
        className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-highlight/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.15, ease: easeOutExpo }}
        className="pointer-events-none absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center">
          <motion.h1
            variants={fadeUpVariants}
            id="profil-perusahaan-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Profil Perusahaan
          </motion.h1>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight"
          />
        </motion.div>

        {/* About */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25, ease: easeOutExpo },
            }}
            className="relative overflow-hidden rounded-3xl border border-highlight/30 bg-primary shadow-xl">
            <div className="relative h-80 md:h-105 lg:h-full lg:min-h-130">
              <Image
                src={companyProfile.image.gambar}
                alt={companyProfile.image.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-6 sm:p-8">
                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg sm:h-20 sm:w-24">
                  <Image
                    src="/images/logo/logo-gpy.webp"
                    alt="Logo Graha Prima Yudatama"
                    width={160}
                    height={90}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    GRAHA PRIMA YUDATAMA
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-highlight px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {companyProfile.tagline}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.article
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8 lg:p-9">
            <motion.p
              variants={fadeUpVariants}
              className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Tentang Kami
            </motion.p>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {companyProfile.name}
            </motion.h2>

            <motion.div
              variants={fadeUpVariants}
              className="mt-5 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-highlight" />
              <div className="h-1 w-8 rounded-full bg-accent" />
            </motion.div>

            {companyProfile.description.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUpVariants}
                className="mt-6 text-base leading-8 text-primary/70">
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary/3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-highlight text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Lokasi
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-primary">
                  {companyProfile.location}
                </p>
              </div>
            </motion.div>
          </motion.article>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-4 rounded-3xl border border-highlight/30 bg-primary p-6 shadow-xl sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {companyStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUpVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-3xl font-bold text-highlight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Business Fields */}
        <div className="mt-20">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
              Bidang Usaha
            </motion.h2>

            <motion.div
              variants={fadeUpVariants}
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight"
            />
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {businessFields.map((field, index) => {
              const Icon = field.icon;

              return (
                <motion.article
                  key={field.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl md:p-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.12 }}
                    className="absolute inset-x-0 top-0 h-1 origin-left bg-highlight"
                  />

                  <div className="absolute right-6 top-6 text-6xl font-black leading-none text-primary/4">
                    0{index + 1}
                  </div>

                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-highlight shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>

                  <h3 className="mt-8 text-2xl font-bold text-primary">
                    {field.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-primary/70 sm:text-base">
                    {field.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-primary/10" />
                  <div className="mt-4 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
              Komitmen Kami
            </motion.h2>

            <motion.div
              variants={fadeUpVariants}
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight"
            />
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companyValues.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                  className="rounded-2xl border border-primary/10 bg-primary/3 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-highlight text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-accent">
                    {value.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-primary/70">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Further Links */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 rounded-3xl border border-highlight/30 bg-primary p-6 shadow-xl sm:p-8 lg:p-10">
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-highlight">
                Kenali Kami Lebih Dekat
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Membangun dengan Komitmen dan Kualitas
              </h2>
            </div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/kontak"
                className="inline-flex w-full items-center justify-center rounded-full bg-highlight px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {companyLinks.map((link) => (
              <motion.div key={link.href} variants={fadeUpVariants}>
                <Link
                  href={link.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-highlight/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                  <div>
                    <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-highlight">
                      {link.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      {link.description}
                    </p>
                  </div>

                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-highlight transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
