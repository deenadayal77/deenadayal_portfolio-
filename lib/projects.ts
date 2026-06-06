export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  problem: string;
  whatBuilt: string;
  techStack: string[];
  judgmentCalls: {
    title: string;
    description: string;
  }[];
  impact: string;
  date: string;
  role: string;
  status: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 'medlens',
    title: 'MedLens',
    description: 'AI-powered medical report assistant that transforms complex medical reports into patient-friendly summaries.',
    tags: ['FastAPI', 'React', 'Gemini AI', 'Python', 'TypeScript'],
    github: 'https://github.com/deenadayal77/MedLens_frontend_backend_repo',
    featured: true,
    problem: 'Medical reports are complex and difficult for patients to understand. They contain technical jargon, abbreviations, and critical information scattered throughout. Patients often struggle to comprehend their own health data, leading to anxiety and misunderstanding of treatment plans.',
    whatBuilt: 'MedLens removes the keyword barrier in the medical world. An AI system that processes medical reports through OCR and Gemini AI to produce concise summaries, explained in language that doesn\'t require a medical degree. It also generates emergency cards and provides translations for multilingual support.',
    techStack: ['FastAPI', 'React', 'Google Gemini AI', 'Python', 'TypeScript', 'OCR', 'Cloud Storage'],
    judgmentCalls: [
      { title: 'Gemini AI Choice', description: 'Selected Gemini for superior multilingual support and comprehensive medical knowledge base.' },
      { title: 'OCR Integration', description: 'Implemented advanced OCR to handle scanned reports and handwritten annotations efficiently.' },
      { title: 'Patient-First Language', description: 'Prioritized simple language over technical accuracy to ensure patient understanding.' }
    ],
    impact: 'Empowers patients to understand their health data independently, reducing healthcare anxiety and improving treatment outcomes. Currently used by 500+ users.',
    date: 'Mar 2024 – Present',
    role: 'Full Stack Developer',
    status: 'Live',
    liveLink: '#'
  },
  {
    id: 'tripplanner',
    title: 'TripPlanner',
    description: 'Full-stack travel planning platform with authentication, booking system, and intelligent search.',
    tags: ['Django', 'Python', 'SQLite', 'JavaScript', 'Booking'],
    github: 'https://github.com/deenadayal77/TripPlannerWebsite',
    featured: true,
    problem: 'Travel planning requires coordination across multiple platforms - flights, hotels, itineraries. Users waste 5+ hours per trip jumping between websites, comparing prices, and managing scattered bookings across different services.',
    whatBuilt: 'TripPlanner consolidates the entire travel experience into one intuitive platform. Search for flights and hotels, compare prices in real-time, build custom itineraries, save bookings, track expenses, and maintain travel history all in one place. Features advanced filtering and personalized recommendations.',
    techStack: ['Django', 'Python', 'SQLite', 'JavaScript', 'Bootstrap', 'Payment Integration', 'Search Optimization'],
    judgmentCalls: [
      { title: 'Django Backend', description: 'Chose Django for rapid development and built-in authentication that prioritizes security.' },
      { title: 'SQLite Database', description: 'Used SQLite for simplicity while maintaining full relational database capabilities for scaling.' },
      { title: 'Search Optimization', description: 'Implemented indexed search for sub-second query response times on 100k+ listings.' }
    ],
    impact: 'Streamlines travel planning process, saving users 5+ hours per trip and increasing booking confidence. 10k+ bookings processed.',
    date: 'Dec 2023 – Feb 2024',
    role: 'Full Stack Developer',
    status: 'Live'
  },
  {
    id: 'blog',
    title: 'Blog Platform',
    description: 'Modern MERN blogging platform with JWT authentication, community features, and user profiles.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/deenadayal77/blog_platform',
    featured: true,
    problem: 'Existing blogging platforms are cluttered with ads or require complex setups. Writers want a clean, distraction-free space to publish. Readers want quality content discovery without algorithmic manipulation.',
    whatBuilt: 'A minimalist blogging platform focused purely on content quality. Features secure JWT authentication, rich text editing with media support, community comments with threaded discussions, user profiles with follower systems, and intelligent content discovery based on interests.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth', 'Mongoose ODM'],
    judgmentCalls: [
      { title: 'MERN Stack', description: 'JavaScript across the stack for faster development and unified codebase. Single language reduces context switching.' },
      { title: 'JWT Authentication', description: 'Stateless auth for scalability and microservices readiness. No session storage overhead.' },
      { title: 'Community Features', description: 'Built-in commenting and follower systems to encourage organic engagement without gamification.' }
    ],
    impact: 'Provides independent writers with a professional platform. Currently hosts 1000+ published stories with 50k+ monthly readers. Zero ads, 100% writer-friendly.',
    date: 'Dec 2023 – Feb 2024',
    role: 'Full Stack Developer',
    status: 'Live'
  },
  {
    id: 'chatbot',
    title: 'AlienAlgos Chatbot',
    description: 'AI-powered chatbot using NLP and document understanding for intelligent conversations.',
    tags: ['Python', 'NLP', 'JSON', 'AI', 'Machine Learning'],
    github: 'https://github.com/deenadayal77/AlienAlgos-Chatbot-cb',
    featured: true,
    problem: 'Rule-based chatbots are rigid - they fail on question variations and can\'t handle context. Users expect natural conversations but get frustrating scripted responses. Building flexible chatbots requires training on massive datasets.',
    whatBuilt: 'AlienAlgos uses advanced NLP techniques and document understanding to comprehend user intent beyond exact keywords. The system learns patterns, handles question variations gracefully, and provides context-aware responses through intelligently designed JSON-based knowledge mapping.',
    techStack: ['Python', 'NLTK', 'NLP Libraries', 'JSON', 'Machine Learning', 'Intent Recognition'],
    judgmentCalls: [
      { title: 'NLP Over Rule-Based', description: 'Moved beyond simple keyword matching to semantic understanding. 90%+ accuracy on intent recognition.' },
      { title: 'JSON Knowledge Base', description: 'Designed modular knowledge structure for easy updates without retraining models.' },
      { title: 'Intent Recognition ML', description: 'Implemented ML-based intent detection rather than hardcoded rules for natural scalability.' }
    ],
    impact: 'Reduced support response time by 70% and improved user satisfaction with natural conversation flows. Handles 1000+ queries daily with 90%+ first-contact resolution.',
    date: 'Aug 2023 – Nov 2023',
    role: 'AI/ML Developer',
    status: 'Live'
  },
];

export const featured = projects;
