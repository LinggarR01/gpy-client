'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

type HouseImage = {
  gambar: string;
  alt: string;
};

type ProjectGalleryProps = {
  projectSlug: string;
  images: HouseImage[];
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectGallery({
  projectSlug,
  images,
}: ProjectGalleryProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2">
      {images.map((image, index) => (
        <motion.div
          key={`${projectSlug}-rumah-${index}`}
          variants={imageVariants}
          whileHover={{
            y: -6,
            transition: { duration: 0.25 },
          }}
          className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative aspect-[4/3]">
            <Image
              src={image.gambar}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
