import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AquaHealth | B2B Aquatic Animal Health Solutions',
  description: 'AI-driven health monitoring for aquaculture facilities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
