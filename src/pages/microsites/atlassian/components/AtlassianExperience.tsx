import React from 'react';

export const AtlassianExperience = () => {
  const roles = [
    {
      title: 'Founder and Principal',
      company: 'Tech 4 Humanity · Sydney',
      period: '2025 to present',
      description: 'Design technology and AI studio that builds tools for teams who want practical augmentation across product, design, and engineering. Work includes coded prototypes, design system experiments, and AI powered companion tools.',
      achievements: [
        'Built a ten thousand agent orchestration model and supporting visual maps used by teams as an interactive prototype for complex service flows.',
        'Created small AI companions for design work such as pattern finders, content draft helpers, and RAG based research tools aligned with existing ethics and privacy rules.',
        'Partnered with education, aged care, and transport organisations to sketch and test new experiences using Figma, coded prototypes, and live data.',
        'Delivered working blueprints that help teams reason about AI inside their design system instead of treating it as a side feature.'
      ]
    },
    {
      title: 'APAC CTO and Strategic Foresight Lead',
      company: 'Unisys · APAC',
      period: '2024 to 2025',
      description: 'Field CTO for high trust clients across government, telco, and financial services. Focused on how AI and automation change the day to day experience for staff and customers.',
      achievements: [
        'Designed AI supported procurement and service flows that acted first as prototypes, then as production patterns across quoting, approvals, and case management.',
        'Led multi cloud LLM pilots that included interaction models, guardrail design, and explainable behaviour for executive teams.',
        'Produced visual and written blueprints that aligned product, design, security, and delivery teams around a shared view of future experiences.',
        'Coached internal designers and engineers on ways to experiment with AI safely inside normal design rhythms.'
      ]
    },
    {
      title: 'Principal Solutions Architect and Global Capability Adviser',
      company: 'Amazon Web Services · APAC',
      period: '2019 to 2023',
      description: 'Senior architecture and advisory role across government, health, and finance clients. Many engagements centred on experimentation, workshops, and design of new interaction models.',
      achievements: [
        'Built interactive demos for Cross River Rail, national health programs, and ASEAN disaster platforms with React and cloud native stacks, used as shared design tools by product and operations teams.',
        'Worked with Alexa and related teams on multi modal interaction ideas that combined voice, screen, and ambient cues.',
        'Ran more than one hundred sessions that blended architecture review with journey mapping and service blueprints for CIO and product groups.'
      ]
    },
    {
      title: 'Innovation Adviser and Cloud Architect',
      company: 'Oracle · APAC',
      period: '2016 to 2019',
      description: 'Advised national security, immigration, and healthcare programs. Helped teams visualise and test experiences for citizens and staff inside tight policy and bandwidth limits.',
      achievements: [
        'Created experience models and simple interactive prototypes for visa, identity, and smart city platforms that shaped tender responses and delivery plans.',
        'Worked with cross border teams to keep user journeys consistent while respecting local constraints.'
      ]
    },
    {
      title: 'Business Value Consultant and Senior Consultant roles',
      company: 'HPE and consulting · Australia',
      period: '2010 to 2016',
      description: 'Led change and service design for Defence, Finance, Human Services, and Immigration. Work focused on citizen journeys, staff experience, and adoption of digital services.',
      achievements: [
        'Shaped the experience for secure sharing and collaboration in the SC2S program and whole of government service changes.',
        'Helped teams move from document driven change to journey based views that linked policy, process, and interface decisions.'
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-6 flex items-center gap-2"
          style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
        <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
        Experience
      </h2>
      <div className="space-y-6">
        {roles.map((role, index) => (
          <article key={index} className="pb-6 border-b border-[#DFE1E6] last:border-0 hover:-translate-y-0.5 transition-all duration-200 ease-in-out p-4 rounded-lg hover:shadow-[0_4px_12px_rgba(0,82,204,0.15)]">
            <div className="flex flex-wrap gap-2 items-baseline mb-2">
              <h3 className="text-base font-bold text-[#172B4D] bg-[#FAFBFC] px-2 py-0.5 rounded inline-block"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{role.title}</h3>
              <span className="text-sm text-[#6B778C] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{role.company}</span>
              <span className="text-xs text-[#6B778C]" style={{ fontFamily: 'Inter, sans-serif' }}>· {role.period}</span>
            </div>
            <p className="text-sm text-[#172B4D] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>{role.description}</p>
            <ul className="space-y-2">
              {role.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-[#172B4D] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#0052CC] before:text-base"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
