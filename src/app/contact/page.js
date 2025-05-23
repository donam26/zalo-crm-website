'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'basic'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập gửi form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'basic'
      });
      
      // Reset thông báo thành công sau 5 giây
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Liên hệ với chúng tôi
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn 24/7
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaPhone className="h-6 w-6 text-blue-200" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium">Điện thoại</p>
                        <p className="mt-1 text-blue-100">+84 (0) 123 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaEnvelope className="h-6 w-6 text-blue-200" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium">Email</p>
                        <p className="mt-1 text-blue-100">support@zalocrm.vn</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaMapMarkerAlt className="h-6 w-6 text-blue-200" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium">Địa chỉ</p>
                        <p className="mt-1 text-blue-100">
                          Tầng 15, Tòa nhà ABC<br />
                          123 Đường Nguyễn Huệ<br />
                          Quận 1, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4">Kết nối với chúng tôi</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-100 hover:text-white transition">
                        <FaFacebookSquare className="h-8 w-8" />
                      </a>
                      <a href="#" className="text-blue-100 hover:text-white transition">
                        <FaTwitterSquare className="h-8 w-8" />
                      </a>
                      <a href="#" className="text-blue-100 hover:text-white transition">
                        <FaLinkedin className="h-8 w-8" />
                      </a>
                      <a href="#" className="text-blue-100 hover:text-white transition">
                        <FaYoutube className="h-8 w-8" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4">Giờ làm việc</h3>
                    <p className="text-blue-100">
                      Thứ Hai - Thứ Sáu: 8:00 - 18:00<br />
                      Thứ Bảy: 9:00 - 12:00<br />
                      Chủ Nhật: Đóng cửa
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi yêu cầu</h2>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <h3 className="text-lg font-medium mb-2">Cảm ơn bạn!</h3>
                      <p>Chúng tôi đã nhận được yêu cầu của bạn và sẽ liên hệ lại trong thời gian sớm nhất.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Họ và tên <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Số điện thoại <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Tên công ty
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Gói dịch vụ bạn quan tâm
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="basic">Gói Cơ bản</option>
                          <option value="standard">Gói Tiêu chuẩn</option>
                          <option value="premium">Gói Cao cấp</option>
                          <option value="enterprise">Gói Doanh nghiệp</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Nội dung tin nhắn <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                      
                      <div>
                        <motion.button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Đang gửi...
                            </>
                          ) : (
                            'Gửi yêu cầu'
                          )}
                        </motion.button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Địa chỉ của chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ghé thăm văn phòng của chúng tôi để được tư vấn trực tiếp về giải pháp Zalo CRM
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Placeholder for Google Map */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <p className="text-lg font-medium mb-2">Bản đồ Google Maps</p>
                <p>(Tích hợp Google Maps API tại đây)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-xl text-gray-600">
              Một số câu hỏi phổ biến về dịch vụ của chúng tôi
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Làm thế nào để bắt đầu dùng thử Zalo CRM?",
                answer: "Bạn có thể đăng ký dùng thử miễn phí 14 ngày bằng cách điền form liên hệ hoặc đăng ký trực tiếp trên trang chủ của chúng tôi. Không cần thông tin thẻ tín dụng."
              },
              {
                question: "Tôi có thể chuyển dữ liệu từ hệ thống CRM cũ sang không?",
                answer: "Có, chúng tôi hỗ trợ nhập dữ liệu từ nhiều hệ thống CRM phổ biến như Excel, CSV, Salesforce, HubSpot và nhiều hệ thống khác. Đội ngũ hỗ trợ sẽ giúp bạn trong quá trình chuyển đổi."
              },
              {
                question: "Zalo CRM có hỗ trợ tích hợp với các phần mềm khác không?",
                answer: "Có, Zalo CRM hỗ trợ tích hợp với nhiều phần mềm phổ biến như Shopify, WooCommerce, Google Sheets và các phần mềm CRM khác thông qua API."
              },
              {
                question: "Tôi cần hỗ trợ kỹ thuật, làm thế nào để liên hệ?",
                answer: "Bạn có thể liên hệ với đội ngũ hỗ trợ kỹ thuật của chúng tôi qua email support@zalocrm.vn, hotline +84 (0) 123 456 789 hoặc chat trực tiếp trên website. Chúng tôi hỗ trợ 24/7."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 