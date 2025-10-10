import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Separator } from '@/components/ui/separator';
import { Target, Users, Database, MessageSquare, Sparkles, Zap, Workflow, Shield, Flame, Globe, TrendingUp } from 'lucide-react';

const LeadershipStyle = () => {
  const leadershipPrinciples = [
    {
      title: "Think Big",
      icon: Target,
      description: "I was Amazon-rated extremely high on Think Big, setting bold but achievable visions that stretch capability without breaking teams. The focus was always on scalable value, not hype.\n\nI turn early ideas into action frameworks—strategy maps, sprints, and feedback loops that convert ambition into measurable impact.\n\nTeams learn to balance imagination with evidence, building confidence through progress they can see.",
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png"
    },
    {
      title: "Empathy-Driven Collaboration",
      icon: Users,
      description: "I mentor teams through change by connecting technology to human value. Whether training AI-agent designers or hosting live webinars, the goal is shared learning, not just delivery.\n\nI make complex ideas accessible through clear narratives and open conversation, building alignment across roles and experience levels.\n\nThis approach consistently boosts engagement scores and cross-team retention—people want to work in environments where they feel heard and respected.",
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png"
    },
    {
      title: "Right, Accurate, Real-Time Data",
      icon: Database,
      description: "Data only drives change when it's visible. I introduced SMS sales alerts and built self-service dashboards so teams saw truth in real time.\n\nThese tools turned guessing into knowing, letting managers shift from reactive to proactive decision-making.\n\nWithin months, teams began owning metrics themselves—accuracy improved, and bottlenecks disappeared.",
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png"
    },
    {
      title: "Transparent Communication",
      icon: MessageSquare,
      description: "I run live dashboards, show-and-tell sessions, and custom updates for each audience—from executives to delivery teams. Everyone knows what matters most that week.\n\nTransparency shortens feedback loops. Issues surface early, wins get shared, and confidence builds through honesty.\n\nThis rhythm of open communication replaced long reports with real conversations that move decisions faster.",
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png"
    },
    {
      title: "Thought Leadership and Visibility",
      icon: Sparkles,
      description: "I translate complex tech into public insight. From AWS Public Sector Summit to Defence+Industry events, I've led keynotes that bridge technical detail and executive strategy.\n\nI publish and contribute peer-reviewed research across ML and security, linking theory to field-tested deployment outcomes.\n\nThis visibility drives business impact—executive briefings I led produced 40+ qualified leads per quarter and built enduring industry partnerships.",
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png"
    }
  ];

  const leadershipQualities = [
    {
      title: "Hands-On Generalist",
      icon: Zap,
      description: "I move ideas from whiteboard to production fast. I design cloud-native stacks, edge prototypes, and secure data flows that reach live environments in days, not months.\n\nCuriosity drives me across domains—product, policy, and infrastructure—connecting teams that rarely speak the same language.\n\nBy bridging these gaps, I convert uncertainty into clarity and accelerate both delivery and trust."
    },
    {
      title: "Agile Catalyst",
      icon: Workflow,
      description: "I lead tight, high-trust tiger teams—engineers, data scientists, and compliance experts—running two-week sprints and Friday \"kill or scale\" demos.\n\nThis learn-fast culture tripled proof-of-concept throughput, cut cycle times by 60%, and raised pilot-to-production conversion from 20% to 60%.\n\nAgility here isn't a label; it's a discipline of short feedback, visible goals, and shared success."
    },
    {
      title: "Outcome-Obsessed",
      icon: Target,
      description: "Every project I run ships with a live dashboard—usage, cost, and impact visible to all.\n\nBy translating data into business terms, such as $150K a month saved and 85% faster audit prep, I help execs see value instantly.\n\nThis transparency builds credibility. It's how prototypes graduate to enterprise programs."
    },
    {
      title: "Team-First Collaborator",
      icon: Users,
      description: "People build systems, not the other way around. I invest in coaching, cross-training, and joint problem-solving so everyone grows.\n\nPsychological safety and inclusion sit at the core of delivery speed. When teams feel safe to speak up, issues surface early and innovation scales.\n\nThat culture makes ambitious goals attainable and keeps momentum through trust."
    },
    {
      title: "Ethical and Responsible Leadership",
      icon: Shield,
      description: "I embed ethics, safety, and transparency into AI and automation design. Responsible tech is not compliance—it's risk management through trust.\n\nEvery innovation review includes human oversight checkpoints and transparency metrics that align with global best practice.\n\nThis approach ensures growth with guardrails—progress that's both fast and defensible."
    },
    {
      title: "Crisis and Change Leadership",
      icon: Flame,
      description: "I perform best in uncertainty. Whether managing outages or shifting markets, I lead calmly, focusing teams on priorities, not panic.\n\nWe solve fast by simplifying complexity, establishing clear roles, and stabilising communication.\n\nAfter-action reviews always follow, turning disruption into resilience and future playbooks."
    },
    {
      title: "Cross-Cultural and Global Influence",
      icon: Globe,
      description: "I've led diverse teams across APAC, Europe, and North America, balancing regional nuance with shared standards.\n\nCross-border projects taught me that respect, time zones, and context matter as much as tech.\n\nBy building relationships that span culture and discipline, I create delivery ecosystems that scale globally."
    },
    {
      title: "Succession and Scaling",
      icon: TrendingUp,
      description: "True leadership is what happens when you're not in the room. I build frameworks that let others lead with confidence and continuity.\n\nI develop emerging leaders through delegation, mentoring, and peer visibility, ensuring capability doesn't depend on one person.\n\nThe result is a self-sustaining organisation—resilient, informed, and ready for the next challenge."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      {/* Hero Introduction */}
      <div className="relative overflow-hidden rounded-2xl mb-12 bg-gradient-to-br from-gray-900 via-brand-primary to-gray-900 p-8 md:p-12">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                Leadership grounded in clarity, empathy, and measurable outcomes. I align teams around shared principles, ensuring everyone understands the "why" before the "what." This creates trust, speed, and accountability.
              </p>
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                Every decision connects to purpose and data. I translate strategy into visible results, giving teams real ownership over outcomes. Clarity replaces confusion, and people deliver because they believe in the mission.
              </p>
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                I lead with empathy and precision. By combining care for people with hard metrics, I turn complex programs into achievable goals and sustain performance over time.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img 
              src="https://pflisxkcxbzboxwidywf.supabase.co/storage/v1/object/public/testimonial-images/ok%20shot.png" 
              alt="Troy Latter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Leadership Context */}
      <div className="mb-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">Strategic Leadership and Team Collaboration</h2>
        <p className="text-lg text-brand-secondary leading-relaxed mb-4">
          Strategy starts with vision and ends with delivery. I connect business outcomes to technology choices, ensuring every initiative moves measurable levers—revenue, resilience, or reputation.
        </p>
        <p className="text-lg text-brand-secondary leading-relaxed mb-4">
          Teams work best when they can see the full system. I build cross-functional structures that break silos, linking engineering, compliance, and product into one operating rhythm.
        </p>
        <p className="text-lg text-brand-secondary leading-relaxed">
          The result is momentum that compounds. Each iteration builds confidence, culture, and capability—people know their work matters and see proof every week.
        </p>
      </div>

      <Separator className="my-12 bg-brand-accent/30" />

      {/* Leadership Principles - Alternating Layout */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-brand-primary mb-8">Leadership Principles</h2>
        <div className="space-y-8">
          {leadershipPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow`}
              >
                <div className="md:w-1/3 flex justify-center items-center">
                  <img 
                    src={principle.imageSrc}
                    alt={principle.title}
                    className="max-h-64 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-primary">{principle.title}</h3>
                  </div>
                  <p className="text-brand-secondary leading-relaxed whitespace-pre-line">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="my-12 bg-brand-accent/30" />

      {/* Leadership Qualities - Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-brand-primary mb-4">Leadership Qualities</h2>
        <p className="text-xl text-brand-secondary mb-8">Why I'm Your Go-To Technologist</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipQualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-transparent hover:border-gradient-to-r hover:from-brand-primary hover:to-teal-500 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary pt-1">{quality.title}</h3>
                </div>
                <p className="text-brand-secondary leading-relaxed whitespace-pre-line">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="my-12 bg-brand-accent/30" />

      {/* Personal Philosophy */}
      <div className="mb-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-brand-primary mb-8">Personal Philosophy</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl font-bold text-brand-primary mb-3">Lead with clarity.</p>
          <p className="text-2xl font-bold text-brand-primary mb-3">Decide with data.</p>
          <p className="text-2xl font-bold text-brand-primary mb-6">Care with intent.</p>
          <p className="text-lg text-brand-secondary italic mt-6">
            These three anchors keep leadership human and scalable—aligning performance with principle.
            Everything else follows from that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipStyle;
