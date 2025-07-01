import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(
  () => import('@/components/theme-provider').then((mod) => ({ default: mod.ThemeProvider })),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences.',
  keywords: ['developer', 'full-stack', 'react', 'node.js', 'web development', 'portfolio'],
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Alex Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences.',
    siteName: 'Alex Johnson Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
    creator: '@alexjohnsondev',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}