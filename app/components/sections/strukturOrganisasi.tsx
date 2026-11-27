import Image from 'next/image';

export default function StrukturOrganisasiSection() {
  return (
    <main className="bg-white">
      <section
        aria-labelledby="struktur-organisasi-heading"
        className="relative overflow-hidden py-2 sm:py-24">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-highlight/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <h1
              id="struktur-organisasi-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Struktur Organisasi
            </h1>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight" />
          </div>

          {/* Organization Image */}
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="group overflow-hidden rounded-3xl border border-highlight/30 bg-white p-4 shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl sm:p-6 lg:p-8">
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/struktur-organisasi-gpy.webp"
                  alt="Struktur organisasi PT. Graha Prima Yudatama"
                  width={1600}
                  height={1000}
                  loading="eager"
                  fetchPriority="high"
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-sm shadow-primary/5 sm:p-8">
            <p className="text-base leading-8 text-primary/70 sm:text-lg">
              Melalui struktur organisasi yang jelas, PT. Graha Prima Yudatama
              berupaya menjaga koordinasi kerja yang efektif, profesional, dan
              bertanggung jawab dalam setiap proses pengembangan proyek
              perumahan.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-highlight" />
          </div>
        </div>
      </section>
    </main>
  );
}
