import React from 'react';
import { Monitor, Shield, Eye, Zap } from 'lucide-react';

const DefenderEndpointTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender for Endpoint
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Enterprise Endpoint Detection and Response
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender for Endpoint is an enterprise endpoint security platform designed 
                to help enterprise networks prevent, detect, investigate, and respond to advanced threats 
                across Windows, macOS, Linux, Android, and iOS devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core EDR Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced threat protection using behavioral analysis and machine learning.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Real-time protection</li>
              <li>• Behavioral analysis</li>
              <li>• Cloud-delivered protection</li>
              <li>• Attack surface reduction</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Detection and Investigation</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive endpoint detection and investigation capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Endpoint detection and response</li>
              <li>• Timeline reconstruction</li>
              <li>• Threat analytics</li>
              <li>• Advanced hunting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Automated Response</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automated investigation and response to reduce response time.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Automated investigation</li>
              <li>• Response actions</li>
              <li>• Threat remediation</li>
              <li>• Incident response</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Vulnerability Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Continuous vulnerability assessment and management.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Vulnerability discovery</li>
              <li>• Risk-based prioritization</li>
              <li>• Remediation tracking</li>
              <li>• Security recommendations</li>
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
              <span>Defender for Endpoint provides comprehensive endpoint security across multiple platforms</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Combines prevention, detection, investigation, and response capabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Uses behavioral analysis and machine learning for advanced threat protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes vulnerability management and automated response capabilities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderEndpointTopic;