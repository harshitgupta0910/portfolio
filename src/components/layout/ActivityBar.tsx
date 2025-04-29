import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FolderOpen, FileCode, Settings, Search, GitBranch, Bug } from 'lucide-react';

export const ActivityBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="w-12 h-full bg-[#252527] flex flex-col items-center py-2 border-r border-[#333]">
      <button 
        className={`p-2 mb-2 hover:bg-[#333] rounded ${location.pathname === '/' ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
        onClick={() => navigate('/')}
      >
        <FolderOpen size={24} />
      </button>
      
      <button 
        className={`p-2 mb-2 hover:bg-[#333] rounded ${location.pathname.includes('/skills') ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
        onClick={() => navigate('/skills')}
      >
        <FileCode size={24} />
      </button>
      
      <button 
        className={`p-2 mb-2 hover:bg-[#333] rounded ${location.pathname.includes('/search') ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
        onClick={() => navigate('/search')}
      >
        <Search size={24} />
      </button>
      
      <button 
        className={`p-2 mb-2 hover:bg-[#333] rounded ${location.pathname.includes('/github') ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
        onClick={() => navigate('/github')}
      >
        <GitBranch size={24} />
      </button>
      
      <button 
        className={`p-2 mb-2 hover:bg-[#333] rounded ${location.pathname.includes('/debug') ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
        onClick={() => navigate('/debug')}
      >
        <Bug size={24} />
      </button>
      
      <div className="mt-auto">
        <button 
          className={`p-2 hover:bg-[#333] rounded ${location.pathname.includes('/settings') ? 'text-white border-l-2 border-white' : 'text-gray-400'}`}
          onClick={() => navigate('/settings')}
        >
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};