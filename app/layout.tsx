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
  title: 'Quentin Velard - Machine Learning',
  description: 'I am a 24-years-old machine learning engineer. I am passionate about AI for industry, Robotics and Quantum Machine Learning. I attended a French Grande École, equivalent to a highly selective MSc. I recently graduated and am open to new opportunities. Please find some projects I have been working on below.',
  keywords: ['machine learning', 'quantum machine learning', 'robotics', 'portfolio'],
  authors: [{ name: 'Quentin Velard' }],
  creator: 'Quentin Velard',
  icons: {
    icon: '/v1/favicon.ico',
    shortcut: '/v1/favicon.ico',
    apple: '/v1/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velard.fr',
    title: 'Quentin Velard - Machine Learning',
    description: 'I am a 24-years-old machine learning engineer. I am passionate about AI for industry, Robotics and Quantum Machine Learning. I attended a French Grande École, equivalent to a highly selective MSc. I recently graduated and am open to new opportunities. Please find some projects I have been working on below.',
    siteName: 'Quentin Velard Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quentin Velard - Machine Learning',
    description: 'I am a 24-years-old machine learning engineer. I am passionate about AI for industry, Robotics and Quantum Machine Learning. I attended a French Grande École, equivalent to a highly selective MSc. I recently graduated and am open to new opportunities. Please find some projects I have been working on below.',
    creator: '@quentinvelard',
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}