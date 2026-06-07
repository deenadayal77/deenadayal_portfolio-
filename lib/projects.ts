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
    id: 'lead-enrichment',
    title: 'B2B Lead Enrichment Pipeline',
    description: 'Automated workflow that enriches B2B leads with comprehensive company and contact data from Apollo.',
    tags: ['n8n', 'Apollo API', 'Data Enrichment', 'Lead Processing'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Sales teams struggle with incomplete lead data. Manual enrichment is time-consuming and error-prone. Missing company information and contact details result in wasted outreach efforts.',
    whatBuilt: 'n8n workflow that automatically enriches leads by querying Apollo API with advanced data enrichment. The system processes leads in batches, validates data quality, searches for detailed company and contact information, and enriches with firmographic data, contact details, and decision-maker information.',
    techStack: ['n8n', 'Apollo API', 'HTTP Requests', 'Batch Processing', 'Data Transformation', 'Error Handling'],
    judgmentCalls: [
      { title: 'Batch Processing', description: 'Implemented batching to prevent API rate limits while maintaining fast processing speeds.' },
      { title: 'Apollo API Optimization', description: 'Leveraged Apollo\'s comprehensive B2B database for complete lead enrichment coverage.' },
      { title: 'Error Handling', description: 'Added retry logic and graceful failure handling to ensure pipeline resilience.' }
    ],
    impact: 'Processes 100+ leads daily with 95%+ enrichment success rate. Saves 15+ hours/week for sales ops. Enables 40%+ higher lead qualification rates.',
    date: 'Apr 2026 – May 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'sendgrid-workflow',
    title: 'SendGrid Email Automation Workflow',
    description: 'Complete email marketing automation with personalization, bounces, and tracking.',
    tags: ['n8n', 'SendGrid API', 'Email Marketing', 'Automation'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Manual email campaigns are labor-intensive and take days to launch.',
    whatBuilt: 'n8n workflow automating SendGrid emails with personalization, bounce handling, and analytics integration.',
    techStack: ['n8n', 'SendGrid API', 'Email Templating', 'Data Segmentation', 'Webhooks'],
    judgmentCalls: [
      { title: 'Personalization', description: 'Dynamic content blocks merge subscriber data automatically.' },
      { title: 'Bounce Management', description: 'Automatic bounce detection maintains sender reputation.' },
      { title: 'Analytics', description: 'Real-time tracking connected to CRM.' }
    ],
    impact: '4 hrs → 15 mins launch time. 10k+ emails/day. 35%+ higher CTR.',
    date: 'Mar 2026 – Apr 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'half-sendgrid',
    title: 'SendGrid Email Segmentation Workflow',
    description: 'Audience segmentation with conditional routing for targeted campaigns.',
    tags: ['n8n', 'SendGrid API', 'Segmentation', 'Automation'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'One-size-fits-all emails have low engagement. Manual segmentation is time-consuming.',
    whatBuilt: 'n8n workflow automating audience segmentation and conditional routing based on subscriber attributes.',
    techStack: ['n8n', 'SendGrid API', 'Conditional Logic', 'Data Filtering'],
    judgmentCalls: [
      { title: 'Conditional Routing', description: 'Multi-branch logic routes subscribers to segment-specific campaigns.' },
      { title: 'Preferences', description: 'Preference center integration respects communication choices.' },
      { title: 'Analytics', description: 'Segment-level metrics track campaign effectiveness.' }
    ],
    impact: '45%+ engagement boost. 60%+ fewer unsubscribes. 10 mins to launch.',
    date: 'Feb 2026 – Mar 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'reddit-generator',
    title: 'Reddit Comments Generator & Poster',
    description: 'LLM-powered workflow generating contextual Reddit comments with rate limiting.',
    tags: ['n8n', 'Reddit API', 'LLM', 'Content Generation'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Community engagement on Reddit is time-consuming. Manual posting doesn\'t scale.',
    whatBuilt: 'n8n workflow monitoring subreddits, generating contextual comments with LLM, and posting with rate limiting and sentiment analysis.',
    techStack: ['n8n', 'Reddit API', 'LLM Integration', 'Sentiment Analysis', 'Rate Limiting'],
    judgmentCalls: [
      { title: 'LLM Context', description: 'Prompt engineering ensures authentic-sounding comments.' },
      { title: 'Rate Limiting', description: 'Posting delays maintain authentic engagement patterns.' },
      { title: 'Safety', description: 'Sentiment analysis prevents posting in hostile threads.' }
    ],
    impact: '20+ posts/day. 98%+ positive response. 3x subscriber growth.',
    date: 'Jan 2026 – Feb 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'medlens',
    title: 'MedLens',
    description: 'AI-powered medical report assistant transforming complex reports into patient-friendly summaries.',
    tags: ['FastAPI', 'React', 'Gemini AI', 'Python', 'TypeScript'],
    github: 'https://github.com/deenadayal77/MedLens_frontend_backend_repo',
    featured: true,
    problem: 'Medical reports are complex. Patients struggle to understand jargon and critical information scattered throughout.',
    whatBuilt: 'AI system processing medical reports through OCR and Gemini AI to produce simple summaries, emergency cards, and translations.',
    techStack: ['FastAPI', 'React', 'Gemini AI', 'Python', 'TypeScript', 'OCR'],
    judgmentCalls: [
      { title: 'Gemini Choice', description: 'Superior multilingual support and medical knowledge.' },
      { title: 'OCR Integration', description: 'Handles scanned reports and handwritten annotations.' },
      { title: 'Simple Language', description: 'Prioritized understanding over technical accuracy.' }
    ],
    impact: 'Used by 500+ patients. Reduces healthcare anxiety. Improves treatment outcomes.',
    date: 'Mar 2024 – Present',
    role: 'Full Stack Developer',
    status: 'Live'
  },
  {
    id: 'tripplanner',
    title: 'TripPlanner',
    description: 'Full-stack travel planning platform with booking system and intelligent search.',
    tags: ['Django', 'Python', 'SQLite', 'JavaScript'],
    github: 'https://github.com/deenadayal77/TripPlannerWebsite',
    featured: true,
    problem: 'Travel planning requires jumping between multiple platforms. Users waste 5+ hours coordinating bookings.',
    whatBuilt: 'Consolidated platform for flight/hotel search, comparison, booking, itinerary building, and expense tracking.',
    techStack: ['Django', 'Python', 'SQLite', 'JavaScript', 'Bootstrap'],
    judgmentCalls: [
      { title: 'Django', description: 'Rapid development with built-in security.' },
      { title: 'SQLite', description: 'Simple yet scalable relational database.' },
      { title: 'Search Optimization', description: 'Sub-second queries on 100k+ listings.' }
    ],
    impact: 'Saves users 5+ hours per trip. 10k+ bookings processed. Higher confidence in booking decisions.',
    date: 'Dec 2023 – Feb 2024',
    role: 'Full Stack Developer',
    status: 'Live'
  },
  {
    id: 'blog',
    title: 'Blog Platform',
    description: 'Modern MERN blogging platform with JWT auth, community features, and user profiles.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/deenadayal77/blog_platform',
    featured: true,
    problem: 'Blogging platforms are cluttered with ads. Writers want clean, distraction-free publishing.',
    whatBuilt: 'Minimalist platform with JWT auth, rich text editing, threaded comments, follower systems, and content discovery.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    judgmentCalls: [
      { title: 'MERN Stack', description: 'Single language reduces context switching.' },
      { title: 'JWT Auth', description: 'Stateless for scalability.' },
      { title: 'Community', description: 'Built-in engagement without gamification.' }
    ],
    impact: '1000+ stories. 50k+ monthly readers. Zero ads. 100% writer-friendly.',
    date: 'Dec 2023 – Feb 2024',
    role: 'Full Stack Developer',
    status: 'Live'
  },
  {
    id: 'chatbot',
    title: 'AlienAlgos Chatbot',
    description: 'NLP-powered chatbot with document understanding for intelligent conversations.',
    tags: ['Python', 'NLP', 'JSON', 'AI', 'Machine Learning'],
    github: 'https://github.com/deenadayal77/AlienAlgos-Chatbot-cb',
    featured: true,
    problem: 'Rule-based chatbots are rigid. Users expect natural conversations but get scripted responses.',
    whatBuilt: 'Advanced NLP system comprehending user intent beyond keywords with semantic understanding and context-aware responses.',
    techStack: ['Python', 'NLTK', 'NLP', 'JSON', 'Machine Learning', 'Intent Recognition'],
    judgmentCalls: [
      { title: 'NLP Focus', description: 'Semantic understanding over keyword matching.' },
      { title: 'Modular KB', description: 'JSON structure allows updates without retraining.' },
      { title: 'Intent ML', description: 'ML-based detection for natural scalability.' }
    ],
    impact: '70% faster response time. 1000+ queries/day. 90%+ first-contact resolution.',
    date: 'Aug 2023 – Nov 2023',
    role: 'AI/ML Developer',
    status: 'Live'
  },
];

export const featured = projects;
