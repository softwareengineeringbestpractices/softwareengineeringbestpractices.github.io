import React, { useState, useEffect } from 'react';

import { CustomCard } from './CustomCard';
import { CustomButton } from './CustomButton';
import { Page } from './Page';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const topics = [
    { id: 'web-development', title: 'Development', description: 'Explore what/why is trunk-based dev, pair programming & TDD.' },
    { id: 'cloud-computing', title: 'Testing', description: 'Understand test pyramid, CI, automation and exploratory testing.' },
    { id: 'ai-ml', title: 'Observability', description: 'Understand logs, metrics, tracing, alerting and incident learning.' },
    { id: 'devops', title: 'DevOps', description: 'Learn about continuous integration, delivery, and site reliability engineering.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg shadow-lg mb-12 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Welcome to <span className="text-blue-300">SEBP</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          This site offers a practical guide to software engineering best practices. It covers four key areas: Development, Testing, Deployment, and Observability.
        </p>
        <CustomButton
          size="xl"
          className="mx-auto animate-bounce-subtle"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} // Scroll to topics section
        >
          Explore Topics <span className="ml-2">→</span>
        </CustomButton>
      </section>

      {/* Topics Section */}
      <section className="py-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-white animate-fade-in-up">
          Our Core Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <CustomCard
              key={topic.id}
              className="animate-fade-in"
            //   style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigateTo(topic.id as Page)}
            >
              <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
                {topic.title}
              </h5>
              <p className="font-normal text-gray-400">
                {topic.description}
              </p>
              <CustomButton className="mt-4">
                Read More
                <span className="ml-2">→</span>
              </CustomButton>
            </CustomCard>
          ))}
        </div>
      </section>
    </div>
  );
};
