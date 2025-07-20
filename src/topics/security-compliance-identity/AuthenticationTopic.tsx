import React from 'react';
import { Key, Shield, Smartphone, Fingerprint } from 'lucide-react';

const AuthenticationTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Authentication Methods and Mechanisms
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Key className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Verifying Identity
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Authentication is the process of verifying that a user, device, or service is who they claim to be. 
                It's the first step in the security process and forms the foundation for all access control decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Factors */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Authentication Factors
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Know</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Knowledge-based authentication using information only the user should know.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Passwords and passphrases</li>
              <li>• Personal identification numbers (PINs)</li>
              <li>• Security questions and answers</li>
              <li>• Pattern locks</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Have</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Possession-based authentication using physical or digital tokens.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Hardware security keys</li>
              <li>• Smart cards and certificates</li>
              <li>• Mobile devices and apps</li>
              <li>• SMS and email codes</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <Fingerprint className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Something You Are</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Biometric authentication using unique physical characteristics.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Fingerprint recognition</li>
              <li>• Facial recognition</li>
              <li>• Voice recognition</li>
              <li>• Iris and retina scanning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Authentication Methods
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Single-Factor Authentication (SFA)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Uses only one authentication factor, typically something you know (password).
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">Security Concerns</h5>
                  <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                    <li>• Vulnerable to password attacks</li>
                    <li>• No backup if credentials are compromised</li>
                    <li>• Insufficient for sensitive resources</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Common Examples</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Traditional username/password login</li>
                  <li>• PIN-only access</li>
                  <li>• Biometric-only authentication</li>
                  <li>• Token-only access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Multi-Factor Authentication (MFA)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Requires two or more authentication factors from different categories.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Security Benefits</h5>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Significantly reduces breach risk</li>
                    <li>• Provides backup authentication</li>
                    <li>• Industry best practice</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Implementation Examples</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Password + SMS code</li>
                  <li>• Smart card + PIN</li>
                  <li>• Biometric + hardware token</li>
                  <li>• Password + authenticator app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Authentication Protocols */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Modern Authentication Protocols
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Protocol</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Purpose</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OAuth 2.0</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authorization framework</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">API access, third-party apps</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Secure delegation, token-based</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OpenID Connect</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Identity layer on OAuth 2.0</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Single sign-on, identity verification</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Standardized identity claims</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SAML 2.0</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">XML-based authentication</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Enterprise SSO, federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Mature standard, enterprise adoption</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">FIDO2/WebAuthn</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Passwordless authentication</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hardware keys, biometrics</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Phishing-resistant, user-friendly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft Authentication */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Authentication Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft Entra ID Authentication</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Password-based:</strong>
                  <span className="text-sm block">Traditional username and password authentication</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Passwordless:</strong>
                  <span className="text-sm block">Windows Hello, FIDO2 keys, Microsoft Authenticator</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Certificate-based:</strong>
                  <span className="text-sm block">Smart cards and client certificates</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Federated:</strong>
                  <span className="text-sm block">SAML, WS-Federation, OpenID Connect</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Authentication Features</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Conditional Access:</strong>
                  <span className="text-sm block">Risk-based authentication policies</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Identity Protection:</strong>
                  <span className="text-sm block">AI-powered risk detection and remediation</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Self-Service:</strong>
                  <span className="text-sm block">Password reset and account recovery</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Reporting:</strong>
                  <span className="text-sm block">Authentication logs and analytics</span>
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
              <span>Authentication verifies identity using one or more factors: knowledge, possession, or inherence</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Multi-factor authentication significantly improves security by requiring multiple verification methods</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Modern protocols like OAuth 2.0, OpenID Connect, and FIDO2 enable secure, user-friendly authentication</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft Entra ID provides comprehensive authentication capabilities including passwordless options</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AuthenticationTopic;