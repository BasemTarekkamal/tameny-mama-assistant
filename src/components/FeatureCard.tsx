
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCard = ({ to, title, description, icon, color }: FeatureCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "feature-card flex items-center gap-4 bg-white",
        "border-r-4 hover:translate-x-1 transition-transform"
      )}
      style={{ borderRightColor: color }}
    >
      <div 
        className="p-3 rounded-full flex items-center justify-center" 
        style={{ backgroundColor: `${color}20` }}
      >
        {React.cloneElement(icon as React.ReactElement, { 
          size: 28, 
          className: "text-tameny-primary",
          style: { color } 
        })}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
