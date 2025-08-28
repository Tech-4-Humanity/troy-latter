export interface EnvatoFAQ {
  id: string;
  question: string;
  answer: string;
  category: 'strategy' | 'business' | 'technical' | 'team' | 'implementation';
}

export const envatoFAQs: EnvatoFAQ[] = [
  {
    id: 'ai-pm-definition',
    question: "What does AI Product Management mean to you?",
    answer: "Most think it's about features or prompt-tuning. For me, it's about aligning people and outcomes: Define the asset model so it scales across contributors and customers. Make sure contributors get paid fairly and stay loyal. Deliver customer outcomes that are faster, safer, and easier. The tech is the easy part. The hard part is getting people on the bus.",
    category: 'strategy'
  },
  {
    id: 'business-alignment',
    question: "How would you align Envato's AI strategy with its business model?",
    answer: "I've mapped five strategic paths: Infrastructure, Network, Vertical Expansion, Platform Enabler, and Radical Play. Each is viable, but Infrastructure is the core play for defensible ARR. Platform Enabler keeps us in SaaS ecosystems. The others are bets. My role is to help balance the portfolio so Envato has a floor, an upside, and a moonshot.",
    category: 'strategy'
  },
  {
    id: 'customer-benefits',
    question: "How do customers benefit from AI here?",
    answer: "A small business in Jakarta can download a Ramadan campaign kit in minutes. A teacher can build compliant courseware packs. A brand manager gets provenance-stamped assets safe for enterprise use. That's customer obsession in action: faster campaigns, safer licensing, easier discovery.",
    category: 'business'
  },
  {
    id: 'contributor-benefits',
    question: "How do contributors benefit?",
    answer: "Contributors are the moat. AI isn't there to replace them but to multiply their earnings: Path 1: earn through enterprise kits. Path 2: earn via storefront subs and sponsorships. Path 5: earn royalties through API usage across SaaS platforms. And they get analytics, tagging, and forecast tools so they know what to create next.",
    category: 'business'
  },
  {
    id: 'monetisation-model',
    question: "What's the monetisation model?",
    answer: "Infrastructure: $100–200M ARR potential. Network: $500M+ GMV, $50–100M revenue. Vertical Expansion: $50–100M ARR per sector. Platform APIs: $100M ARR within 3–4 years if embedded broadly. Radical Play: $1B+ TAM moonshot. Each is backed by realistic revenue levers—subs, usage fees, royalties, ads.",
    category: 'business'
  },
  {
    id: 'trust-provenance',
    question: "How do you handle provenance, safety, and trust?",
    answer: "Trust has to be part of the product, not bolted on: C2PA signing on all AI outputs. Provenance APIs for license verification. Region pinning and audit exports for enterprise. Moderation AI and human review queues for community. That turns AI Labs from 'fun' into production-grade tools.",
    category: 'technical'
  },
  {
    id: 'partner-integration',
    question: "How do you integrate with partners and external tools?",
    answer: "I'd standardise around a single asset manifest and unified index. That becomes the contract. Then SDKs and APIs for Figma, Premiere, Shopify, Unity plug into the same backend services. Every integration reuses one spec—not ten.",
    category: 'technical'
  },
  {
    id: 'mergers-acquisitions',
    question: "How would you handle mergers and acquisitions?",
    answer: "Unify contributors and customers first, then tech. That means one contributor dashboard, one payout ledger, one customer contract. Behind the scenes, crosswalk IDs, harmonised manifests, and unified provenance rules. Done in 90-day sprints: payouts → provenance → workflows.",
    category: 'implementation'
  },
  {
    id: 'speed-execution',
    question: "How do you keep speed?",
    answer: "Speed comes from contracts and SLAs. The infra team owns the index, APIs, lineage. Feature squads build storefronts, kits, or agentic workflows on top. If search is <200ms and provenance API is reliable, teams can ship without bottlenecking each other.",
    category: 'technical'
  },
  {
    id: 'team-building',
    question: "Can you build a team without a product?",
    answer: "Yes—if the charter is clear. The mission is to get assets from contributor → safe and useful for customer → contributor gets paid. Teams form around flows, not features: Contributor success (tools, analytics, payouts). Customer experience (search, gen, packs). Trust and provenance (C2PA, compliance, moderation). Platform (APIs, SDKs, partner integrations).",
    category: 'team'
  },
  {
    id: 'ninety-day-plan',
    question: "What are your first 90 days?",
    answer: "Ship one manifest (asset, license, lineage, region). Stand up a unified index (lexical + vector). Add C2PA signing on all AI Labs outputs with a public verify page. Pilot one enterprise connector with audit export. Launch contributor insights v1 (auto tags, price hints, forecast report). Run one agentic workflow pilot (social variants from one brief).",
    category: 'implementation'
  },
  {
    id: 'trust-leadership',
    question: "Why should we trust you to lead this?",
    answer: "Because I don't treat AI as a feature. I treat it as alignment of people, trust, and monetisation. Products don't fail because the models aren't good enough. They fail when contributors don't lean in, customers don't see value, or enterprises don't trust compliance. My role is to make sure they all get on the bus and stay there.",
    category: 'strategy'
  }
];