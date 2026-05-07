export default function ProyekSelesaiPage({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Proyek Selesai: {params.slug}</h1>;
}
