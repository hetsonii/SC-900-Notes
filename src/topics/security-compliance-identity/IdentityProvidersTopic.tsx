import React from 'react';
import { Server, Shield, Users, Globe } from 'lucide-react';

const IdentityProvidersTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Identity Providers and Their Role
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Server className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Centralized Identity Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                An Identity Provider (IdP) is a service that stores and manages digital identities. 
                It authenticates users and provides identity information to relying applications, 
                enabling single sign-on and centralized identity management across multiple systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Functions of Identity Providers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Authentication</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Verifies user credentials and confirms identity before granting access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Username/password validation</li>
              <li>• Multi-factor authentication</li>
              <li>• Biometric verification</li>
              <li>• Certificate-based authentication</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Identity Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stores and manages user identities, attributes, and profile information.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User provisioning and deprovisioning</li>
              <li>• Profile management</li>
              <li>• Group and role assignments</li>
              <li>• Attribute synchronization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Single Sign-On (SSO)</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enables users to access multiple applications with a single set of credentials.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Seamless application access</li>
              <li>• Reduced password fatigue</li>
              <li>• Improved user experience</li>
              <li>• Centralized session management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Token Issuance</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Issues security tokens containing identity claims for application access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SAML assertions</li>
              <li>• JWT tokens</li>
              <li>• OAuth access tokens</li>
              <li>• Custom claim formats</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Types of Identity Providers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Types of Identity Providers
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Enterprise Identity Providers</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">On-Premises Solutions</h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Active Directory (AD):</strong> Microsoft's directory service</li>
                  <li>• <strong>AD FS:</strong> Active Directory Federation Services</li>
                  <li>• <strong>LDAP Directories:</strong> OpenLDAP, Oracle Directory</li>
                  <li>• <strong>Kerberos:</strong> Network authentication protocol</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Cloud-Based Solutions</h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Microsoft Entra ID:</strong> Cloud identity service</li>
                  <li>• <strong>Okta:</strong> Identity and access management</li>
                  <li>• <strong>Ping Identity:</strong> Enterprise identity platform</li>
                  <li>• <strong>Auth0:</strong> Identity platform for developers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Social Identity Providers</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Popular Platforms</h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Microsoft Account:</strong> Personal Microsoft services</li>
                  <li>• <strong>Google:</strong> Gmail and Google services</li>
                  <li>• <strong>Facebook:</strong> Social media platform</li>
                  <li>• <strong>LinkedIn:</strong> Professional networking</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Use Cases</h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Consumer applications</li>
                  <li>• B2C scenarios</li>
                  <li>• Quick user onboarding</li>
                  <li>• Reduced registration friction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Provider Protocols */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Identity Provider Protocols
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Protocol</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Format</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SAML 2.0</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authentication & Authorization</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">XML</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Enterprise SSO, B2B</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OpenID Connect</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authentication</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">JSON/JWT</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Modern apps, mobile, web</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OAuth 2.0</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authorization</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">JSON</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">API access, delegation</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">WS-Federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authentication & Authorization</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">XML</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Legacy Windows apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft Identity Providers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Identity Provider Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft Entra ID</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Cloud-native IdP:</strong>
                  <span className="text-sm block">Fully managed identity service</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Multi-protocol support:</strong>
                  <span className="text-sm block">SAML, OpenID Connect, OAuth 2.0</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Enterprise features:</strong>
                  <span className="text-sm block">Conditional access, MFA, identity protection</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Integration:</strong>
                  <span className="text-sm block">Thousands of pre-integrated applications</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Active Directory Federation Services</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">On-premises IdP:</strong>
                  <span className="text-sm block">Extends AD to web applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Claims-based:</strong>
                  <span className="text-sm block">Issues security tokens with claims</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Federation:</strong>
                  <span className="text-sm block">Enables cross-domain authentication</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Legacy support:</strong>
                  <span className="text-sm block">WS-Federation, SAML 2.0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Challenges */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Benefits and Challenges
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Benefits</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Centralized Management:</strong> Single point of identity control</li>
              <li>• <strong>Improved Security:</strong> Consistent authentication policies</li>
              <li>• <strong>User Experience:</strong> Single sign-on across applications</li>
              <li>• <strong>Compliance:</strong> Centralized audit and reporting</li>
              <li>• <strong>Cost Reduction:</strong> Reduced password support costs</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Challenges</h4>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• <strong>Single Point of Failure:</strong> IdP outage affects all apps</li>
              <li>• <strong>Vendor Lock-in:</strong> Dependency on specific provider</li>
              <li>• <strong>Integration Complexity:</strong> Application modifications required</li>
              <li>• <strong>Privacy Concerns:</strong> Centralized identity tracking</li>
              <li>• <strong>Performance:</strong> Additional network hops for authentication</li>
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
              <span>Identity providers centralize authentication and enable single sign-on across multiple applications</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Different types of IdPs serve different use cases: enterprise, social, and specialized providers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Modern IdPs support multiple protocols including SAML, OpenID Connect, and OAuth 2.0</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft Entra ID is a comprehensive cloud identity provider with extensive enterprise features</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdentityProvidersTopic;