import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react';
import { SidebarItem } from '../../types';
import { sidebarItems } from '../../data/sidebarItems';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  
  const toggleFolder = (path: string) => {
    setExpanded(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };
  
  const getFileIcon = (extension?: string) => {
    switch (extension) {
      case 'html':
        return <span className="text-orange-400">html</span>;
      case 'css':
        return <span className="text-blue-400">css</span>;
      case 'js':
        return <span className="text-yellow-300">js</span>;
      case 'ts':
        return <span className="text-blue-500">ts</span>;
      case 'tsx':
      case 'jsx':
        return <span className="text-blue-400">react</span>;
      case 'py':
        return <span className="text-green-400">py</span>;
      case 'sln':
        return <span className="text-purple-400">sln</span>;
      default:
        return <span className="text-gray-400">file</span>;
    }
  };
  
  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expanded[item.path] ?? (item.type === 'folder' ? item.expanded : false);
    const isActive = location.pathname === item.path;
    const paddingLeft = `${level * 12 + 8}px`;
    
    if (item.type === 'file') {
      return (
        <div
          key={item.path}
          className={`flex items-center py-1 px-2 cursor-pointer text-sm ${isActive ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'}`}
          style={{ paddingLeft }}
          onClick={() => navigate(item.path)}
        >
          <div className="w-4 mr-1">{getFileIcon(item.extension)}</div>
          <span>{item.name}</span>
        </div>
      );
    }
    
    if (item.type === 'folder') {
      return (
        <div key={item.path}>
          <div
            className="flex items-center py-1 px-2 cursor-pointer text-sm hover:bg-[#2a2d2e]"
            style={{ paddingLeft }}
            onClick={() => toggleFolder(item.path)}
          >
            <div className="w-4 mr-1">
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </div>
            <Folder size={16} className="mr-1 text-blue-400" />
            <span>{item.name}</span>
          </div>
          
          {isExpanded && item.children && (
            <div>
              {item.children.map(child => renderSidebarItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className="w-64 h-full bg-[#252527] text-gray-300 overflow-y-auto border-r border-[#333]">
      <div className="p-2 text-xs uppercase font-bold">Explorer</div>
      <div>
        {sidebarItems.map(item => renderSidebarItem(item))}
      </div>
    </div>
  );
};