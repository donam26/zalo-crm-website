'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUserFriends, FaComment, FaTags, FaFilter, FaSitemap, FaChartLine, FaRobot, FaCalendarAlt, FaClipboardList, FaFileExport, FaUsers, FaLayerGroup } from 'react-icons/fa';

// Component cho các tính năng
const FeatureCard = ({ icon, title, description, benefits }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg"
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-blue-600 mb-4 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {benefits && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Lợi ích:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

// Thông tin các tính năng
const featuresData = [
  {
    icon: <FaUserFriends size={32} />,
    title: 'Quản lý khách hàng',
    description: 'Quản lý thông tin khách hàng một cách có tổ chức, dễ dàng tìm kiếm và theo dõi lịch sử tương tác.',
    benefits: [
      'Lưu trữ thông tin khách hàng chi tiết',
      'Tìm kiếm nhanh chóng và chính xác',
      'Phân loại theo nhiều tiêu chí khác nhau'
    ]
  },
  {
    icon: <FaComment size={32} />,
    title: 'Tin nhắn Zalo tự động',
    description: 'Tự động hóa việc gửi tin nhắn đến khách hàng qua Zalo OA, tiết kiệm thời gian và công sức.',
    benefits: [
      'Gửi tin nhắn hàng loạt tới nhiều khách hàng',
      'Lên lịch gửi tin nhắn tự động',
      'Tùy chỉnh nội dung theo từng khách hàng'
    ]
  },
  {
    icon: <FaTags size={32} />,
    title: 'Gắn thẻ khách hàng',
    description: 'Phân loại khách hàng bằng hệ thống thẻ, giúp phân khúc và nhắm mục tiêu hiệu quả.',
    benefits: [
      'Tạo và quản lý không giới hạn thẻ',
      'Tự động gắn thẻ dựa trên hành vi',
      'Tìm kiếm và lọc khách hàng theo thẻ'
    ]
  },
  {
    icon: <FaFilter size={32} />,
    title: 'Lọc theo tag',
    description: 'Dễ dàng tìm kiếm và lọc khách hàng theo thẻ và các tiêu chí khác nhau.',
    benefits: [
      'Lọc khách hàng theo nhiều tiêu chí',
      'Tạo các nhóm khách hàng mục tiêu',
      'Xuất danh sách đã lọc để sử dụng'
    ]
  },
  {
    icon: <FaSitemap size={32} />,
    title: 'Phân loại theo pipeline',
    description: 'Theo dõi tiến trình chăm sóc khách hàng theo các giai đoạn pipeline.',
    benefits: [
      'Tùy chỉnh các giai đoạn pipeline',
      'Theo dõi tiến độ chuyển đổi',
      'Phân tích tỷ lệ chuyển đổi từng giai đoạn'
    ]
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'Thống kê tương tác',
    description: 'Phân tích chi tiết về tương tác của khách hàng, giúp tối ưu chiến lược.',
    benefits: [
      'Báo cáo tương tác theo thời gian thực',
      'Biểu đồ phân tích trực quan',
      'Xuất báo cáo theo nhiều định dạng'
    ]
  },
  {
    icon: <FaRobot size={32} />,
    title: 'Tự động hóa',
    description: 'Thiết lập các quy trình tự động để tiết kiệm thời gian và đảm bảo nhất quán.',
    benefits: [
      'Tự động gửi tin nhắn theo sự kiện',
      'Tự động phân loại khách hàng',
      'Tự động nhắc nhở và theo dõi'
    ]
  },
  {
    icon: <FaCalendarAlt size={32} />,
    title: 'Lịch hẹn & Nhắc nhở',
    description: 'Quản lý lịch hẹn và thiết lập nhắc nhở tự động cho các hoạt động chăm sóc khách hàng.',
    benefits: [
      'Đồng bộ với Google Calendar',
      'Nhắc nhở tự động qua email và Zalo',
      'Xem lịch theo ngày, tuần, tháng'
    ]
  },
  {
    icon: <FaClipboardList size={32} />,
    title: 'Mẫu tin nhắn',
    description: 'Tạo và lưu trữ các mẫu tin nhắn để sử dụng lại, tiết kiệm thời gian soạn thảo.',
    benefits: [
      'Thư viện mẫu tin nhắn đa dạng',
      'Tùy chỉnh biến động theo khách hàng',
      'Chia sẻ mẫu trong nhóm làm việc'
    ]
  },
  {
    icon: <FaFileExport size={32} />,
    title: 'Xuất/Nhập dữ liệu',
    description: 'Dễ dàng xuất nhập dữ liệu khách hàng từ nhiều nguồn khác nhau.',
    benefits: [
      'Hỗ trợ nhiều định dạng file (CSV, Excel)',
      'Nhập dữ liệu hàng loạt',
      'Đồng bộ với các hệ thống khác'
    ]
  },
  {
    icon: <FaUsers size={32} />,
    title: 'Quản lý nhóm',
    description: 'Phân quyền và quản lý nhóm làm việc, giúp cộng tác hiệu quả trong việc chăm sóc khách hàng.',
    benefits: [
      'Phân quyền chi tiết cho từng thành viên',
      'Theo dõi hoạt động của nhân viên',
      'Giao việc và đánh giá hiệu suất'
    ]
  },
  {
    icon: <FaLayerGroup size={32} />,
    title: 'Tích hợp đa nền tảng',
    description: 'Kết nối với nhiều nền tảng khác nhau để tạo hệ sinh thái quản lý khách hàng toàn diện.',
    benefits: [
      'Tích hợp với website và cửa hàng online',
      'Kết nối với các nền tảng mạng xã hội',
      'API mở cho phép tùy chỉnh tích hợp'
    ]
  }
];

export default function Features() {
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
              Tính năng của Zalo CRM
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Khám phá đầy đủ các công cụ mạnh mẽ giúp doanh nghiệp của bạn quản lý khách hàng hiệu quả thông qua nền tảng Zalo
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Dashboard Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Giao diện trực quan & dễ sử dụng
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Trải nghiệm giao diện người dùng hiện đại, trực quan và dễ sử dụng của Zalo CRM
            </p>
          </div>

          <motion.div
            className="relative bg-white rounded-xl shadow-2xl overflow-hidden mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-4 bg-blue-50 p-3 rounded-lg">
                <div className="font-medium">Dashboard Zalo CRM</div>
                <div className="text-blue-600">4 thông báo mới</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Khách hàng', value: '1,234' },
                  { label: 'Tương tác', value: '8,547' },
                  { label: 'Chiến dịch', value: '24' }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs opacity-80">{stat.label}</div>
                  </div>
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sẵn sàng tối ưu hóa quy trình quản lý khách hàng?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Đăng ký dùng thử miễn phí 14 ngày và trải nghiệm tất cả các tính năng cao cấp
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
                Dùng thử miễn phí
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 