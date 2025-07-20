import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { useProgress } from '../contexts/ProgressContext';
import { getAllTopics } from '../data/topicStructure';

const DifficultyOverview: React.FC = () => {
  const { getTopicsByDifficulty } = useProgress();
  
  const allTopics = getAllTopics();
  const easyTopics = getTopicsByDifficulty('easy');
  const mediumTopics = getTopicsByDifficulty('medium');
  const hardTopics = getTopicsByDifficulty('hard');
  const unassessedTopics = allTopics.length - (easyTopics.length + mediumTopics.length + hardTopics.length);

  const difficultyStats = [
    { 
      difficulty: 'Easy', 
      count: easyTopics.length, 
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      emoji: '😊'
    },
    { 
      difficulty: 'Medium', 
      count: mediumTopics.length, 
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      emoji: '🤔'
    },
    { 
      difficulty: 'Hard', 
      count: hardTopics.length, 
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      emoji: '😰'
    },
    { 
      difficulty: 'Unassessed', 
      count: unassessedTopics, 
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      emoji: '❓'
    }
  ];

  const hasAssessments = easyTopics.length + mediumTopics.length + hardTopics.length > 0;

  if (!hasAssessments) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3 mb-4">
        <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Difficulty Assessment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Your personal difficulty ratings</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {difficultyStats.map((stat) => (
          <div
            key={stat.difficulty}
            className={`${stat.bgColor} rounded-lg p-4 text-center`}
          >
            <div className="text-2xl mb-1">{stat.emoji}</div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.difficulty}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        Rate topics as you study to track which areas need more focus
      </div>
    </div>
  );
};

export default DifficultyOverview;
