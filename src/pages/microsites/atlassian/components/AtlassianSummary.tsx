import React from 'react';

export const AtlassianSummary = () => {
  return (
    <>
      {/* Summary Section */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Summary
        </h2>
        <div className="space-y-4 text-sm text-[#172B4D]">
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
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Recent impact
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-sm text-[#172B4D] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#0052CC] before:text-base before:top-0">
            Built AI supported quote and workflow prototypes that removed approval delays and helped teams test new journeys inside Jira, Slack, and Salesforce.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#0052CC] before:text-base before:top-0">
            Designed multi agent orchestration models used as high fidelity prototypes for complex service flows, connecting design, data, and policy groups.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#0052CC] before:text-base before:top-0">
            Created live coded prototypes with React and design tokens so that design reviews used real behaviour instead of static screens.
          </div>
          <div className="text-sm text-[#172B4D] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#0052CC] before:text-base before:top-0">
            Introduced lightweight automation inside design and research workflows which lifted delivery speed for cross functional teams.
          </div>
        </div>
      </section>
    </>
  );
};
