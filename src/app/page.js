'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserFriends, FaComment, FaTags, FaFilter, FaSitemap, FaChartLine } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

// Component cho các tính năng nổi bật
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Hiệu ứng cho Hero Section
const HeroText = ({ children }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

// Particle animation
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor(canvas.width * canvas.height / 8000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.globalAlpha = particle.opacity;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-20"
    />
  );
};

// Thông tin các tính năng nổi bật
const featuresData = [
  {
    icon: <FaUserFriends size={36} />,
    title: 'Quản lý khách hàng',
    description: 'Quản lý thông tin khách hàng một cách có tổ chức, dễ dàng tìm kiếm và theo dõi.'
  },
  {
    icon: <FaComment size={36} />,
    title: 'Tin nhắn Zalo tự động',
    description: 'Tự động hóa việc gửi tin nhắn đến khách hàng qua Zalo OA, tiết kiệm thời gian.'
  },
  {
    icon: <FaTags size={36} />,
    title: 'Gắn thẻ khách hàng',
    description: 'Phân loại khách hàng bằng hệ thống thẻ, giúp phân khúc và nhắm mục tiêu hiệu quả.'
  },
  {
    icon: <FaFilter size={36} />,
    title: 'Lọc theo tag',
    description: 'Dễ dàng tìm kiếm và lọc khách hàng theo thẻ và các tiêu chí khác nhau.'
  },
  {
    icon: <FaSitemap size={36} />,
    title: 'Phân loại theo pipeline',
    description: 'Theo dõi tiến trình chăm sóc khách hàng theo các giai đoạn pipeline.'
  },
  {
    icon: <FaChartLine size={36} />,
    title: 'Thống kê tương tác',
    description: 'Phân tích chi tiết về tương tác của khách hàng, giúp tối ưu chiến lược.'
  }
];

// Component cho phản hồi của khách hàng
const TestimonialCard = ({ content, author, position, company, image }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.03 }}
    >
      <div className="mb-4">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-600 text-sm">{position} tại {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 overflow-hidden">
                  <HeroText>Quản lý khách hàng</HeroText>{' '}
                  <HeroText>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                      thông minh
                    </span>
                  </HeroText>{' '}
                  <HeroText>với Zalo CRM</HeroText>
                </h1>
                <motion.p 
                  className="text-xl mb-8 text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Giải pháp quản lý khách hàng hiện đại tích hợp với Zalo OA, 
                  giúp doanh nghiệp tối ưu hóa quy trình chăm sóc khách hàng.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Dùng thử miễn phí
                    </motion.button>
                  </Link>
                  <Link href="/tutorial">
                    <motion.button
                      className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-20 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Xem hướng dẫn
                    </motion.button>
                  </Link>
                </motion.div>
                
                <motion.div
                  className="mt-8 flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-blue-100">Hơn 1,000+ doanh nghiệp đã tin dùng</span>
                </motion.div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Dashboard mockup */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-gray-800 h-8 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-4 bg-blue-50 p-3 rounded-lg">
                      <div className="font-medium text-blue-600">Dashboard Zalo CRM</div>
                      <div className="text-blue-600">4 thông báo mới</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[
                        { label: 'Khách hàng', value: '1,234' },
                        { label: 'Tương tác', value: '8,547' },
                        { label: 'Chiến dịch', value: '24' }
                      ].map((stat, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs opacity-80">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Biểu đồ tương tác */}
                    <div className="bg-white border border-gray-200 rounded-lg mb-4 p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium text-gray-700">Biểu đồ tương tác</div>
                        <div className="text-xs text-blue-500">30 ngày qua</div>
                      </div>
                      <div className="h-28">
                        <div className="w-full h-full flex items-end justify-between gap-1">
                          {[35, 45, 30, 65, 35, 50, 70, 40, 45, 55, 60, 45, 50, 55].map((height, index) => (
                            <div key={index} className="relative group flex-grow">
                              <div 
                                className="bg-blue-500 opacity-80 rounded-t hover:opacity-100 transition-all"
                                style={{ 
                                  height: `${height}%`,
                                  background: index === 9 ? 'linear-gradient(to top, #3b82f6, #60a5fa)' : '' 
                                }}
                              ></div>
                              <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 
                                  bg-blue-700 text-white text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {height}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>01/08</span>
                        <span>08/08</span>
                        <span>15/08</span>
                        <span>Hôm nay</span>
                      </div>
                    </div>
                    
                    {/* Danh sách khách hàng */}
                    <div className="bg-white border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center p-3 border-b">
                        <div className="font-medium text-gray-700">Khách hàng gần đây</div>
                        <div className="text-xs text-blue-500">Xem tất cả</div>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {[
                          { name: 'Nguyễn Văn A', status: 'Khách hàng mới', time: '5 phút trước', avatar: 'NV', color: 'bg-blue-100 text-blue-600' },
                          { name: 'Trần Thị B', status: 'Đã mua hàng', time: '2 giờ trước', avatar: 'TT', color: 'bg-green-100 text-green-600' },
                          { name: 'Lê Hoàng C', status: 'Đang tương tác', time: '25 phút trước', avatar: 'LH', color: 'bg-purple-100 text-purple-600' }
                        ].map((customer, i) => (
                          <div key={i} className="flex items-center p-3 hover:bg-gray-50">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${customer.color}`}>
                              <span className="font-medium text-sm">{customer.avatar}</span>
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <span className="font-medium text-sm">{customer.name}</span>
                                <span className="text-gray-400 text-xs">{customer.time}</span>
                              </div>
                              <span className="text-xs text-gray-500">{customer.status}</span>
                            </div>
                            <button className="ml-2 text-blue-500 hover:text-blue-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 -z-10"
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.05, 1, 1.05, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 -z-10"
                  animate={{ 
                    y: [0, -10, 0, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Cuộn xuống</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-gray-600 mb-8 font-medium">
              Được tin dùng bởi hơn 1,000+ doanh nghiệp
            </p>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  className="h-16 w-32 bg-white shadow-sm rounded-lg flex items-center justify-center"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="h-8 w-20 bg-gray-200 rounded"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Tính năng
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Các tính năng nổi bật</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Khám phá các công cụ mạnh mẽ giúp doanh nghiệp của bạn quản lý khách hàng hiệu quả.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/features">
              <motion.button
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                whileHover={{ x: 5 }}
              >
                Xem tất cả tính năng
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute -right-16 top-1/4 w-48 h-48 rounded-full bg-teal-100 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
              Quy trình
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Cách Zalo CRM hoạt động
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              4 bước đơn giản để bắt đầu tối ưu hóa việc quản lý khách hàng của bạn
            </p>
          </motion.div>

          {/* Process steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                {
                  step: 1,
                  title: "Kết nối Zalo OA",
                  description: "Liên kết tài khoản Zalo Official Account với hệ thống Zalo CRM.",
                  icon: "🔗"
                },
                {
                  step: 2,
                  title: "Nhập khách hàng",
                  description: "Nhập hoặc đồng bộ thông tin khách hàng vào hệ thống.",
                  icon: "📥"
                },
                {
                  step: 3,
                  title: "Phân loại & Gắn thẻ",
                  description: "Tổ chức khách hàng theo các nhóm và thẻ phù hợp.",
                  icon: "🏷️"
                },
                {
                  step: 4,
                  title: "Tương tác & Theo dõi",
                  description: "Gửi tin nhắn, theo dõi tương tác và phân tích hiệu quả.",
                  icon: "📊"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-6 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div className="absolute -right-1 -top-1 bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                        {item.step}
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/tutorial">
              <motion.button
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                whileHover={{ x: 5 }}
              >
                Xem hướng dẫn chi tiết
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Phản hồi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Hàng ngàn doanh nghiệp đã tối ưu hóa quy trình quản lý khách hàng với Zalo CRM
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "Zalo CRM giúp chúng tôi tăng hiệu quả tương tác với khách hàng đến 70%, tiết kiệm thời gian và tăng tỷ lệ chuyển đổi.",
                author: "Nguyễn Văn A",
                position: "Giám đốc Marketing",
                company: "ABC Company"
              },
              {
                content: "Giao diện dễ sử dụng, tính năng đầy đủ và đặc biệt là tích hợp với Zalo rất mượt mà. Nhân viên của chúng tôi yêu thích điều đó!",
                author: "Trần Thị B",
                position: "Trưởng phòng CSKH",
                company: "XYZ Group"
              },
              {
                content: "Việc gửi tin nhắn hàng loạt qua Zalo giờ đây trở nên cực kỳ dễ dàng. ROI của chúng tôi tăng đáng kể sau 3 tháng sử dụng.",
                author: "Lê Văn C",
                position: "CEO",
                company: "DEF Startup"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col"
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <svg className="w-10 h-10 text-gray-200 mb-3" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 mb-6 italic font-medium">{testimonial.content}</p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.position} tại {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional testimonials */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Xem thêm đánh giá từ khách hàng →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white"></div>
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sẵn sàng tối ưu hóa quản lý khách hàng?
            </motion.h2>

            <motion.p 
              className="text-xl mb-12 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Đăng ký dùng thử 14 ngày miễn phí ngay hôm nay. Không cần thông tin thẻ tín dụng.
              <span className="block mt-2 text-lg">Tích hợp dễ dàng. Hỗ trợ 24/7. Bắt đầu ngay!</span>
            </motion.p>
            
            <motion.div 
              className="bg-white rounded-xl p-2 sm:p-3 flex flex-col sm:flex-row gap-3 mx-auto max-w-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none"
              />
              <motion.button 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bắt đầu ngay
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-6 text-sm text-blue-200 flex flex-col md:flex-row items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Không cần thẻ tín dụng</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Hỗ trợ 24/7</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Hủy bất cứ lúc nào</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Những thắc mắc phổ biến về Zalo CRM
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                question: "Zalo CRM có tương thích với mọi loại Zalo OA không?",
                answer: "Có, Zalo CRM tương thích với mọi loại Zalo Official Account, từ tài khoản miễn phí đến tài khoản doanh nghiệp."
              },
              {
                question: "Tôi có thể gửi bao nhiêu tin nhắn hàng loạt mỗi tháng?",
                answer: "Số lượng tin nhắn phụ thuộc vào gói dịch vụ bạn đăng ký. Gói cơ bản cho phép gửi tới 10,000 tin nhắn mỗi tháng."
              },
              {
                question: "Làm thế nào để nhập dữ liệu khách hàng vào hệ thống?",
                answer: "Bạn có thể nhập dữ liệu bằng cách tải lên file Excel/CSV, nhập thủ công hoặc đồng bộ từ các hệ thống khác thông qua API."
              },
              {
                question: "Zalo CRM có hỗ trợ tích hợp với các phần mềm khác không?",
                answer: "Có, Zalo CRM hỗ trợ tích hợp với nhiều phần mềm phổ biến như Shopify, WooCommerce, Google Sheets và các phần mềm CRM khác thông qua API."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <motion.div className="p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.button 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Bạn có câu hỏi khác?</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
