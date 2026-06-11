import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';

const display = Plus_Jakarta_Sans({
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
  title: 'Deena Dayal B K - AI Workflow Engineer & Full-Stack Developer',
  description:
    'Deena Dayal B K builds AI-powered automation systems and full-stack products that turn manual work into reliable, measurable workflows. Based in Bengaluru.',
  metadataBase: new URL('https://deenadayal.dev'),
  openGraph: {
    title: 'Deena Dayal B K - AI Workflow Engineer',
    description: 'I build AI systems that turn manual work into reliable automation.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0c0b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>
          <div className="atmosphere" aria-hidden />
          <div className="grain" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
