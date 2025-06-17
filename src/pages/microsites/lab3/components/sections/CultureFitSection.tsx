
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const CultureFitSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Culture Fit Snapshot</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <Card className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-lg">
        <CardContent className="p-12">
          <div className="text-gray-800 space-y-8 leading-relaxed text-lg">
            <p className="text-xl leading-relaxed">
              LAB3 thrives on engineering excellence, IP-led delivery, and the confidence to challenge outdated models — that's the culture I've always worked to build and protect.
            </p>
            
            <p>
              I work best in environments where velocity is backed by clarity, and innovation is grounded in trust. I've led cross-functional teams through major shifts — from secure cloud transformations to agency-wide Microsoft 365 rollouts — where success wasn't just about the tech stack, but about bringing people along with it.
            </p>
            
            <p>
              My leadership style is hands-on, pattern-driven, and collaborative. I mentor engineers, partner with sales without overpromising, and build relationships from the dev team to the C-suite. Whether codifying zero trust blueprints across portfolios, or helping government clients navigate compliance and complexity with confidence, I've learned that culture is what turns good delivery into something that lasts.
            </p>
            
            <p className="text-xl font-semibold text-blue-700">
              LAB3's culture isn't just a fit — it's familiar. And it's exactly where I do my best work.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
