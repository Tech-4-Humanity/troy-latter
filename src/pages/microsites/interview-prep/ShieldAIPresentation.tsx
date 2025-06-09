
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { presentationPages } from './presentationData';

export const ShieldAIPresentation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedNotes, setExpandedNotes] = useState(false);
  
  const currentPageData = presentationPages.find(page => page.id === currentPage) || presentationPages[0];
  const totalPages = presentationPages.length;

  const goToPage = (pageId: number) => {
    setCurrentPage(pageId);
    setExpandedNotes(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3">
            <h1 className="text-white font-bold text-lg">Shield AI BD Presentation</h1>
            <div className="flex flex-wrap gap-2 text-xs">
              {presentationPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => goToPage(page.id)}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === page.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {page.id}. {page.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="text-orange-400 font-medium mb-2">
              Page {currentPage} of {totalPages}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {currentPageData.title}
            </h1>
            <h2 className="text-xl text-slate-300">
              {currentPageData.subtitle}
            </h2>
          </div>

          {/* Page Content */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl mb-8">
            <CardContent className="p-8">
              {currentPageData.content}
            </CardContent>
          </Card>

          {/* Speaker Notes */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-600 mb-8">
            <Collapsible open={expandedNotes} onOpenChange={setExpandedNotes}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-slate-700/50 p-4 justify-between"
                >
                  <span className="font-medium">Detailed Speaker Notes</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedNotes ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 text-slate-200 leading-relaxed">
                    {currentPageData.speakerNotes}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              variant="outline"
              className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-slate-400 font-medium">
              {currentPage} / {totalPages}
            </div>
            
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
