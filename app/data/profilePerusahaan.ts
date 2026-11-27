import {
  BadgeCheck,
  Building2,
  HandCoins,
  HardHat,
  Home,
  Leaf,
  Megaphone,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { completedProjects } from './proyekSelesai';
import { workingProjects } from './proyekDikerjakan';

export type BusinessField = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CompanyValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CompanyStat = {
  label: string;
  value: string;
};

export type CompanyLink = {
  label: string;
  description: string;
  href: string;
};

export const companyProfile = {
  name: 'PT. Graha Prima Yudatama',
  tagline: 'Developer Property',
  location: 'Kabupaten Karawang, Jawa Barat',
  description: [
    'PT. Graha Prima Yudatama merupakan salah satu perusahaan yang berkembang di Kabupaten Karawang yang bergerak di bidang Konstruksi, Marketing dan Developer Perumahan.',
    'Dengan melihat kebutuhan di Indonesia yang memerlukan hunian yang baik, nyaman, terjangkau dan berkualitas, kami berkomitmen menghadirkan kawasan perumahan yang tidak hanya menjadi tempat tinggal, tetapi juga memberikan nilai tambah sebagai investasi bagi setiap konsumen.',
  ],
  image: {
    gambar: '/images/projects/tirtamulya/konsep-rumah-tirtamulya-1.webp',
    alt: 'Konsep rumah Graha Tirtamulya oleh PT. Graha Prima Yudatama',
  },
};

const allProjects = [...completedProjects, ...workingProjects];

const totalUnits = allProjects.reduce(
  (total, project) => total + (parseInt(project.totalUnits, 10) || 0),
  0,
);

const firstYear = Math.min(
  ...allProjects.map((project) => parseInt(project.year, 10) || Infinity),
);

export const companyStats: CompanyStat[] = [
  {
    label: 'Proyek Perumahan',
    value: `${allProjects.length}`,
  },
  {
    label: 'Proyek Berjalan',
    value: `${workingProjects.length}`,
  },
  {
    label: 'Total Unit Rumah',
    value: `${totalUnits.toLocaleString('id-ID')}+`,
  },
  {
    label: 'Berkarya Sejak',
    value: `${firstYear}`,
  },
];

export const businessFields: BusinessField[] = [
  {
    title: 'Konstruksi',
    description:
      'Pembangunan rumah dan infrastruktur kawasan dengan standar kualitas bangunan yang terjaga.',
    icon: HardHat,
  },
  {
    title: 'Marketing',
    description:
      'Pemasaran unit hunian yang transparan serta pendampingan konsumen hingga proses kepemilikan.',
    icon: Megaphone,
  },
  {
    title: 'Developer Perumahan',
    description:
      'Perencanaan dan pengembangan kawasan perumahan subsidi maupun komersil yang tertata.',
    icon: Building2,
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: 'Hunian yang Baik',
    description: 'Lingkungan tertata dengan fasilitas yang mendukung keluarga.',
    icon: Home,
  },
  {
    title: 'Nyaman & Asri',
    description: 'Pemukiman yang aman, nyaman, dan berwawasan lingkungan.',
    icon: Leaf,
  },
  {
    title: 'Terjangkau',
    description: 'Pilihan hunian yang sesuai dengan kemampuan masyarakat.',
    icon: HandCoins,
  },
  {
    title: 'Berkualitas',
    description: 'Material dan pengerjaan yang diawasi secara profesional.',
    icon: BadgeCheck,
  },
  {
    title: 'Terpercaya',
    description: 'Membangun dengan komitmen dan tanggung jawab.',
    icon: ShieldCheck,
  },
];

export const companyLinks: CompanyLink[] = [
  {
    label: 'Visi Misi',
    description: 'Arah, tujuan, dan komitmen perusahaan',
    href: '/visi-misi',
  },
  {
    label: 'Struktur Organisasi',
    description: 'Susunan organisasi dan tim perusahaan',
    href: '/struktur-organisasi',
  },
  {
    label: 'Proyek Kami',
    description: 'Hunian yang sedang dan telah kami wujudkan',
    href: '/proyek-berjalan',
  },
];
