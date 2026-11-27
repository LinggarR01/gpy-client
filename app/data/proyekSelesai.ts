import type { LucideIcon } from 'lucide-react';
import { Calendar, FolderKanban, Home, LocateIcon, Ruler } from 'lucide-react';

export type ProjectImage = {
  gambar: string;
  alt: string;
};

export type ProjectLogo = {
  gambar: string;
  alt: string;
};

export type HouseImage = {
  gambar: string;
  alt: string;
};

export type ProjectDetail = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type CompletedProject = {
  slug: string;
  name: string;
  type: string;
  developer: string;
  year: string;
  totalUnits: string;
  landArea: string;
  status: string;
  description: string;
  logo: ProjectLogo;
  images: ProjectImage[];
  details: ProjectDetail[];
  imageRumah: HouseImage[];
};

export const completedProjects: CompletedProject[] = [
  {
    slug: 'gramayuda-residence',
    name: 'GRAMAYUDA RESIDENCE',
    type: 'Perumahan Cluster',
    developer: 'PT. Graha Prima Yudatama',
    year: '2015',
    totalUnits: '83 Unit Rumah',
    landArea: 'Isi luas tanah di sini',
    status: 'Selesai',
    description:
      'Gramayuda Residence merupakan salah satu proyek perumahan cluster yang dibangun oleh PT. Graha Prima Yudatama pada tahun 2015 dengan total rumah sebanyak 83 unit.',
    logo: {
      gambar: '/images/logo/logo-gramayuda.webp',
      alt: 'Logo Gramayuda Residence',
    },
    images: [
      {
        gambar: '/images/projects/gramayuda/konsep-rumah-gramayuda.webp',
        alt: 'Tampak depan Gramayuda Residence',
      },
    ],
    imageRumah: [
      {
        gambar: '/images/projects/gramayuda/tampilan-rumah/gramayuda-1.webp',
        alt: 'Tampilan rumah Gramayuda Residence 1',
      },
      {
        gambar: '/images/projects/gramayuda/tampilan-rumah/gramayuda-2.webp',
        alt: 'Tampilan rumah Gramayuda Residence 1',
      },
    ],
    details: [
      {
        label: 'Jenis Proyek',
        value: 'Perumahan Komersil',
        icon: FolderKanban,
      },
      {
        label: 'Tahun',
        value: '2015',
        icon: Calendar,
      },
      {
        label: 'Total Unit',
        value: '83 Unit Rumah',
        icon: Home,
      },
      {
        label: 'Luas Tanah',
        value: 'Isi luas tanah di sini',
        icon: Ruler,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Bogor',
        icon: LocateIcon,
      },
    ],
  },
];
