'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Xác định kiểu header dựa vào đường dẫn hiện tại
  const isHomePage = pathname === '/';
  const isDarkHeader = isHomePage || pathname.includes('/blog/') || pathname === '/tutorial';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Tính năng', href: '/features' },
    { name: 'Hướng dẫn', href: '/tutorial' },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header 
      role="banner"
      aria-label="Header chính của Zalo CRM"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : (isDarkHeader ? 'bg-blue-900/80 backdrop-blur-sm py-4' : 'bg-white py-4')
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Trang chủ Zalo CRM">
            <div className="relative h-10 w-40 flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/logo.png" 
                  alt="Zalo CRM Logo" 
                  
                  style={{ objectFit: 'contain' }}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className={`font-bold text-xl ${
                scrolled ? 'text-blue-600' : (isDarkHeader ? 'text-white' : 'text-blue-600')
              }`}>Zalo CRM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10" aria-label="Menu chính">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-medium transition-colors ${
                    scrolled 
                      ? (isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600') 
                      : isDarkHeader 
                        ? (isActive ? 'text-blue-400' : 'text-white hover:text-blue-200')
                        : (isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600')
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-current"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/contact"
              className={`py-2 px-4 rounded-lg font-medium transition ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : isDarkHeader
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Dùng thử miễn phí
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled 
                  ? 'text-gray-600' 
                  : (isDarkHeader ? 'text-white' : 'text-gray-600')
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden ${scrolled ? 'bg-white' : (isDarkHeader ? 'bg-blue-900' : 'bg-white')} ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        aria-label="Menu di động"
      >
        <div className={`pt-2 pb-4 px-4 space-y-1 ${
          scrolled 
            ? 'border-t border-gray-200' 
            : (isDarkHeader ? 'border-t border-blue-800' : 'border-t border-gray-200')
        }`}>
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`block px-3 py-2 rounded-md font-medium ${
                  scrolled 
                    ? (isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50')
                    : isDarkHeader
                      ? (isActive ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800')
                      : (isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50')
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full py-2 px-4 rounded-lg font-medium text-center bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
} 