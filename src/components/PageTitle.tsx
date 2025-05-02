
import React from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-3xl font-bold mb-6 text-vault-primary border-b pb-4 border-gray-200">
      {title}
    </h1>
  );
};
