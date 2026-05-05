'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  completedProjects,
  type CompletedProject,
} from '@/app/data/proyekSelesai';

type CompletedProjectCardProps = {
  project: CompletedProject;
  index: number;
};

function CompletedProjectCard({ project, index }: CompletedProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = project.images[activeIndex];
  const isReverseLayout = index % 2 === 1;

  const goToPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1,
    );
  };

  const goToNextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === project.images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div
      className={`grid gap-8 lg:grid-cols-[1.0fr_1.0fr] lg:items-stretch ${
        isReverseLayout
          ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
          : ''
      }`}>
      {/* Image Carousel */}
      <div className="relative overflow-hidden rounded-3xl border border-highlight/30 bg-primary shadow-xl">
        <div className="relative h-[320px] md:h-[420px] lg:h-full lg:min-h-[520px]">
          <Image
            key={`${activeImage.gambar}-${activeIndex}`}
            src={activeImage.gambar}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover transition-all duration-500 ease-out"
            priority={index === 0 && activeIndex === 0}
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />

          {/* Counter */}
          <div className="absolute right-5 top-5 rounded-full bg-primary/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            {activeIndex + 1} / {project.images.length}
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-end gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg sm:h-20 sm:w-20">
                <Image
                  src={project.logo.gambar}
                  alt={project.logo.alt}
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                  fetchPriority="high"
                />
              </div>

              <div>
                <h2 className=" text-2xl font-bold text-white sm:text-3xl">
                  {project.name}
                </h2>
                <span className="mt-2 inline-flex rounded-full bg-highlight px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {project.type}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Proyek perumahan yang telah selesai dibangun oleh{' '}
              {project.developer}.
            </p>
          </div>

          {/* Prev Button */}
          <button
            type="button"
            onClick={goToPreviousImage}
            aria-label={`Tampilkan gambar sebelumnya untuk ${project.name}`}
            className="absolute left-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={goToNextImage}
            aria-label={`Tampilkan gambar berikutnya untuk ${project.name}`}
            className="absolute right-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-highlight text-primary shadow-lg transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            {project.images.map((image, imageIndex) => {
              const isActive = imageIndex === activeIndex;

              return (
                <button
                  key={`${image.gambar}-${imageIndex}`}
                  type="button"
                  onClick={() => setActiveIndex(imageIndex)}
                  aria-label={`Tampilkan gambar ke-${imageIndex + 1} untuk ${project.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                    isActive
                      ? 'w-8 bg-highlight'
                      : 'w-2.5 bg-white/60 hover:bg-white'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Information Card */}
      <article className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8 lg:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white p-2 shadow-sm">
              <Image
                src={project.logo.gambar}
                alt={project.logo.alt}
                width={96}
                height={96}
                className="h-full w-full object-contain"
                fetchPriority="high"
              />
            </div>

            <div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-5 h-1 w-16 rounded-full bg-highlight" />

        <p className="mt-6 text-base leading-8 text-primary/70">
          {project.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {project.details.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={`${project.name}-${detail.label}`}
                className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-highlight text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-primary">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4">
            Hubungi Kami
          </Link>

          <Link
            href="/proyek-berjalan"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4">
            Lihat Proyek Berjalan
          </Link>
        </div>
      </article>
    </div>
  );
}

export default function ProyekSelesaiSection() {
  return (
    <section
      id="proyek-selesai"
      aria-labelledby="proyek-selesai-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-highlight/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="proyek-selesai-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Hunian yang Telah Kami Wujudkan
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight" />
        </div>

        {/* Dynamic Project List */}
        <div className="mt-16 space-y-16 lg:space-y-20">
          {completedProjects.map((project, index) => (
            <CompletedProjectCard
              key={`${project.name}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
