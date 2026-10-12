import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MATRIX — Мебельная фабрика',
  description: 'Комплектуем гостиничные номера мебелью и текстилем под ключ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};