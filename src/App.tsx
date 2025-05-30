import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { TopicPage } from './components/TopicPage';
import { NavbarComponent } from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';
import { Page } from './components/Page';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Function to navigate between pages
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'web-development':
      case 'cloud-computing':
      case 'ai-ml':
      case 'devops':
        return <TopicPage topic={currentPage} navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />; // Fallback to home
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-inter">
      {/* Tailwind CSS CDN for global styles */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Custom CSS for animations and general styling */}
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        `}
      </style>

      {/* Navbar */}
      <NavbarComponent navigateTo={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}