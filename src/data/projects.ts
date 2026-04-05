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
    title: 'Modern E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with Vue 3, Tailwind CSS, and Stripe integration. It features a seamless checkout process and real-time inventory management.',
    longDescription: 'This project was designed to handle high-traffic e-commerce operations with a focus on speed and user experience. Leveraging Vue 3\'s powerful reactivity system and Tailwind CSS for rapid prototyping, the platform delivers a buttery-smooth shopping experience. The integration with Stripe ensures secure and reliable payment processing, while the backend provides real-time stock updates across all devices.',
    tags: ['Vue.js', 'Tailwind', 'Stripe'],
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Responsive design for all device types',
      'Secure Stripe payment gateway integration',
      'Real-time inventory management with WebSockets',
      'Optimized image loading and performance SEO',
      'Advanced product filtering and search capabilities'
    ]
  },
  {
    id: 2,
    title: 'AI Image Generator Wrapper',
    description: 'Developed a sleek interface for DALL-E and Midjourney APIs, allowing users to generate and manage AI-created artwork with ease.',
    longDescription: 'As artificial intelligence continues to revolutionize the creative industry, I developed this wrapper to simplify the process of generating high-quality art. The application provides a user-friendly playground where creators can prompt models like DALL-E 3 and receive variations in seconds. It also includes an organized gallery for managing and exporting generated assets in multiple formats.',
    tags: ['AI', 'OpenAI', 'Next.js'],
    date: '10 Feb 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Direct API integration with OpenAI and Midjourney',
      'Prompt history and versioning for creative iteration',
      'Cloud storage for managing generated artwork collections',
      'Fast Image processing and CDN distribution',
      'User authentication and personalized settings'
    ]
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'A secure chat application using Firebase and Socket.io, supporting group chats and file sharing.',
    longDescription: 'Communication is key in any modern organization. This chat application was built to provide a robust, low-latency messaging platform for teams. Using Firebase for authentication and data persistence, and Socket.io for real-time bi-directional communication, the app supports group chats, direct messaging, and seamless file uploads. The interface is optimized for both web and mobile usage.',
    tags: ['Firebase', 'Socket.io', 'Real-time'],
    date: '05 Jan 2024',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Multi-user group conversation support',
      'End-to-end message encryption for security',
      'Drag-and-drop file sharing with progress tracking',
      'Push notifications across multiple platforms',
      'Offline message queuing and synchronization'
    ]
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'A productivity tool with drag-and-drop features and automated notifications to help teams stay on track.',
    longDescription: 'Project management becomes effortless with this custom-built task management tool. Inspired by Trello and JIRA, the app features a flexible Kanban board that allows users to organize their workflow visually. Automated email notifications and dead-line trackers ensure that no task slips through the cracks. Built with performance in mind, the system handles complex data models with ease.',
    tags: ['Productivity', 'Kanban', 'Vue'],
    date: '20 Dec 2023',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Intuitive Drag-and-drop Kanban interface',
      'Integrated team collaboration and commenting',
      'Comprehensive reporting and project analytics',
      'Automated email and in-app alerts',
      'Cloud synchronization for multi-device access'
    ]
  },
  {
    id: 5,
    title: 'Drone Software and Development',
    description: 'Advanced software control system for autonomous drone flight and thermal imagery processing.',
    longDescription: 'This specialized project involved developing flight control algorithms and telemetry monitoring for industrial drones. Using C++ and Python for flight logic, and a Vue-based dashboard for ground control, the system enables autonomous surveys and real-time thermal analysis of structural integrity. It focuses on precision and data accuracy in challenging environments.',
    tags: ['Robotics', 'Python', 'Thermal'],
    date: '06 Apr 2022',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop',
    author: 'Pen Menghong',
    features: [
      'Autonomous flight path generation and obstacle avoidance',
      'Real-time HD video and thermal data streaming',
      'Cloud-based survey data processing and mapping',
      'Precision landing and battery health monitoring',
      'Advanced telemetry dashboard for mission control'
    ]
  }
]
