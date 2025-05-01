import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

//no work done today

const Home: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#007acc]">
          {personalInfo.title}
        </h2>
        
        <p className="text-lg mb-8 opacity-80 max-w-2xl">
          {personalInfo.about}
        </p>
        
        <div className="flex space-x-4 mb-8">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white"
          >
            <Github size={18} className="mr-2" />
            GitHub
          </a>
          
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#0077b5] hover:bg-[#0066a0] rounded text-white"
          >
            <Linkedin size={18} className="mr-2" />
            LinkedIn
          </a>
          
          <a 
            href={personalInfo.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#1da1f2] hover:bg-[#0d8ecf] rounded text-white"
          >
            <Twitter size={18} className="mr-2" />
            Twitter
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/skills" 
            className="flex items-center px-4 py-2 bg-[#007acc] hover:bg-[#0066a0] rounded text-white"
          >
            Skills
            <ArrowRight size={16} className="ml-2" />
          </Link>
          
          <Link 
            to="/projects" 
            className="flex items-center px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white"
          >
            Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
          
          <Link 
            to="/contact" 
            className="flex items-center px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-white"
          >
            Get in Touch
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="mt-12 p-4 bg-[#252527] rounded-md text-gray-400 border border-[#333]">
          <pre className="font-mono text-sm overflow-x-auto">
            <code>
              {`// Welcome to my portfolio website!
// Start exploring or check out my projects

const welcomeVisitor = () => {
  console.log("Thanks for stopping by!");
  return {
    name: "${personalInfo.name}",
    role: "${personalInfo.title}",
    contact: "${personalInfo.email}"
  };
};

// Run this function to get in touch
welcomeVisitor();`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;