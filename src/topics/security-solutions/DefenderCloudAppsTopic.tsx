import React from 'react';
import { Cloud, Shield, Eye, Lock } from 'lucide-react';

const DefenderCloudAppsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender for Cloud Apps
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Cloud Application Security Broker (CASB)
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that 
                provides rich visibility, control over data travel, and sophisticated analytics 
                to identify and combat cyberthreats across all cloud services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASB Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          CASB Core Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cloud Discovery</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover and assess cloud applications used across your organization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Shadow IT discovery</li>
              <li>• App risk assessment</li>
              <li>• Usage analytics</li>
              <li>• Compliance evaluation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protect sensitive data across cloud applications and services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data loss prevention</li>
              <li>• Information protection</li>
              <li>• File monitoring</li>
              <li>• Quarantine actions</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Detect and respond to threats across cloud applications.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Anomaly detection</li>
              <li>• User behavior analytics</li>
              <li>• Threat intelligence</li>
              <li>• Incident response</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensure compliance across cloud applications and data.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Regulatory compliance</li>
              <li>• Policy enforcement</li>
              <li>• Audit reporting</li>
              <li>• Risk assessment</li>
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
              <span>Defender for Cloud Apps is a CASB that provides visibility and control over cloud applications</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Discovers shadow IT and assesses cloud application risks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides data protection and threat detection across cloud services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Ensures compliance and governance for cloud application usage</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderCloudAppsTopic;