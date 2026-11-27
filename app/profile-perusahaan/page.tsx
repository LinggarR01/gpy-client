import type { Metadata } from 'next';
import ProfilePerusahaanSection from '@/app/components/sections/profilePerusahaan';

export const metadata: Metadata = {
  title: 'Profil Perusahaan | Graha Prima Yudatama',
  description:
    'Mengenal lebih dekat PT. Graha Prima Yudatama, developer perumahan di Kabupaten Karawang.',
};

export default function ProfilePerusahaan() {
  return (
    <>
      <ProfilePerusahaanSection />
    </>
  );
}
