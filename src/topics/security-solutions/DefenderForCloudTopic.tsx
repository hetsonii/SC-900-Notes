import React from 'react';
import { Shield, Cloud, AlertTriangle, BarChart } from 'lucide-react';

const DefenderForCloudTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender for Cloud
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Unified Cloud Security Platform
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender for Cloud is a comprehensive cloud security posture management (CSPM) 
                and cloud workload protection platform (CWPP) that provides unified security management 
                and advanced threat protection across hybrid and multi-cloud environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cloud Security Posture Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Continuously assess and improve your security posture across cloud environments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security recommendations</li>
              <li>• Compliance assessments</li>
              <li>• Secure score monitoring</li>
              <li>• Configuration drift detection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cloud Workload Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced threat protection for cloud workloads and resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Real-time threat detection</li>
              <li>• Behavioral analytics</li>
              <li>• Vulnerability assessments</li>
              <li>• Incident response</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive security insights and reporting capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security dashboards</li>
              <li>• Threat intelligence</li>
              <li>• Risk assessments</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Regulatory Compliance</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Built-in compliance standards and regulatory frameworks.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Industry standards</li>
              <li>• Regulatory benchmarks</li>
              <li>• Compliance tracking</li>
              <li>• Audit reporting</li>
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
              <span>Defender for Cloud provides unified security management across hybrid and multi-cloud environments</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Combines CSPM and CWPP capabilities for comprehensive cloud security</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides continuous security assessment and threat protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes built-in compliance standards and regulatory frameworks</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderForCloudTopic;