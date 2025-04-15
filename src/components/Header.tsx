
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showIcons?: boolean;
}

const Header = ({ title, showIcons = true }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex-1">
        {showIcons && (
          <Link to="/settings">
            <Settings className="text-tameny-dark" size={22} />
          </Link>
        )}
      </div>
      
      <h1 className="text-xl font-bold text-center flex-1">{title}</h1>
      
      <div className="flex-1 flex justify-end">
        {showIcons && (
          <Link to="/notifications">
            <Bell className="text-tameny-dark" size={22} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
