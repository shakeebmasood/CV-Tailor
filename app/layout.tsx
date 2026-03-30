import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IT CV Generator — Tailored One-Page CV',
  description: 'Paste a job description and generate a tailored one-page PDF CV from your IT career history.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
