export type FooterLink = {
  label: string;
  href: string;
};

export type ContactItem = {
  label: string;
  value: string;
};

export const quickLinks: FooterLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Visi Misi',
    href: '/visi-misi',
  },
  {
    label: 'Struktur Organisasi',
    href: '/struktur-organisasi',
  },
  {
    label: 'Kontak',
    href: '/kontak',
  },
];

export const projectLinks: FooterLink[] = [
  {
    label: 'Proyek Selesai',
    href: '/proyek-selesai',
  },
  {
    label: 'Proyek Berjalan',
    href: '/proyek-berjalan',
  },
];

export const contactItems: ContactItem[] = [
  {
    label: 'Alamat',
    value:
      'Jl. Raya Parakan – Ruko Graha Tirtamulya Kel. Karangjaya,Kec. Tirtamulya Kab. Karawang 41372',
  },
  {
    label: 'Email',
    value: 'gramayuda@gmail.com',
  },
  {
    label: 'Jam Operasional',
    value: 'Senin - Jumat, 08.00 - 17.00',
  },
];
