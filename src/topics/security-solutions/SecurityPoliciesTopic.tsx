import React from 'react';
import { FileText, Shield, Settings, CheckCircle } from 'lucide-react';

const SecurityPoliciesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Security Policies and Initiatives
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Automated Security Governance
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Security policies and initiatives in Microsoft Defender for Cloud provide automated 
                governance and compliance enforcement across cloud environments. They help organizations 
                maintain consistent security standards and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Policy Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Policies</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define and enforce security requirements across cloud resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Resource configuration rules</li>
              <li>• Security baseline enforcement</li>
              <li>• Compliance requirements</li>
              <li>• Automated remediation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Initiatives</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Group related policies together for comprehensive compliance frameworks.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Regulatory compliance bundles</li>
              <li>• Industry standard frameworks</li>
              <li>• Custom policy collections</li>
              <li>• Unified management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Effects</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define what happens when policy conditions are met or violated.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Audit and log violations</li>
              <li>• Deny non-compliant resources</li>
              <li>• Automatically remediate</li>
              <li>• Append required configurations</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Assignment</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Apply policies to specific scopes and manage exceptions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Subscription-level assignment</li>
              <li>• Resource group targeting</li>
              <li>• Exception management</li>
              <li>• Inheritance control</li>
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
              <span>Security policies provide automated governance and compliance enforcement</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Policy initiatives group related policies for comprehensive compliance frameworks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Policy effects determine actions taken when conditions are met or violated</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Policy assignment controls scope and manages exceptions across cloud resources</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SecurityPoliciesTopic;