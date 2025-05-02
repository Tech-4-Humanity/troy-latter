import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PageTitle } from '@/components/PageTitle';
import { Separator } from '@/components/ui/separator';

const asksExamples = {
  compliance: {
    title: 'Compliance & Audit Fatigue',
    imageSrc: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'The Department of Human Services was spending two weeks on manual ASD/ACSC audit prep for its flagship myGov platform—tying up scarce security teams and delaying critical feature releases.' },
      { label: 'Task', text: 'Lead a small Vault‑AWS squad and partner with DHS compliance experts to architect a continuous, automated audit pipeline that upheld the strictest government controls without adding bureaucracy.' },
      { label: 'Action', text: 'We ran "Working Backwards" sessions with DHS leadership to define fast‑fail criteria and success metrics, then built a Continuous Compliance Agent on AWS Outposts. This agent scanned infrastructure‑as‑code and runtime configurations in real time, surfaced drift against Vault\'s zero‑trust policies, and auto‑generated fully formatted, ASD‑ready audit reports. Across every sprint, we demoed live integrations to stakeholders, gathered feedback, and iterated on new compliance checks within 24 hours.' },
      { label: 'Outcome', text: 'Audit prep time plunged from two weeks to under one hour, manual effort dropped by 85%, and DHS was able to certify three major releases in half the usual time—freeing security teams to focus on strategic hardening rather than checkbox reviews.' }
    ]
  },
  threat: {
    title: 'Threat Detection Overload',
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Critical‑infrastructure operators and Defence SOCs were drowning in thousands of daily alerts, leading to alert fatigue, delayed incident response, and rising operational risk.' },
      { label: 'Task', text: 'Shape and execute a Vault‑Unisys PoC to cut noise, automate response playbooks, and rapidly validate the approach with frontline security analysts.' },
      { label: 'Action', text: 'I formed a lean "tiger team" combining Vault R&D, Unisys threat experts, and customer SOC leads. We ran rapid‑fire design sprints, then deployed a federated Anomaly‑Detection Agent on AWS Lambda to learn each network\'s normal behaviour. Alongside, we developed a Playbook Orchestrator agent that auto‑launched containment workflows for confirmed threats. We demonstrated the end‑to‑end flow in live attack simulations, refined machine‑learning thresholds every 48 hours, and rolled out customer feedback into each iteration.' },
      { label: 'Outcome', text: 'False positives collapsed by 92%, mean‑time‑to‑contain dropped from four hours to 20 minutes, and the customer estimated $1.2 million in annual cost avoidance from reduced analyst hours—paving the way for a $3 million service contract to scale the solution across all critical‑infra sites.' }
    ]
  },
  sovereign: {
    title: 'Sovereign AI & LLM Risks',
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Intelligence agencies craved generative AI for rapid document analysis but feared sending classified data to cloud LLM services due to sovereignty and security concerns.' },
      { label: 'Task', text: 'Lead a Vault‑Oracle team to design a fully on‑prem sovereign LLM framework that gave analysts the power of GPT‑style models without a single data leak or reliance on external APIs.' },
      { label: 'Action', text: 'We convened cross‑agency design workshops and built a ruggedised LLM cluster in Oracle Cloud\'s private data centre, embedding hardware‑backed key management and real-time audit logs. We layered in a "Hallucination Guard" agent that cross‑checked every AI output against internal knowledge bases. Through weekly demos to intelligence heads, we polished fine‑tuning on domain‑specific corpora and hardened our chain‑of‑custody controls in continuous‑integration pipelines.' },
      { label: 'Outcome', text: 'Analysts cut research cycles by 60%, generating actionable intelligence in under an hour instead of days, with zero compliance incidents over a one‑year pilot. This breakthrough secured a $2 million production license and established Vault\'s framework as the blueprint for sovereign AI across the National Intelligence Community.' }
    ]
  },
  cost: {
    title: 'Operational Cost Creep',
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'An energy grid operator on AWS was bleeding money—over‑provisioned VMs and storage drove up monthly cloud bills by 25%, with no real‑time insight into usage patterns.' },
      { label: 'Task', text: 'Execute a Vault‑AWS collaboration to build a predictive, autonomous cost‑optimization service that rightsizes workloads and forecasts demand—turning cost control from reactive to proactive.' },
      { label: 'Action', text: 'I assembled a five‑person team of Vault engineers and AWS FinOps specialists, defined cost‑savings targets with the CFO, and ran rapid PoC sprints to integrate CloudWatch metrics with a machine‑learning forecasting layer on AWS SageMaker. We deployed an Autonomous Resource Broker agent that automatically adjusted instance sizes and schedules batch jobs in off‑peak windows, then demoed live cost dashboards to executives every sprint.' },
      { label: 'Outcome', text: 'The operator achieved 28% monthly cost savings—roughly $500K per month—without any service degradation. Predictive scaling cut capacity spikes by 80%, and the success case secured a $1 million annual managed service agreement to roll out the solution grid‑wide.' }
    ]
  },
  blueprints: {
    title: 'Blueprints for Breakthroughs',
    imageSrc: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Multiple Vault PoC teams were working in isolation, lacking consistent processes for ideation, validation and go/no‑go decisions—resulting in long ramp‑up times, uneven stakeholder buy‑in, and fewer than 1 in 5 PoCs ever reaching production.' },
      { label: 'Task', text: 'Embed a suite of proven innovation methods and activities—ranging from Design Thinking to public hackathons—to create a fast, repeatable pipeline that drives real‑world breakthroughs and a culture of empowered experimentation.' },
      { label: 'Action', text: 'Launched monthly Design Thinking Bootcamps to map user journeys and uncover high‑value problem areas. Ran bi‑weekly Working Backwards Workshops with C‑suite and frontline customers to define success metrics before writing a single line of code. Instituted Lean UX Sprints—two‑day rapid prototyping sessions where cross‑functional "tiger teams" built and tested mockups with real users. Hosted public Innovation Days and Tech Talks to showcase early prototypes, gather feedback, and build external excitement. Piloted Open Innovation Challenges, inviting subject‑matter experts and university partners to contribute templates, playbooks and code samples. Codified a Kill‑or‑Scale Decision Framework with clear criteria around strategic impact, technical feasibility and compliance readiness.' },
      { label: 'Outcome', text: 'Within one quarter, we halved the average ideation‑to‑PoC timeline from 8 weeks to 4 weeks, raised stakeholder alignment scores by 40%, and doubled the PoC success rate—transforming Vault\'s R&D from ad‑hoc experiments into a disciplined, high‑output engine.' }
    ]
  }
};

const CustomerAsksStars = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Critical Customer Challenges & Vault Solutions" />
      
      <div className="text-lg mb-8">
        <p className="mb-4">
          As Australia's sovereign cloud leader, Vault Cloud delivers innovative solutions for the most pressing challenges 
          facing government agencies and critical infrastructure operators.
        </p>
        <p className="mb-4">
          Our collaborative approach combines deep expertise in secure cloud architecture with agile delivery methods to 
          create transformative solutions that meet the unique needs of high-security environments.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">Real-World Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(asksExamples).map(([key, example]) => (
            <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div 
                className="cursor-pointer"
                onClick={() => setOpenKey(openKey === key ? null : key)}
              >
                <AspectRatio ratio={16/9}>
                  <img 
                    src={example.imageSrc} 
                    alt={example.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-vault-primary mb-2">{example.title}</h3>
                <p className="text-vault-secondary text-sm mb-3">
                  {openKey === key ? "Click to hide details" : "Click for full STAR story"}
                </p>
                {openKey === key && (
                  <div className="bg-vault-light p-4 rounded-lg text-left space-y-3 animate-fade-in">
                    {example.star.map((item) => (
                      <div key={item.label} className="space-y-1">
                        <p className="font-medium text-vault-primary">{item.label}:</p>
                        <p className="text-vault-secondary text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">How Vault Addresses Customer Needs</h2>
        <p className="text-lg mb-6">
          Our innovative approach transforms complex security and operational challenges into strategic advantages, 
          delivering measurable outcomes through cutting-edge technology solutions built specifically for high-security environments.
        </p>
      </div>
    </div>
  );
};

export default CustomerAsksStars;
