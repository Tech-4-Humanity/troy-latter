
import React from 'react';

type KeyResponsibilityProps = {
  title: string;
  description: string;
};

export const KeyResponsibility = ({ title, description }: KeyResponsibilityProps) => {
  return (
    <li className="text-brand-secondary">
      <span className="font-medium text-brand-primary">{title}:</span>
      <div className="bg-brand-light p-6 mt-3 rounded-lg">
        <div className="space-y-4">
          <p className="text-brand-secondary">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};
