import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navigation/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TonsConnect',
  description: 'A social platform for the TON ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen bg-gray-50'>
          {children}
        </main>
      </body>
    </html>
  );
}
