
import React from 'react';

interface ListItemProps {
  title: string;
  description: string;
}

export const ListItem = ({ title, description }: ListItemProps) => {
  return (
    <li className="mb-4">
      <span className="font-semibold text-brand-primary">{title}</span>
      <br /> 
      <span className="text-gray-700">{description}</span>
    </li>
  );
};
