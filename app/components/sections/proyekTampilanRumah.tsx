"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowLeft, ChevronRight, Images, MapPin } from "lucide-react";
import ProjectGallery from "@/app/components/sections/proyekGaleri";
import type { HouseImage, ProjectLogo } from "@/app/data/proyekDikerjakan";

type ProyekTampilanRumahSectionProps = {
  slug: string;
  name: string;
  type: string;
  location?: string;
  logo: ProjectLogo;
  images: HouseImage[];
  backHref: string;
  backLabel: string;
};

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

const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProyekTampilanRumahSection({
  slug,
  name,
  type,
  location,
  logo,
  images,
  backHref,
  backLabel,
}: ProyekTampilanRumahSectionProps) {
  return (
    <section
      aria-labelledby="tampilan-rumah-heading"
      className="relative overflow-hidden bg-white py-10 sm:py-24"
    >
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
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="flex items-center gap-3"
        >
          <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.92 }}>
            <Link
              href={backHref}
              aria-label={`Kembali ke ${backLabel}`}
              title={`Kembali ke ${backLabel}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-highlight shadow-lg shadow-primary/20 transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>

          <ol className="flex min-w-0 items-center gap-1.5 text-sm font-semibold">
            <li>
              <Link
                href={backHref}
                className="rounded-md text-primary/60 transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
              >
                {backLabel}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-primary/30" />
            </li>
            <li
              aria-current="page"
              className="truncate capitalize text-primary"
            >
              {name.toLowerCase()}
            </li>
          </ol>
        </motion.nav>

        {/* Header */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ rotate: -4, scale: 1.05 }}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white p-2 shadow-sm sm:h-20 sm:w-20"
            >
              <Image
                src={logo.gambar}
                alt={logo.alt}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </motion.div>

            <div>
              <motion.span
                variants={fadeUpVariants}
                className="inline-flex rounded-full bg-highlight px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
              >
                {type}
              </motion.span>

              <motion.h1
                variants={fadeUpVariants}
                id="tampilan-rumah-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                {name}
              </motion.h1>
            </div>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-3"
          >
            {location && (
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/3 px-4 py-2 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {location}
              </span>
            )}

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/3 px-4 py-2 text-sm font-semibold text-primary">
              <Images className="h-4 w-4 text-accent" aria-hidden="true" />
              {images.length} Foto
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="mt-6 flex items-center gap-3"
        >
          <div className="h-1 w-16 rounded-full bg-highlight" />
          <div className="h-1 w-8 rounded-full bg-accent" />
        </motion.div>

        <div className="mt-12">
          <ProjectGallery
            projectSlug={slug}
            projectName={name}
            images={images}
          />
        </div>
      </div>
    </section>
  );
}
