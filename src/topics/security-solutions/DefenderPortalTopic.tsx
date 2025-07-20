import React from 'react';
import { Monitor, Shield, BarChart, Settings } from 'lucide-react';

const DefenderPortalTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender Portal
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Unified Security Operations Center
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender Portal is the unified security operations center that brings 
                together all Microsoft Defender services into a single, integrated experience 
                for security teams to monitor, investigate, and respond to threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Portal Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Unified Dashboard</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Centralized view of security posture across all Microsoft Defender services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security overview</li>
              <li>• Threat analytics</li>
              <li>• Incident summary</li>
              <li>• Risk indicators</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Incident Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive incident management and investigation capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Incident queue</li>
              <li>• Investigation tools</li>
              <li>• Response actions</li>
              <li>• Case management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Hunting</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced hunting and threat detection across all security domains.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Advanced hunting queries</li>
              <li>• Custom detection rules</li>
              <li>• Threat analytics</li>
              <li>• Hunting dashboards</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Configuration Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Centralized configuration and policy management for all Defender services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Policy configuration</li>
              <li>• Service settings</li>
              <li>• Integration management</li>
              <li>• User permissions</li>
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
              <span>Defender Portal provides a unified interface for all Microsoft Defender services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers centralized incident management and investigation capabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Enables advanced threat hunting across all security domains</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides centralized configuration and policy management</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderPortalTopic;