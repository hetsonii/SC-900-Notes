import React, { useState, useEffect } from 'react';
import { CalendarDaysIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useProgress } from '../contexts/ProgressContext';

const ExamCountdown: React.FC = () => {
  const { getExamDate, setExamDate, getDaysUntilExam } = useProgress();
  const [isSettingDate, setIsSettingDate] = useState(false);
  const [tempDate, setTempDate] = useState('');

  const examDate = getExamDate();
  const daysUntilExam = getDaysUntilExam();

  // Initialize temp date when opening settings
  useEffect(() => {
    if (isSettingDate && examDate) {
      setTempDate(examDate);
    }
  }, [isSettingDate, examDate]);

  const handleSetDate = () => {
    if (tempDate) {
      setExamDate(tempDate);
      setIsSettingDate(false);
    }
  };

  const handleCancel = () => {
    setIsSettingDate(false);
    setTempDate('');
  };

  const getCountdownColor = () => {
    if (daysUntilExam === null) return 'text-gray-600 dark:text-gray-400';
    if (daysUntilExam < 0) return 'text-red-600 dark:text-red-400';
    if (daysUntilExam <= 7) return 'text-orange-600 dark:text-orange-400';
    if (daysUntilExam <= 30) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const getCountdownText = () => {
    if (daysUntilExam === null) return 'Set exam date';
    if (daysUntilExam < 0) return `Exam was ${Math.abs(daysUntilExam)} days ago`;
    if (daysUntilExam === 0) return 'Exam is today!';
    return `${daysUntilExam} days until exam`;
  };

  const getUrgencyIndicator = () => {
    if (daysUntilExam === null) return null;
    if (daysUntilExam < 0) return '⚠️';
    if (daysUntilExam === 0) return '🎯';
    if (daysUntilExam <= 7) return '🔥';
    if (daysUntilExam <= 30) return '⚡';
    return '📅';
  };

  if (isSettingDate) {
    return (
      <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
        <CalendarDaysIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <input
          type="date"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
          className="text-sm bg-transparent border-none focus:outline-none text-gray-900 dark:text-gray-100"
          min={new Date().toISOString().split('T')[0]}
        />
        <button
          onClick={handleSetDate}
          className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Set
        </button>
        <button
          onClick={handleCancel}
          className="text-xs px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
      <CalendarDaysIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      
      <div className="flex items-center space-x-2">
        {getUrgencyIndicator() && (
          <span className="text-sm">{getUrgencyIndicator()}</span>
        )}
        <span className={`text-sm font-medium ${getCountdownColor()}`}>
          {getCountdownText()}
        </span>
      </div>

      {examDate && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(examDate).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      )}

      <button
        onClick={() => setIsSettingDate(true)}
        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        title="Set exam date"
      >
        <AdjustmentsHorizontalIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ExamCountdown;
