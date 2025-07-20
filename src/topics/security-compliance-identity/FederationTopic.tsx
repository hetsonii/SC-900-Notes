import React from 'react';
import { Link, Shield, Globe, Users } from 'lucide-react';

const FederationTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Federation Concepts and Cross-Domain Authentication
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Link className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Connecting Separate Identity Domains
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Federation enables users from one organization to access resources in another organization 
                using their existing credentials. It establishes trust relationships between separate 
                identity domains without requiring duplicate user accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federation Fundamentals */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Federation Fundamentals
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Trust Relationship</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Organizations establish mutual trust to accept each other's authentication decisions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cryptographic trust (certificates)</li>
              <li>• Metadata exchange</li>
              <li>• Policy agreements</li>
              <li>• Security token validation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Identity Mapping</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              User identities from one domain are mapped to appropriate access in another domain.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Attribute transformation</li>
              <li>• Claim mapping rules</li>
              <li>• Role translation</li>
              <li>• Permission assignment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Single Sign-On (SSO)</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Users authenticate once in their home domain and access resources across federated domains.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Seamless user experience</li>
              <li>• Reduced password fatigue</li>
              <li>• Cross-domain access</li>
              <li>• Session management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Link className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Protocol Standards</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Standardized protocols enable interoperability between different identity systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SAML 2.0</li>
              <li>• WS-Federation</li>
              <li>• OpenID Connect</li>
              <li>• OAuth 2.0</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Federation Participants */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Federation Participants
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Identity Provider */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Identity Provider (IdP)</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Authenticates users and issues security tokens containing identity claims.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• User authentication</li>
                <li>• Token issuance</li>
                <li>• Claim generation</li>
                <li>• Policy enforcement</li>
              </ul>
            </div>

            {/* Service Provider */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Provider (SP)</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Provides services and resources, relying on IdP for user authentication.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Resource hosting</li>
                <li>• Token validation</li>
                <li>• Access control</li>
                <li>• Service delivery</li>
              </ul>
            </div>

            {/* User/Principal */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">User/Principal</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                End user seeking access to resources across federated domains.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Authentication initiation</li>
                <li>• Resource access</li>
                <li>• Session management</li>
                <li>• Consent provision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Federation Flow */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Typical Federation Flow
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">User Access Attempt</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  User tries to access a resource at the Service Provider (SP)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Authentication Request</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SP redirects user to their home Identity Provider (IdP) for authentication
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">User Authentication</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  User authenticates with their IdP using their existing credentials
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Token Issuance</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  IdP issues a security token containing user identity claims and attributes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Token Validation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SP validates the token and extracts user identity information
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">6</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Access Granted</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SP grants access to the requested resource based on user's identity and permissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federation Types */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Types of Federation
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Federation Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Enterprise Federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Between business organizations</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">B2B partnerships, supply chain</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Partner portal access</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Cloud Federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On-premises to cloud services</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hybrid cloud, SaaS adoption</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Office 365, Salesforce</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Social Federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Social identity providers</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Consumer apps, B2C scenarios</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Login with Google/Facebook</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Cross-Cloud Federation</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Between different cloud providers</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Multi-cloud strategies</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">AWS to Azure access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft Federation */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Federation Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Active Directory Federation Services (AD FS)</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">On-premises federation:</strong>
                  <span className="text-sm block">Extends AD to web applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Claims-based authentication:</strong>
                  <span className="text-sm block">Issues security tokens with user claims</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Protocol support:</strong>
                  <span className="text-sm block">SAML 2.0, WS-Federation, OAuth 2.0</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Integration:</strong>
                  <span className="text-sm block">Seamless with Microsoft ecosystem</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft Entra ID Federation</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Cloud-native federation:</strong>
                  <span className="text-sm block">Built-in federation capabilities</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">External identities:</strong>
                  <span className="text-sm block">B2B and B2C federation scenarios</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Modern protocols:</strong>
                  <span className="text-sm block">OpenID Connect, SAML 2.0, OAuth 2.0</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Conditional access:</strong>
                  <span className="text-sm block">Policy-based access control</span>
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
              <li>• <strong>Improved User Experience:</strong> Single sign-on across domains</li>
              <li>• <strong>Reduced Administration:</strong> No duplicate user accounts</li>
              <li>• <strong>Enhanced Security:</strong> Centralized authentication policies</li>
              <li>• <strong>Business Agility:</strong> Faster partner onboarding</li>
              <li>• <strong>Cost Efficiency:</strong> Reduced identity management overhead</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Challenges</h4>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• <strong>Complexity:</strong> Complex setup and configuration</li>
              <li>• <strong>Trust Management:</strong> Establishing and maintaining trust</li>
              <li>• <strong>Attribute Mapping:</strong> Complex identity transformation</li>
              <li>• <strong>Security Risks:</strong> Trust relationship vulnerabilities</li>
              <li>• <strong>Troubleshooting:</strong> Cross-domain issue resolution</li>
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
              <span>Federation enables cross-domain authentication without duplicate user accounts</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Trust relationships and standardized protocols are essential for successful federation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Federation improves user experience while reducing administrative overhead</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides comprehensive federation solutions for both on-premises and cloud scenarios</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FederationTopic;