import React from 'react';
import { AlertTriangle, Eye, Brain, Shield } from 'lucide-react';

const ThreatDetectionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Threat Detection and Mitigation in Sentinel
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Advanced Threat Detection Capabilities
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Sentinel provides advanced threat detection and mitigation capabilities 
                using artificial intelligence, machine learning, and behavioral analytics to identify 
                and respond to sophisticated cyber threats in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Threat Detection Methods
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Machine Learning Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              AI-powered detection algorithms that learn from patterns and anomalies.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Behavioral analytics</li>
              <li>• Anomaly detection</li>
              <li>• Pattern recognition</li>
              <li>• Adaptive learning models</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Rule-Based Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Custom and built-in rules for detecting known threat patterns.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Signature-based detection</li>
              <li>• Custom analytics rules</li>
              <li>• Scheduled queries</li>
              <li>• Threshold-based alerts</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Intelligence</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Integration with global threat intelligence feeds and indicators.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• IOC matching</li>
              <li>• Threat actor profiling</li>
              <li>• Campaign tracking</li>
              <li>• Contextual enrichment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Fusion Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Correlates multiple low-fidelity signals to identify high-confidence threats.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multi-signal correlation</li>
              <li>• Kill chain analysis</li>
              <li>• Attack progression tracking</li>
              <li>• False positive reduction</li>
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
              <span>Sentinel uses multiple detection methods including ML, rules, and threat intelligence</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Machine learning detection provides behavioral analytics and anomaly detection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Fusion detection correlates multiple signals to reduce false positives</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Threat intelligence integration provides context and enrichment for detections</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ThreatDetectionTopic;