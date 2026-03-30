import { careerData, CareerProfile, Experience, SkillCategory } from './career-data';

export interface TailoredCV {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  skills: { category: string; skills: string[] }[];
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    highlights: string[];
  }[];
  education: { institution: string; degree: string; year: string; details?: string }[];
  tools: string[];
  languages: { language: string; level: string }[];
  achievements: string[];
  rolesISuit: string[];
  matchedKeywords: string[];
}

function extractKeywords(jd: string): string[] {
  const text = jd.toLowerCase();

  const keywordPatterns = [
    'chief of staff', 'cos', 'founder', 'founder\'s office', 'founder\'s associate',
    'ceo', 'ceo advisory', 'executive', 'executive support', 'exec',
    'leadership', 'leader', 'lead', 'head of', 'vp', 'vice president', 'director',
    'c-suite', 'c-level', 'senior leadership',
    'strategy', 'strategic', 'strategic planning', 'business strategy',
    'corporate strategy', 'growth strategy', 'stratops',
    'operations', 'ops', 'operating', 'operational', 'operational excellence',
    'business operations', 'strategy & operations', 'strategy and operations',
    'process improvement', 'process optimization', 'workflow',
    'okr', 'okrs', 'kpi', 'kpis', 'metrics', 'dashboards', 'dashboard',
    'reporting', 'frameworks', 'framework', 'cadence', 'governance',
    'financial', 'finance', 'financial modelling', 'financial modeling',
    'financial model', 'budgeting', 'budget', 'p&l', 'forecasting', 'forecast',
    'revenue', 'profitability', 'unit economics',
    'investor', 'investor relations', 'board', 'board materials',
    'fundraising', 'funding', 'pitch deck', 'investor deck', 'due diligence',
    'series a', 'series b', 'vc', 'venture capital', 'pe', 'private equity',
    'gtm', 'go-to-market', 'go to market', 'market entry', 'growth',
    'business development', 'biz dev', 'partnerships', 'partner',
    'sales', 'commercial', 'revenue operations', 'revops',
    'hr', 'human resources', 'people', 'people ops', 'people operations',
    'talent', 'hiring', 'recruiting', 'recruitment', 'staffing',
    'performance management', 'culture', 'team building', 'team scaling',
    'compensation', 'benefits', 'onboarding', 'workforce', 'hrbp',
    'digital', 'digital transformation', 'technology', 'tech', 'platform',
    'product', 'product management', 'automation', 'data', 'analytics',
    'data-driven', 'data driven', 'ai', 'artificial intelligence', 'ml',
    'machine learning',
    'excel', 'power bi', 'tableau', 'notion', 'asana', 'slack', 'stata',
    'canva', 'google sheets', 'airtable', 'monday.com', 'jira', 'confluence',
    'sql', 'powerpoint', 'figma', 'hubspot', 'salesforce', 'crm',
    'project management', 'program management', 'pmo', 'pmp',
    'cross-functional', 'cross functional', 'multidisciplinary',
    'stakeholder', 'stakeholder management', 'vendor', 'vendor management',
    'contractor',
    'startup', 'scale-up', 'scaleup', 'high-growth', 'high growth',
    'social enterprise', 'social impact', 'impact', 'b corp', 'ngo',
    'non-profit', 'nonprofit', 'sustainability', 'esg',
    'renewable', 'energy', 'solar', 'infrastructure', 'construction',
    'engineering', 'manufacturing', 'supply chain', 'logistics',
    'consulting', 'management consulting', 'advisory',
    'agile', 'scrum', 'lean', 'six sigma', 'kanban',
    'international', 'global', 'cross-border', 'remote', 'distributed',
    'india', 'uk', 'europe', 'netherlands', 'middle east', 'asia',
    'apac', 'emea', 'mena',
    'communication', 'presentation', 'storytelling', 'negotiation',
    'problem solving', 'problem-solving', 'critical thinking', 'analytical',
    'execution', 'accountability', 'ownership', 'ambiguity', 'fast-paced',
    'entrepreneurial', 'scrappy', 'resourceful', 'resilient',
    'mba', 'engineering', 'b.tech', 'btech',
    'compliance', 'regulatory', 'legal', 'audit', 'risk',
    'venture', 'venture building', '0 to 1', 'zero to one', '0-1',
    'new business', 'incubation', 'launch',
    'marketing', 'brand', 'branding', 'market research', 'content',
  ];

  const found: string[] = [];
  for (const kw of keywordPatterns) {
    if (text.includes(kw)) {
      found.push(kw);
    }
  }

  return [...new Set(found)];
}

function scoreExperience(exp: Experience, keywords: string[]): number {
  let score = 0;
  for (const kw of keywords) {
    for (const tag of exp.tags) {
      if (tag.includes(kw) || kw.includes(tag)) {
        score++;
      }
    }
  }
  return score;
}

function scoreSkillCategory(cat: SkillCategory, keywords: string[]): number {
  let score = 0;
  for (const kw of keywords) {
    for (const skill of cat.skills) {
      if (skill.toLowerCase().includes(kw) || kw.includes(skill.toLowerCase())) {
        score++;
      }
    }
  }
  return score;
}

function scoreTool(tool: string, keywords: string[]): number {
  const toolLower = tool.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (toolLower.includes(kw) || kw.includes(toolLower)) score++;
  }
  return score;
}

function scoreAchievement(achievement: string, keywords: string[]): number {
  const aLower = achievement.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (aLower.includes(kw)) score += 2;
  }
  if (/[€$₹]|\d+[KMB]|\d+%|\d+\+/.test(achievement)) score += 1;
  return score;
}

function tailorSummary(profile: CareerProfile, keywords: string[]): string {
  const focusAreas: string[] = [];

  const areaMap: Record<string, string[]> = {
    'CEO advisory & founder support': ['chief of staff', 'cos', 'founder', 'ceo', 'ceo advisory', 'executive', 'c-suite', 'c-level'],
    'strategic planning & execution': ['strategy', 'strategic', 'strategic planning', 'business strategy', 'stratops'],
    'business operations & process excellence': ['operations', 'ops', 'operational', 'process improvement', 'workflow', 'operational excellence'],
    'OKR/KPI governance & performance frameworks': ['okr', 'kpi', 'metrics', 'dashboards', 'frameworks', 'governance', 'cadence'],
    'financial modelling & investor relations': ['financial', 'financial modelling', 'investor', 'board', 'fundraising', 'budget', 'p&l'],
    'GTM strategy & venture building': ['gtm', 'go-to-market', 'market entry', 'growth', 'venture', 'venture building', 'launch'],
    'HR strategy & people operations': ['hr', 'people', 'people ops', 'talent', 'hiring', 'recruitment', 'performance management', 'culture'],
    'digital transformation & data-driven decision making': ['digital', 'digital transformation', 'technology', 'platform', 'analytics', 'data-driven', 'automation'],
    'cross-functional & international team leadership': ['cross-functional', 'international', 'global', 'remote', 'distributed', 'leadership', 'team scaling'],
    'stakeholder & vendor management': ['stakeholder', 'vendor', 'contractor', 'partner', 'partnerships'],
  };

  for (const [area, triggers] of Object.entries(areaMap)) {
    if (triggers.some((t) => keywords.includes(t))) {
      focusAreas.push(area);
    }
  }

  const topAreas = focusAreas.slice(0, 3);
  const areaStr =
    topAreas.length > 0
      ? topAreas.join(', ')
      : 'strategy & operations, CEO advisory, and cross-functional execution';

  return `Dynamic Chief of Staff and strategy & operations leader with 7+ years of expertise in ${areaStr}. Proven track record co-managing an €11M enterprise, launching ventures from 0→1 ($100K revenue in 6 months), and scaling digital platforms to 20M INR/month. Adept at building OKR frameworks, financial models, KPI dashboards, and execution systems from scratch. MBA (QS Asia Top 20, Dean's List) + B.Tech Engineering. Experienced across India, UK, Netherlands, and the Philippines. Multilingual: English, Hindi, Urdu.`;
}

function pickHighlights(exp: Experience, keywords: string[], maxHighlights: number): string[] {
  const scored = exp.highlights.map((h) => {
    const hLower = h.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (hLower.includes(kw)) score += 2;
    }
    if (/\d+%|[€$₹][\d.]+|\d+[KMB]\+?|\d+\+/.test(h)) score += 1;
    return { highlight: h, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxHighlights).map((s) => s.highlight);
}

export function tailorCV(jobDescription: string): TailoredCV {
  const keywords = extractKeywords(jobDescription);
  const profile = careerData;

  // Score and sort experiences
  const scoredExperiences = profile.experience.map((exp) => ({
    exp,
    score: scoreExperience(exp, keywords),
  }));
  scoredExperiences.sort((a, b) => b.score - a.score);

  // All 3 roles included to fill the page
  const topExperiences = scoredExperiences.slice(0, 3);

  // More generous highlight budget to fill space
  const totalHighlightBudget = 12;
  const totalScore = topExperiences.reduce((sum, e) => sum + Math.max(e.score, 1), 0);

  const tailoredExperience = topExperiences.map((item) => {
    const proportion = Math.max(item.score, 1) / totalScore;
    // Allow up to all available highlights
    const highlightCount = Math.max(1, Math.min(item.exp.highlights.length, Math.round(proportion * totalHighlightBudget)));
    return {
      company: item.exp.company,
      role: item.exp.role,
      startDate: item.exp.startDate,
      endDate: item.exp.endDate,
      location: item.exp.location,
      highlights: pickHighlights(item.exp, keywords, highlightCount),
    };
  });

  // Re-sort by date (most recent first)
  const dateOrder = ['Mar 2024', 'Jan 2020', 'Aug 2016'];
  tailoredExperience.sort((a, b) => {
    const aIdx = dateOrder.indexOf(a.startDate);
    const bIdx = dateOrder.indexOf(b.startDate);
    return aIdx - bIdx;
  });

  // Score and pick ALL skill categories (show all 5 to fill)
  const scoredSkills = profile.skills.map((cat) => ({
    cat,
    score: scoreSkillCategory(cat, keywords),
  }));
  scoredSkills.sort((a, b) => b.score - a.score);
  const topSkillCategories = scoredSkills.map((s) => {
    const sortedSkills = [...s.cat.skills].sort((a, b) => {
      const aScore = keywords.filter((kw) => a.toLowerCase().includes(kw)).length;
      const bScore = keywords.filter((kw) => b.toLowerCase().includes(kw)).length;
      return bScore - aScore;
    });
    return {
      category: s.cat.category,
      skills: sortedSkills,
    };
  });

  // All tools
  const scoredTools = profile.tools.map((tool) => ({
    tool,
    score: scoreTool(tool, keywords),
  }));
  scoredTools.sort((a, b) => b.score - a.score);
  const topTools = scoredTools.map((t) => t.tool);

  // All achievements
  const scoredAchievements = profile.achievements.map((a) => ({
    achievement: a,
    score: scoreAchievement(a, keywords),
  }));
  scoredAchievements.sort((a, b) => b.score - a.score);
  const topAchievements = scoredAchievements.map((a) => a.achievement);

  // Roles I suit — score and pick best
  const scoredRoles = profile.rolesISuit.map((role) => {
    const rLower = role.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (rLower.includes(kw)) score++;
    }
    return { role, score };
  });
  scoredRoles.sort((a, b) => b.score - a.score);
  const topRoles = scoredRoles.map((r) => r.role);

  const tailoredSummary = tailorSummary(profile, keywords);

  return {
    name: profile.name,
    title: profile.title,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    linkedin: profile.linkedin,
    portfolio: profile.portfolio,
    summary: tailoredSummary,
    skills: topSkillCategories,
    experience: tailoredExperience,
    education: profile.education,
    tools: topTools,
    languages: profile.languages,
    achievements: topAchievements,
    rolesISuit: topRoles,
    matchedKeywords: keywords,
  };
}
