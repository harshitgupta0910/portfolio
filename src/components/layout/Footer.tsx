import React from 'react';
import { GitBranch, Wifi, Bell, Check } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - personalInfo.yearStarted;
  
  return (
    <footer className="h-6 bg-[#007acc] text-white text-xs flex items-center px-2 border-t border-[#333]">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Wifi size={12} />
          <span>Connected</span>
        </div>
      </div>
      
      <div className="ml-auto flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>Made in {personalInfo.yearStarted}-{currentYear}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span>All Rights Reserved.</span>
        </div>
        
        <div className="flex items-center space-x-2 text-xs">
          <span>NEXT.JS</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
          <span>React</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Bell size={12} />
          <Check size={12} />
          <span>UTF-8</span>
          <span>Port: 443</span>
        </div>
      </div>
    </footer>
  );
};