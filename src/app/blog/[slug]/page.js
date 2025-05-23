import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '../../data/blog-posts';
import { FaCalendarAlt, FaClock, FaUser, FaTags, FaArrowLeft } from 'react-icons/fa';

// Generate metadata cho từng bài viết blog
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.'
    };
  }
  
  const { seo, title, excerpt } = post;
  
  return {
    title: seo?.title || title,
    description: seo?.description || excerpt,
    keywords: seo?.keywords || post.tags,
    openGraph: {
      title: seo?.title || title,
      description: seo?.description || excerpt,
      url: `https://zalo-crm.vn/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: seo?.ogImage || post.featuredImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.title || title,
      description: seo?.description || excerpt,
      images: [seo?.ogImage || post.featuredImage],
    },
  };
}

// Generate các đường dẫn tĩnh
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({
    slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(params.slug);
  
  // Schema.org cho bài viết
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zalo CRM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zalo-crm.vn/logo.png',
      },
    },
    keywords: post.tags.join(', '),
    articleBody: post.content.replace(/<[^>]*>?/gm, ''), // Loại bỏ các thẻ HTML
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zalo-crm.vn/blog/${post.slug}`,
    },
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center text-blue-600 mb-8 hover:underline">
            <FaArrowLeft className="mr-2" />
            <span>Quay lại trang Blog</span>
          </Link>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            {/* Hình ảnh nổi bật */}
            <div className="h-64 bg-gray-300 relative">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                </div>
              )}
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
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center mr-6">
                  <FaCalendarAlt className="mr-2" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Thông tin tác giả */}
              <div className="flex items-center p-4 bg-blue-50 rounded-lg mb-8">
                <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden mr-4">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-blue-200 w-full h-full flex items-center justify-center text-blue-700 font-bold text-xl">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.author.bio}</p>
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
                        <Link 
                          key={index}
                          href={`/blog/tag/${tag}`}
                          className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
          
          {/* Tương tác và chia sẻ */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
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
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=https://zalo-crm.vn/blog/${post.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                aria-label="Chia sẻ lên Facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://zalo-crm.vn/blog/${post.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600"
                aria-label="Chia sẻ lên Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://zalo-crm.vn/blog/${post.slug}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700"
                aria-label="Chia sẻ qua WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M21.4 4.2c-1.6-1.6-3.7-2.5-5.9-2.5-4.6 0-8.4 3.8-8.4 8.4 0 1.5.4 2.9 1.1 4.2L7 19.5l5.2-1.3c1.2.7 2.7 1 4.2 1h.4c4.6 0 8.3-3.7 8.3-8.3 0-2.2-.9-4.3-2.5-5.9l-1.2.2zM15.5 18c-1.3 0-2.4-.3-3.5-1l-.2-.1-3 .8.8-2.9-.2-.2c-.7-1.2-1.1-2.5-1.1-3.9 0-4.1 3.3-7.4 7.4-7.4 2 0 3.8.8 5.2 2.2 1.4 1.4 2.1 3.2 2.1 5.2 0 4.1-3.3 7.3-7.4 7.3h-.1zm4-5.3c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.5.7-.7.9-.1.1-.2.1-.4 0-.2-.1-.9-.3-1.7-1-.6-.6-1-1.2-1.2-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3.1-.5.3-.2.2-.7.7-.7 1.6 0 .9.7 1.8.8 1.9.1.1 1.4 2.1 3.3 3 .5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.4.2-.8.1-.9-.1-.1-.3-.2-.5-.3z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://zalo-crm.vn/blog/${post.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                aria-label="Chia sẻ lên LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.7 18.3H6.3V9.7h2.4v8.6zm-1.2-9.8a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zm10.8 9.8h-2.4v-4.6c0-1 0-2.2-1.3-2.2-1.3 0-1.6 1-1.6 2.1v4.7h-2.4V9.7h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v5.2z" />
                </svg>
              </a>
            </div>
          </section>
          
          {/* Bài viết liên quan */}
          {relatedPosts.length > 0 && (
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Bài viết liên quan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-gray-300 relative">
                      {relatedPost.featuredImage && (
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 384px"
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                        <div className="p-4">
                          <span className="text-xs inline-block px-2 py-1 bg-blue-600 text-white rounded-full mb-2">
                            {relatedPost.category}
                          </span>
                          <h4 className="text-white font-medium">{relatedPost.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* CTA */}
          <section className="bg-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Bạn muốn tăng tương tác với khách hàng?</h3>
            <p className="mb-6">Đăng ký dùng thử Zalo CRM miễn phí ngay hôm nay và trải nghiệm sự khác biệt.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition"
            >
              Dùng thử miễn phí
            </Link>
          </section>
        </div>
      </div>
    </>
  );
} 