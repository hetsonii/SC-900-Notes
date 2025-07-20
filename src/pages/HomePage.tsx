import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { sections } from '../data/topicStructure';
import { useProgress } from '../contexts/ProgressContext';
import DifficultyOverview from '../components/DifficultyOverview';

const HomePage: React.FC = () => {
  const { getProgress } = useProgress();
  const progress = getProgress();

  const examStats = [
    { label: 'Total Topics', value: progress.total, icon: BookOpen },
    { label: 'Completed', value: progress.completed, icon: CheckCircle },
    { label: 'Progress', value: `${progress.percentage}%`, icon: TrendingUp },
    { label: 'Est. Time', value: '15-20 hrs', icon: Clock },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-900/50 px-6 py-3 rounded-full">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SC</span>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">SC-900</h1>
            <p className="text-sm text-blue-700 dark:text-blue-300">Microsoft Security, Compliance, and Identity</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Master Microsoft Security Fundamentals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Comprehensive study guide for the SC-900 exam covering security, compliance, and identity 
            concepts across Microsoft's cloud-based and related services.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {examStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section */}
      {progress.completed > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Progress</h3>
            <span className="text-blue-600 dark:text-blue-400 font-medium">{progress.percentage}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {progress.completed} of {progress.total} topics completed
          </p>
        </div>
      )}

      {/* Difficulty Overview */}
      <DifficultyOverview />

      {/* Exam Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-8 h-8 text-yellow-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Exam Overview</h3>
            <p className="text-gray-600 dark:text-gray-300">What you need to know for the SC-900 certification</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Target Audience</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Business stakeholders</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>New or existing IT professionals</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Students interested in Microsoft SCI solutions</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Prerequisites</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Familiarity with Microsoft Azure</li>
              <li>• Basic knowledge of Microsoft 365</li>
              <li>• Interest in security and compliance</li>
              <li>• No specific technical background required</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Study Sections */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Study Sections</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Four main areas covering all exam objectives
          </p>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
                  </div>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {section.percentage}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Topics: {section.topics.length}
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic.id}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {topic.title}
                    </span>
                  ))}
                  {section.topics.length > 3 && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                      +{section.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <Link
                to={`/topic/${section.topics[0].id}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Start Section</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Begin your journey to Microsoft SC-900 certification. Start with the fundamentals 
          and work your way through all four sections at your own pace.
        </p>
        <Link
          to={`/topic/${sections[0].topics[0].id}`}
          className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          <span>Begin Study Guide</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;