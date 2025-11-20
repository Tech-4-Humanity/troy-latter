import React from 'react';
import { AtlassianHeader } from './components/AtlassianHeader';
import { AtlassianSummary } from './components/AtlassianSummary';
import { AtlassianExperience } from './components/AtlassianExperience';
import { AtlassianSkills } from './components/AtlassianSkills';

const AtlassianIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFBFC] via-[#F4F5F7] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Card */}
        <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:rounded-3xl" 
             style={{ boxShadow: '0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)' }}>
          {/* Header Section */}
          <AtlassianHeader />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
            {/* Main Content - 60% */}
            <main className="lg:col-span-3 space-y-8 animate-fade-in">
              <AtlassianSummary />
              <AtlassianExperience />
            </main>

            {/* Sidebar - 40% */}
            <aside className="lg:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AtlassianSkills />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlassianIndex;
