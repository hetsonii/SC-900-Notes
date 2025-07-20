import React from 'react';
import { Eye, Globe, Brain, Shield } from 'lucide-react';

const ThreatIntelligenceTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender Threat Intelligence
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Actionable Threat Intelligence
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender Threat Intelligence provides comprehensive threat intelligence 
                data, analysis, and insights to help organizations understand, track, and defend 
                against current and emerging cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Threat Intelligence Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Global Intelligence</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive global threat intelligence from Microsoft's security ecosystem.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Indicators of compromise (IOCs)</li>
              <li>• Threat actor profiles</li>
              <li>• Campaign tracking</li>
              <li>• Malware analysis</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced analytics and insights into threat trends and patterns.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Threat trend analysis</li>
              <li>• Attack technique mapping</li>
              <li>• Risk assessment</li>
              <li>• Predictive intelligence</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contextual Intelligence</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Contextual information to enhance threat detection and response.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Attribution analysis</li>
              <li>• Geopolitical context</li>
              <li>• Industry targeting</li>
              <li>• Motivation assessment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Actionable Insights</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Practical recommendations and defensive measures based on intelligence.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Defensive recommendations</li>
              <li>• Mitigation strategies</li>
              <li>• Detection rules</li>
              <li>• Response playbooks</li>
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
              <span>Defender Threat Intelligence provides comprehensive global threat intelligence data</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes threat analytics and insights into attack trends and patterns</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides contextual intelligence for better threat understanding</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Delivers actionable insights and defensive recommendations</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ThreatIntelligenceTopic;