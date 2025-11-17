
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ArrowRight, Target, Building } from 'lucide-react';

const MicrositeIndex = () => {
  // Microsites are accessible via direct link only, not publicly listed
  const microsites: any[] = [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Specialized Micro-Sites
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Focused resources and tools designed for specific professional needs and opportunities
        </p>
      </div>

      <div className="text-center py-12">
        <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-2">
            Microsites are accessible via direct link only
          </p>
          <p className="text-sm text-muted-foreground">
            No publicly listed microsites available at this time
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicrositeIndex;
