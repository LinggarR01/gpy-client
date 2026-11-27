'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { ArrowLeft, ArrowRight, Expand, MessageCircle, X } from 'lucide-react';

type HouseImage = {
  gambar: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectGalleryProps = {
  projectSlug: string;
  projectName: string;
  images: HouseImage[];
};

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
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

const isPortrait = (image: HouseImage) => image.height > image.width;

export default function ProjectGallery({
  projectSlug,
  projectName,
  images,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrevious, showNext]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:auto-rows-[360px] lg:grid-cols-3 lg:gap-6">
        {images.map((image, index) => {
          const portrait = isPortrait(image);

          return (
            <motion.button
              key={`${projectSlug}-rumah-${index}`}
              type="button"
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: easeOutExpo },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Perbesar foto: ${image.alt}`}
              style={{
                aspectRatio: portrait
                  ? '4 / 5'
                  : `${image.width} / ${image.height}`,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-highlight/30 bg-primary shadow-xl shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 lg:aspect-auto! ${
                portrait ? 'lg:row-span-2' : 'sm:col-span-2'
              }`}>
              <Image
                src={image.gambar}
                alt={image.alt}
                fill
                loading={index < 2 ? 'eager' : 'lazy'}
                fetchPriority={index < 2 ? 'high' : 'auto'}
                sizes={
                  portrait
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    : '(max-width: 1024px) 100vw, 66vw'
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute left-5 top-5 rounded-full bg-primary/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(images.length).padStart(2, '0')}
              </span>

              <span className="absolute bottom-5 right-5 inline-flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-highlight text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <Expand className="h-5 w-5" aria-hidden="true" />
              </span>
            </motion.button>
          );
        })}

        {/* CTA Tile */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between rounded-3xl border border-highlight/30 bg-primary p-6 shadow-xl sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-highlight">
              Tertarik?
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
              Lihat langsung hunian di {projectName}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Hubungi tim kami untuk informasi unit, harga, dan jadwal kunjungan
              lokasi.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6">
            <Link
              href="/kontak"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi Kami
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ${activeIndex + 1} dari ${images.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-100 flex items-center justify-center bg-primary/95 p-4 backdrop-blur-md sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.gambar}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
                onClick={(event) => event.stopPropagation()}
                className="relative">
                <Image
                  src={activeImage.gambar}
                  alt={activeImage.alt}
                  width={activeImage.width}
                  height={activeImage.height}
                  sizes="100vw"
                  className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
                />
                <p className="mt-4 text-center text-sm text-white/75">
                  {activeImage.alt}
                </p>
              </motion.div>
            </AnimatePresence>

            <span className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              {activeIndex + 1} / {images.length}
            </span>

            <motion.button
              type="button"
              onClick={closeLightbox}
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Tutup foto"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-highlight text-primary shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <X className="h-5 w-5" aria-hidden="true" />
            </motion.button>

            {images.length > 1 && (
              <>
                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  whileHover={{ scale: 1.08, x: -2 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight sm:left-6 sm:h-12 sm:w-12">
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  whileHover={{ scale: 1.08, x: 2 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Foto berikutnya"
                  className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-highlight text-primary shadow-lg transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
