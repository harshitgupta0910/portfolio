import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thanks for your message! I will get back to you soon.');
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#252527] rounded-md p-6 mb-6 border border-[#333]">
        <h1 className="text-3xl font-bold mb-6 text-white">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you want to collaborate on a project, 
              have a job opportunity, or just want to say hello!
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Mail size={20} className="text-[#007acc] mr-4" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className="text-[#007acc] mr-4" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#333] hover:bg-[#444] rounded-full text-white"
              >
                <Github size={20} />
              </a>
              
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#0077b5] hover:bg-[#0066a0] rounded-full text-white"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href={personalInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#1da1f2] hover:bg-[#0d8ecf] rounded-full text-white"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e1e1e] text-white border border-[#333] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e1e1e] text-white border border-[#333] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e1e1e] text-white border border-[#333] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1e1e1e] text-white border border-[#333] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-[#007acc] hover:bg-[#0066a0] rounded text-white"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;