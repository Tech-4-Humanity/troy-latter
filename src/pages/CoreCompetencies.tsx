
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Settings, Briefcase, Award, Target, Brain, Network, Database, Shield, Sparkles, Zap, Workflow, Cloud, Code, Lock, Cpu } from 'lucide-react';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: Users,
      title: "Strategic Leadership",
      image: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png",
      skills: [
        "CIO advisory and stakeholder management",
        "Digital transformation strategy development",
        "Technology roadmap planning and execution",
        "Executive relationship building (200+ CIO/CTO network)",
        "Change management and organizational transformation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales Excellence",
      image: "/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png",
      skills: [
        "Enterprise account management and growth",
        "C-suite relationship building and influence",
        "Technical sales enablement and team development",
        "GTM strategy creation and execution",
        "Revenue generation ($350M+ track record)"
      ]
    },
    {
      icon: Settings,
      title: "Solution Architecture",
      image: "https://res.cloudinary.com/dkkd45ayz/image/upload/f_auto,dpr_auto,q_auto,fl_progressive/w_1.0,h_0.8431568431568431568431568432,c_fill,g_auto/w_2048,h_1152,c_scale/saab/33099",
      skills: [
        "Multi-cloud integration (AWS, Azure, GCP)",
        "AI/ML platform implementation and strategy",
        "Enterprise data architecture and governance",
        "Microservices and API-first design",
        "Security frameworks and compliance"
      ]
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      image: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
      skills: [
        "Government and public sector transformation",
        "Telecommunications infrastructure and innovation",
        "Financial services technology modernization",
        "Healthcare and critical infrastructure",
        "Cross-industry digital strategy consulting"
      ]
    }
  ];

  const technicalSkills = {
    "AI & Agentic Systems": [
      "Agentic Orchestration: Model Context Protocol (MCP), AutoGen, CrewAI, LangGraph, HuggingGPT, Semantic Kernel, DSPy, OpenDevin",
      "Multi-Agent Environments: HoloOrg, AutoGPT, BabyAGI, Aide, SmolAgents, MetaGPT, CAMEL",
      "Cognitive Frameworks: Neuro-Symbolic AI, Cognitive Reasoning Loops, Synthetic Memory Design",
      "LLM Ops: Fine-tuning, RAG, model evaluation, vector indexing, prompt caching, retrieval optimization",
      "Prompting Methods: chain-of-thought, few-shot, multi-shot, self-consistency, tree-of-thought, reflection, tool-calling, persona-stacking, context orchestration",
      "Model Families: GPT-4o/5, Claude 3, Gemini 1.5, Mistral Large, LLaMA 3, Mixtral, Falcon, Command-R+, Yi-1.5, DeepSeek Coder, Groq-optimized models"
    ],
    "Cloud AI & Platform Architecture": [
      "AWS: Bedrock, SageMaker, Q Developer, Lambda, ECS, Step Functions",
      "Azure: OpenAI Service, Cognitive Search, AI Studio, Synapse, Fabric, Copilot Studio",
      "Google: Vertex AI, Gemini APIs, BigQuery ML, Cloud Functions, Duet AI",
      "Open-source: Ollama, LM Studio, vLLM, LangServe, FastAPI, Supabase Edge Functions",
      "Micro-Certifications: AWS Bedrock Foundations, Azure AI Engineer Associate, Google Vertex AI Developer, OpenAI Developer, Anthropic Partner Badge, LangChain Certified Builder, MCP Contributor"
    ],
    "Data, Knowledge & AI Tooling": [
      "Data Systems: Snowflake Cortex, Databricks MosaicML, Supabase, Pinecone, Weaviate, Qdrant",
      "Workflow Tools: n8n, Make, Pipedream, Airflow, Prefect, Dagster",
      "Knowledge Management: Notion AI, Mem, Obsidian, Readwise, NotebookLM, Perplexity, ChatGPT Team",
      "Dev Agents: GitHub Copilot, Cody, Continue, Sourcegraph Agents, Replit Ghostwriter",
      "Testing & Evaluation: PromptLayer, Evals, Weights & Biases, LangFuse, Helicone, Phoenix"
    ],
    "Application & Product AI": [
      "Integration Layers: REST, GraphQL, gRPC, WebSockets, JSON-RPC, OpenAPI 3.1",
      "SaaS Connectors: Salesforce Einstein, ServiceNow Now Assist, HubSpot AI, Slack GPT, Notion AI, Asana AI, ClickUp Brain, Figma AI, Canva Magic Studio",
      "Generative Media: HeyGen, Synthesia, Runway, Pika, Kaiber, Leonardo, Midjourney, Firefly, D-ID, ElevenLabs, Suno, Udio",
      "Agent Deployment: Hugging Face Spaces, Replicate, Modal, Vercel AI SDK, Gradio, Streamlit, FastAPI, Cloudflare Workers"
    ],
    "Security, Ethics & Compliance": [
      "Responsible AI: fairness, explainability, auditability, alignment",
      "Privacy Tech: differential privacy, data minimization, AI observability",
      "Compliance: ISO/IEC 42001 (AI Management), GDPR AI readiness, SOC2, NIST RMF for AI"
    ],
    "Emerging Technologies": [
      "Brain-Computer Interfaces: EEG/EMG decoding, assistive robotics integration",
      "Robotics & Automation: ROS2, micro-robotic swarms, edge autonomy",
      "Spatial Intelligence: ARKit, ARCore, Unreal Engine, Omniverse, Unity Sentis",
      "Bio-Digital Systems: neural sensors, wearables, digital phenotype mapping"
    ]
  };

  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle title="Core Competencies & Technical Expertise" />
      
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-16 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technology Leadership Expertise</h2>
              <p className="text-lg text-gray-200 mb-6">
                Comprehensive technical and leadership capabilities spanning cloud architecture, 
                AI/ML implementation, enterprise sales, and strategic transformation across 
                multiple industry sectors.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Competency Highlights</h3>
                <ul className="text-sm space-y-2">
                  <li>• 20+ AWS, Azure, GCP, Oracle certifications and/or micro certifications</li>
                  <li>• $350M+ in enterprise sales generated</li>
                  <li>• 200+ C-level relationships across APAC</li>
                  <li>• 50+ digital transformation projects</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/f9deef88-c299-4f35-ad6f-4585c24d056a.png" 
                alt="Technology Architecture and Solutions" 
                className="w-80 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Strategic Competencies with Side-by-Side Layout */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-brand-primary text-center">Strategic Competencies</h2>
        
        {competencies.map((competency, index) => (
          <Card key={index} className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className={`grid md:grid-cols-2 gap-0`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={competency.image} 
                    alt={competency.title} 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className={`p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <competency.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">{competency.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {competency.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI-Native Executive Skills */}
      <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-100">
        <CardContent className="p-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-brand-primary">AI-Native Executive Skills</h2>
          </div>
          <ul className="space-y-4 max-w-5xl mx-auto">
            {[
              "Leads the design and deployment of agentic ecosystems that merge human decision-making with AI-driven orchestration across cloud, data, and SaaS platforms.",
              "Drives enterprise transition from traditional automation to context-aware intelligence, using frameworks such as MCP, AutoGen, LangGraph, and Semantic Kernel.",
              "Builds and scales multi-agent architectures that enable collaboration between LLMs, APIs, and enterprise systems for measurable outcomes in productivity and compliance.",
              "Translates complex AI models into operational playbooks—governing data flow, context handling, and feedback loops across distributed environments.",
              "Shapes corporate AI strategy, policy, and governance around Responsible AI, transparency, and emerging ISO/IEC 42001 standards.",
              "Integrates neuro-symbolic reasoning and human-in-the-loop controls for safety-critical and regulated use cases.",
              "Champions the use of prompt engineering as a management layer, embedding chain-of-thought, self-reflection, and tool-calling across AI workflows.",
              "Advises boards and executive teams on AI operating models, cognitive velocity metrics, and business redesign through agentic and orchestration-first thinking.",
              "Oversees AI product, procurement, and innovation portfolios with emphasis on interoperability, ethical adoption, and measurable ROI.",
              "Collaborates with hyperscalers and SaaS ecosystems (AWS, Azure, GCP, Snowflake, ServiceNow, Salesforce, OpenAI, Anthropic) to align platform roadmaps with organizational capability.",
              "Guides emerging teams on AI lifecycle management, MLOps standards, and enterprise prompt repositories for sustainable learning and reuse.",
              "Delivers outcomes through cross-functional orchestration, uniting data science, architecture, engineering, and business strategy around cognitive transformation."
            ].map((skill, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 leading-relaxed">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Technical Skills Detailed */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-brand-primary text-center">Technical Skills & Certifications</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, skills], index) => {
            const icons = [Brain, Cloud, Database, Code, Lock, Cpu];
            const IconComponent = icons[index] || Settings;
            
            return (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary">{category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1 text-sm">▪</span>
                        <span className="text-gray-700 text-sm leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Professional Certifications */}
      <Card className="overflow-hidden">
        <CardContent className="p-10">
          <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">Professional Certifications & Recognitions</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "AWS Professional Solutions Architect (Bedrock & SageMaker)",
              "Azure AI Engineer Associate",
              "GCP Vertex AI Developer",
              "LangChain Certified Builder",
              "MCP Contributor (Model Context Protocol)",
              "Snowflake Cortex Practitioner",
              "Databricks AI Fundamentals",
              "OpenAI Developer Credential",
              "Anthropic Partner Certification",
              "NVIDIA AI Foundations Badge",
              "Adobe Firefly Creator",
              "Canva Magic Studio Pro Creator",
              "Supabase Developer Badge",
              "PRINCE2 Practitioner",
              "Prosci ADKAR",
              "ITIL v3",
              "TOGAF",
              "IT4IT"
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 p-3 rounded-lg text-center border border-blue-100 hover:shadow-md transition-all">
                <span className="text-xs font-medium text-brand-primary">{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoreCompetencies;
