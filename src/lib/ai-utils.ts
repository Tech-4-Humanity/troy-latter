/**
 * MCP Bridge AI Utilities
 * Connects to your personal AI bridge with Troy Latter's full context
 */

// Troy Latter's comprehensive profile context
const TROY_BASE_CONTEXT = {
  profile: {
    name: "Troy Latter",
    current_role: "CEO, Tech 4 Humanity | Advisory Board Member, Qld AI Hub",
    tagline: "Building and scaling AI capability for organizations that can't afford to get it wrong",
    experience_years: 15,
    sfia_level: 7,
    clearance: "AGSVA NV2 (Australian Government Security Vetting Agency - Negative Vetting Level 2)",
    location: "Brisbane, Queensland, Australia",
    
    boards: [
      "Queensland AI Hub - Advisory Board Member",
      "Standards Australia BCI Committee (Business Continuity & AI Standards)",
      "Tech 4 Humanity - Founder & CEO"
    ],
    
    expertise: [
      "AI/ML strategy and execution (from pilot to production)",
      "Government digital transformation (Defence, Home Affairs, Finance)",
      "Cloud architecture and migration (AWS/Azure/GCP)",
      "Enterprise change management and organizational transformation",
      "Design thinking, innovation frameworks, and strategic foresight",
      "Multi-agent orchestration and complex service workflows",
      "Security architecture and zero-trust frameworks",
      "BCI (Business Continuity Intelligence) and AI standards development"
    ],
    
    previous_roles: [
      {
        title: "CTO Alliances & Strategic Foresight",
        company: "Unisys",
        period: "2024-2025",
        highlights: [
          "Led AI pilots achieving 30-40% efficiency gains in government operations",
          "Delivered 100+ executive briefings across Defence, Home Affairs, Finance",
          "Built innovation labs bridging technical teams and C-suite stakeholders"
        ]
      },
      {
        title: "Principal Solutions Architect",
        company: "AWS (Amazon Web Services)",
        period: "2019-2023",
        highlights: [
          "Architected cloud solutions for enterprise and government clients",
          "Specialized in AI/ML, security, and compliance frameworks",
          "Delivered transformation programs with measurable ROI"
        ]
      },
      {
        title: "Innovation Adviser",
        company: "Oracle",
        period: "2016-2019",
        highlights: [
          "Advised on cloud strategy and digital transformation",
          "Developed innovation frameworks for enterprise clients",
          "Bridged technical and business stakeholders"
        ]
      }
    ],
    
    track_record: [
      "Led AI pilots achieving 30-40% efficiency gains in complex government workflows",
      "100+ executive briefings across Defence, Home Affairs, Finance departments",
      "Built multi-agent orchestration systems for complex service flows",
      "Architected secure, compliant AI solutions for sensitive government data",
      "Established innovation labs bridging technical teams and C-suite",
      "Published thought leadership on AI ethics, BCI standards, and responsible AI"
    ],
    
    technical_depth: [
      "AI/ML: LangChain, LlamaIndex, vector databases, RAG systems, multi-agent frameworks",
      "Cloud: AWS (certified), Azure, GCP - architecture, security, cost optimization",
      "Languages: Python, TypeScript, JavaScript, infrastructure as code",
      "Frameworks: Design thinking, Wardley mapping, strategic foresight methodologies",
      "Security: Zero-trust architecture, IRAP, PSPF compliance, secure AI systems"
    ],
    
    leadership_style: [
      "Outcome-focused, hands-on when needed",
      "Bridges technical depth with strategic vision",
      "Builds and empowers high-performing teams",
      "Transparent, ethical, mission-driven decision making",
      "Strong communicator to both technical and executive audiences"
    ],
    
    availability: {
      work_track: "Available for 3-6 month fractional CTO engagements",
      job_track: "Seeking Chief AI Officer / VP AI Strategy / Head of Innovation roles",
      start_date: "Immediate availability for right opportunity",
      compensation_work: "$5-10K/month + equity options for consulting",
      compensation_job: "$250-350K + equity for full-time executive role"
    }
  }
};

// Domain-specific intelligence for tailored messaging
const DOMAIN_INTELLIGENCE = {
  government_defense: {
    emphasis: ["AGSVA NV2 clearance", "IRAP compliance experience", "Defence digital transformation", "Secure AI architecture", "Policy-first approach"],
    keywords: ["security", "compliance", "clearance", "classified", "defence", "government", "policy", "standards"],
    messaging: "Deep understanding of government security requirements, cleared for sensitive work, proven track record in Defence and Home Affairs"
  },
  
  financial_services: {
    emphasis: ["Regulatory compliance (APRA, ASIC)", "Risk management frameworks", "Secure AI for financial data", "Financial transformation experience"],
    keywords: ["fintech", "banking", "financial", "regulatory", "compliance", "risk", "APRA", "ASIC"],
    messaging: "Experience with highly regulated environments, risk-first AI implementation, financial services transformation"
  },
  
  healthcare: {
    emphasis: ["Privacy-first AI", "Healthcare workflow integration", "HIPAA awareness", "Patient data security", "Clinical decision support"],
    keywords: ["healthcare", "medical", "clinical", "patient", "health", "hospital", "HIPAA", "privacy"],
    messaging: "Privacy-preserving AI systems, healthcare workflow optimization, ethical AI for patient care"
  },
  
  retail_ecommerce: {
    emphasis: ["Customer experience optimization", "Recommendation engines", "Scale and performance", "Personalization at scale"],
    keywords: ["retail", "ecommerce", "customer", "shopping", "recommendation", "personalization", "conversion"],
    messaging: "AI-driven customer experience, scalable recommendation systems, data-driven retail transformation"
  },
  
  enterprise_saas: {
    emphasis: ["Enterprise AI strategy", "B2B transformation", "Product-led growth", "Platform thinking"],
    keywords: ["SaaS", "enterprise", "B2B", "platform", "product", "scale-up", "growth"],
    messaging: "Enterprise AI productization, scalable platform architecture, B2B transformation expertise"
  },
  
  startup_scaleup: {
    emphasis: ["Speed of execution", "Hands-on technical leadership", "Building from scratch", "Equity mindset"],
    keywords: ["startup", "scale-up", "founder", "early-stage", "seed", "Series A", "venture"],
    messaging: "Fractional CTO who executes, not just advises. Technical depth + strategic vision. Equity-aligned."
  }
};

export interface GenerateContentOptions {
  prompt: string;
  type: 'cv' | 'communication' | 'strategic' | 'technical' | 'analysis' | 'pitch';
  context?: Record<string, any>;
  maxTokens?: number;
  domain?: keyof typeof DOMAIN_INTELLIGENCE;
}

export interface GenerateContentResponse {
  content: string;
  metadata?: {
    model?: string;
    tokens?: number;
  };
}

/**
 * Generate content using MCP Bridge AI with Troy's full context
 * Uses Troy Latter's actual experience, voice, and context from MCP server
 */
export async function generateContent(
  options: GenerateContentOptions
): Promise<string> {
  const apiUrl = import.meta.env.VITE_MCP_BRIDGE_AI_URL;
  
  if (!apiUrl) {
    throw new Error('MCP Bridge AI URL not configured. Add VITE_MCP_BRIDGE_AI_URL to environment variables.');
  }

  // Enhance context with Troy's base profile and domain intelligence
  const enhancedContext: any = {
    ...TROY_BASE_CONTEXT,
    ...options.context,
  };

  // Add domain-specific intelligence if specified
  if (options.domain && DOMAIN_INTELLIGENCE[options.domain]) {
    enhancedContext.domain_guidance = DOMAIN_INTELLIGENCE[options.domain];
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: options.prompt,
        type: options.type,
        context: enhancedContext,
        maxTokens: options.maxTokens || 2000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`MCP Bridge AI error (${response.status}): ${errorText}`);
    }

    const data: GenerateContentResponse = await response.json();
    return data.content;
  } catch (error) {
    console.error('MCP Bridge AI generation failed:', error);
    throw error;
  }
}

/**
 * Detect domain from job description for intelligent context enhancement
 */
export function detectDomain(jobDescription: string): keyof typeof DOMAIN_INTELLIGENCE | undefined {
  const text = jobDescription.toLowerCase();
  
  for (const [domain, intelligence] of Object.entries(DOMAIN_INTELLIGENCE)) {
    if (intelligence.keywords.some(keyword => text.includes(keyword))) {
      return domain as keyof typeof DOMAIN_INTELLIGENCE;
    }
  }
  
  return undefined;
}

/**
 * Get Troy's base context (useful for displaying profile info)
 */
export function getTroyBaseContext() {
  return TROY_BASE_CONTEXT;
}

/**
 * Get domain intelligence for a specific domain
 */
export function getDomainIntelligence(domain: keyof typeof DOMAIN_INTELLIGENCE) {
  return DOMAIN_INTELLIGENCE[domain];
}

/**
 * Check if MCP Bridge AI is available
 */
export function isMCPBridgeAIAvailable(): boolean {
  return !!import.meta.env.VITE_MCP_BRIDGE_AI_URL;
}
