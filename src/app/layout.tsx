import type { Metadata } from 'next';
import { Raleway, Open_Sans } from 'next/font/google';
import Header from '@/ts/components/Header/Header';
import Footer from '@/ts/components/Footer/Footer';
import SkipToLink from '@/ts/components/SkipToLink/SkipToLink';
import { mainContentId } from '@/ts/config/ids';
import '@/styles/main.css';
import { meta } from '@/data/shared/meta';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <SkipToLink />
          <Header />
          <main
            id={mainContentId}
            className="relative flex-1 flex content-stretch"
          >
            <div className="w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
