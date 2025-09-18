const SITE = require('./src/config.js').SITE;
const { getAllPosts } = require('./src/utils/blog.ts');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE.author.website || 'https://billjonathanconsultancy.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const blogPosts = getAllPosts();
    return blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'weekly',
      priority: 0.8,
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${SITE.author.website || 'https://billjonathanconsultancy.uk'}/sitemap.xml`,
    ],
  },
};
