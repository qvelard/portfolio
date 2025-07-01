export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: 'web-app' | 'mobile' | 'tool' | 'ml';
  github?: string;
  demo?: string;
  blog?: string;
  date: string;
  role: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    slug: 'ecommerce-dashboard',
    description: 'A comprehensive admin dashboard for managing online stores with real-time analytics.',
    longDescription: `
      Built a full-featured e-commerce dashboard that provides store owners with comprehensive insights into their business. 
      The application features real-time sales analytics, inventory management, customer insights, and order processing capabilities.
      
      Key challenges included implementing real-time data synchronization across multiple users, optimizing performance for large datasets, 
      and creating an intuitive interface that works seamlessly across desktop and mobile devices.
      
      The solution leverages React with TypeScript for type safety, Socket.io for real-time updates, and a microservices architecture 
      to ensure scalability and maintainability.
    `,
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    category: 'web-app',
    github: 'https://github.com/alexjohnson/ecommerce-dashboard',
    demo: 'https://ecommerce-dashboard-demo.vercel.app',
    date: '2024',
    role: 'Full-Stack Developer',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management Mobile App',
    slug: 'task-management-app',
    description: 'Cross-platform mobile app for team collaboration and project management.',
    longDescription: `
      Developed a cross-platform mobile application that streamlines team collaboration and project management. 
      The app features intuitive task creation, assignment, and tracking capabilities with offline support.
      
      The challenge was creating a seamless user experience that works offline while maintaining data consistency 
      when connectivity is restored. The app includes push notifications, file attachments, and integration with 
      popular calendar applications.
      
      Built using React Native for cross-platform compatibility, with a robust offline-first architecture using 
      Redux Persist and background sync capabilities.
    `,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    category: 'mobile',
    github: 'https://github.com/alexjohnson/task-management-app',
    demo: 'https://apps.apple.com/app/taskflow',
    date: '2023',
    role: 'Mobile Developer',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Code Assistant',
    slug: 'ai-code-assistant',
    description: 'VS Code extension that provides intelligent code suggestions and refactoring.',
    longDescription: `
      Created a VS Code extension that leverages AI to provide intelligent code suggestions, automated refactoring, 
      and code quality improvements. The extension analyzes code patterns and suggests optimizations in real-time.
      
      The main challenge was integrating with the VS Code API while maintaining performance and providing contextually 
      relevant suggestions. The extension includes features like automatic code formatting, documentation generation, 
      and security vulnerability detection.
      
      Built with TypeScript and integrates with OpenAI's API for code analysis, with careful attention to privacy 
      and security considerations.
    `,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['TypeScript', 'VS Code API', 'OpenAI API', 'Node.js'],
    category: 'tool',
    github: 'https://github.com/alexjohnson/ai-code-assistant',
    demo: 'https://marketplace.visualstudio.com/items?itemName=alexjohnson.ai-code-assistant',
    date: '2024',
    role: 'Extension Developer',
    featured: false,
  },
  {
    id: '4',
    title: 'Image Classification Model',
    slug: 'image-classification-model',
    description: 'Deep learning model for automated product categorization in e-commerce.',
    longDescription: `
      Developed a deep learning model for automated product categorization in e-commerce platforms. 
      The model can classify product images into 100+ categories with 95% accuracy.
      
      The project involved collecting and preprocessing a large dataset of product images, implementing 
      a convolutional neural network architecture, and optimizing the model for production deployment. 
      The solution includes a REST API for real-time image classification.
      
      Key achievements include reducing manual categorization time by 80% and improving search relevance 
      through more accurate product tagging.
    `,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'Docker', 'AWS', 'FastAPI'],
    category: 'ml',
    github: 'https://github.com/alexjohnson/image-classification-model',
    blog: 'https://blog.alexjohnson.dev/image-classification-deep-dive',
    date: '2023',
    role: 'ML Engineer',
    featured: true,
  },
  {
    id: '5',
    title: 'Real-time Chat Platform',
    slug: 'realtime-chat-platform',
    description: 'Scalable chat platform with video calling and screen sharing capabilities.',
    longDescription: `
      Built a scalable real-time chat platform that supports text messaging, video calling, and screen sharing. 
      The platform handles thousands of concurrent users with low latency communication.
      
      Technical challenges included implementing efficient message queuing, handling connection scaling, 
      and ensuring message delivery guarantees. The platform features end-to-end encryption, file sharing, 
      and integration with external services.
      
      The solution uses WebRTC for peer-to-peer communication, Socket.io for real-time messaging, 
      and a microservices architecture for scalability.
    `,
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Redis', 'MongoDB'],
    category: 'web-app',
    github: 'https://github.com/alexjohnson/realtime-chat-platform',
    demo: 'https://chat-platform-demo.vercel.app',
    date: '2023',
    role: 'Full-Stack Developer',
    featured: false,
  },
  {
    id: '6',
    title: 'DevOps Automation Tool',
    slug: 'devops-automation-tool',
    description: 'CLI tool for automating deployment pipelines and infrastructure management.',
    longDescription: `
      Created a comprehensive CLI tool that automates deployment pipelines and infrastructure management. 
      The tool supports multiple cloud providers and can provision resources, deploy applications, 
      and monitor system health.
      
      Key features include infrastructure as code templates, automated testing integration, 
      rollback capabilities, and detailed logging. The tool reduces deployment time from hours to minutes 
      and significantly decreases human error in the deployment process.
      
      Built with Go for performance and cross-platform compatibility, with extensive configuration 
      options and plugin support for extensibility.
    `,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    technologies: ['Go', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
    category: 'tool',
    github: 'https://github.com/alexjohnson/devops-automation-tool',
    date: '2024',
    role: 'DevOps Engineer',
    featured: false,
  },
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-app', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'tool', name: 'Tools' },
  { id: 'ml', name: 'Machine Learning' },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
}