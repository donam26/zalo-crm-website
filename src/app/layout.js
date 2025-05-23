import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://zalo-crm.vn'),
  title: {
    default: 'Zalo CRM - Giải pháp quản lý khách hàng tích hợp Zalo',
    template: '%s | Zalo CRM'
  },
  description: 'Zalo CRM là giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA, giúp doanh nghiệp tối ưu hóa quy trình chăm sóc khách hàng.',
  keywords: [
    'Zalo CRM', 
    'quản lý khách hàng', 
    'Zalo OA', 
    'tự động hóa marketing', 
    'CRM Việt Nam',
    'phần mềm CRM'
  ],
  authors: [{ name: 'Zalo CRM Team' }],
  creator: 'Zalo CRM',
  publisher: 'Zalo CRM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  openGraph: {
    title: 'Zalo CRM - Giải pháp quản lý khách hàng tích hợp Zalo',
    description: 'Zalo CRM là giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA, giúp doanh nghiệp tối ưu hóa quy trình chăm sóc khách hàng.',
    url: 'https://zalo-crm.vn',
    siteName: 'Zalo CRM',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zalo CRM Logo',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zalo CRM - Giải pháp quản lý khách hàng tích hợp Zalo',
    description: 'Zalo CRM là giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA',
    creator: '@zalocrm',
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
