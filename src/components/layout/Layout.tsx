import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { TabBar } from './TabBar';
import { personalInfo } from '../../data/personalInfo';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-gray-300">
      <Header title={`${personalInfo.name} - ${personalInfo.title}`} />
      
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar />
          
          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};