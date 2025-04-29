import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 75 },
    ],
    devops: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
    other: [
      { name: 'Problem Solving', level: 85 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'Technical Writing', level: 75 },
    ]
  };
  
  const renderSkillBar = (name: string, level: number) => {
    return (
      <div key={name} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-gray-400">{level}%</span>
        </div>
        <div className="h-2.5 bg-[#333] rounded-full">
          <div 
            className="h-2.5 bg-[#007acc] rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#252527] rounded-md p-6 mb-6 border border-[#333]">
        <h1 className="text-3xl font-bold mb-6 text-white">Skills</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#007acc]">Frontend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {skillCategories.frontend.slice(0, 3).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
            <div>
              {skillCategories.frontend.slice(3).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#007acc]">Backend Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {skillCategories.backend.slice(0, 3).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
            <div>
              {skillCategories.backend.slice(3).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#007acc]">DevOps & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {skillCategories.devops.slice(0, 2).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
            <div>
              {skillCategories.devops.slice(2).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#007acc]">Other Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {skillCategories.other.slice(0, 2).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
            <div>
              {skillCategories.other.slice(2).map(skill => 
                renderSkillBar(skill.name, skill.level)
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-[#1e1e1e] rounded-md text-gray-400 border border-[#333]">
          <pre className="font-mono text-sm overflow-x-auto">
            <code>
{`// Skills.js
const mySkills = {
  frontend: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  devops: ['Git', 'Docker', 'AWS', 'CI/CD'],
  other: ['Problem Solving', 'Agile/Scrum', 'Technical Writing']
};

// Always learning and improving
const continuousLearning = (newSkill) => {
  return [...mySkills, newSkill];
};`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Skills;