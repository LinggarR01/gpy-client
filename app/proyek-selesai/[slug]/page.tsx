import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProyekTampilanRumahSection from '@/app/components/sections/proyekTampilanRumah';
import { completedProjects } from '@/app/data/proyekSelesai';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projectsWithPhotos = completedProjects.filter(
  (project) => project.imageRumah.length > 0,
);

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsWithPhotos.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsWithPhotos.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `Tampilan Rumah ${project.name} | Graha Prima Yudatama`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = projectsWithPhotos.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const location = project.details.find(
    (detail) => detail.label === 'Lokasi Perumahan',
  )?.value;

  return (
    <ProyekTampilanRumahSection
      slug={project.slug}
      name={project.name}
      type={project.type}
      location={location}
      logo={project.logo}
      images={project.imageRumah}
      backHref="/proyek-selesai"
      backLabel="Proyek Selesai"
    />
  );
}
