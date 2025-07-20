import React from 'react';
import { Users, Shield, Eye, AlertTriangle } from 'lucide-react';

const DefenderIdentityTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender for Identity
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Identity-Based Security Monitoring
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender for Identity is a cloud-based security solution that leverages 
                on-premises Active Directory signals to identify, detect, and investigate advanced 
                threats, compromised identities, and malicious insider actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Identity Protection Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Identity Monitoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Monitor user activities and behaviors across Active Directory.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User behavior analytics</li>
              <li>• Authentication monitoring</li>
              <li>• Privilege escalation detection</li>
              <li>• Lateral movement tracking</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Detect advanced threats targeting identity infrastructure.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Advanced persistent threats</li>
              <li>• Pass-the-hash attacks</li>
              <li>• Golden ticket attacks</li>
              <li>• Reconnaissance activities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Investigation Tools</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive investigation and forensic capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Attack timeline reconstruction</li>
              <li>• Entity investigation</li>
              <li>• Lateral movement paths</li>
              <li>• Evidence collection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Insider Threat Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Identify malicious insider activities and compromised accounts.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Abnormal user behavior</li>
              <li>• Data exfiltration attempts</li>
              <li>• Privilege abuse</li>
              <li>• Suspicious access patterns</li>
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
              <span>Defender for Identity monitors on-premises Active Directory for threats</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Detects advanced threats like pass-the-hash and golden ticket attacks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides comprehensive investigation tools and attack timeline reconstruction</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Identifies insider threats and compromised account activities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderIdentityTopic;