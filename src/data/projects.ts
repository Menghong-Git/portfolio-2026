export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  date: string
  image: string
  author: string
  features?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Scholarar – Scholarship Matching Platform',
    description: 'A responsive web platform to help students discover and apply for scholarship opportunities. Built with clean, user-friendly frontend interfaces for improved accessibility and user experience.',
    longDescription: 'Developed a comprehensive scholarship platform that connects students with relevant scholarship opportunities. The platform features an optimized website with cross-browser and mobile compatibility. Worked collaboratively on feature development to support student navigation and scholarship search efficiency.',
    tags: ['React', 'Vue.js', 'Responsive Design'],
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Responsive design for desktop and mobile devices',
      'Student-friendly navigation for scholarship search',
      'Cross-browser compatibility',
      'Clean and accessible user interface',
      'Optimized website performance'
    ]
  },
  {
    id: 2,
    title: 'Scholarar Admin Dashboard – Scholarship Management System',
    description: 'A responsive admin dashboard for managing scholarships, applicants, and submitted applications with interactive components and analytics.',
    longDescription: 'Built a comprehensive admin dashboard for scholarship management featuring interactive components to display key metrics such as total scholarships, active scholarships, applicants, and applications. Implemented features for scholarship management, applicant exploration, communication, and profile administration.',
    tags: ['Vue.js', 'Dashboard', 'Analytics'],
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Interactive dashboard with real-time metrics',
      'Scholarship management system',
      'Applicant exploration and communication tools',
      'Analytics and reporting with date filtering',
      'Export functionality for better data tracking',
      'Mobile-friendly layouts'
    ]
  },
  {
    id: 3,
    title: 'Scholarar Backend CMS – Strapi',
    description: 'Developed and managed the backend system using Strapi CMS for scholarship-related content and data management.',
    longDescription: 'Created and maintained a scalable backend structure using Strapi CMS for managing scholarship-related content and data. Built content structures for scholarships, applications, and platform information. Supported frontend integration through API-based data management and dynamic content delivery.',
    tags: ['Strapi', 'CMS', 'Backend', 'API'],
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Strapi CMS for content management',
      'API-based data management',
      'Dynamic content delivery',
      'Content organization for scholarships and applications',
      'Scalable backend architecture'
    ]
  },
  {
    id: 4,
    title: 'HushStack Cambodia Website',
    description: 'A full-stack website to showcase services including web development, mobile apps, and backend systems.',
    longDescription: 'Developed a complete full-stack website for HushStack Cambodia featuring clean UI/UX design to improve client engagement. Integrated contact features and business information for customer interaction, with optimized website performance and fast loading.',
    tags: ['Full-Stack', 'Web Development', 'UI/UX'],
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Clean UI/UX design for client engagement',
      'Contact features and business information integration',
      'Fast loading performance optimization',
      'Full-stack implementation',
      'Responsive design'
    ]
  },
  {
    id: 5,
    title: 'HushStack Portal – Business Management Dashboard',
    description: 'A centralized system for managing customers, orders, and sales performance with real-time statistics.',
    longDescription: 'Created a comprehensive business management dashboard featuring a centralized system for managing customers, orders, and sales performance. Integrated real-time statistics including revenue, daily earnings, and growth tracking. Designed with a clean and modern interface inspired by professional SaaS dashboards.',
    tags: ['Dashboard', 'SaaS', 'Business Management', 'Analytics'],
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Dashboard overview with key metrics',
      'Customer management system',
      'Order tracking functionality',
      'Sales analytics and reporting',
      'Real-time statistics (revenue, earnings, growth)',
      'Professional SaaS-inspired interface',
      'Clear data visualization'
    ]
  }
]
