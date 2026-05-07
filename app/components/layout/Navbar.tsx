'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, type NavLink } from '@/app/data/navLinks';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closingDropdown, setClosingDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdownWithAnimation();
  };

  const closeDropdownWithAnimation = () => {
    if (!openDropdown) return;

    setClosingDropdown(openDropdown);

    window.setTimeout(() => {
      setOpenDropdown(null);
      setClosingDropdown(null);
    }, 200);
  };

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setClosingDropdown(label);

      window.setTimeout(() => {
        setOpenDropdown(null);
        setClosingDropdown(null);
      }, 200);

      return;
    }

    setClosingDropdown(null);
    setOpenDropdown(label);
  };

  const isActiveHref = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  const isActiveNav = (link: NavLink) => {
    if (link.href) {
      return isActiveHref(link.href);
    }

    return link.children?.some((child) => isActiveHref(child.href)) ?? false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-highlight/20 bg-primary/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-5 sm:px-6 sm:py-4 lg:px-8 xl:gap-8 xl:py-5">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex min-w-0 items-center gap-3 rounded-2xl px-0 py-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
          aria-label="Graha Prima Yudatama homepage">
          <div className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl   shadow-sm transition-all duration-300 group-hover:shadow-md sm:h-12 sm:w-16 md:h-14 md:w-20">
            <Image
              src="/images/logo/logo-gpy.webp"
              alt="Logo Graha Prima Yudatama"
              width={160}
              height={90}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="max-w-45 truncate text-sm font-bold leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-highlight md:max-w-60 md:text-base">
              GRAHA PRIMA YUDATAMA
            </span>

            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-highlight md:text-xs">
              Developer Property
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 xl:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
            {navLinks.map((link) => {
              const isActive = isActiveNav(link);
              const hasChildren = Boolean(link.children?.length);
              const isDropdownOpen = openDropdown === link.label;
              const isDropdownClosing = closingDropdown === link.label;
              const shouldShowDropdown = isDropdownOpen || isDropdownClosing;

              if (hasChildren) {
                return (
                  <div key={link.label} className="group relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.label)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary ${
                        isActive || isDropdownOpen
                          ? 'bg-highlight text-primary shadow-sm'
                          : 'text-white/85 hover:bg-white/10 hover:text-highlight'
                      }`}
                      aria-label={`${isDropdownOpen ? 'Tutup' : 'Buka'} menu ${link.label}`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true">
                      {link.label}

                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {shouldShowDropdown && (
                      <div
                        className={`absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/15 transition-all duration-200 ${
                          isDropdownOpen && !isDropdownClosing
                            ? 'visible translate-y-0 scale-100 opacity-100'
                            : 'pointer-events-none translate-y-2 scale-95 opacity-0'
                        }`}>
                        <div className="space-y-1">
                          {link.children?.map((child) => {
                            const isChildActive = isActiveHref(child.href);

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeDropdownWithAnimation}
                                className={`block rounded-2xl px-4 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 ${
                                  isChildActive
                                    ? 'bg-slate-100 text-primary'
                                    : 'hover:bg-slate-50'
                                }`}>
                                <span className="block text-sm font-bold text-slate-950">
                                  {child.label}
                                </span>

                                {child.description && (
                                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (!link.href) {
                return null;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary ${
                    isActive
                      ? 'bg-highlight text-primary shadow-sm'
                      : 'text-white/85 hover:bg-white/10 hover:text-highlight'
                  }`}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/kontak"
            className="shrink-0 rounded-full bg-highlight px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile / Tablet Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-highlight/40 text-highlight transition-all duration-300 hover:bg-highlight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-primary sm:h-11 sm:w-11 xl:hidden"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation">
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile / Tablet Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden px-4 transition-all duration-300 ease-in-out sm:px-6 lg:px-8 xl:hidden ${
          isOpen
            ? 'max-h-[85vh] overflow-y-auto pb-4 opacity-100'
            : 'max-h-0 pb-0 opacity-0'
        }`}>
        <div className="mx-auto max-w-7xl rounded-2xl border border-highlight/20 bg-primary p-3 shadow-xl sm:rounded-3xl sm:p-4">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const isActive = isActiveNav(link);
              const hasChildren = Boolean(link.children?.length);

              if (hasChildren) {
                return (
                  <div
                    key={link.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-2">
                    <div
                      className={`rounded-xl px-4 py-3 text-sm font-bold ${
                        isActive
                          ? 'bg-highlight text-primary'
                          : 'text-highlight'
                      }`}>
                      {link.label}
                    </div>

                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {link.children?.map((child) => {
                        const isChildActive = isActiveHref(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className={`rounded-xl px-4 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
                              isChildActive
                                ? 'bg-highlight text-primary shadow-sm'
                                : 'text-white/85 hover:bg-white/10 hover:text-highlight'
                            }`}>
                            <span className="block text-sm font-semibold">
                              {child.label}
                            </span>

                            {child.description && (
                              <span
                                className={`mt-1 block text-xs leading-5 ${
                                  isChildActive
                                    ? 'text-primary/75'
                                    : 'text-white/55'
                                }`}>
                                {child.description}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (!link.href) {
                return null;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:rounded-2xl sm:px-5 sm:py-4 ${
                    isActive
                      ? 'bg-highlight text-primary shadow-sm'
                      : 'text-white/85 hover:bg-white/10 hover:text-highlight'
                  }`}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/kontak"
            onClick={closeMobileMenu}
            className="mt-3 block rounded-full bg-highlight px-5 py-3 text-center text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:mt-4 sm:px-6 sm:py-4">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}
