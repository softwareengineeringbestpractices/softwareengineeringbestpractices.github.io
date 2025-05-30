import React, { useState, useEffect } from 'react';

import { CustomCard } from './CustomCard';
import { CustomButton } from './CustomButton';
import { Page } from './Page';

interface TopicPageProps {
  topic: Page;
  navigateTo: (page: Page) => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({ topic, navigateTo }) => {
  // Mock blog posts for each topic
  const getMockPosts = (topic: Page) => {
    switch (topic) {
      case 'web-development':
        return [
          { title: 'Building Responsive UIs with Tailwind CSS', snippet: 'Learn how to create beautiful and responsive user interfaces using Tailwind CSS.' },
          { title: 'Understanding React Hooks: useState and useEffect', snippet: 'A comprehensive guide to the most commonly used React Hooks.' },
          { title: 'Node.js Microservices: Best Practices', snippet: 'Explore patterns and practices for building scalable microservices with Node.js.' },
        ];
      case 'cloud-computing':
        return [
          { title: 'Getting Started with AWS Lambda Functions', snippet: 'A step-by-step tutorial on deploying your first serverless function on AWS.' },
          { title: 'Azure DevOps Pipelines for CI/CD', snippet: 'Automate your software delivery with Azure Pipelines.' },
          { title: 'Google Cloud Firestore: NoSQL Database Essentials', snippet: 'Understand the basics of Firestore for your next web application.' },
        ];
      case 'ai-ml':
        return [
          { title: 'Introduction to Neural Networks', snippet: 'Demystifying the core concepts behind artificial neural networks.' },
          { title: 'Machine Learning with Python and Scikit-learn', snippet: 'Hands-on examples for common ML tasks using Python.' },
          { title: 'Natural Language Processing: From Basics to Advanced', snippet: 'Explore techniques for processing and understanding human language.' },
        ];
      case 'devops':
        return [
          { title: 'Dockerizing Your Applications: A Comprehensive Guide', snippet: 'Containerize your applications for consistent deployment across environments.' },
          { title: 'Kubernetes Fundamentals for Beginners', snippet: 'Learn the basics of container orchestration with Kubernetes.' },
          { title: 'Implementing CI/CD with GitHub Actions', snippet: 'Set up automated workflows for continuous integration and delivery.' },
        ];
      default:
        return [];
    }
  };

  const posts = getMockPosts(topic);

  return (
    <div className="container mx-auto px-4 py-8 text-gray-200 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white capitalize mb-4 sm:mb-0">
          {topic.replace('-', ' ')}
        </h1>
        <CustomButton onClick={() => navigateTo('home')}>
          <span className="mr-2">←</span>
          Back to Home
        </CustomButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <CustomCard
              key={index}
              className="animate-fade-in"
            //   style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h5 className="text-xl font-bold tracking-tight text-white mb-2">
                {post.title}
              </h5>
              <p className="font-normal text-gray-400">
                {post.snippet}
              </p>
              <CustomButton className="mt-4">
                Read Article
                <span className="ml-2">→</span>
              </CustomButton>
            </CustomCard>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-400">No posts found for this topic yet.</p>
        )}
      </div>
    </div>
  );
};