import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from 'lucide-react';
import { getTopicById, getNextTopic, getPreviousTopic } from '../data/topicStructure';
import { useProgress } from '../contexts/ProgressContext';

const TopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, setCurrentTopic, completeCurrentTopic } = useProgress();
  const { completedTopics } = state;

  const topic = id ? getTopicById(id) : null;
  const nextTopic = id ? getNextTopic(id) : null;
  const previousTopic = id ? getPreviousTopic(id) : null;

  useEffect(() => {
    if (id) {
      setCurrentTopic(id);
      // Scroll to top when topic changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, setCurrentTopic]);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The requested topic could not be found.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const isCompleted = completedTopics.has(topic.id);
  const TopicContent = topic.content;

  const handleNext = () => {
    if (!isCompleted) {
      completeCurrentTopic();
    }
    if (nextTopic) {
      navigate(`/topic/${nextTopic.id}`);
    }
  };

  const handlePrevious = () => {
    if (previousTopic) {
      navigate(`/topic/${previousTopic.id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Go home"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {topic.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {topic.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {topic.estimatedTime && (
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{topic.estimatedTime} min</span>
              </div>
            )}
            {isCompleted && (
              <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1">
          <div
            className="bg-blue-600 h-1 rounded-full transition-all duration-300"
            style={{
              width: `${((completedTopics.size + (isCompleted ? 0 : 1)) / 60) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-8">
          <TopicContent />
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {previousTopic && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Previous</div>
                    <div className="font-medium">{previousTopic.title}</div>
                  </div>
                </button>
              )}
            </div>

            <div className="flex-1 flex justify-end">
              {nextTopic && (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  <div className="text-right">
                    <div className="text-xs text-blue-100">Next</div>
                    <div>{nextTopic.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              {!nextTopic && (
                <button
                  onClick={() => navigate('/')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Complete Study Guide
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;