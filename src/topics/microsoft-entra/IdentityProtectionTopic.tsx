import React from 'react';
import { Shield, AlertTriangle, Eye, Lock } from 'lucide-react';

const IdentityProtectionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Entra ID Protection
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                AI-Powered Identity Risk Detection
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID Protection uses advanced machine learning and heuristics to 
                detect potential vulnerabilities affecting your organization's identities, configure 
                automated responses to detected suspicious actions, and investigate incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Detection Types */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Types of Risk Detection
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User Risk</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Indicates the probability that a given identity or account is compromised.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Leaked credentials detection</li>
              <li>• Unusual user activity patterns</li>
              <li>• Impossible travel scenarios</li>
              <li>• Anonymous IP usage</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Sign-in Risk</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Indicates the probability that a given authentication request isn't authorized.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Atypical travel patterns</li>
              <li>• Anonymous IP addresses</li>
              <li>• Malware-linked IP addresses</li>
              <li>• Unfamiliar sign-in properties</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk-Based Policies */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Risk-Based Conditional Access Policies
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">User Risk Policy</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">High Risk Response:</strong>
                  <span className="text-sm block">Block access or require secure password reset</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Medium Risk Response:</strong>
                  <span className="text-sm block">Require multi-factor authentication</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Low Risk Response:</strong>
                  <span className="text-sm block">Allow access with monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Sign-in Risk Policy</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">High Risk Response:</strong>
                  <span className="text-sm block">Block access completely</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Medium Risk Response:</strong>
                  <span className="text-sm block">Require MFA for access</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Low Risk Response:</strong>
                  <span className="text-sm block">Allow with additional logging</span>
                </li>
              </ul>
            </div>
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
              <span>Identity Protection uses AI and machine learning to detect identity-based risks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>User risk and sign-in risk are the two main categories of risk detection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Risk-based policies enable automated responses to detected threats</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integration with Conditional Access provides comprehensive protection</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdentityProtectionTopic;