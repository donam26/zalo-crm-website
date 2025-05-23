'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaTags, FaArrowLeft } from 'react-icons/fa';

const blogPosts = [
  {
    id: 'tang-tuong-tac-voi-khach-hang-qua-zalo',
    title: 'Tăng tương tác với khách hàng qua Zalo',
    content: `
      <p>Việc tương tác với khách hàng qua Zalo đang ngày càng trở nên phổ biến tại Việt Nam. Với hơn 100 triệu người dùng, Zalo đã trở thành một kênh giao tiếp quan trọng mà doanh nghiệp không thể bỏ qua.</p>
      
      <h2>Tại sao nên sử dụng Zalo để tương tác với khách hàng?</h2>
      <p>Zalo có nhiều ưu điểm vượt trội so với các nền tảng khác:</p>
      <ul>
        <li>Phổ biến tại thị trường Việt Nam</li>
        <li>Tỷ lệ mở tin nhắn cao hơn email marketing</li>
        <li>Khả năng tương tác hai chiều</li>
        <li>Hỗ trợ nhiều định dạng nội dung</li>
        <li>Chi phí thấp hơn so với SMS marketing</li>
      </ul>
      
      <h2>Các chiến lược tăng tương tác hiệu quả</h2>
      
      <h3>1. Cá nhân hóa tin nhắn</h3>
      <p>Không gì có thể thay thế được sự cá nhân hóa trong giao tiếp với khách hàng. Hãy sử dụng tên khách hàng và thông tin liên quan để tạo cảm giác được quan tâm.</p>
      
      <h3>2. Tạo nội dung có giá trị</h3>
      <p>Đừng chỉ gửi tin nhắn quảng cáo sản phẩm. Hãy cung cấp thông tin hữu ích, mẹo sử dụng sản phẩm, hoặc nội dung giải trí liên quan đến lĩnh vực của bạn.</p>
      
      <h3>3. Phản hồi nhanh chóng</h3>
      <p>Khách hàng đánh giá cao tốc độ phản hồi. Việc sử dụng Zalo CRM giúp bạn không bỏ lỡ tin nhắn và phản hồi nhanh chóng, tăng sự hài lòng của khách hàng.</p>
      
      <h3>4. Sử dụng hình ảnh và video</h3>
      <p>Nội dung trực quan thu hút sự chú ý nhiều hơn. Hãy kết hợp văn bản với hình ảnh đẹp và video ngắn để tăng hiệu quả truyền thông.</p>
      
      <h3>5. Tổ chức mini-game và khuyến mãi</h3>
      <p>Các hoạt động tương tác như mini-game, khảo sát ngắn hoặc ưu đãi độc quyền trên Zalo có thể khuyến khích khách hàng tương tác thường xuyên hơn.</p>
      
      <h2>Đo lường hiệu quả tương tác</h2>
      <p>Để biết chiến lược của bạn có hiệu quả hay không, hãy theo dõi các chỉ số sau:</p>
      <ul>
        <li>Tỷ lệ mở tin nhắn</li>
        <li>Tỷ lệ phản hồi</li>
        <li>Thời gian phản hồi trung bình</li>
        <li>Tỷ lệ chuyển đổi từ tin nhắn</li>
        <li>Chỉ số hài lòng của khách hàng</li>
      </ul>
      
      <p>Zalo CRM giúp bạn dễ dàng theo dõi các chỉ số này, từ đó tối ưu hóa chiến lược tương tác của doanh nghiệp.</p>
      
      <h2>Kết luận</h2>
      <p>Tương tác với khách hàng qua Zalo không chỉ là xu hướng mà còn là chiến lược hiệu quả để xây dựng mối quan hệ lâu dài với khách hàng. Với sự hỗ trợ của Zalo CRM, việc quản lý và tối ưu hóa các tương tác này trở nên dễ dàng hơn bao giờ hết.</p>
    `,
    category: 'Marketing',
    date: '2023-05-15',
    author: 'Nguyễn Văn A',
    readTime: '5 phút',
    tags: ['zalo', 'tương tác', 'marketing', 'khách hàng']
  },
  {
    id: 'cach-quan-ly-du-lieu-khach-hang-hieu-qua',
    title: 'Cách quản lý dữ liệu khách hàng hiệu quả',
    content: `
      <p>Quản lý dữ liệu khách hàng là một phần quan trọng trong chiến lược kinh doanh của bất kỳ doanh nghiệp nào. Dữ liệu khách hàng chất lượng giúp doanh nghiệp đưa ra quyết định chính xác và cải thiện trải nghiệm khách hàng.</p>
      
      <h2>Tầm quan trọng của quản lý dữ liệu khách hàng</h2>
      <p>Dữ liệu khách hàng là tài sản quý giá giúp doanh nghiệp:</p>
      <ul>
        <li>Hiểu rõ nhu cầu và hành vi khách hàng</li>
        <li>Cá nhân hóa trải nghiệm</li>
        <li>Dự đoán xu hướng mua sắm</li>
        <li>Tối ưu hóa chiến dịch marketing</li>
        <li>Nâng cao dịch vụ khách hàng</li>
      </ul>
      
      <h2>Các thách thức trong quản lý dữ liệu khách hàng</h2>
      
      <h3>1. Dữ liệu phân tán</h3>
      <p>Nhiều doanh nghiệp lưu trữ thông tin khách hàng ở nhiều nơi khác nhau: bảng tính Excel, danh sách email, ứng dụng nhắn tin... Điều này gây khó khăn trong việc có cái nhìn tổng thể về khách hàng.</p>
      
      <h3>2. Dữ liệu không đồng nhất</h3>
      <p>Thông tin khách hàng có thể được nhập theo nhiều cách khác nhau, gây ra sự không nhất quán và trùng lặp.</p>
      
      <h3>3. Tuân thủ quy định về bảo mật</h3>
      <p>Các quy định về bảo vệ dữ liệu cá nhân ngày càng nghiêm ngặt, đòi hỏi doanh nghiệp phải có biện pháp bảo mật phù hợp.</p>
      
      <h2>Giải pháp quản lý dữ liệu hiệu quả với Zalo CRM</h2>
      
      <h3>1. Tập trung dữ liệu vào một hệ thống</h3>
      <p>Zalo CRM giúp tập trung mọi thông tin khách hàng vào một nền tảng duy nhất, từ thông tin liên lạc, lịch sử mua hàng đến tương tác trên Zalo.</p>
      
      <h3>2. Tự động hóa thu thập dữ liệu</h3>
      <p>Hệ thống có thể tự động cập nhật thông tin khách hàng từ nhiều kênh, giảm thiểu công việc nhập liệu thủ công và sai sót.</p>
      
      <h3>3. Phân loại và gắn thẻ thông minh</h3>
      <p>Phân loại khách hàng theo nhiều tiêu chí khác nhau giúp dễ dàng tìm kiếm và phân khúc đối tượng cho các chiến dịch marketing.</p>
      
      <h3>4. Bảo mật dữ liệu đa lớp</h3>
      <p>Zalo CRM cung cấp các tính năng bảo mật tiên tiến, đảm bảo thông tin khách hàng được bảo vệ an toàn.</p>
      
      <h2>Các bước xây dựng quy trình quản lý dữ liệu khách hàng</h2>
      <ol>
        <li>Xác định mục tiêu và phạm vi quản lý dữ liệu</li>
        <li>Thiết lập tiêu chuẩn nhập liệu thống nhất</li>
        <li>Đào tạo nhân viên về quy trình quản lý dữ liệu</li>
        <li>Xây dựng lịch trình làm sạch dữ liệu định kỳ</li>
        <li>Triển khai hệ thống phân quyền truy cập phù hợp</li>
      </ol>
      
      <h2>Kết luận</h2>
      <p>Quản lý dữ liệu khách hàng hiệu quả không chỉ là việc sử dụng công nghệ phù hợp mà còn đòi hỏi chiến lược và quy trình rõ ràng. Với sự hỗ trợ của Zalo CRM, doanh nghiệp có thể chuyển đổi dữ liệu khách hàng thành tài sản có giá trị, thúc đẩy tăng trưởng bền vững.</p>
    `,
    category: 'Quản lý',
    date: '2023-05-10',
    author: 'Trần Thị B',
    readTime: '8 phút',
    tags: ['quản lý dữ liệu', 'CRM', 'khách hàng', 'bảo mật']
  },
  // Thêm các bài viết khác tương tự
];

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === slug);
    setPost(currentPost);
  }, [slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Đang tải bài viết...</h2>
          <p className="mt-2 text-gray-500">Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="flex items-center text-blue-600 mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          Quay lại trang Blog
        </Link>
        
        {/* Bài viết header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 bg-gray-300 relative">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                {post.category}
              </span>
              <h1 className="text-3xl font-bold text-white">{post.title}</h1>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8">
              <div className="flex items-center mr-6">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Nội dung bài viết */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            {post.tags && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <FaTags className="text-gray-400 mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Tương tác và chia sẻ */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Bài viết có hữu ích không?</h3>
          <div className="flex gap-4 mb-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Có, rất hữu ích!
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Cần cải thiện hơn
            </button>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Chia sẻ bài viết</h3>
          <div className="flex gap-4">
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M21.4 4.2c-1.6-1.6-3.7-2.5-5.9-2.5-4.6 0-8.4 3.8-8.4 8.4 0 1.5.4 2.9 1.1 4.2L7 19.5l5.2-1.3c1.2.7 2.7 1 4.2 1h.4c4.6 0 8.3-3.7 8.3-8.3 0-2.2-.9-4.3-2.5-5.9l-1.2.2zM15.5 18c-1.3 0-2.4-.3-3.5-1l-.2-.1-3 .8.8-2.9-.2-.2c-.7-1.2-1.1-2.5-1.1-3.9 0-4.1 3.3-7.4 7.4-7.4 2 0 3.8.8 5.2 2.2 1.4 1.4 2.1 3.2 2.1 5.2 0 4.1-3.3 7.3-7.4 7.3h-.1zm4-5.3c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.5.7-.7.9-.1.1-.2.1-.4 0-.2-.1-.9-.3-1.7-1-.6-.6-1-1.2-1.2-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.6 0 .9.7 1.8.8 1.9.1.1 1.4 2.1 3.3 3 .5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.4.2-.8.1-.9-.1-.1-.3-.2-.5-.3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.7 18.3H6.3V9.7h2.4v8.6zm-1.2-9.8a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zm10.8 9.8h-2.4v-4.6c0-1 0-2.2-1.3-2.2-1.3 0-1.6 1-1.6 2.1v4.7h-2.4V9.7h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v5.2z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Related posts */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Bài viết liên quan</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <div className="w-1/3 bg-gray-300"></div>
                  <div className="w-2/3 p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {relatedPost.category}
                    </div>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                    >
                      {relatedPost.title}
                    </Link>
                    <p className="mt-2 text-sm text-gray-600">
                      {relatedPost.excerpt.substring(0, 70)}...
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Subscribe */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
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