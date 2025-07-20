import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { sections } from '../data/topicStructure';
import type { Topic } from '../types';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on home page
  if (pathSegments.length === 0) {
    return null;
  }

  // Find current topic and section info
  const getCurrentTopicInfo = () => {
    if (pathSegments[0] === 'topic' && pathSegments[1]) {
      const topicId = pathSegments[1];
      
      for (const section of sections) {
        const topic = section.topics.find((t: Topic) => t.id === topicId);
        if (topic) {
          return {
            section: {
              id: section.id,
              title: section.title
            },
            topic: {
              id: topic.id,
              title: topic.title
            }
          };
        }
      }
    }
    return null;
  };

  const topicInfo = getCurrentTopicInfo();

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      {/* Home */}
      <Link 
        to="/" 
        className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <HomeIcon className="h-4 w-4" />
        <span className="ml-1">Home</span>
      </Link>

      {topicInfo && (
        <>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
          
          {/* Section */}
          <Link 
            to="/" 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {topicInfo.section.title}
          </Link>

          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
          
          {/* Current Topic */}
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            {topicInfo.topic.title}
          </span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
