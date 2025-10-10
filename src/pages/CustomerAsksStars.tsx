import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import VideoEmbed from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { Youtube, Map, Users, Rocket, Zap, CheckCircle, MessageSquare, Shield, Network, BookOpen, TrendingUp, LucideIcon } from 'lucide-react';

const CustomerAsksStars = () => {
  const innovationPrinciples: {
    title: string;
    icon: LucideIcon;
    imageSrc: string;
    paragraphs: string[];
  }[] = [
    {
      title: "From Vision to Roadmap",
      icon: Map,
      imageSrc: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
      paragraphs: [
        "I convert big ideas into grounded, time-boxed roadmaps. At Unisys I took five disconnected AI pilots across Dyson, rewrote integration code, rebuilt partner links, and produced a six-month roadmap that unlocked an $8 M follow-on pipeline within 12 weeks.",
        "My process connects opportunity discovery to proof-of-concept design, embedding technical and commercial validation together.",
        "The result is a predictable flow of experiments that move quickly, scale cleanly, and build executive confidence through evidence."
      ]
    },
    {
      title: "Building High-Performance Teams",
      icon: Users,
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png",
      paragraphs: [
        "High-velocity innovation needs trust and diversity. At AWS I built small, cross-disciplinary groups—engineers, scientists, analysts—to run two-week \"Sprint Marathons.\"",
        "Each sprint ended with a public demo and decision point: scale or stop. That structure tripled proof-of-concept throughput and lifted funding conversion to 65%.",
        "Executives regained faith because results spoke louder than reports—speed, transparency, and data drove every decision."
      ]
    },
    {
      title: "Breaking the Prototype-to-Reality Barrier",
      icon: Rocket,
      imageSrc: "/lovable-uploads/6c065077-2a06-4fc0-8ee5-a1aebd89d0b8.png",
      paragraphs: [
        "I focus on what most programs miss: turning demos into deployment. At Oracle I wrote modular playbooks that aligned engineering, marketing, and field resources into one launch rhythm.",
        "I presented working prototypes directly to leadership, not slides. That tangible proof secured $5 M in production funding and set a repeatable model for other product lines.",
        "Execution discipline—not flash—made the difference, proving innovation only matters once it ships."
      ]
    },
    {
      title: "Culture & Pace",
      icon: Zap,
      imageSrc: "/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png",
      paragraphs: [
        "Innovation dies in slow feedback loops. I've embedded weekly \"kill or scale\" checkpoints, Friday Demo Days, and real-time dashboards that show progress, blockers, and value at a glance.",
        "These rituals normalise failure and celebrate iteration, teaching teams that learning fast beats being right first time.",
        "Cycle times dropped from 12 weeks to 4 while morale and accountability rose—the culture became self-correcting and self-driving."
      ]
    },
    {
      title: "Client-First Validation",
      icon: CheckCircle,
      imageSrc: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png",
      paragraphs: [
        "Clients define success, not us. I showcase live prototypes at summits, forums, and executive roadshows, turning feedback sessions into co-design workshops.",
        "Each iteration reflects what real users need next, not what the roadmap assumed.",
        "That approach creates client evangelists—partners who advocate because they helped shape the outcome."
      ]
    },
    {
      title: "Technical Evangelism & Business Case Translation",
      icon: MessageSquare,
      imageSrc: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
      paragraphs: [
        "Innovation only scales when the story makes sense to both engineers and boards. I translate complex R&D into clear narratives and commercial value.",
        "From neurotech standards to AI ethics papers, I've published, presented, and hosted Tech Talks for 200+ executives, connecting technology potential to real ROI.",
        "Those sessions led directly to $2–5 M follow-on contracts and positioned innovation as a strategic asset, not a side project."
      ]
    },
    {
      title: "Governance and Risk Balance",
      icon: Shield,
      imageSrc: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png",
      paragraphs: [
        "Innovation without control becomes chaos. I embed light but firm governance to balance speed with accountability. Each experiment runs inside a clear decision framework—scope, owner, data, next milestone.",
        "At AWS and Oracle, this structure let teams move fast without losing compliance or security posture.",
        "By linking innovation metrics to corporate risk dashboards, executives saw progress as measurable, not abstract—and signed off faster as a result."
      ]
    },
    {
      title: "Partnerships and Ecosystem Growth",
      icon: Network,
      imageSrc: "/lovable-uploads/6c065077-2a06-4fc0-8ee5-a1aebd89d0b8.png",
      paragraphs: [
        "No organisation innovates alone. I build and maintain strong partner ecosystems—universities, startups, ISVs, and public agencies—that act as force multipliers.",
        "Through these networks, we gained early access to emerging tech and accelerated testing through shared labs and co-funding models.",
        "This ecosystem thinking expands innovation capacity without expanding headcount, turning partnerships into both R&D engines and talent pipelines."
      ]
    },
    {
      title: "Scalable Knowledge and IP Reuse",
      icon: BookOpen,
      imageSrc: "/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png",
      paragraphs: [
        "Each proof of concept feeds a living knowledge base. I document methods, templates, and reusable code modules that cut onboarding and replication time by over 50%.",
        "At Unisys, these assets became the backbone for repeatable delivery across sectors, turning ad hoc wins into scalable capability.",
        "Institutionalising learning ensures innovation doesn't reset every time a new project starts—it compounds."
      ]
    },
    {
      title: "Future Readiness and Continuous Foresight",
      icon: TrendingUp,
      imageSrc: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png",
      paragraphs: [
        "I treat foresight as a system, not a prediction. Regular environmental scans, weak-signal tracking, and scenario analysis inform our quarterly innovation priorities.",
        "This foresight discipline helped teams pivot early—before market shocks hit—and identify investment gaps ahead of competitors.",
        "It keeps innovation aligned with long-term relevance, ensuring today's work still matters in five years."
      ]
    }
  ];
  
  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageTitle title="Innovation Excellence" />
      
      {/* Hero Section */}
      <div className="mb-12 bg-gradient-to-br from-brand-primary to-[#1a2332] rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-16 text-white">
          <h2 className="text-3xl font-bold mb-6">How I Drive Innovation Excellence</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Innovation is the bridge between what's possible and what's next. I focus on building systems that connect vision to execution, balancing creativity with delivery discipline. Every program I run has clear ownership, measurable outcomes, and fast iteration built in from day one.
            </p>
            <p>
              By fusing strategy, design, and delivery, I help teams see the full lifecycle—from concept sketch to commercial rollout. That end-to-end clarity turns scattered pilots into structured innovation engines.
            </p>
            <p>
              The goal is always the same: measurable impact, shared credit, and repeatable speed.
            </p>
          </div>
        </div>
      </div>
      
      {/* New Leadership in Tech Innovation Podcast */}
      <div className="mb-10 bg-brand-light rounded-lg overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Video container - takes full width on mobile, half on desktop */}
          <div className="w-full h-full min-h-[300px]">
            <VideoEmbed 
              src="https://www.youtube.com/embed/nKkLd1BOsaA" 
              caption="Leadership in Tech Innovation"
              className="h-full"
            />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Leadership in Tech Innovation</h2>
              <p className="text-lg mb-6">
                Leading innovation teams requires balancing technical excellence with strategic vision. I've built high-performing teams that deliver breakthrough solutions by fostering collaboration, empowering talent, and maintaining focus on measurable outcomes that drive business value.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="outline" className="flex items-center gap-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10">
                <Youtube size={16} />
                <a 
                  href="https://youtu.be/nKkLd1BOsaA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-10 bg-brand-accent/30" />
      
      {/* Cloud & IoT Innovation Podcast */}
      <div className="mb-10 bg-brand-light rounded-lg overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Video container - takes full width on mobile, half on desktop */}
          <div className="w-full h-full min-h-[300px]">
            <VideoEmbed 
              src="https://www.youtube.com/embed/-BXyJSr_6Tg" 
              caption="AI, Progress, New Roles, and the Ethics of Tech"
              className="h-full"
            />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Cloud & IoT Innovation Podcast</h2>
              <p className="text-lg mb-6">
                I've built and scaled mission-critical cloud and IoT platforms at AWS and Oracle for national-security clients; now I'm ready to drive breakthrough innovation - rapid-fire prototyping, respectful rule-breaking innovation, and forging the future of secure technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="outline" className="flex items-center gap-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10">
                <Youtube size={16} />
                <a 
                  href="https://www.youtube.com/watch?v=-BXyJSr_6Tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-16 bg-brand-accent/30" />
      
      {/* Innovation Principles - Side-by-Side Feature Layout */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-primary mb-12">
          Innovation Principles in Action
        </h2>
        
        <div className="space-y-12">
          {innovationPrinciples.map((principle, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image - alternates sides */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''} relative`}>
                    <img 
                      src={principle.imageSrc} 
                      alt={principle.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  
                  {/* Content - alternates sides */}
                  <div className={`p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-primary">{principle.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {principle.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Closing Summary */}
      <div className="mt-16 mb-12">
        <Card className="border-0 bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg">
          <CardContent className="p-10">
            <p className="text-center text-lg italic text-gray-700 leading-relaxed max-w-4xl mx-auto">
              That completes the picture—showing you not just build innovation, but scale, secure, and sustain it.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerAsksStars;
