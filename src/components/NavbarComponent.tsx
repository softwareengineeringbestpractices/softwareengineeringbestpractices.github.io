import React, { useState, useEffect } from 'react';
// Removed flowbite-react and react-icons imports as they cause compilation errors in this environment.
// Components will be built using pure React and Tailwind CSS.

// Define a type for the current page to ensure type safety
type Page = 'home' | 'web-development' | 'cloud-computing' | 'ai-ml' | 'devops';

// --- Navbar Component ---
interface NavbarComponentProps {
  navigateTo: (page: Page) => void;
}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="bg-gray-900 border-b border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={() => navigateTo('home')} className="cursor-pointer flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-white">
            <span className="text-blue-500">SE</span>BP
          </span>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white focus:outline-none focus:text-white md:hidden"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a onClick={() => navigateTo('home')} className="text-white hover:text-blue-500 cursor-pointer text-lg font-medium transition-colors duration-200">
            Home
          </a>
          <a onClick={() => navigateTo('web-development')} className="text-white hover:text-blue-500 cursor-pointer text-lg font-medium transition-colors duration-200">
            Development
          </a>
          <a onClick={() => navigateTo('cloud-computing')} className="text-white hover:text-blue-500 cursor-pointer text-lg font-medium transition-colors duration-200">
            Testing
          </a>
          <a onClick={() => navigateTo('ai-ml')} className="text-white hover:text-blue-500 cursor-pointer text-lg font-medium transition-colors duration-200">
            Observability
          </a>
          <a onClick={() => navigateTo('devops')} className="text-white hover:text-blue-500 cursor-pointer text-lg font-medium transition-colors duration-200">
            DevOps
          </a>
        </div>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a onClick={() => { navigateTo('home'); setIsOpen(false); }} className="block text-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Home
          </a>
          <a onClick={() => { navigateTo('web-development'); setIsOpen(false); }} className="block text-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Web Development
          </a>
          <a onClick={() => { navigateTo('cloud-computing'); setIsOpen(false); }} className="block text-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Cloud Computing
          </a>
          <a onClick={() => { navigateTo('ai-ml'); setIsOpen(false); }} className="block text-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            AI/ML
          </a>
          <a onClick={() => { navigateTo('devops'); setIsOpen(false); }} className="block text-white hover:text-blue-500 cursor-pointer px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            DevOps
          </a>
        </div>
      )}
    </nav>
  );
};