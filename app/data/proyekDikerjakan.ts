import {
  Building2,
  Calendar,
  FolderKanban,
  Home,
  LocateIcon,
  LucideIcon,
  Ruler,
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
    type: 'Perumahan Subsidi',
    developer: 'PT. Graha Prima Yudatama',
    year: '2022',
    totalUnits: '83 Unit Rumah',
    status: 'Selesai',
    description:
      'Graha Tirtamulya merupakan salah satu perumahan yang saat ini sedang di kerjakan yang berlokasi di Karawang oleh PT. Graha Prima Yudatama seluas 15,5 Ha dan saat ini sudah di bangun sebanyak 900 unitan.',
    logo: {
      gambar: '/images/logo/logo-tirtamulya.webp',
      alt: 'Logo Graha Tirtamulya',
    },
    images: [
      {
        gambar: '/images/projects/tirtamulya/konsep-rumah-tirtamulya-1.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
      {
        gambar: '/images/projects/tirtamulya/konsep-rumah-tirtamulya-2.webp',
        alt: 'Tampak depan Graha Tirtamulya',
      },
    ],
    details: [
      {
        label: 'Jenis Proyek',
        value: 'Perumahan Subsidi',
        icon: FolderKanban,
      },
      {
        label: 'Tahun',
        value: '2017 - Sekarang',
        icon: Calendar,
      },
      {
        label: 'Luas Tanah',
        value: '15,5 Ha',
        icon: Ruler,
      },
      {
        label: 'Total Unit',
        value: '1440 Unit Rumah',
        icon: Home,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Desa Karangjaya, Kec. Tirtamulya, Karawang',
        icon: LocateIcon,
      },
    ],
  },
  {
    name: 'GRAHA PANGULAH',
    type: 'Perumahan Subsidi',
    developer: 'PT. Graha Prima Yudatama',
    year: '2025 - Sekarang',
    totalUnits: '83 Unit Rumah',
    status: 'Selesai',
    description:
      'Perumahan Graha Pangulah merupakan salah satu proyek perumahan yang pada saat ini sedang berlangsung di kerjakan yang berlokasi di Desa Pangulah Selatan, Kec. Kotabaru, Karawang oleh PT. Graha Prima Yudatama seluas ± 1 Ha dan saat ini sedang di bangun sebanyak 95 unitan. Dan masih berpotensi untuk pengembangan lahan seluas 1 sampai 2 hektar.',
    logo: {
      gambar: '/images/logo/logo-pangulah.webp',
      alt: 'Logo Graha Pangulah',
    },
    images: [
      {
        gambar: '/images/projects/pangulah/konsep-rumah-pangulah-1.webp',
        alt: 'Konsep rumah Graha Pangulah',
      },
      {
        gambar: '/images/projects/pangulah/konsep-rumah-pangulah-2.webp',
        alt: 'Konsep rumah Graha Pangulah',
      },
    ],
    details: [
      {
        label: 'Jenis Proyek',
        value: 'Perumahan Subsidi',
        icon: FolderKanban,
      },
      {
        label: 'Tahun',
        value: '2025 - Sekarang',
        icon: Calendar,
      },
      {
        label: 'Luas Tanah',
        value: 'Isi luas tanah di sini',
        icon: Ruler,
      },
      {
        label: 'Total Unit',
        value: '95 Unit Rumah ±',
        icon: Home,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Desa Pangulah Selatan, Kec. Kotabaru, Karawang ',
        icon: LocateIcon,
      },
    ],
  },
];
