import { KitLayout } from './KitLayout';

const ActGovKit = () => (
  <KitLayout
    company="ACT Government"
    role="Executive Branch Manager — Data, AI & Digital Records"
    location="Canberra, ACT"
    date="February 2026"
    fitScore={87}
    fitLabel="Strong Fit — Government AI & Data Leadership"
    accentColor="#1D4ED8"
    accentLight="rgba(29,78,216,0.08)"
    coverLetter={
      <>
        <p>Dear Selection Panel,</p>
        <p>I am applying for the Executive Branch Manager, Data, AI and Digital Records position within the ACT Government. I bring 15 years of experience leading AI strategy, data governance, and digital transformation programs across Australian federal and state government, with direct accountability for sovereign-grade systems at organisations including HPE, Oracle, AWS, and Unisys.</p>
        <p>My background directly addresses the core requirements of this role:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>AI Strategy & Governance:</strong> Developed AI ethics frameworks now referenced by Standards Australia. Led ChatGPT Enterprise pilots for government agencies at Unisys, establishing responsible AI adoption playbooks with evidence-gated outputs.</li>
          <li><strong>Data Sovereignty & Governance:</strong> Designed cross-agency data governance frameworks at HPE covering health, finance, and defence sectors. Implemented data residency planning for Oracle across ASEAN jurisdictions with full PII compliance.</li>
          <li><strong>Digital Records Modernisation:</strong> Delivered platform modernisation for Defence and Finance systems, digitising records management workflows and establishing auditability standards that reduced compliance cycle time by 40%.</li>
          <li><strong>Executive Stakeholder Management:</strong> Managed top-10 government accounts at HPE and AWS. Delivered executive briefings to departmental secretaries and CIOs across federal and state government.</li>
        </ul>
        <p>I am an Australian citizen based in the ACT region and hold current security clearances relevant to government service. I am deeply committed to public service technology that serves citizens responsibly.</p>
        <p>I welcome the opportunity to discuss how my experience can advance the ACT Government's data and AI agenda.</p>
        <p>Regards,<br />Troy Latter</p>
      </>
    }
    skills={[
      { title: 'Regulatory Compliance', level: 'L5 — Confirmed', description: 'National compliance programs across health, defence, finance. Direct government experience.' },
      { title: 'Data Privacy & PII Handling', level: 'L5 — Confirmed', description: 'Health sector compliance, de-identification pipelines, sovereignty frameworks.' },
      { title: 'Ethical AI Policy', level: 'L5 — Confirmed', description: 'AI ethics frameworks referenced by Standards Australia. AI Hub national policy contributor.' },
      { title: 'Data Governance', level: 'L5 — Confirmed', description: 'Cross-agency frameworks at HPE. Data contracts for government agreements.' },
      { title: 'Change Management', level: 'L5 — Confirmed', description: 'Prosci ADKAR certified. Led agile transformations for government programs.' },
      { title: 'AI Deployment', level: 'L5 — Confirmed', description: 'ChatGPT Enterprise pilots for government. Responsible AI adoption at scale.' },
    ]}
    starStories={[
      {
        situation: 'ACT Government needs an executive who can lead AI and data transformation across the public service while maintaining sovereignty and citizen trust.',
        task: 'At Unisys, I was tasked with leading AI adoption for Australian government clients, starting with zero AI programs in the pipeline.',
        action: 'Established ChatGPT Enterprise pilots with evidence-gated output quality controls, built responsible AI playbooks, trained 50+ government executives on AI governance, created procurement automation agents for government buying processes.',
        result: '5 government agencies adopted AI programs within 12 months, zero compliance incidents, established Unisys as the trusted AI partner for government.',
      },
      {
        situation: "HPE's government clients needed cross-agency data governance without compromising individual agency sovereignty.",
        task: 'Design and implement a data governance framework spanning health, finance, and defence portfolios.',
        action: 'Developed data contracts and sharing agreements, implemented PII handling standards, created auditability frameworks with full traceability, established privacy impact assessment processes.',
        result: 'Framework adopted across 4 agencies, reduced compliance audit preparation from 6 weeks to 2 weeks, zero data breaches over 3-year period.',
      },
    ]}
  />
);

export default ActGovKit;
