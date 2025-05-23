export default async function sitemap() {
  const baseUrl = 'https://zalo-crm.vn';
  
  // Danh sách các trang tĩnh
  const staticPages = [
    '',
    '/features',
    '/tutorial',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Trong thế giới thực, các bài viết blog sẽ được lấy từ CMS hoặc database
  // Ví dụ cho các bài blog hiện có
  const blogSlugs = [
    'tang-tuong-tac-voi-khach-hang-qua-zalo',
    'cach-quan-ly-du-lieu-khach-hang-hieu-qua',
  ];
  
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
} 