import React from 'react';
import { Eye, Shield, BarChart, Zap } from 'lucide-react';

const SentinelSIEMTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Sentinel - SIEM and SOAR
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Cloud-Native Security Operations Platform
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Sentinel is a scalable, cloud-native Security Information and Event Management 
                (SIEM) and Security Orchestration, Automation, and Response (SOAR) solution that provides 
                intelligent security analytics and threat intelligence across the enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core SIEM and SOAR Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Collection and Analysis</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Collect and analyze security data from across your entire environment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multi-source data ingestion</li>
              <li>• Real-time analytics</li>
              <li>• Machine learning detection</li>
              <li>• Custom query capabilities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced threat detection using AI and machine learning algorithms.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Behavioral analytics</li>
              <li>• Anomaly detection</li>
              <li>• Threat intelligence integration</li>
              <li>• Custom detection rules</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Investigation and Hunting</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Powerful tools for security investigation and proactive threat hunting.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Interactive investigation graphs</li>
              <li>• Threat hunting queries</li>
              <li>• Timeline analysis</li>
              <li>• Entity behavior insights</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Automated Response</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Orchestrate and automate security responses to reduce response time.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Playbook automation</li>
              <li>• Incident response workflows</li>
              <li>• Integration with security tools</li>
              <li>• Custom automation scripts</li>
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
              <span>Microsoft Sentinel combines SIEM and SOAR capabilities in a cloud-native platform</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides intelligent security analytics using AI and machine learning</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers powerful investigation and threat hunting capabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Enables automated response and orchestration for faster incident resolution</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SentinelSIEMTopic;