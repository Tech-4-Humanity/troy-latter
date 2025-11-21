import React from 'react';

export const AtlassianSkills = () => {
  return (
    <>
      {/* Design Technology Focus */}
      <section>
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Design technology focus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="p-3 bg-[#FAFBFC] rounded-lg hover:bg-white transition-all duration-200">
            <h3 className="text-xs font-bold text-[#6B778C] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Prototyping and motion</h3>
            <p className="text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
              Figma interactive prototypes<br />
              Motion and micro interaction exploration<br />
              Framer and similar tools for live flows<br />
              Storyboards and system maps for complex journeys
            </p>
          </div>
          <div className="p-3 bg-[#FAFBFC] rounded-lg hover:bg-white transition-all duration-200">
            <h3 className="text-xs font-bold text-[#6B778C] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Code for design</h3>
            <p className="text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
              React and modern JS frameworks<br />
              Design token usage<br />
              Simple component libraries for quick tests<br />
              API integration for real data inside prototypes
            </p>
          </div>
          <div className="p-3 bg-[#FAFBFC] rounded-lg hover:bg-white transition-all duration-200">
            <h3 className="text-xs font-bold text-[#6B778C] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>AI in design practice</h3>
            <p className="text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
              LLM supported research and synthesis<br />
              RAG patterns for design context<br />
              AI guided flows for service and support journeys<br />
              Attention to safety, logging, and audit needs
            </p>
          </div>
          <div className="p-3 bg-[#FAFBFC] rounded-lg hover:bg-white transition-all duration-200">
            <h3 className="text-xs font-bold text-[#6B778C] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Collaboration</h3>
            <p className="text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
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
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
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
              className="px-3 py-1.5 text-xs font-medium border border-[#B3D4FF] rounded-full bg-[#DEEBFF] text-[#0052CC] hover:bg-[#B3D4FF] hover:scale-105 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0052CC] focus-visible:ring-offset-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Education
        </h2>
        <div className="space-y-3 text-sm text-[#172B4D]">
          <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Master of Commerce (Marketing)<br />
            <span className="text-xs text-[#6B778C] font-normal">University of New South Wales</span>
          </p>
          <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Bachelor of Economics (Law and Industrial Relations)<br />
            <span className="text-xs text-[#6B778C] font-normal">University of Wollongong</span>
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Micro credentials and certifications
        </h2>
        <div className="space-y-3 text-sm text-[#172B4D]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
          <div className="border-l-2 border-[#DFE1E6] pl-3 hover:border-[#0052CC] transition-colors">
            <span className="text-xs font-bold text-[#6B778C]">Cloud (4):</span><br />
            AWS Solutions Architect · Azure AI Engineer · Google Cloud Architect · Oracle Cloud
          </div>
          <div className="border-l-2 border-[#DFE1E6] pl-3 hover:border-[#0052CC] transition-colors">
            <span className="text-xs font-bold text-[#6B778C]">AI Tools (6):</span><br />
            OpenAI · Claude · LangChain · LangGraph · Semantic Kernel · MCP Practitioner
          </div>
          <div className="border-l-2 border-[#DFE1E6] pl-3 hover:border-[#0052CC] transition-colors">
            <span className="text-xs font-bold text-[#6B778C]">Automation (7):</span><br />
            Supabase · n8n · Make · Pipedream · Hugging Face · Relevance AI · GitHub Copilot
          </div>
          <div className="border-l-2 border-[#DFE1E6] pl-3 hover:border-[#0052CC] transition-colors">
            <span className="text-xs font-bold text-[#6B778C]">Data & Governance (6):</span><br />
            Snowflake · Databricks · NVIDIA NIM · Responsible AI Governance · AI Ethics and Policy · Data Privacy and Security
          </div>
          <div className="border-l-2 border-[#DFE1E6] pl-3 hover:border-[#0052CC] transition-colors">
            <span className="text-xs font-bold text-[#6B778C]">Management (4):</span><br />
            PRINCE2 · Prosci ADKAR · ITIL · TOGAF
          </div>
          <p className="text-xs text-[#6B778C] mt-4 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
            Certifications support practical work in AI, automation, and design technology rather than drive it.
          </p>
        </div>
      </section>

      {/* Advisory Work */}
      <section>
        <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-[#6B778C] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 0 16px rgba(0, 82, 204, 0.1)' }}>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#0052CC] via-[#0747A6] to-[#2684FF] rounded-full"></span>
          Advisory work
        </h2>
        <div className="space-y-3 text-sm text-[#172B4D]">
          <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Advisory Board Member<br />
            <span className="text-xs text-[#6B778C] font-normal">Queensland Government AI Hub</span>
          </p>
          <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Committee Member<br />
            <span className="text-xs text-[#6B778C] font-normal">Standards Australia Brain Computer Interface and Robotics</span>
          </p>
          <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Former Board Member<br />
            <span className="text-xs text-[#6B778C] font-normal">IT Service Management Forum Australia</span>
          </p>
        </div>
      </section>
    </>
  );
};
