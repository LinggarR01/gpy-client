import {
  Building2,
  Calendar,
  FolderKanban,
  Home,
  LocateIcon,
  LucideIcon,
} from 'lucide-react';

export type ProjectImage = {
  gambar: string;
  alt: string;
};

export type ProjectLogo = {
  gambar: string;
  alt: string;
};

export type ProjectDetail = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type WorkingProject = {
  name: string;
  type: string;
  developer: string;
  year: string;
  totalUnits: string;
  status: string;
  description: string;
  logo: ProjectLogo;
  images: ProjectImage[];
  details: ProjectDetail[];
};

export const workingProjects: WorkingProject[] = [
  {
    name: 'GRAHA TIRTAMULYA',
    type: 'Perumahan Cluster',
    developer: 'PT. Graha Prima Yudatama',
    year: '2022',
    totalUnits: '83 Unit Rumah',
    status: 'Selesai',
    description:
      'Graha Tirtamulya merupakan salah satu perumahan yang saat ini sedang di kerjakan yang berlokasi di Karawang oleh PT. Graha Prima Yudatama seluas ± 16 Ha dan saat ini sudah di bangun sebanyak 900 unitan.',
    logo: {
      gambar: '/images/logo/logo-tirtamulya.webp',
      alt: 'Logo Graha Tirtamulya',
    },
    images: [
      {
        gambar: '/images/projects/tirtamulya/rumah-tirtamulya.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
      {
        gambar: '/images/projects/tirtamulya/rumah-tirtamulya-2.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
    ],
    details: [
      {
        label: 'Jenis Proyek',
        value: 'Perumahan Cluster',
        icon: FolderKanban,
      },
      {
        label: 'Developer',
        value: 'PT. Graha Prima Yudatama',
        icon: Building2,
      },
      {
        label: 'Tahun',
        value: '2022 - Sekarang',
        icon: Calendar,
      },
      {
        label: 'Total Unit',
        value: '900 Unit Rumah ±',
        icon: Home,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Cikampek',
        icon: LocateIcon,
      },
    ],
  },
  {
    name: 'GRAHA PANGULAH',
    type: 'Perumahan Cluster',
    developer: 'PT. Graha Prima Yudatama',
    year: '2026 - Sekarang',
    totalUnits: '83 Unit Rumah',
    status: 'Selesai',
    description:
      'Perumahan Graha Pangulah merupakan salah satu proyek perumahan yang pada saat ini sedang berlangsung di kerjakan yang berlokasi di Desa. Pangulah, Kec. Kotabaru, Kab. Karawang oleh PT. Graha Prima Yudatama seluas ± 1 Ha dan saat ini sedang di bangun sebanyak 95 unitan. Dan masih berpotensi untuk pengembangan lahan seluas 1 sampai 2 hektar.',
    logo: {
      gambar: '/images/logo/logo-pangulah.webp',
      alt: 'Logo Graha Pangulah',
    },
    images: [
      {
        gambar: '/images/projects/tirtamulya/rumah-tirtamulya.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
      {
        gambar: '/images/projects/tirtamulya/rumah-tirtamulya-2.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
    ],
    details: [
      {
        label: 'Jenis Proyek',
        value: 'Perumahan Cluster',
        icon: FolderKanban,
      },
      {
        label: 'Developer',
        value: 'PT. Graha Prima Yudatama',
        icon: Building2,
      },
      {
        label: 'Tahun',
        value: '2026 - Sekarang',
        icon: Calendar,
      },
      {
        label: 'Total Unit',
        value: '95 Unit Rumah ±',
        icon: Home,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Cikampek',
        icon: LocateIcon,
      },
    ],
  },
];
