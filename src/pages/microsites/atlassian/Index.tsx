import React from 'react';
import { AtlassianHeader } from './components/AtlassianHeader';
import { AtlassianSummary } from './components/AtlassianSummary';
import { AtlassianExperience } from './components/AtlassianExperience';
import { AtlassianSkills } from './components/AtlassianSkills';

const AtlassianIndex = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
          {/* Header Section */}
          <AtlassianHeader />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
            {/* Main Content - 60% */}
            <main className="lg:col-span-3 space-y-8">
              <AtlassianSummary />
              <AtlassianExperience />
            </main>

            {/* Sidebar - 40% */}
            <aside className="lg:col-span-2 space-y-8">
              <AtlassianSkills />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlassianIndex;
