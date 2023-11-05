import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ScoreContextProvider } from '@/hooks/useScoreContext/ScoreContextProvider';

const roboto = Roboto({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VPN Lumos',
  description: 'VPN Lumos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
        />
        {/* <meta name="viewport" content="initial-scale=1, viewport-fit=cover" /> */}
      </head>

      <body className={roboto.className}><ScoreContextProvider>{children}</ScoreContextProvider></body>
    </html>
  );
}
