import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { NavItem } from '../../types';
import { navItems } from '../../data/navItems';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = "VS Code Portfolio" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the current active route
  const currentRoute = location.pathname;
  
  // Find open tabs based on navigation - in a real app you might track this in state
  const openTabs = navItems.filter(item => 
    item.path === currentRoute || 
    (currentRoute.startsWith(item.path) && item.path !== '/')
  );
  
  // If no tabs match, add home
  const tabs = openTabs.length > 0 ? openTabs : [navItems[0]];
  
  return (
    <header className="h-9 bg-[#1e1e1e] border-b border-[#333] flex items-center text-gray-300 px-2">
      <div className="flex items-center space-x-2 text-xs">
        <button className="hover:bg-[#333] rounded px-2 py-1">File</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">Edit</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">View</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">Go</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">Run</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">Terminal</button>
        <button className="hover:bg-[#333] rounded px-2 py-1">Help</button>
      </div>
      
      <div className="ml-auto text-sm text-center flex-1">{title}</div>
      
      <div className="flex items-center space-x-2">
        <button className="hover:bg-[#333] rounded p-1">
          <ChevronLeft size={16} />
        </button>
        <button className="hover:bg-[#333] rounded p-1">
          <ChevronRight size={16} />
        </button>
        <button className="hover:bg-[#333] rounded p-1">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </header>
  );
};