
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Separator } from '@/components/ui/separator';
import { LeadershipExamples } from '@/components/responsibilities/LeadershipExamples';
import { KeyResponsibilities } from '@/components/responsibilities/KeyResponsibilities';
import { ImpactScoring } from '@/components/responsibilities/ImpactScoring';

const Responsibilities = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Initiatives" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          As Head of Innovation, I'll drive breakthrough initiatives while building a culture of rapid experimentation and measurable outcomes.
        </p>
      </div>
      
      <LeadershipExamples />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <KeyResponsibilities />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <ImpactScoring />
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Demo or Die</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Building Ecosystem Alliances</h3>
            <p className="text-vault-secondary mt-2">
              Forge strategic partnerships that multiply impact<br/>
              At AWS, I established a cross-industry consortium that brought together ISVs, research institutions, and government agencies to accelerate AI adoption in the public sector. By creating shared innovation frameworks and co-development agreements, we drove 3x faster partner solution certification and opened $15M in new marketplace revenue streams within the first year.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Thought Leadership That Resonates</h3>
            <p className="text-vault-secondary mt-2">
              Amplify Vault's vision through strategic communications<br/>
              I've delivered keynotes at major industry conferences like the AWS Public Sector Summit and Defence+Industry, published in peer-reviewed journals on secure ML operations, and led executive briefings that positioned our innovations as the standard for sovereign compute. These engagements consistently generated 40+ qualified enterprise leads per quarter and strengthened our technology leadership position.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Empowering Customer Champions</h3>
            <p className="text-vault-secondary mt-2">
              Create a network of advocates who tell your story<br/>
              By establishing innovation councils with key customers and embedding their teams within our PoC sprints, I've built a community of influential promoters who became our most powerful references. At Unisys, this approach led to 5 customer-led case studies that directly influenced $8M in new business from adjacent agencies and departments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
