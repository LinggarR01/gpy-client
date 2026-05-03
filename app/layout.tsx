import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Graha Prima Yudatama',
  description: 'Company profile Graha Prima Yudatama',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-screen bg-primary font-sans text-primary">
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />

          <main className="flex-1 overflow-hidden">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
