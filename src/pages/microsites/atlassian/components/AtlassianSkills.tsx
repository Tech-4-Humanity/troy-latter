import React from 'react';

export const AtlassianSkills = () => {
  return (
    <>
      {/* Design Technology Focus */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Design technology focus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div>
            <h3 className="text-xs font-semibold text-[#6B778C] mb-1">Prototyping and motion</h3>
            <p className="text-sm text-[#172B4D]">
              Figma interactive prototypes<br />
              Motion and micro interaction exploration<br />
              Framer and similar tools for live flows<br />
              Storyboards and system maps for complex journeys
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#6B778C] mb-1">Code for design</h3>
            <p className="text-sm text-[#172B4D]">
              React and modern JS frameworks<br />
              Design token usage<br />
              Simple component libraries for quick tests<br />
              API integration for real data inside prototypes
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#6B778C] mb-1">AI in design practice</h3>
            <p className="text-sm text-[#172B4D]">
              LLM supported research and synthesis<br />
              RAG patterns for design context<br />
              AI guided flows for service and support journeys<br />
              Attention to safety, logging, and audit needs
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#6B778C] mb-1">Collaboration</h3>
            <p className="text-sm text-[#172B4D]">
              Partnering with product, research, and engineering<br />
              Enabling design teams with small tools and templates<br />
              Clear storytelling for executive and team reviews<br />
              Open, no drama communication style
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Key skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Rapid prototyping',
            'Design systems thinking',
            'AI literacy for product teams',
            'Experimentation culture',
            'Service blueprints',
            'Journey mapping',
            'Multi cloud awareness',
            'Accessibility minded design'
          ].map((skill, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 text-xs border border-[#DFE1E6] rounded-full bg-white/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Education
        </h2>
        <div className="space-y-2 text-sm text-[#172B4D]">
          <p>
            Master of Commerce (Marketing)<br />
            <span className="text-[#6B778C]">University of New South Wales</span>
          </p>
          <p>
            Bachelor of Economics (Law and Industrial Relations)<br />
            <span className="text-[#6B778C]">University of Wollongong</span>
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Micro credentials and certifications
        </h2>
        <div className="space-y-3 text-sm text-[#172B4D]">
          <p>
            AWS Solutions Architect · Azure AI Engineer · Google Cloud Architect · Oracle Cloud
          </p>
          <p>
            OpenAI · Claude · LangChain · LangGraph · Semantic Kernel · MCP Practitioner
          </p>
          <p>
            Supabase · n8n · Make · Pipedream · Hugging Face · Relevance AI · GitHub Copilot
          </p>
          <p>
            Snowflake · Databricks · NVIDIA NIM · Responsible AI Governance · AI Ethics and Policy · Data Privacy and Security
          </p>
          <p>
            PRINCE2 · Prosci ADKAR · ITIL · TOGAF
          </p>
          <p className="text-xs text-[#6B778C] mt-2">
            Certifications support practical work in AI, automation, and design technology rather than drive it.
          </p>
        </div>
      </section>

      {/* Advisory Work */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B778C] mb-4 flex items-center gap-2">
          <span className="w-5 h-0.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></span>
          Advisory work
        </h2>
        <div className="space-y-2 text-sm text-[#172B4D]">
          <p>
            Advisory Board Member<br />
            <span className="text-[#6B778C]">Queensland Government AI Hub</span>
          </p>
          <p>
            Committee Member<br />
            <span className="text-[#6B778C]">Standards Australia Brain Computer Interface and Robotics</span>
          </p>
          <p>
            Former Board Member<br />
            <span className="text-[#6B778C]">IT Service Management Forum Australia</span>
          </p>
        </div>
      </section>
    </>
  );
};
