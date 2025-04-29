import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#007acc] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">File Not Found</h2>
        
        <div className="mb-8 p-4 bg-[#1e1e1e] rounded-md text-gray-400 border border-[#333] max-w-md mx-auto">
          <pre className="font-mono text-sm overflow-x-auto text-left">
            <code>
{`// ERROR 404
try {
  const page = findPage(currentPath);
  return page;
} catch (error) {
  console.error("Page not found");
  return <NotFoundPage />;
}

// The page you're looking for doesn't exist
// Press F1 to view available commands`}
            </code>
          </pre>
        </div>
        
        <Link 
          to="/"
          className="inline-flex items-center px-4 py-2 bg-[#007acc] hover:bg-[#0066a0] rounded text-white"
        >
          <Home size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;