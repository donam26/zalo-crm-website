import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../data/blog-posts';
import { FaCalendarAlt, FaClock, FaSearch, FaFilter } from 'react-icons/fa';

export const metadata = {
  title: 'Blog - Kiến thức quản lý khách hàng với Zalo CRM',
  description: 'Khám phá bài viết, hướng dẫn và case studies về quản lý khách hàng hiệu quả với Zalo CRM.',
  keywords: ['blog Zalo CRM', 'hướng dẫn CRM', 'quản lý khách hàng', 'marketing Zalo', 'tự động hóa'],
  openGraph: {
    title: 'Blog - Kiến thức quản lý khách hàng với Zalo CRM',
    description: 'Khám phá bài viết, hướng dẫn và case studies về quản lý khách hàng hiệu quả với Zalo CRM.',
    url: 'https://zalo-crm.vn/blog',
    type: 'website',
    images: [
      {
        url: '/images/blog/blog-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Zalo CRM Blog',
      },
    ],
  }
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map(post => post.category))];

  // Schema.org cho trang blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Blog - Kiến thức quản lý khách hàng với Zalo CRM",
    "description": "Khám phá bài viết, hướng dẫn và case studies về quản lý khách hàng hiệu quả với Zalo CRM.",
    "url": "https://zalo-crm.vn/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Zalo CRM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zalo-crm.vn/logo.png"
      }
    },
    "blogPost": allPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://zalo-crm.vn/blog/${post.slug}`,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="py-12 bg-gray-50">
        {/* Hero/Banner */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 mb-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500 filter blur-3xl"></div>
            <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-blue-600 filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Blog Zalo CRM</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Khám phá bài viết, hướng dẫn và case studies về quản lý khách hàng hiệu quả với Zalo CRM
              </p>
              
              {/* Search bar */}
              <div className="max-w-2xl mx-auto">
                <div className="flex bg-white rounded-lg shadow-md overflow-hidden p-1">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
                    aria-label="Tìm kiếm bài viết"
                  />
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
                    aria-label="Tìm kiếm"
                  >
                    <FaSearch className="mr-2" />
                    <span>Tìm kiếm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Tất cả
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  {category}
                </button>
              ))}
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center">
                <FaFilter className="mr-2" />
                Lọc thêm
              </button>
            </div>
          </section>
          
          {/* Featured Post */}
          {allPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-yellow-400 w-6 h-6 rounded-full mr-2"></span> 
                Bài viết nổi bật
              </h2>
              
              <article className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  {allPosts[0].featuredImage ? (
                    <Image
                      src={allPosts[0].featuredImage}
                      alt={allPosts[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100"></div>
                  )}
                </div>
                
                <div className="md:w-1/2 p-8">
                  <Link 
                    href={`/blog/${allPosts[0].slug}`} 
                    className="inline-block bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
                  >
                    {allPosts[0].category}
                  </Link>
                  
                  <Link href={`/blog/${allPosts[0].slug}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition duration-300">
                      {allPosts[0].title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {allPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full overflow-hidden relative">
                        {allPosts[0].author.avatar ? (
                          <Image
                            src={allPosts[0].author.avatar}
                            alt={allPosts[0].author.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                            {allPosts[0].author.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{allPosts[0].author.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="mr-1" size={12} />
                          <time dateTime={allPosts[0].date}>{allPosts[0].date}</time>
                          <span className="mx-2">•</span>
                          <FaClock className="mr-1" size={12} />
                          <span>{allPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${allPosts[0].slug}`} 
                      className="text-blue-600 font-bold hover:text-blue-800 flex items-center"
                    >
                      Đọc tiếp
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </section>
          )}
          
          {/* All Posts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Bài viết mới nhất</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-48 relative">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200"></div>
                      )}
                      <div className="absolute top-0 right-0 mt-4 mr-4">
                        <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-md uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition duration-300">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span>{post.author.name}</span>
                        <span className="mx-1">•</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="flex items-center text-gray-500">
                        <FaClock className="mr-1" size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          
          {/* Newsletter Subscription */}
          <section className="bg-blue-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Đăng ký nhận bản tin</h3>
            <p className="mb-6 max-w-2xl mx-auto">Nhận các bài viết mới nhất và mẹo sử dụng Zalo CRM hiệu quả trực tiếp vào hộp thư của bạn</p>
            
            <form className="max-w-md mx-auto flex flex-wrap md:flex-nowrap gap-2">
              <div className="w-full md:flex-1">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  aria-label="Email của bạn"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
              >
                Đăng ký
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
} 