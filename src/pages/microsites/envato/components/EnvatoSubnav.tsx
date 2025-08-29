import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const EnvatoSubnav = () => {
  const location = useLocation();
  
  const navItems = [
    { href: '/microsites/envato', label: '5 Strategic Paths', exact: true },
    { href: '/microsites/envato/summary', label: 'Context & Summary' },
    { href: '/microsites/envato/assets', label: 'Asset Strategy' },
    { href: '/microsites/envato/orchestrator', label: 'Orchestrators' }
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname === href;
  };

  return (
    <Card className="mb-6 bg-envato-green-50/50 border-envato-green-200">
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href, item.exact)
                  ? 'bg-envato-green-600 text-white'
                  : 'bg-white text-envato-gray-700 hover:bg-envato-green-100 border border-envato-green-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default EnvatoSubnav;