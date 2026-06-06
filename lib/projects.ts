export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'medlens',
    title: 'MedLens',
    description: 'AI-powered medical report assistant with OCR and Gemini integration.',
    tags: ['FastAPI', 'React', 'Gemini AI', 'Python', 'TypeScript'],
    github: 'https://github.com/deenadayal77/MedLens_frontend_backend_repo',
    featured: true,
  },
  {
    id: 'tripplanner',
    title: 'TripPlanner Website',
    description: 'Full-stack travel planning platform with Django and SQLite.',
    tags: ['Django', 'Python', 'SQLite', 'JavaScript'],
    github: 'https://github.com/deenadayal77/TripPlannerWebsite',
    featured: true,
  },
  {
    id: 'blog',
    title: 'Blog Platform',
    description: 'Modern blogging platform with JWT auth and REST APIs.',
    tags: ['Full Stack', 'REST API', 'Authentication'],
    github: 'https://github.com/deenadayal77/blog_platform',
    featured: true,
  },
  {
    id: 'chatbot',
    title: 'AlienAlgos Chatbot',
    description: 'NLP-powered chatbot with rule-based logic.',
    tags: ['Python', 'NLP', 'JSON', 'AI'],
    github: 'https://github.com/deenadayal77/AlienAlgos-Chatbot-cb',
    featured: true,
  },
  {
    id: 'magic-stream',
    title: 'Magic Stream',
    description: 'Streaming platform UI demonstrating frontend engineering.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    github: 'https://github.com/deenadayal77/Magic-Stream',
    featured: true,
  },
  {
    id: 'suv-prediction',
    title: 'SUV Purchase Prediction',
    description: 'ML project using Linear Regression for prediction.',
    tags: ['Machine Learning', 'Python', 'Data Analysis'],
    github: 'https://github.com/deenadayal77/SUV-Purchase-Prediction',
    featured: true,
  },
];

export const featured = projects.filter((p) => p.featured);
export const other = projects.filter((p) => !p.featured);
