import {
  contactItems,
  googleMapsEmbedUrl,
  googleMapsUrl,
  whatsappNumber,
} from '@/app/data/kontak';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="relative overflow-hidden bg-white py-2 sm:py-24">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-highlight/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="kontak-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Hubungi Kami
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-highlight" />
        </div>

        {/* Content */}
        <div className="mt-16 space-y-8">
          {/* Map Full Width */}
          <div className="overflow-hidden rounded-3xl border border-highlight/30 bg-primary shadow-xl">
            <div className="relative h-[320px] md:h-[420px] lg:h-[480px]">
              <iframe
                src={googleMapsEmbedUrl}
                title="Lokasi GRAHA PRIMA YUDATAMA di Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>

            <div className="border-t border-highlight/20 bg-primary p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-highlight">
                    Lokasi Kantor
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    GRAHA PRIMA YUDATAMA
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Kantor Pemasaran Graha Tirtamulya, Karawang, Jawa Barat
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-highlight/40 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-highlight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                    Buka Google Maps
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards 2x2 */}
          <div className="grid gap-5 md:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const cardContent = (
                <div className="group flex h-full gap-4 rounded-3xl border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-highlight text-primary shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                      {item.label}
                    </p>

                    {item.phones ? (
                      <div className="mt-3 space-y-3">
                        {item.phones.map((phone) => (
                          <a
                            key={phone.number}
                            href={`https://wa.me/${phone.number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl border border-primary/10 bg-primary/[0.03] px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2">
                            <span className="block text-sm font-semibold text-primary">
                              {phone.name}
                            </span>

                            <span className="mt-1 block text-sm font-medium text-primary/70">
                              {phone.display}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-base font-semibold leading-7 text-primary">
                        {item.value}
                      </p>
                    )}

                    <p className="mt-2 text-sm leading-6 text-primary/60">
                      {item.description}
                    </p>

                    {item.href && !item.phones && (
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                        Lihat detail
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>
              );
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4">
                    {cardContent}
                  </a>
                );
              }

              return <div key={item.label}>{cardContent}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
