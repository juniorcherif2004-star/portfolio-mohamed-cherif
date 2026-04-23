import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Chat } from '@/components/Chat';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohamed Cherif Junior - Ingénieur Logiciel Senior',
  description: 'Portfolio de Mohamed Cherif Junior, ingénieur logiciel senior spécialisé en développement web full-stack avec React, Next.js, TypeScript et Node.js',
  keywords: ['développeur web', 'ingénieur logiciel', 'React', 'Next.js', 'TypeScript', 'Node.js', 'portfolio'],
  authors: [{ name: 'Mohamed Cherif Junior' }],
  creator: 'Mohamed Cherif Junior',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-mohamed-cherif.vercel.app',
    title: 'Mohamed Cherif Junior - Ingénieur Logiciel Senior',
    description: 'Portfolio de Mohamed Cherif Junior, ingénieur logiciel senior spécialisé en développement web full-stack',
    siteName: 'Portfolio - Mohamed Cherif Junior',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Cherif Junior - Ingénieur Logiciel Senior',
    description: 'Portfolio de Mohamed Cherif Junior, ingénieur logiciel senior spécialisé en développement web full-stack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Chat />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
