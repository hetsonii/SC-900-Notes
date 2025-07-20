import React from 'react';
import { BarChart, TrendingUp, Target, Award } from 'lucide-react';

const ComplianceScoreTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Compliance Score
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Measuring and Improving Compliance Posture
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Compliance Score provides a risk-based measurement of your organization's compliance 
                posture, helping you understand current compliance status and prioritize actions 
                to improve your overall security and compliance stance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Score Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Compliance Score Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Risk-Based Scoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Scores based on the risk level and impact of compliance controls.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• High-impact controls weighted more</li>
              <li>• Risk assessment integration</li>
              <li>• Threat landscape consideration</li>
              <li>• Business impact evaluation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Progress Tracking</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Monitor compliance improvements over time with trend analysis.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Historical score tracking</li>
              <li>• Improvement trends</li>
              <li>• Milestone achievements</li>
              <li>• Performance benchmarks</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Improvement Actions</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Prioritized recommendations to improve your compliance score.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• High-impact actions</li>
              <li>• Quick wins identification</li>
              <li>• Implementation guidance</li>
              <li>• Score impact estimates</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Comparative Analysis</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Compare your score against industry benchmarks and best practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Industry comparisons</li>
              <li>• Peer benchmarking</li>
              <li>• Best practice alignment</li>
              <li>• Maturity assessment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Takeaways
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Compliance Score provides risk-based measurement of compliance posture</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Tracks progress over time with historical trends and benchmarks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides prioritized improvement actions with impact estimates</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Enables comparative analysis against industry standards and peers</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComplianceScoreTopic;