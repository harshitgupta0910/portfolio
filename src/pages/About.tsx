import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#252527] rounded-md p-6 mb-6 border border-[#333]">
        <h1 className="text-3xl font-bold mb-4 text-white">About</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">
            Hi there! I'm {personalInfo.name}, a {personalInfo.title} with a passion for building 
            elegant, efficient, and user-friendly applications.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3 text-[#007acc]">My Background</h2>
          <p className="mb-4">
            I began my journey in software development in {personalInfo.yearStarted}. 
            Since then, I've worked on various projects ranging from web applications 
            to backend systems, always focusing on writing clean, maintainable code.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3 text-[#007acc]">Professional Experience</h2>
          <div className="mb-4 border-l-2 border-[#007acc] pl-4">
            <h3 className="font-medium">Campus Ambassador</h3>
            <p className="text-sm text-gray-400">Geeks for Geeks • July 2024 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li> Link between GFG and the academic community, spearheading initiatives to cultivate programming excellence
              and technical knowledge among students.</li>
              <li>Guided 100+ students to participate in coding challenges and hackathons, fostering a culture of
              programming.</li>
              {/* <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>   */}
            </ul>
          </div>
{/*           
          <div className="mb-4 border-l-2 border-[#555] pl-4">
            <h3 className="font-medium">Software Developer</h3>
            <p className="text-sm text-gray-400">Previous Company • 2019 - 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Contributed to backend services using Node.js and Express</li>
              <li>Built responsive front-end interfaces with React and TypeScript</li>
              <li>Collaborated with the design team to improve user experience</li>
            </ul>
          </div> */}
          
          <h2 className="text-xl font-semibold mt-6 mb-3 text-[#007acc]">Education</h2>
          <div className="mb-4">
            <h3 className="font-medium">Bachelor of Technology in Computer Science</h3>
            <p className="text-sm text-gray-400">University Name • 2022 - 2026</p>
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-3 text-[#007acc]">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#1e1e1e] p-4 rounded border border-[#333]">
              <h3 className="font-medium text-[#007acc]">Front-end Development</h3>
              <p className="text-sm">React, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            
            <div className="bg-[#1e1e1e] p-4 rounded border border-[#333]">
              <h3 className="font-medium text-[#007acc]">Back-end Development</h3>
              <p className="text-sm">Node.js, Express, MongoDB</p>
            </div>
            
            <div className="bg-[#1e1e1e] p-4 rounded border border-[#333]">
              <h3 className="font-medium text-[#007acc]">DevOps</h3>
              <p className="text-sm">Docker, GitHub Actions</p>
            </div>
            
            {/* <div className="bg-[#1e1e1e] p-4 rounded border border-[#333]">
              <h3 className="font-medium text-[#007acc]">Mobile Development</h3>
              <p className="text-sm">React Native, Flutter</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;