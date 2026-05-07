import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';

export type PhoneContact = {
  name: string;
  number: string;
  display: string;
};

export type ContactItem = {
  label: string;
  value?: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  phones?: PhoneContact[];
};
export const whatsappNumber = '085714439799';
export const WADisplay = '+62 857-1443-9799';
export const emailAddress = 'gramayuda@gmail.com';

export const googleMapsEmbedUrl =
  'https://www.google.com/maps?q=-6.3684893,107.4715716&z=17&output=embed';

export const googleMapsUrl =
  'https://www.google.com/maps/place/kantor+pemasaran+Graha+Tirtamulya/@-6.368648,107.4717198,3a,75y,311.84h,93.64t/data=!3m7!1e1!3m5!1sQ7-O5xGeJCxbOnc2ApAmSA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.6364123472517207%26panoid%3DQ7-O5xGeJCxbOnc2ApAmSA%26yaw%3D311.8428672856525!7i16384!8i8192!4m6!3m5!1s0x2e69720591cd3985:0x81de4357cdadd0a9!8m2!3d-6.3684893!4d107.4715716!16s%2Fg%2F11vczxxrm0?entry=ttu';

export const contactItems: ContactItem[] = [
  {
    label: 'Alamat',
    value:
      'Jl. Raya Parakan – Ruko Graha Tirtamulya Kel. Karangjaya,Kec. Tirtamulya Kab. Karawang 41372',
    description: 'Kunjungi kantor kami untuk informasi lebih lanjut.',
    icon: MapPin,
    href: googleMapsUrl,
    external: true,
  },
  {
    label: 'Telepon / WhatsApp',
    description: 'Hubungi kami untuk informasi lebih lanjut.',
    icon: Phone,
    phones: [
      {
        name: 'Beni Yudana',
        number: '085714439799',
        display: '+62 857-1443-9799',
      },
      {
        name: 'Diftya Rachmita',
        number: '081298409283',
        display: '+62 812-9840-9283',
      },
    ],
    external: true,
  },
  {
    label: 'Email',
    value: emailAddress,
    description: 'Kirim pertanyaan atau kebutuhan informasi melalui email.',
    icon: Mail,
    href: `mailto:${emailAddress}`,
  },
  {
    label: 'Jam Operasional',
    value: 'Senin - Jumat, 08.00 - 17.00',
    description: 'Tim kami siap melayani pada jam operasional.',
    icon: Clock,
  },
];
