import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from './redux/Provider';

const roboto = Roboto({
  weight: ['400', '700'],
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
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1'
        />
      </head>

      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
