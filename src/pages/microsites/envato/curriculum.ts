export interface CurriculumCourse {
  id: string;
  course: string;
  topics: string[];
  appliedAtEnvato: string[];
  showcaseLinks: Array<{
    title: string;
    path: string;
    anchor?: string;
  }>;
  badges: string[];
  copyableOutline: string;
}

export interface CurriculumTrack {
  id: string;
  track: string;
  courses: CurriculumCourse[];
}

export const curriculumData: CurriculumTrack[] = [
  {
    id: "foundations",
    track: "Foundations",
    courses: [
      {
        id: "pm-101",
        course: "PM 101: Product Management Foundations",
        topics: [
          "PRDs modern guide",
          "Product Review Bible", 
          "First Launch Guide",
          "MVP Guide",
          "Scaling teams 0→100",
          "Daily PM habits",
          "PM portfolio building",
          "Becoming a PM with no prior experience"
        ],
        appliedAtEnvato: [
          "PRD templates for creator tools and enterprise features",
          "Launch playbooks for AI-powered asset recommendations",
          "MVP strategy for agentic creative workflows",
          "Team scaling from core platform to vertical expansion"
        ],
        showcaseLinks: [
          { title: "Quick view paths", path: "/microsites/envato", anchor: "quick" },
          { title: "Strategic planning", path: "/microsites/envato/orchestrator", anchor: "strategy" }
        ],
        badges: ["PRDs", "MVP", "Scaling"],
        copyableOutline: "PM 101 Applied: 1) Modern PRD frameworks for AI features 2) Product review processes for creative tools 3) Launch guides adapted for creator ecosystems 4) MVP validation in creative markets"
      },
      {
        id: "ai-pm-101",
        course: "AI PM 101: AI PM Foundations", 
        topics: [
          "AI overview for PMs/builders",
          "Becoming an AI PM (2025)",
          "Path with no experience",
          "Fixing common AI product mistakes"
        ],
        appliedAtEnvato: [
          "AI model selection for content generation vs. search vs. recommendations",
          "Ethical AI framework for creator content and attribution",
          "AI performance metrics aligned with creative quality standards",
          "Common AI pitfalls avoided: hallucination in asset tagging, bias in recommendations"
        ],
        showcaseLinks: [
          { title: "AI Strategy", path: "/microsites/envato/orchestrator", anchor: "skills" },
          { title: "Technical depth", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["AI Strategy", "Model Selection", "Ethics"],
        copyableOutline: "AI PM 101 Applied: 1) Model architecture decisions for creative workflows 2) Ethical AI in creator economy 3) Performance measurement beyond accuracy 4) Avoiding common AI product traps"
      }
    ]
  },
  {
    id: "strategy", 
    track: "Strategy",
    courses: [
      {
        id: "pm-201",
        course: "PM 201: Advanced Product Strategy",
        topics: [
          "Writing product strategy (1 day / 1 week / 1 month)",
          "10X product vision",
          "User info gathering",
          "Infrastructure & architecture", 
          "Metrics",
          "Process changes"
        ],
        appliedAtEnvato: [
          "Multi-horizon strategy: Core creator tools, Enterprise expansion, New verticals",
          "10X vision: From asset marketplace to agentic creative ecosystem",
          "Creator research methodology and enterprise customer development",
          "Platform architecture for AI-first creative workflows"
        ],
        showcaseLinks: [
          { title: "Growth paths", path: "/microsites/envato", anchor: "growth" },
          { title: "Strategic vision", path: "/microsites/envato/orchestrator", anchor: "lens" }
        ],
        badges: ["Strategy", "Vision", "Research"],
        copyableOutline: "Advanced Strategy Applied: 1) Multi-horizon roadmapping for platform evolution 2) 10X vision development for creative AI 3) User research across creator and enterprise segments 4) Platform architecture decisions"
      },
      {
        id: "ai-301-strategy",
        course: "AI 301: AI Strategy & Implementation",
        topics: [
          "Guide to AI product strategy",
          "AI PM's Playbook (10x impact in 2025)",
          "Complete AI product discovery",
          "Implementation playbook",
          "Advanced strategy",
          "Prompt engineering (RAG, fine-tuning)"
        ],
        appliedAtEnvato: [
          "AI-first product strategy for creative tools and enterprise workflows",
          "RAG implementation for semantic asset search and recommendations",
          "Fine-tuning strategies for brand consistency and quality control",
          "Advanced AI product discovery across creator needs and enterprise requirements"
        ],
        showcaseLinks: [
          { title: "AI implementation", path: "/microsites/envato/orchestrator", anchor: "qa" },
          { title: "Technical architecture", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["AI Architecture", "RAG", "Implementation"],
        copyableOutline: "AI Strategy Applied: 1) AI-first product strategy development 2) RAG and fine-tuning for creative applications 3) AI product discovery methodology 4) Implementation playbooks for creative AI"
      }
    ]
  },
  {
    id: "skills-tools",
    track: "Skills & Tools", 
    courses: [
      {
        id: "ai-skills-201",
        course: "AI 201: Key AI Skills",
        topics: [
          "Using ChatGPT for PMs",
          "ChatPRD for PRDs",
          "Prototyping tools",
          "Top 5 tutorials",
          "Build AI PM in 58 mins",
          "Build AI Agent in 73 mins (zero code)",
          "Build AI Employee in 62 mins",
          "Vibe coding in 72 mins"
        ],
        appliedAtEnvato: [
          "ChatGPT for competitive analysis and user research synthesis",
          "AI-assisted PRD generation for complex creative workflows",
          "Rapid prototyping of agentic creative tools using no-code platforms",
          "AI agent development for content moderation and quality scoring"
        ],
        showcaseLinks: [
          { title: "Skill demonstration", path: "/microsites/envato/orchestrator", anchor: "skills" },
          { title: "AI applications", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["Prototyping", "AI Tools", "No-code"],
        copyableOutline: "AI Skills Applied: 1) ChatGPT integration in PM workflows 2) AI-assisted documentation and PRDs 3) Rapid prototyping for creative AI tools 4) Agent development for creative workflows"
      },
      {
        id: "ai-tools-401", 
        course: "AI 401: AI Tools & Building",
        topics: [
          "Cross-company case tutorials",
          "PRD examples", 
          "Prototyping stories",
          "Advanced tool usage"
        ],
        appliedAtEnvato: [
          "Case study analysis: Adobe Creative Cloud, Canva, Figma AI features",
          "PRD examples for agentic creative workflows and enterprise AI tools",
          "Prototyping stories for AI-powered asset generation and recommendation systems",
          "Advanced AI tool integration for creative collaboration platforms"
        ],
        showcaseLinks: [
          { title: "Case studies", path: "/microsites/envato/orchestrator", anchor: "teams" },
          { title: "Prototyping examples", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["Case Studies", "Advanced Tools", "Cross-platform"],
        copyableOutline: "Advanced AI Tools: 1) Cross-platform AI feature analysis 2) Complex PRD development for AI systems 3) Advanced prototyping for creative AI 4) Tool integration strategies"
      }
    ]
  },
  {
    id: "advanced",
    track: "Advanced Topics",
    courses: [
      {
        id: "ai-advanced-402",
        course: "AI 402: Advanced AI Topics",
        topics: [
          "Prompt Engineering 2025 best practices",
          "Context engineering guide", 
          "AI Agents guide for PMs",
          "AI Evals",
          "Crash course (prototyping → observability → evals)",
          "Model Context Protocol (MCP)",
          "v0 tool deep dive"
        ],
        appliedAtEnvato: [
          "Advanced prompt engineering for creative AI systems and brand compliance",
          "Context engineering for personalized creator recommendations and enterprise workflows",
          "AI agent architecture for autonomous creative tasks and quality control",
          "Evaluation frameworks for creative AI output quality and brand consistency"
        ],
        showcaseLinks: [
          { title: "Advanced implementation", path: "/microsites/envato/orchestrator", anchor: "qa" },
          { title: "Technical depth", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["Prompt Engineering", "AI Agents", "Evaluation"],
        copyableOutline: "Advanced AI Applied: 1) Production prompt engineering for creative AI 2) Context engineering for personalization 3) AI agent architecture for creative workflows 4) Evaluation and observability systems"
      },
      {
        id: "analytics-301",
        course: "Analytics Department (ANL 201 + ANL 301)",
        topics: [
          "Analytics fundamentals",
          "A/B testing", 
          "Advanced techniques for PMs",
          "Customer interviews",
          "Continuous discovery"
        ],
        appliedAtEnvato: [
          "Creator engagement analytics and AI feature adoption metrics",
          "A/B testing framework for AI-powered recommendations and search",
          "Advanced analytics for enterprise customer success and creative workflow optimization",
          "Continuous discovery methodology for creator needs and AI capability gaps"
        ],
        showcaseLinks: [
          { title: "Metrics strategy", path: "/microsites/envato/orchestrator", anchor: "proof" },
          { title: "Analytics implementation", path: "/microsites/envato", anchor: "metrics" }
        ],
        badges: ["Analytics", "A/B Testing", "Discovery"],
        copyableOutline: "Analytics Applied: 1) Creative workflow analytics and AI adoption metrics 2) A/B testing for AI-powered features 3) Advanced analytics for enterprise and creator success 4) Continuous discovery in creative AI"
      }
    ]
  },
  {
    id: "growth", 
    track: "Growth",
    courses: [
      {
        id: "growth-201",
        course: "GRO 201: Growth Fundamentals", 
        topics: [
          "Activation",
          "Retention",
          "Impact sizing",
          "Startup relevance in 2024",
          "Growth benchmarks", 
          "Flywheel (Amazon → Zomato)"
        ],
        appliedAtEnvato: [
          "Creator activation through AI-powered onboarding and template suggestions",
          "Enterprise retention via AI-driven workflow optimization and compliance tools",
          "Impact sizing for AI feature development and platform expansion initiatives",
          "Growth flywheel: Creator success → Asset quality → User satisfaction → Platform growth"
        ],
        showcaseLinks: [
          { title: "Growth strategy", path: "/microsites/envato", anchor: "growth" },
          { title: "Activation metrics", path: "/microsites/envato/orchestrator", anchor: "proof" }
        ],
        badges: ["Activation", "Retention", "Flywheels"],
        copyableOutline: "Growth Fundamentals: 1) AI-powered creator activation strategies 2) Enterprise retention through AI workflows 3) Impact measurement for AI initiatives 4) Platform growth flywheel design"
      },
      {
        id: "growth-301",
        course: "GRO 301: Company Growth Case Studies",
        topics: [
          "Canva, Figma, HubSpot, Dropbox, Notion, Productboard, Stripe, Airbnb, GitHub",
          "Growth motions and GTM playbooks"
        ],
        appliedAtEnvato: [
          "Canva's creator democratization applied to AI-powered design tools",
          "Figma's collaborative model adapted for real-time creative AI workflows",
          "HubSpot's freemium-to-enterprise motion applied to creator-to-enterprise expansion",
          "GitHub's developer ecosystem strategies adapted for creative community building"
        ],
        showcaseLinks: [
          { title: "Platform strategy", path: "/microsites/envato", anchor: "platform" },
          { title: "Enterprise growth", path: "/microsites/envato", anchor: "enterprise" }
        ],
        badges: ["Case Studies", "GTM", "Platform Growth"],
        copyableOutline: "Growth Case Studies: 1) Creative platform growth patterns from leading companies 2) Freemium-to-enterprise expansion strategies 3) Community-driven growth in creative ecosystems 4) Platform network effects and GTM playbooks"
      }
    ]
  },
  {
    id: "interview-career",
    track: "Interview & Career", 
    courses: [
      {
        id: "interview-301",
        course: "INT 301: Interview Prep & Examples",
        topics: [
          "Real answers",
          "Frameworks", 
          "Execution samples",
          "Metric/estimation examples",
          "Storytelling for interviews"
        ],
        appliedAtEnvato: [
          "Real PM interview answers using Envato creative AI strategy and execution examples",
          "Framework applications: Jobs-to-be-Done for creators, Platform strategy for enterprises",
          "Execution samples: AI feature launches, enterprise sales pilots, creator tool rollouts",
          "Metrics and estimation: Creator LTV, AI feature adoption, enterprise expansion modeling"
        ],
        showcaseLinks: [
          { title: "Interview examples", path: "/microsites/envato/orchestrator", anchor: "qa" },
          { title: "Execution showcase", path: "/microsites/envato", anchor: "execution" }
        ],
        badges: ["Interview Prep", "Frameworks", "Storytelling"],
        copyableOutline: "Interview Prep Applied: 1) Real examples from creative AI PM role 2) Framework application in creative tech 3) Execution storytelling with metrics 4) Creative industry PM interview strategies"
      },
      {
        id: "ai-career-401",
        course: "AI 401: AI Career Guidance",
        topics: [
          "Resume writing (with examples)",
          "Inside $300B AI Giants (OpenAI etc.)",
          "Job search market guide",
          "How to become and succeed as AI PM",
          "2025 job search masterclass"
        ],
        appliedAtEnvato: [
          "AI PM resume positioning with creative industry and enterprise AI experience",
          "Understanding AI company culture and product development patterns", 
          "Market analysis of AI PM roles in creative tech, enterprise software, and platform companies",
          "Career trajectory from creative AI PM to leadership roles in AI-first companies"
        ],
        showcaseLinks: [
          { title: "AI PM positioning", path: "/microsites/envato/orchestrator", anchor: "orchestrator" },
          { title: "Career narrative", path: "/microsites/envato", anchor: "story" }
        ],
        badges: ["AI Career", "Resume", "Market Analysis"],
        copyableOutline: "AI Career Applied: 1) AI PM resume and positioning strategy 2) Understanding AI company landscapes 3) Creative AI PM market analysis 4) Career progression in AI-first organizations"
      }
    ]
  },
  {
    id: "leadership",
    track: "Leadership & Specializations",
    courses: [
      {
        id: "leadership-401", 
        course: "LDR 401: Leadership",
        topics: [
          "Product leadership frameworks",
          "Senior PM lessons",
          "Hiring guides",
          "10X leadership",
          "Influence & persuasion"
        ],
        appliedAtEnvato: [
          "Product leadership across creator tools, enterprise solutions, and platform strategy",
          "Senior PM lessons from scaling creative AI products and managing cross-functional teams",
          "Hiring and building AI-focused product teams with creative industry expertise",
          "10X leadership through vision alignment, outcome focus, and team orchestration"
        ],
        showcaseLinks: [
          { title: "Leadership approach", path: "/microsites/envato/orchestrator", anchor: "orchestrator" },
          { title: "Team strategy", path: "/microsites/envato/orchestrator", anchor: "teams" }
        ],
        badges: ["Leadership", "Team Building", "Vision"],
        copyableOutline: "Leadership Applied: 1) Product leadership in creative AI and enterprise contexts 2) Team building and hiring for AI product development 3) Cross-functional orchestration and influence 4) Vision-driven leadership in complex product ecosystems"
      },
      {
        id: "ai-building-403",
        course: "AI 403: Building AI",
        topics: [
          "Building AI startups",
          "Cursor case study", 
          "$20M founder vs Elon",
          "15 steps to $100M+ AI company"
        ],
        appliedAtEnvato: [
          "AI startup principles applied to creative platform innovation and new venture development",
          "AI-first product development methodologies for creative tools and enterprise solutions",
          "Scaling strategies from AI prototype to platform to ecosystem in creative markets",
          "Building $100M+ creative AI company through platform network effects and enterprise expansion"
        ],
        showcaseLinks: [
          { title: "AI platform strategy", path: "/microsites/envato", anchor: "platform" },
          { title: "Innovation approach", path: "/microsites/envato/orchestrator", anchor: "innovation" }
        ],
        badges: ["AI Startups", "Platform Building", "Scaling"],
        copyableOutline: "Building AI Applied: 1) AI startup principles in creative platform development 2) AI-first product methodologies 3) Platform scaling strategies for creative AI 4) Enterprise and ecosystem development in AI markets"
      }
    ]
  }
];

export const competencyBadges = {
  "Core - Creator Tools": ["PRDs", "AI Strategy", "Prototyping", "Analytics"],
  "Core - Enterprise": ["Strategy", "AI Architecture", "Leadership", "Case Studies"],  
  "Secondary - Learning": ["Discovery", "Advanced Tools", "Growth", "Framework"],
  "Secondary - Community": ["Community", "A/B Testing", "Retention", "Platform Growth"],
  "Satellite - New Verticals": ["Innovation", "AI Agents", "Vision", "Market Analysis"],
  "Satellite - Developer APIs": ["Technical", "AI Tools", "Implementation", "Scaling"]
};