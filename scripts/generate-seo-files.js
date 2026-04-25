import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const publicRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/specified-commercial-transaction-act', priority: 0.5, changefreq: 'yearly' },
  { path: '/company', priority: 0.6, changefreq: 'monthly' }
];

const SITE_DOMAIN = process.env.VITE_SITE_DOMAIN || 'http://localhost:5173';
const SITE_NAME = process.env.VITE_SITE_NAME || 'AI株式診断サービス';
const SITE_DESCRIPTION = process.env.VITE_SITE_DESCRIPTION || '完全無料・登録不要・クレジットカード不要のAI株式診断サービス。AIが株式市場を分析し、詳細なレポートを数秒で提供。';

const publicDir = path.resolve(__dirname, '../public');

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const urls = publicRoutes.map(route => {
    return `  <url>
    <loc>${SITE_DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✓ Generated sitemap.xml for ${SITE_DOMAIN}`);
}

function generateRobotsTxt() {
  const robots = `# Robots.txt for ${SITE_DOMAIN}
# ${SITE_NAME}

User-agent: *
Allow: /
Disallow: /adsadmin/
Disallow: /api/

# Crawl delay (optional)
Crawl-delay: 1

# Sitemap location
Sitemap: ${SITE_DOMAIN}/sitemap.xml

# Google bots
User-agent: Googlebot
Allow: /
Disallow: /adsadmin/
Disallow: /api/

User-agent: Googlebot-Image
Allow: /

# Bing bot
User-agent: Bingbot
Allow: /
Disallow: /adsadmin/
Disallow: /api/
`;

  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robots, 'utf8');
  console.log(`✓ Generated robots.txt for ${SITE_DOMAIN}`);
}

function generateManifest() {
  const manifest = {
    name: SITE_NAME,
    short_name: SITE_NAME.substring(0, 12),
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    icons: [
      {
        src: '/vite.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };

  const manifestPath = path.join(publicDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`✓ Generated manifest.json for ${SITE_NAME}`);
}

try {
  console.log('\n🚀 Generating SEO files...\n');
  console.log(`Domain: ${SITE_DOMAIN}`);
  console.log(`Site Name: ${SITE_NAME}\n`);

  generateSitemap();
  generateRobotsTxt();
  generateManifest();

  console.log('\n✅ All SEO files generated successfully!\n');
} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
}
