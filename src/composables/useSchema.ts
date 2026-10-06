import { useHead } from '@vueuse/head'
import type { Project } from '@/data/projects'

const BASE_URL = 'https://penmenghong.hushstackcambodia.site'

// Person schema for Pen Menghong (reused across pages)
const personSchema = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Pen Menghong',
  givenName: 'Menghong',
  familyName: 'Pen',
  url: BASE_URL,
  image: `${BASE_URL}/images/menghong.png`,
  jobTitle: 'Full Stack Web Developer',
  description: 'Frontend Web Developer skilled in modern frameworks such as React and Vue.js, with a strong focus on building responsive, high-performance web applications.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KH',
    addressLocality: 'Phnom Penh'
  },
  sameAs: [
    'https://github.com/Menghong-Git',
    'https://www.linkedin.com/in/pen-menghong-301b71341/',
    'https://www.facebook.com/share/1EEeL9TCFs/',
    'https://www.instagram.com/poki_copy',
    'https://t.me/hongsart'
  ],
  knowsAbout: [
    'Web Development',
    'React',
    'Vue.js',
    'Next.js',
    'Strapi CMS',
    'Frontend Development',
    'Full Stack Development',
    'TypeScript',
    'Responsive Design'
  ]
}

// Website schema
const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Pen Menghong - Full Stack Web Developer',
  description: 'Portfolio of Pen Menghong, a full stack web developer specializing in React, Vue.js, and Next.js development in Cambodia.',
  publisher: {
    '@id': `${BASE_URL}/#person`
  },
  inLanguage: 'en-US'
}

export function useHomeSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      websiteSchema,
      personSchema,
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: 'Pen Menghong | Full Stack Web Developer in Cambodia',
        isPartOf: {
          '@id': `${BASE_URL}/#website`
        },
        about: {
          '@id': `${BASE_URL}/#person`
        }
      }
    ]
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useAboutSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/about#profile`,
    url: `${BASE_URL}/about`,
    name: 'About Pen Menghong | Full Stack Developer Cambodia',
    mainEntity: {
      ...personSchema,
      knowsLanguage: ['Khmer', 'English']
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About',
          item: `${BASE_URL}/about`
        }
      ]
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useProjectsSchema(projects: Project[]) {
  const itemListElements = projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      url: `${BASE_URL}/project/${project.id}`,
      description: project.description,
      image: project.image,
      creator: {
        '@id': `${BASE_URL}/#person`
      },
      keywords: project.tags.join(', '),
      programmingLanguage: project.tags.filter(t => 
        ['React', 'Vue.js', 'Next.js', 'Strapi', 'JavaScript', 'TypeScript', 'Node.js'].includes(t)
      ),
      dateCreated: project.date
    }
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/projects#collection`,
        url: `${BASE_URL}/projects`,
        name: 'Web Development Portfolio - Pen Menghong',
        description: 'Collection of web development projects including React applications, Vue.js dashboards, and full-stack solutions.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: itemListElements
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: BASE_URL
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Projects',
              item: `${BASE_URL}/projects`
            }
          ]
        }
      }
    ]
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useProjectSchema(project: Project, relatedProjects: Project[] = []) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${BASE_URL}/project/${project.id}#creativework`,
        name: project.title,
        url: `${BASE_URL}/project/${project.id}`,
        description: project.description,
        image: project.image,
        creator: {
          '@type': 'Person',
          name: 'Pen Menghong',
          url: BASE_URL
        },
        dateCreated: project.date,
        keywords: project.tags.join(', '),
        programmingLanguage: project.tags.filter(t => 
          ['React', 'Vue.js', 'Next.js', 'Strapi', 'JavaScript', 'TypeScript'].includes(t)
        ),
        genre: 'Web Application',
        author: {
          '@type': 'Person',
          name: project.author,
          url: BASE_URL
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/project/${project.id}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${BASE_URL}/projects`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `${BASE_URL}/project/${project.id}`
          }
        ]
      }
    ]
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useContactSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: 'Contact Pen Menghong | Hire Web Developer Cambodia',
    mainEntity: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Pen Menghong',
      email: 'mailto:penmenghong.vip@gmail.com',
      url: BASE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Freelance Web Development Inquiries',
        availableLanguage: ['English', 'Khmer']
      }
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: `${BASE_URL}/contact`
        }
      ]
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}
