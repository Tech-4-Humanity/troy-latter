
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

const profileExamples = {
  visionary: {
    title: 'Visionary Innovator',
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80", 
    star: [
      {
        label: 'Situation',
        text: 'Department of Human Services needed a rapid AI governance framework to standardise PoCs across multiple agencies.'
      },
      {
        label: 'Action',
        text: 'Designed and rolled out reusable AI automation frameworks that embedded compliance checks and multi-agent orchestration.'
      },
      {
        label: 'Outcome',
        text: 'Reduced PoC spin‑up time by 70% and improved cross‑agency AI adoption by 50% within three months.'
      }
    ]
  },
  natsec: {
    title: 'NatSec Fluency',
    imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'AWS APAC required a sovereign enclave for classified data processing with strict ASD controls.'
      },
      {
        label: 'Action',
        text: "Architected a zero - trust Government Cloud enclave with post - quantum key management and continuous compliance pipelines."
      },
      {
        label: 'Outcome',
        text: 'Achieved full ASD accreditation in under four months, becoming a template for all subsequent sovereign launches.'
      }
    ]
  },
  technologist: {
    title: 'Hands - On Technologist',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: "Oracle's multi-account CIC deployments suffered from inconsistent IaC and manual config drift."
      },
      {
        label: 'Action',
        text: 'Developed modular Terraform modules and Ansible playbooks for repeatable, secure cloud environment provisioning.'
      },
      {
        label: 'Outcome',
        text: 'Standardised deployments reduced environment build times by 80% and eliminated drift in production clusters.'
      }
    ]
  }
};

const YourProfileStars = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      <PageTitle title="Your Profile Stars" />
      
      <div className="mb-6">
        <p className="text-lg text-vault-secondary">
          Review practical examples of how your skills and experience align with Vault's requirements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(profileExamples).map(([key, example]) => (
          <FeatureCard
            key={key}
            title={example.title}
            imageSrc={example.imageSrc}
          >
            <div className="space-y-3 text-left">
              {example.star.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="font-medium text-vault-primary">{item.label}:</p>
                  <p className="text-vault-secondary text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default YourProfileStars;
