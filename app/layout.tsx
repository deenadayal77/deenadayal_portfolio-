import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deena Dayal B K — AI Workflow Engineer & Full-Stack Developer',
  description:
    'Deena Dayal B K builds AI-powered automation systems and full-stack products that turn manual work into reliable, measurable workflows. Based in Bengaluru.',
  metadataBase: new URL('https://deenadayal.dev'),
  openGraph: {
    title: 'Deena Dayal B K — AI Workflow Engineer',
    description: 'I build AI systems that turn manual work into reliable automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deena Dayal B K — AI Workflow Engineer',
    description: 'I build AI systems that turn manual work into reliable automation.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f1117',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
