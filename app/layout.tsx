import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Rajan K K - Master Woodworker | Amazon Forest Legacy',
  description: 'Experience 40+ years of master woodworking craftsmanship. From the heart of Amazon forest to your home - custom furniture, cabinets, and woodwork with natural artistry.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}