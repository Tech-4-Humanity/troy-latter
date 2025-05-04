
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import VideoEmbed from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { Play, Youtube } from 'lucide-react';

const CustomerAsksStars = () => {
  const drivingVisionItems = [
    {
      title: "From Vision to Roadmap",
      description: "Shape and prioritise the innovation pipeline. At Unisys I took five siloed AI pilots across Dyson, learnt new code, found new parners, and delivered a six‑month PoC roadmap that unlocked an $8 M follow‑on pipeline in 12 weeks."
    },
    {
      title: "Building 2 Pizza Teams",
      description: "Lead small, high‑trust teams with external experts. At AWS I formed a lean group of diverse experts vto run two‑week \"Sprint Marathons,\" and achieved a 65% PoC funding conversion - tripling throughput and restoring executive faith."
    },
    {
      title: "Breaking the Prototype‑to‑Reality Barrier",
      description: "Design, build and test bleeding‑edge IaC demos. At Oracle I authored modular playbooks and orchestrated go to market resources, presented live demos to Defence leadership, securing $5 M in production funding."
    },
    {
      title: "Culture & Pace",
      description: "Embed a fail‑fast, learn‑fast ethos. I've introduced weekly \"kill/scale\" criteria, Friday C‑suite Demo Days, and real‑time innovation dashboards at every company - cutting PoC cycle times from 12 weeks to as little as 4 weeks."
    },
    {
      title: "Customer‑first Validation",
      description: "Showcase PoCs, iterate on feedback. I've demoed AI agents and edge‑mesh solutions at AWS summits, Unisys innovation forums and government roadshows - capturing operator feedback that directly drove our next sprint and built customer evangelists."
    },
    {
      title: "Technical Evangelism & Business Case Translation",
      description: "Bridge R&D to board‑room buy‑in. Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow‑on contracts, I've turned technical wins into strategic wins for every stakeholder."
    }
  ];
  
  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageTitle title="Force Multiplication" />
      
      {/* Hero section with video */}
      <div className="mb-10 bg-vault-light rounded-lg overflow-hidden shadow-xl">
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
              <h2 className="text-2xl font-bold text-vault-primary mb-4">Cloud & IoT Innovation Podcast</h2>
              <p className="text-lg mb-6">
                I've built and scaled mission-critical cloud and IoT platforms at AWS and Oracle for national-security clients; now I'm here to break the mould at Vault - rapid-fire prototyping, respectful rule-breaking innovation, and forging the future of sovereign cloud.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="flex items-center gap-2 bg-vault-accent hover:bg-vault-accent/80">
                <Play size={16} />
                <a 
                  href="https://www.youtube.com/watch?v=-BXyJSr_6Tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Listen to the full podcast
                </a>
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2 border-vault-accent text-vault-accent hover:bg-vault-accent/10">
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
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      {/* Vision Items with improved layout */}
      <div className="space-y-8 mb-12">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-vault-primary text-center">How I Will Drive Vault's Vision</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {drivingVisionItems.map((item, index) => (
                <Card key={index} className="border border-vault-accent/20 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-xl text-vault-primary mb-3">{item.title}</h3>
                    <p className="text-vault-secondary">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional content section with another video */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8 text-center">Technical Leadership in Action</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-vault-primary mb-4">Leading Innovation at Scale</h3>
                <p className="text-vault-secondary mb-4">
                  Watch this technical deep dive into how I've led innovation teams to deliver
                  cutting-edge solutions that meet real business needs and drive strategic outcomes.
                </p>
                <p className="text-vault-secondary">
                  From concept to production, I've guided teams through the entire innovation lifecycle,
                  ensuring that technical excellence translates into business value.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <VideoEmbed 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              caption="Innovation Leadership: From Concept to Production"
              className="shadow-lg rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAsksStars;
