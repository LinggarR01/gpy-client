import Image from 'next/image';
import Link from 'next/link';
import { contactItems, projectLinks, quickLinks } from '@/app/data/footerLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-highlight/30 bg-primary/95 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
          {/* Brand Section */}
          <section aria-label="Informasi perusahaan">
            <Link
              href="/"
              className="group inline-flex items-center gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
              aria-label="Kembali ke halaman utama Graha Prima Yudatama">
              <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/logo-gpy.webp"
                  alt="Logo Graha Prima Yudatama"
                  width={160}
                  height={90}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-highlight sm:text-base">
                  GRAHA PRIMA YUDATAMA
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                  Developer Perumahan
                </p>
              </div>
            </Link>

            <div className="mt-6 h-1 w-16 rounded-full bg-highlight" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
              PT. Graha Prima Yudatama merupakan salah satu perusahaan yang
              berkembang di Kabupaten Karawang yang bergerak di bidang
              Konstruksi, Marketing dan Developer Perumahan. Dengan melihat
              kebutuhan di Indonesia yang memerlukan hunian yang baik, nyaman,
              terjangkau dan berkualitas.
            </p>
          </section>

          {/* Footer Links Section */}
          <section
            aria-label="Navigasi footer dan informasi kontak"
            className="rounded-3xl border border-highlight/20 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Links */}
              <nav aria-label="Tautan cepat footer">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-highlight">
                  Quick Links
                </h2>

                <div className="mt-4 h-0.5 w-10 rounded-full bg-highlight" />

                <ul className="mt-6 space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex text-sm font-medium text-white/80 transition-colors duration-300 hover:text-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Project Links */}
              <nav aria-label="Tautan proyek footer">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-highlight">
                  Proyek
                </h2>

                <div className="mt-4 h-0.5 w-10 rounded-full bg-highlight" />

                <ul className="mt-6 space-y-3">
                  {projectLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex text-sm font-medium text-white/80 transition-colors duration-300 hover:text-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Information */}
              <address className="not-italic sm:col-span-2 lg:col-span-1">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-highlight">
                  Kontak
                </h2>

                <div className="mt-4 h-0.5 w-10 rounded-full bg-highlight" />

                <ul className="mt-6 space-y-4">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-highlight" />

                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        <p className="mt-1 leading-6 text-white/70">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-highlight/20 ">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/65 sm:px-6  lg:px-8">
          <p className="text-center">
            © 2026 GRAHA PRIMA YUDATAMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
