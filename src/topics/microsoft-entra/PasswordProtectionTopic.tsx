import React from 'react';
import { Lock, Shield, AlertTriangle, Key } from 'lucide-react';

const PasswordProtectionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Password Protection and Management
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Comprehensive Password Security
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID provides advanced password protection and management capabilities 
                to defend against password-based attacks and improve overall security posture through 
                intelligent password policies and breach detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Password Protection Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Password Protection Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Banned Password Lists</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Prevents users from choosing commonly compromised or weak passwords.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Global banned password list (Microsoft-maintained)</li>
              <li>• Custom banned password list (organization-specific)</li>
              <li>• Fuzzy matching for variations</li>
              <li>• Case-insensitive matching</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Smart Lockout</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Intelligent account lockout that distinguishes between legitimate users and attackers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Familiar location recognition</li>
              <li>• Behavioral analysis</li>
              <li>• Gradual lockout duration increase</li>
              <li>• Legitimate user protection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Password Policies</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Configurable password requirements and complexity rules.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Minimum length requirements</li>
              <li>• Character complexity rules</li>
              <li>• Password history enforcement</li>
              <li>• Expiration policies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Self-Service Password Reset</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Secure password reset capabilities that reduce helpdesk burden.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multiple verification methods</li>
              <li>• Security questions</li>
              <li>• Mobile app notifications</li>
              <li>• Administrator approval workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Password Protection for On-Premises */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          On-Premises Password Protection
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Azure AD Password Protection Agent</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Extends cloud-based password protection to on-premises Active Directory environments.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• DC Agent: Installed on domain controllers</li>
                <li>• Proxy Service: Communicates with Azure AD</li>
                <li>• Policy synchronization from cloud</li>
                <li>• Real-time password validation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Deployment Modes</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Audit Mode</h5>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Logs policy violations without blocking password changes
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Enforced Mode</h5>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Actively blocks weak passwords and enforces policies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Password Security Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Password Security Best Practices
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Practice</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Benefit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Enable MFA</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Require additional verification factors</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Reduces password-only attack risk</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Use Banned Lists</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Block common and compromised passwords</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Prevents weak password selection</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Smart Lockout</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Intelligent account protection</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Balances security and usability</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Regular Monitoring</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Track password-related security events</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Early threat detection</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">User Education</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Train users on password security</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Improves overall security culture</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Configuration and Management */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Configuration and Management
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Azure Portal Configuration</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Authentication Methods:</strong>
                  <span className="text-sm block">Configure available password reset methods</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Banned Lists:</strong>
                  <span className="text-sm block">Add organization-specific banned passwords</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Lockout Settings:</strong>
                  <span className="text-sm block">Configure smart lockout thresholds</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Notification Settings:</strong>
                  <span className="text-sm block">Set up password reset notifications</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Monitoring and Reporting</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Usage Reports:</strong>
                  <span className="text-sm block">Track password reset usage and trends</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Security Events:</strong>
                  <span className="text-sm block">Monitor password-related security incidents</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Audit Logs:</strong>
                  <span className="text-sm block">Review password policy enforcement</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Risk Detection:</strong>
                  <span className="text-sm block">Identify suspicious password activities</span>
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
              <span>Microsoft Entra ID provides comprehensive password protection through banned lists and smart lockout</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Self-service password reset reduces helpdesk burden while maintaining security</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>On-premises password protection extends cloud capabilities to hybrid environments</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Combining password protection with MFA provides the strongest security posture</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PasswordProtectionTopic;