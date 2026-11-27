'use client';

import {
  contactItems,
  googleMapsEmbedUrl,
  googleMapsUrl,
} from '@/app/data/kontak';
import { motion, type Variants } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

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

const mapVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
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

const phoneVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: easeOutExpo,
    },
  },
};

const cardHover = {
  y: -6,
  transition: {
    duration: 0.25,
    ease: easeOutExpo,
  },
};

export default function ContactSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="relative overflow-hidden bg-white py-2 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: easeOutExpo }}
        className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-highlight/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.15, ease: easeOutExpo }}
        className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
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
            id="kontak-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Hubungi Kami
          </motion.h1>

          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight"
          />
        </motion.div>

        {/* Content */}
        <div className="mt-16 space-y-8">
          {/* Map Full Width */}
          <motion.div
            variants={mapVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-highlight/30 bg-primary shadow-xl">
            <div className="relative h-80 md:h-105 lg:h-120">
              <iframe
                src={googleMapsEmbedUrl}
                title="Lokasi GRAHA PRIMA YUDATAMA di Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>

            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="border-t border-highlight/20 bg-primary p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <motion.div variants={fadeUpVariants}>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-highlight">
                    Lokasi Kantor
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    GRAHA PRIMA YUDATAMA
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Kantor Pemasaran Graha Tirtamulya, Karangjaya, Kec.
                    Tirtamulya, Kab. Karawang, Jawa Barat
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-highlight/40 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-highlight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                    Buka Google Maps
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Cards 2x2 */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const cardContent = (
                <div className="group flex h-full gap-4 rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-xl sm:p-6">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-highlight text-primary shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                      {item.label}
                    </p>

                    {item.phones ? (
                      <motion.div
                        variants={staggerVariants}
                        className="mt-3 space-y-3">
                        {item.phones.map((phone) => (
                          <motion.a
                            key={phone.number}
                            variants={phoneVariants}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            href={`https://wa.me/${phone.number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl border border-primary/10 bg-primary/3 px-4 py-3 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2">
                            <span className="block text-sm font-semibold text-primary">
                              {phone.name}
                            </span>

                            <span className="mt-1 block text-sm font-medium text-primary/70">
                              {phone.display}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    ) : (
                      <p className="mt-2 text-base font-semibold leading-7 text-primary">
                        {item.value}
                      </p>
                    )}

                    <p className="mt-2 text-sm leading-6 text-primary/60">
                      {item.description}
                    </p>

                    {item.href && !item.phones && (
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                        Lihat detail
                        <ExternalLink
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <motion.a
                    key={item.label}
                    variants={cardVariants}
                    whileHover={cardHover}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4">
                    {cardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={cardHover}>
                  {cardContent}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
