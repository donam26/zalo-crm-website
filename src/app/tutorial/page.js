'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaLink, FaComment, FaUserFriends, FaFilter, FaPlayCircle, FaCheck, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

const tutorialCategories = [
  { id: 'setup', icon: <FaCog />, title: 'Cài đặt' },
  { id: 'connect', icon: <FaLink />, title: 'Kết nối Zalo OA' },
  { id: 'message', icon: <FaComment />, title: 'Gửi tin nhắn hàng loạt' },
  { id: 'customer', icon: <FaUserFriends />, title: 'Quản lý khách hàng' },
  { id: 'filter', icon: <FaFilter />, title: 'Sử dụng bộ lọc' }
];

const tutorials = [
  {
    id: 1,
    category: 'setup',
    title: 'Cài đặt Zalo CRM lần đầu',
    description: 'Hướng dẫn chi tiết cách cài đặt và thiết lập Zalo CRM cho doanh nghiệp của bạn.',
    image: '/placeholder-tutorial.jpg',
    duration: '5 phút',
    level: 'Cơ bản',
    content: `
      <h2>Cài đặt Zalo CRM</h2>
      <ol>
        <li>Đăng ký tài khoản trên website chính thức</li>
        <li>Xác thực email và thông tin doanh nghiệp</li>
        <li>Thiết lập thông tin cơ bản cho hệ thống</li>
        <li>Mời thành viên trong nhóm tham gia</li>
        <li>Cấu hình quyền hạn cho từng thành viên</li>
      </ol>
    `
  },
  {
    id: 2,
    category: 'connect',
    title: 'Kết nối với Zalo Official Account',
    description: 'Cách thức kết nối Zalo CRM với tài khoản Zalo OA của doanh nghiệp.',
    image: '/placeholder-tutorial.jpg',
    duration: '7 phút',
    level: 'Trung bình',
    content: `
      <h2>Kết nối với Zalo OA</h2>
      <ol>
        <li>Chuẩn bị thông tin Zalo Official Account</li>
        <li>Vào mục Cài đặt > Kết nối Zalo OA</li>
        <li>Xác thực quyền quản trị của bạn</li>
        <li>Cấp quyền truy cập cho Zalo CRM</li>
        <li>Kiểm tra trạng thái kết nối</li>
      </ol>
    `
  },
  {
    id: 3,
    category: 'message',
    title: 'Tạo chiến dịch gửi tin nhắn hàng loạt',
    description: 'Hướng dẫn tạo và quản lý các chiến dịch gửi tin nhắn tự động.',
    image: '/placeholder-tutorial.jpg',
    duration: '10 phút',
    level: 'Nâng cao',
    content: `
      <h2>Gửi tin nhắn hàng loạt</h2>
      <ol>
        <li>Vào mục Chiến dịch > Tạo chiến dịch mới</li>
        <li>Chọn nhóm khách hàng mục tiêu</li>
        <li>Soạn nội dung tin nhắn</li>
        <li>Lên lịch gửi tin</li>
        <li>Kiểm tra báo cáo sau khi gửi</li>
      </ol>
    `
  },
  {
    id: 4,
    category: 'customer',
    title: 'Nhập dữ liệu khách hàng',
    description: 'Các phương pháp nhập dữ liệu khách hàng vào hệ thống Zalo CRM.',
    image: '/placeholder-tutorial.jpg',
    duration: '8 phút',
    level: 'Cơ bản',
    content: `
      <h2>Nhập dữ liệu khách hàng</h2>
      <ol>
        <li>Chuẩn bị file Excel dữ liệu khách hàng</li>
        <li>Vào mục Khách hàng > Nhập khách hàng</li>
        <li>Tải lên file Excel hoặc CSV</li>
        <li>Ánh xạ các trường dữ liệu</li>
        <li>Xác nhận và hoàn tất quá trình nhập</li>
      </ol>
    `
  },
  {
    id: 5,
    category: 'filter',
    title: 'Tạo bộ lọc khách hàng theo nhu cầu',
    description: 'Hướng dẫn tạo các bộ lọc tùy chỉnh để phân loại khách hàng.',
    image: '/placeholder-tutorial.jpg',
    duration: '6 phút',
    level: 'Trung bình',
    content: `
      <h2>Sử dụng bộ lọc</h2>
      <ol>
        <li>Vào mục Khách hàng > Bộ lọc</li>
        <li>Chọn Tạo bộ lọc mới</li>
        <li>Thiết lập các điều kiện lọc</li>
        <li>Đặt tên và lưu bộ lọc</li>
        <li>Áp dụng bộ lọc vào danh sách khách hàng</li>
      </ol>
    `
  }
];

// Hero Section Background
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-30"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default function Tutorial() {
  const [selectedCategory, setSelectedCategory] = useState('setup');
  const [expandedTutorial, setExpandedTutorial] = useState(null);
  
  const filteredTutorials = tutorials.filter(
    tutorial => tutorial.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hướng dẫn sử dụng Zalo CRM
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Khám phá các hướng dẫn chi tiết để sử dụng Zalo CRM hiệu quả nhất cho doanh nghiệp của bạn
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tutorialCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-lg shadow-sm transition duration-300 ease-in-out ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Category Title */}
          <div className="mb-10">
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={selectedCategory} // Re-render animation when category changes
            >
              {tutorialCategories.find(cat => cat.id === selectedCategory)?.title}
            </motion.h2>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
          
          {/* Tutorials */}
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory} // Re-render animation when category changes
          >
            {filteredTutorials.map((tutorial) => (
              <motion.div
                key={tutorial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-900/50"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{tutorial.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <FaPlayCircle className="mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{tutorial.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setExpandedTutorial(expandedTutorial === tutorial.id ? null : tutorial.id)}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {expandedTutorial === tutorial.id ? 'Thu gọn' : 'Xem chi tiết'}
                      <svg className={`w-4 h-4 ml-1 transform transition-transform ${expandedTutorial === tutorial.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex space-x-2">
                      <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
                        <FaDownload className="mr-1" />
                        PDF
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
                        <FaCheck className="mr-1" />
                        Hoàn thành
                      </button>
                    </div>
                  </div>
                  
                  {expandedTutorial === tutorial.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 border-t pt-6 prose prose-blue max-w-none"
                      dangerouslySetInnerHTML={{ __html: tutorial.content }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Not finding section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy hướng dẫn bạn cần?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn với mọi vấn đề bạn gặp phải khi sử dụng Zalo CRM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Liên hệ hỗ trợ
                </motion.button>
              </Link>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đặt lịch demo
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 