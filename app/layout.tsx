import './globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: '--font-plus_jakarta_sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${plus_jakarta_sans.variable} font-sans`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
