// Portfolio data
export const personalInfo = {
  name: 'Ankit Jha',
  title: 'MERN Stack Developer',
  bio: 'Passionate about coding and building innovative web solutions.',
  location: 'India',
  email: 'ankitjha@example.com',
}

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express.js', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
]

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with MERN stack',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Ankitjha91/ecommerce',
    live: 'https://ecommerce-demo.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: '/images/project2.jpg',
    technologies: ['Next.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/Ankitjha91/taskmanager',
    live: 'https://taskmanager-demo.com',
  },
]

export const experience = [
  {
    id: 1,
    company: 'Tech Company',
    role: 'Full Stack Developer',
    duration: '2022 - Present',
    description: 'Developing scalable web applications using MERN stack',
  },
  {
    id: 2,
    company: 'Startup Inc',
    role: 'Frontend Developer',
    duration: '2021 - 2022',
    description: 'Built responsive user interfaces with React and TypeScript',
  },
]

export const achievementsData = [
  {
    id: 1,
    icon: 'trophy',
    title: 'LeetCode Problem Solver',
    description: 'Solved 200+ algorithmic problems on LeetCode',
    links: [
      { name: 'View Profile', url: 'https://leetcode.com/u/Ankit_jha_2003/' },
    ],
  },
  {
    id: 2,
    icon: 'git-branch',
    title: 'Open Source Contributor',
    description: 'Active contributor to various open source projects',
    links: [
      { name: 'GitHub', url: 'https://github.com/Ankitjha91' },
    ],
  },
  {
    id: 3,
    icon: 'code',
    title: 'Full Stack Certification',
    description: 'Completed comprehensive MERN stack development course',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Project Manager',
    content: 'Ankit delivered exceptional work on our project.',
    avatar: '/images/testimonial1.jpg',
  },
]