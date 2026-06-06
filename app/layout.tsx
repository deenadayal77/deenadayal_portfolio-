import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deena Dayal B K - Portfolio',
  description: 'Full-Stack Developer & AI Enthusiast | CSE Student at PESCE',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
