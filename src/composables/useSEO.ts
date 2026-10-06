import { useHead } from '@vueuse/head'
import { computed } from 'vue'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  noindex?: boolean
}

const SITE_CONFIG = {
  name: 'Pen Menghong - Full Stack Web Developer',
  baseUrl: 'https://penmenghong.hushstackcambodia.site',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@penmenghong',
  author: 'Pen Menghong'
}

export function useSEO(props: SEOProps) {
  const fullTitle = computed(() => `${props.title} | ${SITE_CONFIG.name}`)
  const canonicalUrl = computed(() => props.url || SITE_CONFIG.baseUrl)
  const ogImage = computed(() => {
    const image = props.image || SITE_CONFIG.defaultImage
    return image.startsWith('http') ? image : `${SITE_CONFIG.baseUrl}${image}`
  })

  useHead({
    title: fullTitle,
    meta: [
      // Basic SEO
      { name: 'description', content: props.description },
      { name: 'author', content: SITE_CONFIG.author },
      { name: 'robots', content: props.noindex ? 'noindex, nofollow' : 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: fullTitle.value },
      { property: 'og:description', content: props.description },
      { property: 'og:type', content: props.type || 'website' },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:site_name', content: SITE_CONFIG.name },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle.value },
      { name: 'twitter:description', content: props.description },
      { name: 'twitter:image', content: ogImage.value },
      { name: 'twitter:creator', content: SITE_CONFIG.twitterHandle },
      
      // Additional
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { charset: 'UTF-8' }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl.value }
    ]
  })
}

// Convenience functions for common page types
export function useHomeSEO() {
  useSEO({
    title: 'Pen Menghong | Full Stack Web Developer in Cambodia',
    description: 'Hire Pen Menghong, a skilled full stack web developer in Cambodia specializing in React, Vue.js, and Next.js. Building responsive, high-performance web applications for startups and enterprises.',
    url: SITE_CONFIG.baseUrl,
    type: 'website'
  })
}

export function useAboutSEO() {
  useSEO({
    title: 'About Pen Menghong | Full Stack Developer Cambodia | Experience & Skills',
    description: 'Learn about Pen Menghong, a full stack developer with expertise in React, Vue.js, and modern web technologies. Based in Cambodia, available for remote work and freelance projects.',
    url: `${SITE_CONFIG.baseUrl}/about`,
    type: 'profile'
  })
}

export function useProjectsSEO() {
  useSEO({
    title: 'Portfolio | Pen Menghong - Full Stack Web Developer Projects & Case Studies',
    description: 'Explore Pen Menghong\'s web development portfolio featuring React, Vue.js, and full-stack projects. Case studies include scholarship platforms, admin dashboards, and business management systems.',
    url: `${SITE_CONFIG.baseUrl}/projects`,
    type: 'website'
  })
}

export function useContactSEO() {
  useSEO({
    title: 'Contact Pen Menghong | Hire Web Developer Cambodia | Freelance Inquiries',
    description: 'Contact Pen Menghong for web development projects, freelance opportunities, or full-time positions. Available for remote work and Cambodia-based collaborations.',
    url: `${SITE_CONFIG.baseUrl}/contact`,
    type: 'website'
  })
}

export function useProjectSEO(project: {
  title: string
  description: string
  image: string
  id: number
}) {
  useSEO({
    title: `${project.title} | Case Study by Pen Menghong`,
    description: project.description,
    url: `${SITE_CONFIG.baseUrl}/project/${project.id}`,
    image: project.image,
    type: 'article'
  })
}
