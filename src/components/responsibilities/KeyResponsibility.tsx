
import React from 'react';

type KeyResponsibilityProps = {
  title: string;
  description: string;
};

export const KeyResponsibility = ({ title, description }: KeyResponsibilityProps) => {
  return (
    <li className="text-vault-secondary">
      <span className="font-medium text-vault-primary">{title}:</span>
      <div className="bg-vault-light p-6 mt-3 rounded-lg">
        <div className="space-y-4">
          <p className="text-vault-secondary">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};
