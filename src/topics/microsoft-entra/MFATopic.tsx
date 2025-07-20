import React from 'react';
import { Shield, Smartphone, Key, AlertTriangle } from 'lucide-react';

const MFATopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Multi-Factor Authentication (MFA)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Enhanced Security Through Multiple Verification Methods
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Multi-Factor Authentication (MFA) requires users to provide two or more verification 
                factors to gain access to resources. This significantly reduces the risk of 
                unauthorized access even if passwords are compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MFA Factors */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Authentication Factors
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Know</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Knowledge-based factors that only the user should know.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Passwords and passphrases</li>
              <li>• Personal identification numbers (PINs)</li>
              <li>• Security questions</li>
              <li>• Pattern locks</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Have</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Physical or digital tokens in the user's possession.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Mobile devices</li>
              <li>• Hardware security keys</li>
              <li>• Smart cards</li>
              <li>• Software tokens</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Are</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Biometric characteristics unique to the individual.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Fingerprint recognition</li>
              <li>• Facial recognition</li>
              <li>• Voice recognition</li>
              <li>• Iris scanning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MFA Methods in Entra ID */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          MFA Methods in Microsoft Entra ID
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Security Level</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">User Experience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Microsoft Authenticator</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Push notification</td>
                <td className="px-6 py-4 text-sm text-green-600">High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Excellent</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SMS Text Message</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">SMS code</td>
                <td className="px-6 py-4 text-sm text-yellow-600">Medium</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Good</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Voice Call</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Phone call</td>
                <td className="px-6 py-4 text-sm text-yellow-600">Medium</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Good</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OATH Hardware Token</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hardware token</td>
                <td className="px-6 py-4 text-sm text-green-600">Very High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Fair</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">FIDO2 Security Key</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hardware key</td>
                <td className="px-6 py-4 text-sm text-green-600">Very High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Excellent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation and Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          MFA Implementation Best Practices
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Deployment Strategy</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Phased Rollout:</strong>
                  <span className="text-sm block">Start with pilot groups before organization-wide deployment</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Training:</strong>
                  <span className="text-sm block">Provide comprehensive training and support materials</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Multiple Methods:</strong>
                  <span className="text-sm block">Offer various MFA options to accommodate different users</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Backup Options:</strong>
                  <span className="text-sm block">Ensure users have alternative authentication methods</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security Considerations</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Risk-Based Policies:</strong>
                  <span className="text-sm block">Use conditional access for intelligent MFA prompts</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Trusted Devices:</strong>
                  <span className="text-sm block">Configure device trust to reduce MFA prompts</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Session Management:</strong>
                  <span className="text-sm block">Set appropriate session timeouts and remember settings</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Monitoring:</strong>
                  <span className="text-sm block">Track MFA usage and identify potential issues</span>
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
              <span>MFA significantly reduces security risks by requiring multiple verification factors</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft Entra ID supports various MFA methods with different security levels and user experiences</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Successful MFA deployment requires careful planning, user training, and ongoing support</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Risk-based and conditional access policies can optimize the balance between security and usability</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MFATopic;