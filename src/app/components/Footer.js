'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Zalo CRM</h3>
            <p className="mb-4 text-blue-100">
              Giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA, 
              giúp doanh nghiệp tối ưu hóa quy trình chăm sóc khách hàng.
            </p>
            
            <div className="space-y-3 mt-6 text-blue-100">
              <div className="flex items-start">
                <FaPhoneAlt className="mr-3 h-5 w-5 text-blue-300 mt-1" />
                <span>+84 (0) 123 456 789</span>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="mr-3 h-5 w-5 text-blue-300 mt-1" />
                <span>support@zalocrm.vn</span>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 h-5 w-5 text-blue-300 mt-1" />
                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-300 hover:text-white transition" aria-label="Facebook">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition" aria-label="Twitter">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition" aria-label="YouTube">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-blue-200 hover:text-white transition">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Khách hàng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  API
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorial" className="text-blue-200 hover:text-white transition">
                  Hướng dẫn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Công ty</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Đối tác
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Điều khoản
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200">
            <p>&copy; {currentYear} Zalo CRM. Tất cả quyền được bảo lưu.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="hover:text-white transition">
                Điều khoản sử dụng
              </Link>
              <Link href="#" className="hover:text-white transition">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 