
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, Baby, AlertTriangle, Activity } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
      <ul className="flex justify-around items-center">
        <NavItem to="/" icon={<Home size={24} />} label="الرئيسية" />
        <NavItem to="/chat" icon={<MessageCircle size={24} />} label="استشارة" />
        <NavItem to="/normal" icon={<Baby size={24} />} label="طبيعي؟" />
        <NavItem to="/growth" icon={<Activity size={24} />} label="النمو" />
        <NavItem to="/emergency" icon={<AlertTriangle size={24} />} label="طوارئ" />
      </ul>
    </nav>
  );
};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${
            isActive ? 'text-tameny-primary' : 'text-gray-500'
          }`
        }
      >
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default Navigation;
