export type VisionMissionItem = {
  title: string;
  content: string | string[];
};

export const visionMissionData: VisionMissionItem[] = [
  {
    title: 'Visi',
    content:
      'Menjadi Pengelola dan Pengembang Perumahaan yang profesional dan terpercaya',
  },
  {
    title: 'Misi',
    content: [
      'Mengembangkan pemukiman yang aman, nyaman dengan lingkungan yang asri.',
      'Memberikan kepuasan kepada konsumen dengan menjaga kualitas bangunan dan lingkungan yang baik. ',
      'Mengembangkan perumahan yang senantiasa memberikan nilai tambah sebagai suatu investasi.',
    ],
  },
  {
    title: 'Motto',
    content: 'Membangun dengan Komitmen dan kualitas.',
  },
];
