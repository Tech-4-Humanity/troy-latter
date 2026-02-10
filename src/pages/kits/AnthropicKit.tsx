import { KitLayout } from './KitLayout';

const AnthropicKit = () => (
  <KitLayout
    company="Anthropic"
    role="Principal Solutions Architect"
    location="APAC / Remote"
    date="February 2026"
    fitScore={56}
    fitLabel="Cluster Match 100%"
    accentColor="#D97706"
    accentLight="rgba(217,119,6,0.08)"
    coverLetter={
      <>
        <p>Dear Anthropic Hiring Team,</p>
        <p>I am writing to apply for the Principal Solutions Architect role. I have spent the past 3 years building, deploying, and evangelising AI systems at enterprise scale — including multi-agent orchestration systems using Claude — and I believe my background uniquely positions me to help Anthropic's strategic customers succeed.</p>
        <p>What I bring to this role:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Enterprise AI deployment at scale:</strong> Led ChatGPT Enterprise and Bedrock pilots for Australian government and enterprise customers at Unisys. Designed RAG pipelines, evaluation harnesses, and safety rails for production AI systems. Built a 10,000-agent orchestration platform (HoloOrg) using Claude as the primary reasoning engine.</li>
          <li><strong>Cloud architecture across all three hyperscalers:</strong> Architected solutions on AWS, Azure, and GCP for government, financial services, and critical infrastructure. Deep experience with serverless patterns, event-driven design, and containerised AI workloads.</li>
          <li><strong>Customer-facing technical leadership:</strong> Built $100M+ pipeline at AWS across JAPAC through technical advisory and solutions architecture. Delivered 500+ executive briefings, keynoted at re:Invent, and built co-sell programs with Oracle and NVIDIA.</li>
          <li><strong>AI safety and governance:</strong> Developed responsible AI frameworks referenced by Standards Australia. Built evidence-gated systems where no output ships without traceable source references — the same philosophy that drives Anthropic's approach to safety.</li>
        </ul>
        <p>I am deeply aligned with Anthropic's mission. My work at Tech 4 Humanity focuses on AI that augments human capability responsibly — not replaces it. I build systems with safety rails, human-in-the-loop checkpoints, and full auditability because I believe that is the only way AI scales trustworthily.</p>
        <p>I would be honoured to help Anthropic's customers experience what I already know: Claude is the most capable and safest enterprise AI platform available.</p>
        <p>Regards,<br />Troy Latter</p>
      </>
    }
    skills={[
      { title: 'Multi-Agent Orchestration', level: 'L5 — Confirmed', description: 'Built 10,000-agent HoloOrg using Claude. Production multi-agent systems with safety rails and telemetry.' },
      { title: 'AI Deployment', level: 'L5 — Confirmed', description: 'Enterprise AI pilots at Unisys. ChatGPT Enterprise, Bedrock, Claude integration patterns.' },
      { title: 'Multi-Cloud Architecture', level: 'L5 — Confirmed', description: 'AWS, Azure, GCP, Oracle. Serverless, event-driven, containerised AI workloads.' },
      { title: 'Safety Rails', level: 'L4 — Confirmed', description: 'Built safety and guardrail systems for production AI agents. Evidence-gated output quality.' },
      { title: 'RAG Governance', level: 'L4 — Emerging', description: 'Traceable RAG flows with source attribution. Hallucination mitigation through grounding.' },
      { title: 'AI Product Management', level: 'L5 — Confirmed', description: 'Trained 500+ executives in AI PM. Product evangelism across APAC markets.' },
    ]}
    starStories={[
      {
        situation: "Anthropic needs Principal SAs who can help enterprise customers adopt Claude for mission-critical workloads.",
        task: 'At Tech 4 Humanity, I needed to build a production-grade multi-agent system that could orchestrate 10,000+ autonomous agents with full safety governance.',
        action: 'Designed HoloOrg using Claude as the primary reasoning engine. Implemented planning/replanning cycles, agent telemetry, safety rails, and evidence-gated outputs. Built long-running agent patterns with human-in-the-loop checkpoints.',
        result: 'Production system running autonomously with zero safety violations, processing 1,000+ tasks per day, demonstrating Claude\'s capability for enterprise-scale agentic workloads.',
      },
      {
        situation: 'Australian government customers at Unisys needed to adopt AI but had sovereignty and safety concerns.',
        task: 'Design and deliver AI adoption programs that met government compliance requirements while demonstrating real business value.',
        action: 'Created evidence-gated AI frameworks, built RAG pipelines with source traceability, designed evaluation harnesses for LLM output quality, trained 50+ government executives on responsible AI adoption.',
        result: '5 government agencies adopted AI programs, zero compliance incidents, established a repeatable enterprise AI deployment methodology.',
      },
    ]}
    whySection={
      <p>I have used Claude extensively in production. I built my employment engine, portfolio platform, and multi-agent orchestration system on Claude. I am not an observer of Anthropic's technology — I am a practitioner. I understand Claude's strengths (reasoning depth, safety, instruction following) and its operational considerations (context windows, streaming, tool use patterns) from thousands of hours of production use.</p>
    }
  />
);

export default AnthropicKit;
