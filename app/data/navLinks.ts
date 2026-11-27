export type SubNavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavLink = {
  label: string;
  href?: string;
  children?: SubNavLink[];
};

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tentang Kami',
    children: [
      {
        label: 'Profil Perusahaan',
        href: '/profile-perusahaan',
        description: 'Mengenal lebih dekat Graha Prima Yudatama',
      },
      {
        label: 'Visi Misi',
        href: '/visi-misi',
        description: 'Arah, tujuan, dan komitmen perusahaan',
      },
      {
        label: 'Struktur Organisasi',
        href: '/struktur-organisasi',
        description: 'Susunan organisasi dan tim perusahaan',
      },
    ],
  },
  {
    label: 'Proyek',
    children: [
      {
        label: 'Proyek Berjalan',
        href: '/proyek-berjalan',
        description: 'Proyek perumahan yang sedang dikembangkan',
      },
      {
        label: 'Proyek Selesai',
        href: '/proyek-selesai',
        description: ' Proyek Perumahan yang telah diselesaikan',
      },
      // Disembunyikan sementara, aktifkan kembali saat halaman Proyek Rencana dibutuhkan.
      // {
      //   label: 'Proyek Rencana',
      //   href: '/proyek-rencana',
      //   description: 'Proyek perumahan yang direncanakan',
      // },
    ],
  },
];
