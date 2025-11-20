import React from 'react';

export const AtlassianSummary = () => {
  return (
    <>
      {/* Summary Section */}
      <section className="bg-[#DEEBFF]/30 p-6 rounded-lg">
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Summary
        </h2>
        <div className="space-y-4 text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
          <p>
            Senior design technologist with more than fifteen years working across AWS, Oracle, Unisys, and public sector clients.
            I operate where product, design, and engineering meet.
            I build coded prototypes, design tools, and AI supported workflows that help teams explore ideas quickly and ship with less friction.
          </p>
          <p>
            I have worked as a field CTO and principal architect for large programs.
            My focus has always been on clear experience design, inclusive practices, and safe use of AI.
            I enjoy pairing with designers and engineers to create shared language, working models, and sense making maps that are simple to use.
          </p>
        </div>
      </section>

      {/* Recent Impact Section */}
      <section className="bg-[#DEEBFF]/30 p-6 rounded-lg">
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Recent impact
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-sm text-[#172B4D] pl-4 pr-3 py-2 relative border-l-2 border-[#0052CC] hover:bg-[#FAFBFC] transition-all duration-200 rounded"
               style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Built AI supported quote and workflow prototypes that removed approval delays and helped teams test new journeys inside Jira, Slack, and Salesforce.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 pr-3 py-2 relative border-l-2 border-[#0052CC] hover:bg-[#FAFBFC] transition-all duration-200 rounded"
               style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Designed multi agent orchestration models used as high fidelity prototypes for complex service flows, connecting design, data, and policy groups.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 pr-3 py-2 relative border-l-2 border-[#0052CC] hover:bg-[#FAFBFC] transition-all duration-200 rounded"
               style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Created live coded prototypes with React and design tokens so that design reviews used real behaviour instead of static screens.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 pr-3 py-2 relative border-l-2 border-[#0052CC] hover:bg-[#FAFBFC] transition-all duration-200 rounded"
               style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Introduced lightweight automation inside design and research workflows which lifted delivery speed for cross functional teams.
          </div>
        </div>
      </section>
    </>
  );
};
