import React from 'react';
import { Phone, Mail, Linkedin, Shield } from 'lucide-react';

export const AtlassianHeader = () => {
  return (
    <header className="border-b border-[#DFE1E6] p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white to-[#FAFBFC]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between">
        {/* Left: Name and Title */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#172B4D] mb-2 tracking-tight leading-tight" 
              style={{ fontFamily: 'Inter, sans-serif' }}>
            Troy Latter
          </h1>
          <p className="text-base md:text-lg text-[#0052CC] font-semibold mb-3 leading-snug"
             style={{ fontFamily: 'Inter, sans-serif' }}>
            Lead Product Designer · Design Technologist · AI for Design Systems
          </p>
          <p className="text-sm text-[#6B778C] leading-relaxed max-w-2xl"
             style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            Design technologist with a background in cloud, AI, and enterprise workflows.  
            Builds working prototypes, tools, and systems that help teams ship better experiences with confidence.
          </p>
        </div>

        {/* Right: Contact and Chips */}
        <div className="lg:text-right">
          {/* Contact Info */}
          <div className="text-sm text-[#6B778C] space-y-1 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>Sydney, Australia</p>
            <a 
              href="tel:+61424882136" 
              className="flex items-center gap-1.5 text-[#0052CC] hover:text-[#0747A6] lg:justify-end transition-all duration-200 ease-in-out underline-offset-2 decoration-transparent hover:decoration-current focus-visible:ring-2 focus-visible:ring-[#0052CC] focus-visible:ring-offset-2 rounded"
              aria-label="Call Troy Latter"
            >
              <Phone className="h-4 w-4 transition-transform hover:rotate-12" />
              +61 424 882 136
            </a>
            <a 
              href="mailto:troy.latter@gmail.com" 
              className="flex items-center gap-1.5 text-[#0052CC] hover:text-[#0747A6] lg:justify-end transition-all duration-200 ease-in-out underline-offset-2 decoration-transparent hover:decoration-current focus-visible:ring-2 focus-visible:ring-[#0052CC] focus-visible:ring-offset-2 rounded"
              aria-label="Email Troy Latter"
            >
              <Mail className="h-4 w-4 transition-transform hover:scale-110" />
              troy.latter@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/theinnovater" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#0052CC] hover:text-[#0747A6] lg:justify-end transition-all duration-200 ease-in-out underline-offset-2 decoration-transparent hover:decoration-current focus-visible:ring-2 focus-visible:ring-[#0052CC] focus-visible:ring-offset-2 rounded"
              aria-label="Visit Troy Latter's LinkedIn profile"
            >
              <Linkedin className="h-4 w-4 transition-transform hover:scale-110" />
              linkedin.com/in/theinnovater
            </a>
            <p className="flex items-center gap-1.5 text-[#172B4D] font-semibold lg:justify-end" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Shield className="h-4 w-4 text-[#36B37E]" />
              Security clearance AGSVA NV2
            </p>
          </div>

          {/* Skill Chips */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#DEEBFF] text-[#0052CC] border border-[#B3D4FF] hover:bg-[#B3D4FF] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer min-h-[44px] sm:min-h-0 flex items-center" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
              AI prototyping
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#DEEBFF] text-[#0052CC] border border-[#B3D4FF] hover:bg-[#B3D4FF] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer min-h-[44px] sm:min-h-0 flex items-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
              React and JS
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#DEEBFF] text-[#0052CC] border border-[#B3D4FF] hover:bg-[#B3D4FF] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer min-h-[44px] sm:min-h-0 flex items-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
              Figma plugins
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#DEEBFF] text-[#0052CC] border border-[#B3D4FF] hover:bg-[#B3D4FF] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer min-h-[44px] sm:min-h-0 flex items-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
              Design systems
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
