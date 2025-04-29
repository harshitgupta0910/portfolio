import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'project1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      link: '#'
    },
    {
      id: 'project2',
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, task assignments, and real-time updates.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      link: '#'
    },
    {
      id: 'project3',
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts based on user location or search.',
      technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API', 'Geolocation API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      link: '#'
    },
    {
      id: 'project4',
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking app that allows users to log workouts, track progress, and set goals.',
      technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      link: '#'
    }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#252527] rounded-md p-6 mb-6 border border-[#333]">
        <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-[#1e1e1e] rounded-md overflow-hidden border border-[#333] hover:border-[#007acc] transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#007acc]">{project.title}</h3>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-[#333] text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-white"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-[#1e1e1e] rounded-md text-gray-400 border border-[#333]">
          <pre className="font-mono text-sm overflow-x-auto">
            <code>
{`// Projects.ts
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  link: string;
}

const projects: Project[] = [
  // ... more projects coming soon
];

export default projects;`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Projects;