
import { FeatureCard } from '@/components/FeatureCard';
import React from 'react';

type LeadershipCardProps = {
  title: string;
  imageSrc: string;
  situation: string;
  task: string;
  action: string;
  outcome: string;
};

export const LeadershipCard = ({ title, imageSrc, situation, task, action, outcome }: LeadershipCardProps) => {
  return (
    <FeatureCard title={title} imageSrc={imageSrc}>
      <div className="space-y-4">
        <div className="bg-vault-light p-6 rounded-lg">
          <div className="space-y-4">
            <p className="text-vault-secondary">
              <span className="font-medium">Situation:</span> {situation}
            </p>
            <p className="text-vault-secondary">
              <span className="font-medium">Task:</span> {task}
            </p>
            <p className="text-vault-secondary">
              <span className="font-medium">Action:</span> {action}
            </p>
            <p className="text-vault-secondary">
              <span className="font-medium">Outcome:</span> {outcome}
            </p>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};
