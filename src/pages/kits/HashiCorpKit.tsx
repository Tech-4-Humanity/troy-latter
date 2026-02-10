import { KitLayout } from './KitLayout';

const HashiCorpKit = () => (
  <KitLayout
    company="HashiCorp"
    role="Field CTO — Asia Pacific Japan"
    location="APAC"
    date="February 2026"
    fitScore={65}
    fitLabel="Cluster Match 81%"
    accentColor="#7C3AED"
    accentLight="rgba(124,58,237,0.08)"
    coverLetter={
      <>
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my interest in the Field CTO role for Asia Pacific Japan at HashiCorp. With 15 years leading enterprise technology strategy across AWS, Oracle, Unisys, and HPE throughout APAC, I bring a distinctive combination of executive technical leadership and hands-on infrastructure architecture that directly aligns with this position.</p>
        <p>At AWS, I built a $100M+ pipeline across JAPAC by architecting multi-cloud solutions for government and enterprise customers — many of whom were evaluating Terraform, Vault, and Consul as part of their infrastructure modernisation. At Unisys, I led presales engineering across Australia and New Zealand, designing Infrastructure as Code baselines and hybrid cloud governance frameworks for Defence and critical infrastructure clients.</p>
        <p>Three capabilities I would bring immediately:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Multi-cloud architecture authority</strong> — Designed and delivered AWS, Azure, GCP, and Oracle hybrid stacks for ASEAN ministries, Australian Defence, and ASX-listed enterprises. IaC governance is not theoretical for me; it is operational.</li>
          <li><strong>Executive-level evangelism</strong> — Delivered keynotes at AWS re:Invent, AI Summit, and 500+ executive briefings. I can represent HashiCorp's vision at C-suite level across the region.</li>
          <li><strong>APAC market depth</strong> — 8 years based across Singapore, Australia, and Japan markets. I understand procurement cycles, sovereign requirements, and partner ecosystems across APJ.</li>
        </ul>
        <p>I am particularly drawn to HashiCorp's mission of enabling multi-cloud infrastructure at scale. My current work with Tech 4 Humanity building AI-augmented governance frameworks demonstrates my commitment to infrastructure that serves humanity responsibly.</p>
        <p>I would welcome the opportunity to discuss how my experience can accelerate HashiCorp's growth and technical authority across APJ.</p>
        <p>Regards,<br />Troy Latter</p>
      </>
    }
    skills={[
      { title: 'Multi-Cloud Architecture', level: 'L5 — Confirmed', description: 'Architected AWS, Azure, GCP, Oracle stacks across APAC. Directly relevant to Terraform multi-cloud positioning.' },
      { title: 'IaC (Terraform)', level: 'L4 — Emerging', description: 'Defined IaC baselines for Unisys Defence programs. Actively building Terraform competency.' },
      { title: 'Cloud Governance', level: 'L5 — Confirmed', description: 'Cloud governance for Defence clients, federal compliance, multi-jurisdictional sovereignty requirements.' },
      { title: 'Executive Foresight', level: 'L5 — Confirmed', description: 'CTO-level foresight briefs for Defence and DFAT. Strategic planning at board level.' },
      { title: 'Public Speaking', level: 'L5 — Confirmed', description: 'Keynotes at AWS re:Invent, AI Summit. 500+ executive briefings across JAPAC.' },
      { title: 'Stakeholder Influence', level: 'L5 — Confirmed', description: 'Executive briefings across JAPAC, government CIOs, enterprise CTOs.' },
    ]}
    starStories={[
      {
        situation: 'HashiCorp needs a Field CTO who can articulate infrastructure-as-code value to C-suite across diverse APJ markets.',
        task: 'At AWS, I was tasked with building the JAPAC AI/ML pipeline from near-zero to $100M+ in 18 months.',
        action: 'Designed co-sell programs with Oracle and NVIDIA, created presales playbooks, delivered 200+ executive briefings, and built a technical advisory practice spanning 6 countries.',
        result: 'Pipeline exceeded $100M, 40% conversion rate, established AWS as the default AI platform for 3 government agencies.',
      },
      {
        situation: 'Unisys needed to modernise its presales motion for Australian government infrastructure deals.',
        task: 'Rebuild the solutions engineering practice to lead with IaC, hybrid cloud, and security-first architecture.',
        action: 'Created IaC baselines using Terraform patterns, defined cloud governance playbooks, trained 15 solutions engineers on multi-cloud positioning.',
        result: 'Won 3 Defence contracts worth $60M pipeline, reduced proposal cycle by 30%, established IaC as default architecture standard.',
      },
    ]}
    gapAnalysis={
      <p><strong>Terraform/Vault/Consul depth</strong> — Current L4, target L5. Mitigation: 6 weeks intensive certification path + HashiCorp partner enablement. Strong adjacent skills in AWS CDK, CloudFormation, and multi-cloud IaC make this a fast close.</p>
    }
  />
);

export default HashiCorpKit;
