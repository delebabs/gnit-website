import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { default: 'GNIT | EPC • Energy • ICT • Security', template: '%s | GNIT' },
  description: 'GNIT LTD is a multidisciplinary EPC company delivering integrated Energy, ICT, Security and Engineering solutions throughout Nigeria.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
