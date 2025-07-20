import React from 'react';
import { Key, Smartphone, CreditCard, Fingerprint } from 'lucide-react';

const AuthenticationMethodsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Authentication Methods in Microsoft Entra ID
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Key className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Modern Authentication Options
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID supports various authentication methods to provide secure and 
                convenient access to resources. These methods range from traditional passwords 
                to modern passwordless solutions, enabling organizations to implement strong 
                authentication while improving user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Method Categories */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Authentication Method Categories
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Password-Based</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Traditional authentication using knowledge factors that users must remember.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Passwords and passphrases</li>
              <li>• Security questions</li>
              <li>• PIN codes</li>
              <li>• Pattern-based authentication</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Multi-Factor</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhanced security using multiple authentication factors for verification.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SMS and voice calls</li>
              <li>• Authenticator apps</li>
              <li>• Hardware tokens</li>
              <li>• Push notifications</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Fingerprint className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Passwordless</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Modern authentication without passwords, using biometrics or hardware keys.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Windows Hello for Business</li>
              <li>• FIDO2 security keys</li>
              <li>• Microsoft Authenticator</li>
              <li>• Certificate-based authentication</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CreditCard className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certificate-Based</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Authentication using digital certificates and public key infrastructure.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Smart cards</li>
              <li>• Client certificates</li>
              <li>• PIV/CAC cards</li>
              <li>• Mobile device certificates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Authentication Methods */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Supported Authentication Methods
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
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Password</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Knowledge</td>
                <td className="px-6 py-4 text-sm text-yellow-600">Medium</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Familiar</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SMS/Voice</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Possession</td>
                <td className="px-6 py-4 text-sm text-yellow-600">Medium</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Simple</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Authenticator App</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Possession</td>
                <td className="px-6 py-4 text-sm text-green-600">High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Convenient</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">FIDO2 Security Key</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Possession</td>
                <td className="px-6 py-4 text-sm text-green-600">Very High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Fast</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Windows Hello</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Biometric</td>
                <td className="px-6 py-4 text-sm text-green-600">Very High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Seamless</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Certificate</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Possession</td>
                <td className="px-6 py-4 text-sm text-green-600">High</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Automatic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Passwordless Authentication */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Passwordless Authentication Options
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Windows Hello for Business</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Biometric authentication integrated with Windows devices for seamless sign-in.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Features</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Fingerprint recognition</li>
                  <li>• Facial recognition</li>
                  <li>• PIN as fallback</li>
                  <li>• Hardware-backed security</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Benefits</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• No passwords to remember</li>
                  <li>• Fast authentication</li>
                  <li>• Phishing resistant</li>
                  <li>• Works offline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">FIDO2 Security Keys</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hardware-based authentication using FIDO2/WebAuthn standards.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Features</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• USB, NFC, or Bluetooth</li>
                  <li>• Cross-platform support</li>
                  <li>• Cryptographic security</li>
                  <li>• No shared secrets</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Shared workstations</li>
                  <li>• High-security environments</li>
                  <li>• Privileged accounts</li>
                  <li>• Compliance requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft Authenticator Passwordless</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Phone-based passwordless authentication using the Microsoft Authenticator app.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">How It Works</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Push notification to phone</li>
                  <li>• Biometric verification on device</li>
                  <li>• Cryptographic proof sent</li>
                  <li>• Access granted</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Requirements</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Microsoft Authenticator app</li>
                  <li>• Device with biometrics or PIN</li>
                  <li>• Internet connectivity</li>
                  <li>• Entra ID P1 or P2 license</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Policy */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Authentication Method Policies
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Policy Configuration</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Enable/Disable Methods:</strong>
                  <span className="text-sm block">Control which authentication methods are available</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Target Users/Groups:</strong>
                  <span className="text-sm block">Apply policies to specific user populations</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Registration Requirements:</strong>
                  <span className="text-sm block">Enforce registration of specific methods</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Method Restrictions:</strong>
                  <span className="text-sm block">Limit methods based on risk or compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Gradual Rollout:</strong>
                  <span className="text-sm block">Implement new methods in phases</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Multiple Options:</strong>
                  <span className="text-sm block">Provide backup authentication methods</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Training:</strong>
                  <span className="text-sm block">Educate users on new authentication methods</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Monitor Adoption:</strong>
                  <span className="text-sm block">Track usage and user feedback</span>
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
              <span>Microsoft Entra ID supports multiple authentication methods from passwords to passwordless options</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Passwordless authentication provides better security and user experience than traditional passwords</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Authentication method policies allow administrators to control and enforce specific methods</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Organizations should provide multiple authentication options to accommodate different user needs</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AuthenticationMethodsTopic;