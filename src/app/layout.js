import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zalo CRM - Giải pháp quản lý khách hàng tích hợp Zalo',
  description: 'Zalo CRM là giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA, giúp doanh nghiệp tối ưu hóa quy trình chăm sóc khách hàng.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
