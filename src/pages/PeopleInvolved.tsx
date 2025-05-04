
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';

const PeopleInvolved = () => {
  const peopleCategories = [
    {
      title: "Policy & Legislation",
      description: "Government liaisons, industry boards, advisory groups shaping standards."
    },
    {
      title: "Executive Leadership & Sponsors",
      description: "CIOs, board members and deputies funding and mandating innovation."
    },
    {
      title: "Sales & Go‑to‑Market Teams",
      description: "Sales, channel and marketing leads capturing signals and driving adoption."
    },
    {
      title: "Technical & Delivery",
      description: "Architects, engineers, PMs translating ideas into solutions."
    },
    {
      title: "Partners & Ecosystem",
      description: "ISVs, integrators, research institutions co‑innovating on pilots."
    },
    {
      title: "Customers & Citizens",
      description: "End‑users whose needs and feedback create multiple winners."
    },
    {
      title: "Customer Innovation Councils & Advocates",
      description: "Built embedded PoC councils with key customers—turned 5 case‑studies into $8 M in follow‑on business and created a network of vocal promoters."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="People Involved" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png" 
            alt="People Involved" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <ContentCard className="mb-8">
          <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
            {peopleCategories.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ul>
        </ContentCard>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
          <p className="text-gray-700 italic">
            Successful innovation requires collaboration across all stakeholders, from policy makers to end users.
            Building strong relationships with champions at each level creates momentum and ensures alignment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PeopleInvolved;
