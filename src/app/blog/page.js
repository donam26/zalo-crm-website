'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Dữ liệu mẫu cho các bài viết blog
const blogPosts = [
  {
    id: 'tang-tuong-tac-voi-khach-hang-qua-zalo',
    title: 'Tăng tương tác với khách hàng qua Zalo',
    excerpt: 'Các chiến lược hiệu quả để tăng tương tác với khách hàng thông qua nền tảng Zalo.',
    category: 'Marketing',
    date: '2023-05-15',
    author: 'Nguyễn Văn A',
    readTime: '5 phút',
    image: '/blog1.jpg'
  },
  {
    id: 'cach-quan-ly-du-lieu-khach-hang-hieu-qua',
    title: 'Cách quản lý dữ liệu khách hàng hiệu quả',
    excerpt: 'Những phương pháp tối ưu để quản lý cơ sở dữ liệu khách hàng một cách hiệu quả.',
    category: 'Quản lý',
    date: '2023-05-10',
    author: 'Trần Thị B',
    readTime: '8 phút',
    image: '/blog2.jpg'
  },
  {
    id: 'tu-dong-hoa-quy-trinh-cham-soc-khach-hang',
    title: 'Tự động hóa quy trình chăm sóc khách hàng',
    excerpt: 'Làm thế nào để tự động hóa quy trình chăm sóc khách hàng mà không làm mất đi yếu tố cá nhân hóa.',
    category: 'Automation',
    date: '2023-05-05',
    author: 'Lê Văn C',
    readTime: '6 phút',
    image: '/blog3.jpg'
  },
  {
    id: 'phan-tich-du-lieu-khach-hang-voi-zalo-crm',
    title: 'Phân tích dữ liệu khách hàng với Zalo CRM',
    excerpt: 'Cách sử dụng các công cụ phân tích dữ liệu trong Zalo CRM để đưa ra quyết định kinh doanh tốt hơn.',
    category: 'Phân tích',
    date: '2023-04-28',
    author: 'Phạm Thị D',
    readTime: '7 phút',
    image: '/blog4.jpg'
  },
  {
    id: 'tich-hop-zalo-crm-voi-cac-cong-cu-khac',
    title: 'Tích hợp Zalo CRM với các công cụ khác',
    excerpt: 'Hướng dẫn tích hợp Zalo CRM với các công cụ marketing, bán hàng và dịch vụ khách hàng khác.',
    category: 'Tích hợp',
    date: '2023-04-20',
    author: 'Hoàng Văn E',
    readTime: '10 phút',
    image: '/blog5.jpg'
  },
  {
    id: 'bao-mat-du-lieu-trong-zalo-crm',
    title: 'Bảo mật dữ liệu trong Zalo CRM',
    excerpt: 'Các biện pháp đảm bảo an toàn và bảo mật dữ liệu khách hàng khi sử dụng Zalo CRM.',
    category: 'Bảo mật',
    date: '2023-04-15',
    author: 'Vũ Thị F',
    readTime: '9 phút',
    image: '/blog6.jpg'
  }
];

// Danh sách các danh mục
const categories = [
  'Tất cả',
  'Marketing',
  'Quản lý',
  'Automation',
  'Phân tích',
  'Tích hợp',
  'Bảo mật'
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  
  const filteredPosts = selectedCategory === 'Tất cả'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const postVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Blog Zalo CRM
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Khám phá các bài viết, mẹo và chiến lược mới nhất để tối ưu hóa việc quản lý khách hàng với Zalo CRM
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={postVariants}
            >
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Đọc thêm →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận bản tin</h3>
          <p className="mb-6">Nhận các bài viết mới nhất và mẹo sử dụng Zalo CRM hiệu quả</p>
          
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 