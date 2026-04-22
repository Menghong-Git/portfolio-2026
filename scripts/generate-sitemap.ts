import { projects } from '../src/data/projects'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://penmenghong.hushstackcambodia.site'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
}

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0]
  
  const staticRoutes: SitemapUrl[] = [
    {
      loc: BASE_URL,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${BASE_URL}/about`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: `${BASE_URL}/projects`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${BASE_URL}/contact`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7'
    }
  ]

  const projectRoutes: SitemapUrl[] = projects.map(project => ({
    loc: `${BASE_URL}/project/${project.id}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8'
  }))

  const allUrls = [...staticRoutes, ...projectRoutes]

  const urlEntries = allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

// Generate sitemap
const sitemap = generateSitemap()

// Write to public directory
const publicDir = path.resolve(__dirname, '..', 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(sitemapPath, sitemap)

console.log(`✅ Sitemap generated at: ${sitemapPath}`)
console.log(`📍 Total URLs: ${projects.length + 4} (${projects.length} projects + 4 static pages)`)
