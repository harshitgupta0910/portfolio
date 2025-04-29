import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { NavItem } from '../../types';
import { navItems } from '../../data/navItems';

interface TabBarProps {
  openTabs?: NavItem[];
}

export const TabBar: React.FC<TabBarProps> = ({ openTabs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // If no tabs are provided, use the current path to determine the active tab
  const tabs = openTabs || navItems.filter(item => 
    item.path === currentPath || 
    (currentPath.startsWith(item.path) && item.path !== '/')
  );
  
  // If still no tabs, show home
  const displayTabs = tabs.length > 0 ? tabs : [navItems[0]];
  
  const getTabLabel = (path: string) => {
    // Extract filename from path for display
    if (path === '/') return 'home.tsx';
    
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    
    // Map paths to filenames
    const pathToFile: Record<string, string> = {
      'about': 'about.html',
      'skills': 'skills.js',
      'projects': 'projects.ts',
      'contact': 'contact.tsx',
      'hobbies': 'hobbies.md',
    };
    
    return pathToFile[lastPart] || `${lastPart}.tsx`;
  };
  
  const getTabIcon = (path: string) => {
    // Map file extensions to colors
    const extension = getTabLabel(path).split('.').pop();
    
    switch (extension) {
      case 'html':
        return 'text-orange-400';
      case 'css':
        return 'text-blue-400';
      case 'js':
        return 'text-yellow-300';
      case 'ts':
      case 'tsx':
        return 'text-blue-500';
      case 'md':
        return 'text-blue-300';
      default:
        return 'text-gray-400';
    }
  };
  
  return (
    <div className="h-9 bg-[#252527] flex items-center text-gray-400 border-b border-[#333] overflow-x-auto">
      {displayTabs.map((tab) => (
        <div 
          key={tab.path}
          className={`h-full flex items-center px-3 min-w-[120px] max-w-[160px] cursor-pointer border-r border-[#333] ${
            currentPath === tab.path ? 'bg-[#1e1e1e] text-white' : 'hover:bg-[#2d2d2d]'
          }`}
          onClick={() => navigate(tab.path)}
        >
          <span className={`mr-2 ${getTabIcon(tab.path)}`}>•</span>
          <span className="truncate text-sm">{getTabLabel(tab.path)}</span>
          <button 
            className="ml-auto hover:bg-[#333] rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              // In a real app, you'd remove the tab and navigate to another open tab
              // For this demo, we'll just navigate home if it's not already home
              if (tab.path !== '/') {
                navigate('/');
              }
            }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};