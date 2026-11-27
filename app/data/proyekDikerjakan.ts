import {
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

export type HouseImage = {
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
  slug: string;
  type: string;
  developer: string;
  year: string;
  totalUnits: string;
  landArea: string;
  status: string;
  description: string;
  logo: ProjectLogo;
  images: ProjectImage[];
  imageRumah: HouseImage[];
  details: ProjectDetail[];
};

export const workingProjects: WorkingProject[] = [
  {
    name: 'GRAHA TIRTAMULYA',
    slug: 'graha-tirtamulya',
    type: 'Perumahan Subsidi',
    developer: 'PT. Graha Prima Yudatama',
    year: '2017 - Sekarang',
    totalUnits: '1440 Unit Rumah',
    landArea: '15,5 Ha',
    status: 'Berjalan',
    description:
      'Graha Tirtamulya merupakan salah satu perumahan yang saat ini sedang dikerjakan yang berlokasi di Karawang oleh PT. Graha Prima Yudatama seluas 15,5 Ha dan saat ini sudah dibangun sebanyak 900 unitan.',
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
    imageRumah: [
      {
        gambar: '/images/projects/tirtamulya/konsep-rumah-tirtamulya-1.webp',
        alt: 'Tampilan rumah Graha Tirtamulya 1',
      },
      {
        gambar: '/images/projects/tirtamulya/konsep-rumah-tirtamulya-2.webp',
        alt: 'Tampilan rumah Graha Tirtamulya 2',
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
    slug: 'graha-pangulah',
    type: 'Perumahan Subsidi',
    developer: 'PT. Graha Prima Yudatama',
    year: '2025 - Sekarang',
    totalUnits: '95 Unit Rumah ±',
    landArea: '1-2 Ha ±',
    status: 'Berjalan',
    description:
      'Perumahan Graha Pangulah merupakan salah satu proyek perumahan yang pada saat ini sedang berlangsung dikerjakan yang berlokasi di Desa Pangulah Selatan, Kec. Kotabaru, Karawang oleh PT. Graha Prima Yudatama seluas ± 1 Ha dan saat ini sedang dibangun sebanyak 95 unitan. Dan masih berpotensi untuk pengembangan lahan seluas 1 sampai 2 hektar.',
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
    imageRumah: [
      {
        gambar: '/images/projects/pangulah/konsep-rumah-pangulah-1.webp',
        alt: 'Tampilan rumah Graha Pangulah 1',
      },
      {
        gambar: '/images/projects/pangulah/konsep-rumah-pangulah-2.webp',
        alt: 'Tampilan rumah Graha Pangulah 2',
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
        value: '1-2 Ha ±',
        icon: Ruler,
      },
      {
        label: 'Total Unit',
        value: '95 Unit Rumah ±',
        icon: Home,
      },
      {
        label: 'Lokasi Perumahan',
        value: 'Desa Pangulah Selatan, Kec. Kotabaru, Karawang',
        icon: LocateIcon,
      },
    ],
  },
];
