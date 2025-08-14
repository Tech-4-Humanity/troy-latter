
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NinetyDayPlan = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/faqs" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to FAQs & Resources
      </Link>
      
      <PageTitle title="90-Day Plan Template" />
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6 text-center">
        <div className="mx-auto mb-8 bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-md">
          <Calendar className="h-12 w-12 text-brand-accent" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Coming Soon</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We're currently building a comprehensive 90-Day Plan Template specifically designed for innovation leaders in the Defence and Intelligence sectors. This resource will help you structure your first three months and align your innovation initiatives with critical mission objectives.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6 inline-block">
          <p className="text-sm font-medium">Expected release: July 2025</p>
        </div>
        
        <Button asChild className="mt-2">
          <Link to="/faqs">Return to Resources</Link>
        </Button>
      </div>
    </div>
  );
};

export default NinetyDayPlan;
