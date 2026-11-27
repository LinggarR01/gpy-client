import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { completedProjects } from '@/app/data/proyekSelesai';
import ProjectGallery from '@/app/components/sections/proyekGaleri';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = completedProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const houseImages = project.imageRumah.slice(0, 2);

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/proyek-selesai"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#003049] transition hover:text-[#D62828]">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Proyek Selesai
        </Link>

        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#003049] sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>
        </div>

        <ProjectGallery projectSlug={project.slug} images={houseImages} />
      </div>
    </section>
  );
}
