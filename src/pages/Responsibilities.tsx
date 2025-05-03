
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Separator } from '@/components/ui/separator';
import { LeadershipExamples } from '@/components/responsibilities/LeadershipExamples';
import { KeyResponsibilities } from '@/components/responsibilities/KeyResponsibilities';
import { RequiredSkills } from '@/components/responsibilities/RequiredSkills';
import { ImpactScoring } from '@/components/responsibilities/ImpactScoring';

const Responsibilities = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Responsibilities" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          As Head of Innovation, you'll drive breakthrough initiatives while building a culture of rapid experimentation and measurable outcomes.
        </p>
      </div>
      
      <LeadershipExamples />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <KeyResponsibilities />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <RequiredSkills />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <ImpactScoring />
    </div>
  );
};

export default Responsibilities;
