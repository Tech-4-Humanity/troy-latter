
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Separator } from '@/components/ui/separator';

const skillExamples = {
  sovereign: {
    title: "Sovereign AI Deployment (AWS)",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    content: "Situation: A top‑tier Australian intelligence agency partnered with AWS to deploy AI‑driven document summarisation, but their strict data‑sovereignty policies forbade any sensitive content from ever leaving their secure premises.\n\nTask: Deliver a fully on‑premises LLM service—leveraging AWS Outposts—that met the agency's rigorous audit, encryption, and access‑control requirements, while enabling analysts to generate rapid, accurate intelligence briefings.\n\nAction: I assembled and led a dedicated AWS team onsite, oversaw the rack‑and‑stack of Outposts hardware, and collaborated directly with intelligence analysts to tailor the fine‑tuned model to their domain. We embedded comprehensive audit logging, real‑time token telemetry, and classifier‑based bias/hallucination guardrails to ensure every output adhered to security mandates. Continuous feedback loops with the end‑users drove rapid iterations, and I presented fortnightly demos to the agency's CTO council.\n\nOutcome: Within eight months of launch, the solution cut briefing‑prep time by 60%—shrinking a multi‑day task into a 30‑minute analytic sprint—while maintaining 100% data‑sovereignty compliance and recording zero security incidents. This success secured a $1.8 million, multi‑year support and expansion agreement, and set the standard template for future sovereign AI deployments across the government."
  },
  battlefield: {
    title: "Ruggedised Battlefield Cloud Nodes",
    imageSrc: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80",
    content: "Situation: The Department of Defence's Secure Content & Collaboration program challenged Unisys to turn a visionary concept—deployable, battlefield‑grade cloud nodes—into reality. Their existing lab prototypes couldn't survive field conditions or meet strict zero‑trust standards, and they needed a clear execution strategy to move from R&D to front‑line deployment.\n\nTask: Take Unisys's innovation vision and build a fast‑paced, hands‑on pipeline: lead a four‑person core squad (plus external systems‑engineering experts), shape and prioritise rapid PoC sprints, and deliver hardened edge clusters that could withstand shock, heat and network isolation while preserving sovereign data controls.\n\nAction: I kicked off "Working Backwards" workshops with Unisys leadership and Defence stakeholders to align on mission needs, then ran 48‑hour PoC sprints to design, build and test rugged Kubernetes clusters on AWS Snowball Edge. We fostered a high‑trust, fail‑fast culture—discarding two form‑factors, doubling down on a rack‑mount steel chassis, and integrating automated compliance scans into every CI/CD cycle. After each sprint we demoed live at a Defence Innovation Forum, gathered frontline feedback, and iterated overnight.\n\nOutcome: In just two weeks, we cut prototype validation time by 75%, proved sub‑second AI inference under extreme conditions, and demonstrated sovereign data integrity with zero configuration drift. Our bespoke demos convinced Defence leadership to approve a $5 million funding round, and our business‑case proposal mapped a clear path to embed these ruggedised nodes into Unisys's core critical‑infrastructure offerings."
  },
  agent: {
    title: "Agent‑Based Automation",
    imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    content: "Situation: A leading Australian bank engaged Unisys to migrate its trading‑platform toolchain to the cloud, but manual security reviews and policy checks on every code change were costing two weeks per release—jeopardizing regulatory deadlines and eroding developer morale.\n\nTask: Build from scratch a lightweight, AI‑driven system of automation agents that could enforce compliance, remediate low‑risk infra drifts, and free up security teams for strategic work—while preserving full auditability for APRA and ACSC.\n\nAction: I assembled a focused 6‑person "tiger team" of Unisys DevSecOps, data‑science, and compliance experts. Together we ran lean hack‑athons to prototype Lambda‑based agents that scanned pull requests, identified policy violations in YAML and Terraform, and either applied safe fixes or surfaced exceptions for human sign‑off. We instrumented every run with live metrics—tracking drift rates, remediation success, and time saved—and iterated weekly, embedding stakeholder feedback into each new release.\n\nOutcome: The agents slashed manual security gating from 10 days to under 4 hours, boosted deployment frequency by 50%, and reduced high‑severity findings by 70%. Armed with real ROI dashboards showing $250 K in monthly labor savings, the bank committed $2 million to scale the framework enterprise‑wide—and Unisys cemented its role as a data‑driven innovation partner."
  },
  business: {
    title: "Business Case Translation (AWS – Department of Home Affairs)",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    content: "Situation: The Department of Home Affairs had just seen a successful on‑prem AI PoC for document analysis, but despite the clear technical wins, there was no funding commitment to turn it into a production service. Executives needed a compelling, data‑backed business case to green‑light the next phase.\n\nTask: Lead a small, high‑performing team—augmented by an external financial modelling SME—to package the PoC into a robust ROI proposal, translating raw performance metrics into strategic value aligned with national‑security and operational efficiency goals.\n\nAction: I ran intensive "Working Backwards" sessions with Home Affairs leadership to map PoC outcomes to mission KPIs (e.g., reduced processing time, improved compliance posture). We instrumented the PoC with live dashboards showing throughput and error rates, then built a TCO model contrasting the new service against legacy workflows. I personally delivered bespoke demos to the Secretary's office and hosted a Tech Talk at the Government AI Hub to evangelise the solution's impact.\n\nOutcome: The proposal demonstrated a projected 70% reduction in manual review costs—saving $4.8 million over three years—while cutting average document‑processing time from 24 hours to 45 minutes. This clear, quantifiable story convinced the executive committee to approve a $5 million production funding round, embedding the PoC into AWS's core offerings for critical‑infrastructure workloads."
  }
};

const You = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Skills & Experience" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          You bring breakthrough innovation skills and national‑security domain mastery, with proven delivery in regulated environments.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">My Matching Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillExamples).map(([key, example]) => (
            <FeatureCard
              key={key}
              title={example.title}
              imageSrc={example.imageSrc}
            >
              <div className="text-vault-secondary space-y-4">
                {example.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Required Skills & Experience</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Visionary Innovator:</span> You've led AI‑agent frameworks and zero‑trust architectures in National Security settings with a track record of delivery.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">NatSec Fluency:</span> NV2‑cleared professional with deep understanding of the National Security landscape and Standards Australia BCI committee membership.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Hands‑On Technologist:</span> Experience with Terraform, Ansible, Kubernetes & post‑quantum KMS with tangible examples in your GitHub repositories.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Agile Leader:</span> Built "tiger teams" of 3–8 high‑performers with lean kill/scale criteria.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Data‑Driven:</span> Every prototype instrumented with live metrics and ROI dashboards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default You;
