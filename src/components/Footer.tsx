
import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vault-light py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-vault-secondary text-sm">
              © {currentYear} Vault Cloud. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-vault-secondary hover:text-vault-accent text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-vault-secondary hover:text-vault-accent text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-vault-secondary hover:text-vault-accent text-sm transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
