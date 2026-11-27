import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kannur Tatt Kada | Marketing Hub',
  description: 'Marketing dashboard for Kannur Tatt Kada in Jurf 1, Ajman.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
