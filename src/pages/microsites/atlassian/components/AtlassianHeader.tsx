import React from 'react';
import { Phone, Mail, Linkedin, Shield } from 'lucide-react';

export const AtlassianHeader = () => {
  return (
    <header className="border-b border-[#DFE1E6] p-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
        {/* Left: Name and Title */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#172B4D] mb-2 tracking-tight">
            Troy Latter
          </h1>
          <p className="text-base md:text-lg text-[#0052CC] font-medium mb-3">
            Lead Product Designer · Design Technologist · AI for Design Systems
          </p>
          <p className="text-sm text-[#6B778C] leading-relaxed max-w-2xl">
            Design technologist with a background in cloud, AI, and enterprise workflows.  
            Builds working prototypes, tools, and systems that help teams ship better experiences with confidence.
          </p>
        </div>

        {/* Right: Contact and Chips */}
        <div className="lg:text-right">
          {/* Contact Info */}
          <div className="text-sm text-[#6B778C] space-y-1 mb-3">
            <p>Sydney, Australia</p>
            <a 
              href="tel:+61424882136" 
              className="flex items-center gap-1.5 text-[#0052CC] hover:underline lg:justify-end"
            >
              <Phone className="h-3 w-3" />
              +61 424 882 136
            </a>
            <a 
              href="mailto:troy.latter@gmail.com" 
              className="flex items-center gap-1.5 text-[#0052CC] hover:underline lg:justify-end"
            >
              <Mail className="h-3 w-3" />
              troy.latter@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/theinnovater" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#0052CC] hover:underline lg:justify-end"
            >
              <Linkedin className="h-3 w-3" />
              linkedin.com/in/theinnovater
            </a>
            <p className="flex items-center gap-1.5 text-[#172B4D] font-medium lg:justify-end">
              <Shield className="h-3 w-3" />
              Security clearance AGSVA NV2
            </p>
          </div>

          {/* Skill Chips */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#E3F2FF] text-[#0052CC]">
              AI prototyping
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#E3F2FF] text-[#0052CC]">
              React and JS
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#E3F2FF] text-[#0052CC]">
              Figma plugins
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#E3F2FF] text-[#0052CC]">
              Design systems
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
