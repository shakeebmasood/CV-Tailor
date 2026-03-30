export interface CareerProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  achievements: string[];
  tools: string[];
  languages: { language: string; level: string }[];
  rolesISuit: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export const careerData: CareerProfile = {
  name: 'Masood Shakeeb',
  title: 'Chief of Staff · Strategy & Operations · Founder\'s Office',
  email: 'shakeeb.masood219@gmail.com',
  phone: '+91-9670407342',
  location: 'New Delhi, India · Open to relocation',
  linkedin: 'linkedin.com/in/masood-shakeeb',
  portfolio: '',
  summary:
    'Dynamic Chief of Staff and strategy & operations leader with 7+ years driving organisational performance, cross-functional execution, and growth for founders and CEOs across high-growth startups and social enterprises. Expert at translating vision into operational reality — building OKR frameworks, financial models, KPI dashboards, and execution systems from scratch. Experienced across CEO advisory, investor relations, market entry, HR, digital transformation, and team scaling. B.Tech Engineering + MBA from QS Asia Top 20. Multilingual: English, Hindi, Urdu.',

  skills: [
    {
      category: 'Strategy & Leadership',
      skills: [
        'Strategic Planning & Execution',
        'CEO & Founder Advisory',
        'Cross-functional Leadership',
        'Stakeholder Management',
        'Board & Investor Relations',
        'Market Entry & Ventures',
      ],
    },
    {
      category: 'Operations & Frameworks',
      skills: [
        'OKR & KPI Frameworks',
        'Financial Modelling & Analysis',
        'Digital Transformation',
        'HR Strategy & People Ops',
        'Supply Chain Operations',
        'Operating Cadences & Reporting',
      ],
    },
    {
      category: 'Growth & Commercial',
      skills: [
        'GTM Strategy',
        'Revenue Operations',
        'Primary Market Research',
        'Venture Building (0→1)',
        'Investor Decks & Board Materials',
        'Budget & P&L Management',
      ],
    },
    {
      category: 'People & Culture',
      skills: [
        'Team Scaling & Hiring',
        'Performance Management Systems',
        'Wage Structures & Compliance',
        'Social Security Integration',
        'Mentoring & Coaching',
        'Remote & Distributed Teams',
      ],
    },
    {
      category: 'Technical & Engineering',
      skills: [
        'Project Management (Infrastructure)',
        'Solar Energy Systems',
        'Multidisciplinary Team Management',
        'Technical Reporting',
        'Contractor & Vendor Management',
        'Capital-Intensive Project Delivery',
      ],
    },
  ],

  tools: ['Excel', 'Power BI', 'Tableau', 'Notion', 'Asana', 'Slack', 'STATA', 'Canva'],

  languages: [
    { language: 'English', level: 'Professional Fluency' },
    { language: 'Hindi', level: 'Native' },
    { language: 'Urdu', level: 'Native' },
  ],

  rolesISuit: [
    'Chief of Staff',
    'Founder\'s Associate',
    'VP / Head of Strategy & Ops',
    'Growth StratOps',
    'CEO Office / Exec Support',
  ],

  experience: [
    {
      company: 'Tiny Miracles (B Corp)',
      role: 'Chief of Staff',
      startDate: 'Mar 2024',
      endDate: 'Oct 2025',
      location: 'Mumbai',
      highlights: [
        'Co-managed a ~€11M revenue enterprise alongside the Netherlands-based CEO — owned strategic priorities, cross-functional execution, board and investor communications, and OKR governance.',
        'Launched two new ventures (Tiny Cane Collective, Bombay Plastic) from concept to revenue — Bombay Plastic reached $100K in 6 months through primary market research, financial modelling, and operational build.',
        'Built HR frameworks covering 350+ workers: wage structures, social security integration, performance systems, and compliance — all designed from scratch in a resource-constrained environment.',
        'Led digital transformation of supply chain operations — achieved 20% cost reduction; managed NGO, corporate, and government stakeholder relationships across a 600+ network.',
      ],
      tags: [
        'chief of staff', 'ceo advisory', 'strategy', 'operations', 'cross-functional',
        'okr', 'board', 'investor relations', 'investor', 'venture building', 'venture',
        'market research', 'financial modelling', 'financial model', 'hr', 'human resources',
        'people ops', 'compliance', 'digital transformation', 'supply chain', 'stakeholder',
        'stakeholder management', 'b corp', 'social enterprise', 'social impact', 'impact',
        'ngo', 'revenue', 'startup', 'execution', 'governance', 'performance management',
        'founder', 'cost reduction', 'kpi', 'reporting', 'wage', 'remote',
        'international', 'netherlands', 'cross-border',
      ],
    },
    {
      company: 'Altum Staffing & Marketing Solutions',
      role: 'Chief of Staff',
      startDate: 'Jan 2020',
      endDate: 'Mar 2024',
      location: 'Gurugram',
      highlights: [
        'Launched Fast Connect, a digital recruitment platform scaled to 20M INR/month — owned GTM strategy, financial modelling, KPI dashboards, and cross-functional execution across India, Netherlands, and UK.',
        'Served as strategic integrator between the CEO, UK Managing Director, and India Country Head — prepared investor decks, board materials, and executive communications across time zones.',
        'Designed and implemented OKR frameworks, operating cadences, and reporting infrastructure that removed the founder from day-to-day execution while maintaining full strategic visibility.',
      ],
      tags: [
        'chief of staff', 'ceo advisory', 'strategy', 'operations', 'cross-functional',
        'gtm', 'go-to-market', 'financial modelling', 'financial model', 'kpi', 'dashboard',
        'recruitment', 'staffing', 'hr', 'platform', 'digital', 'scaling', 'scale',
        'investor', 'investor relations', 'board', 'executive communications',
        'okr', 'reporting', 'cadence', 'founder', 'startup', 'execution',
        'international', 'uk', 'netherlands', 'india', 'cross-border', 'remote',
        'marketing', 'growth', 'revenue', 'product', 'launch', 'venture',
      ],
    },
    {
      company: 'Larsen & Toubro',
      role: 'Senior Engineer',
      startDate: 'Aug 2016',
      endDate: 'Jul 2018',
      location: 'Mumbai',
      highlights: [
        'Delivered 800M INR solar energy infrastructure projects — managed multidisciplinary teams, contractor relationships, and technical reporting in a complex, capital-intensive environment.',
      ],
      tags: [
        'engineering', 'engineer', 'infrastructure', 'project management', 'solar',
        'energy', 'renewable', 'construction', 'contractor', 'vendor management',
        'technical', 'reporting', 'team management', 'capital', 'l&t', 'manufacturing',
        'operations', 'delivery', 'execution', 'multidisciplinary',
      ],
    },
  ],

  education: [
    {
      institution: 'Asian Institute of Management',
      degree: 'MBA',
      year: '2020',
      details: 'QS Asia Top 20 · Established by Harvard · Dean\'s List',
    },
    {
      institution: 'Aligarh Muslim University',
      degree: 'B.Tech Electrical Engineering',
      year: '2016',
      details: 'NIRF Top 10',
    },
  ],

  certifications: [],

  achievements: [
    '€11M Enterprise revenue co-managed as Chief of Staff',
    '$100K venture (Bombay Plastic) launched from concept to revenue in 6 months',
    '800M INR solar infrastructure projects delivered at L&T',
    '20M INR/month digital recruitment platform scaled (Fast Connect)',
    '20% supply chain cost reduction through digital transformation',
    'Built HR frameworks for 350+ workers from scratch',
    'Managed stakeholder network of 600+ across NGO, corporate, and government',
  ],
};
