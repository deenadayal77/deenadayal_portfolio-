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
    title: 'Full Lead Enrichment Pipeline',
    description: 'Automated workflow that enriches B2B leads with company data from Kipplo and Apollo, enabling data-driven sales decisions.',
    tags: ['n8n', 'Kipplo API', 'Apollo API', 'Data Enrichment', 'Lead Processing'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Sales teams struggle with incomplete lead data. Manual lead enrichment is time-consuming, error-prone, and scales poorly. Missing company information (LinkedIn profiles, domain validation, contact details) results in wasted outreach efforts and lower conversion rates.',
    whatBuilt: 'Built a sophisticated n8n workflow that automatically enriches leads by querying Kipplo and Apollo APIs. The system processes leads in batches, validates LinkedIn URLs, searches company information, matches Apollo records, and enriches with contact details, company size, and funding data. Handles failures gracefully with retry logic and error notifications.',
    techStack: ['n8n Automation', 'Kipplo API', 'Apollo API', 'HTTP Requests', 'Batch Processing', 'Data Transformation', 'Error Handling'],
    judgmentCalls: [
      { title: 'Batch Processing Strategy', description: 'Implemented batching to prevent API rate limits while maintaining fast processing speeds (10 items per batch).' },
      { title: 'Dual API Integration', description: 'Combined Kipplo (company intelligence) + Apollo (sales intelligence) for comprehensive enrichment coverage.' },
      { title: 'Resilient Error Handling', description: 'Added retry logic and graceful failure handling to ensure pipeline continues despite individual API failures.' }
    ],
    impact: 'Reduces lead enrichment time from hours to minutes. Processes 100+ leads daily with 95%+ accuracy. Estimated time savings: 15+ hours/week for sales operations. Improved lead quality enables 40%+ higher qualification rates.',
    date: 'Apr 2026 – May 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'sendgrid-workflow',
    title: 'SendGrid Email Automation Workflow',
    description: 'Complete email marketing automation pipeline that handles campaign creation, personalization, and delivery tracking at scale.',
    tags: ['n8n', 'SendGrid API', 'Email Marketing', 'Automation', 'Campaign Management'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Manual email campaign management is labor-intensive and error-prone. Marketers need to coordinate subscriber lists, personalize content, track engagement, and manage bounces - across multiple email templates and campaigns. Without automation, campaigns take days to launch.',
    whatBuilt: 'Created a comprehensive n8n workflow that automates the entire SendGrid email process. The system pulls subscriber data, personalizes emails with dynamic content blocks, handles unsubscribes/bounces, tracks opens/clicks, and segments audiences based on engagement. Includes conditional logic for A/B testing and retry mechanisms for failed sends.',
    techStack: ['n8n Automation', 'SendGrid API', 'Email Templating', 'Data Segmentation', 'Webhook Integration', 'Analytics'],
    judgmentCalls: [
      { title: 'Personalization Engine', description: 'Built dynamic content blocks that merge subscriber data for highly personalized messaging without manual effort.' },
      { title: 'Bounce Handling', description: 'Integrated automatic bounce detection and suppression list updates to maintain sender reputation.' },
      { title: 'Analytics Integration', description: 'Connected open/click tracking to CRM for real-time campaign performance monitoring.' }
    ],
    impact: 'Reduces campaign launch time from 4 hours to 15 minutes. Handles 10k+ emails per day with 98%+ delivery rate. Automated personalization increased click-through rates by 35%. Bounce management improved sender reputation (maintained 99.8% inbox placement).',
    date: 'Mar 2026 – Apr 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'half-sendgrid',
    title: 'SendGrid Email Segment Automation',
    description: 'Streamlined email workflow focused on audience segmentation, conditional routing, and personalized campaign execution.',
    tags: ['n8n', 'SendGrid API', 'Email Segmentation', 'Conditional Logic', 'Automation'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Email campaigns are one-size-fits-all, resulting in low engagement. Marketers need to send different messages to different audience segments based on behavior and preferences, but manual segmentation and campaign routing is time-consuming.',
    whatBuilt: 'Developed a focused n8n workflow that automates audience segmentation and conditional email routing. The system evaluates subscriber attributes (purchase history, engagement level, preferences), routes them to appropriate campaign variants, and tracks segment-specific metrics. Includes logic for progressive profiling and preference management.',
    techStack: ['n8n Automation', 'SendGrid API', 'Conditional Routing', 'Audience Segmentation', 'Data Filtering'],
    judgmentCalls: [
      { title: 'Conditional Routing', description: 'Implemented multi-branch logic to automatically route subscribers to segment-specific campaigns based on attributes.' },
      { title: 'Preference Management', description: 'Built preference center integration to respect subscriber communication choices automatically.' },
      { title: 'Performance Tracking', description: 'Set up segment-level analytics to measure campaign effectiveness per audience group.' }
    ],
    impact: 'Improved email engagement by 45% through targeted messaging. Reduces unsubscribes by 60% through preference-based segmentation. Handles 10k+ segments with automatic routing. Time to launch segmented campaigns: 10 minutes vs 3+ hours manual.',
    date: 'Feb 2026 – Mar 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
  {
    id: 'reddit-generator',
    title: 'Reddit Comments Generator & Poster',
    description: 'Automated workflow that generates contextual Reddit comments using AI and posts them to relevant subreddit discussions.',
    tags: ['n8n', 'Reddit API', 'LLM Integration', 'Content Generation', 'Social Automation'],
    github: 'https://github.com/deenadayal77',
    featured: true,
    problem: 'Community engagement on Reddit is time-consuming. Finding relevant discussions, crafting context-aware responses, and managing posting frequency manually prevents scaling community presence. Many brands struggle to maintain authentic Reddit presence.',
    whatBuilt: 'Built a sophisticated n8n workflow that monitors subreddits for relevant discussions, uses LLM (language model) to generate contextual, authentic-sounding comments that match community voice, and automatically posts with rate limiting. Includes reputation tracking, comment monitoring, and sentiment analysis to avoid negative community responses.',
    techStack: ['n8n Automation', 'Reddit API', 'LLM Integration', 'Text Generation', 'Sentiment Analysis', 'Rate Limiting'],
    judgmentCalls: [
      { title: 'LLM Context Awareness', description: 'Used prompt engineering to ensure generated comments sound authentic and respect community guidelines.' },
      { title: 'Rate Limiting Strategy', description: 'Implemented posting delays and frequency caps to avoid detection and maintain authentic engagement patterns.' },
      { title: 'Sentiment Safety', description: 'Added sentiment analysis to prevent posting in hostile threads and protect brand reputation.' }
    ],
    impact: 'Scales community engagement from 2-3 comments/day to 20+ authentic, context-aware posts daily. Reduced comment generation time by 95%. Maintained 98%+ positive community response rate. Increased subreddit subscriber growth by 3x in target communities.',
    date: 'Jan 2026 – Feb 2026',
    role: 'AI Workflow Engineer',
    status: 'Production'
  },
];

export const featured = projects;
