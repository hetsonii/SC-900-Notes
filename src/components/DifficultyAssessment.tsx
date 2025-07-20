import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { useProgress } from '../contexts/ProgressContext';

interface DifficultyAssessmentProps {
  topicId: string;
  className?: string;
}

const DifficultyAssessment: React.FC<DifficultyAssessmentProps> = ({ 
  topicId, 
  className = '' 
}) => {
  const { setTopicDifficulty, getTopicDifficulty } = useProgress();
  const currentDifficulty = getTopicDifficulty(topicId);

  const difficulties = [
    { 
      value: 'easy' as const, 
      label: 'Easy', 
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      borderColor: 'border-green-300 dark:border-green-700',
      emoji: '😊'
    },
    { 
      value: 'medium' as const, 
      label: 'Medium', 
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      borderColor: 'border-yellow-300 dark:border-yellow-700',
      emoji: '🤔'
    },
    { 
      value: 'hard' as const, 
      label: 'Hard', 
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      borderColor: 'border-red-300 dark:border-red-700',
      emoji: '😰'
    }
  ];

  const handleDifficultyChange = (difficulty: 'easy' | 'medium' | 'hard') => {
    setTopicDifficulty(topicId, difficulty);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <AcademicCapIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span className="text-sm text-gray-600 dark:text-gray-400">Difficulty:</span>
      
      <div className="flex space-x-1">
        {difficulties.map((diff) => {
          const isSelected = currentDifficulty === diff.value;
          
          return (
            <button
              key={diff.value}
              onClick={() => handleDifficultyChange(diff.value)}
              className={`
                px-2 py-1 text-xs rounded-full border transition-all duration-200
                ${isSelected 
                  ? `${diff.bgColor} ${diff.borderColor} ${diff.color} font-medium` 
                  : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              `}
              title={`Mark as ${diff.label} difficulty`}
            >
              <span className="mr-1">{diff.emoji}</span>
              {diff.label}
            </button>
          );
        })}
      </div>

      {!currentDifficulty && (
        <span className="text-xs text-gray-400 dark:text-gray-500 italic">
          Not assessed
        </span>
      )}
    </div>
  );
};

export default DifficultyAssessment;
