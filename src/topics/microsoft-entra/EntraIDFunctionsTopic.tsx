import React from 'react';
import { Cloud, Shield, Users, Key } from 'lucide-react';

const EntraIDFunctionsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Entra ID Functions and Capabilities
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Cloud-Native Identity and Access Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID (formerly Azure Active Directory) is a comprehensive cloud-based 
                identity and access management service that provides authentication, authorization, 
                and identity governance for modern applications and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Functions of Microsoft Entra ID
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Authentication Services</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Verifies user identities using multiple authentication methods and protocols.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multi-factor authentication (MFA)</li>
              <li>• Passwordless authentication</li>
              <li>• Single sign-on (SSO)</li>
              <li>• Conditional access policies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Centralized management of user identities, profiles, and lifecycle.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User provisioning and deprovisioning</li>
              <li>• Profile management</li>
              <li>• Group management</li>
              <li>• Self-service capabilities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Application Integration</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Seamless integration with thousands of applications and services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Pre-integrated SaaS applications</li>
              <li>• Custom application registration</li>
              <li>• API protection</li>
              <li>• Application proxy</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Device Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive device registration, management, and compliance.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Device registration</li>
              <li>• Compliance policies</li>
              <li>• Mobile device management</li>
              <li>• Device-based conditional access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Entra ID Service Tiers
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">Free</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">P1</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">P2</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">User and Group Management</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Single Sign-On (SSO)</td>
                <td className="px-6 py-4 text-center text-green-600">✓ (10 apps)</td>
                <td className="px-6 py-4 text-center text-green-600">✓ (Unlimited)</td>
                <td className="px-6 py-4 text-center text-green-600">✓ (Unlimited)</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Multi-Factor Authentication</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Conditional Access</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Identity Protection</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Privileged Identity Management</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-red-600">✗</td>
                <td className="px-6 py-4 text-center text-green-600">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Capabilities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Advanced Capabilities
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Identity Governance</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Access Reviews</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Periodic review and certification of user access rights to ensure compliance.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Automated review campaigns</li>
                  <li>• Manager-based reviews</li>
                  <li>• Application access reviews</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Entitlement Management</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Automated provisioning and lifecycle management of access packages.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Access packages</li>
                  <li>• Approval workflows</li>
                  <li>• Time-bound access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security Features</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Identity Protection</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  AI-powered risk detection and automated remediation for identity threats.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Risk-based policies</li>
                  <li>• Anomaly detection</li>
                  <li>• Automated remediation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Privileged Identity Management</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Just-in-time access and approval workflows for privileged roles.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Just-in-time activation</li>
                  <li>• Approval workflows</li>
                  <li>• Access reviews for privileged roles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Scenarios */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Integration Scenarios
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Hybrid Identity</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Azure AD Connect:</strong>
                  <span className="text-sm block">Synchronize on-premises AD with Entra ID</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Pass-through Authentication:</strong>
                  <span className="text-sm block">Validate passwords against on-premises AD</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Federation:</strong>
                  <span className="text-sm block">Federate with AD FS for claims-based authentication</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Application Integration</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">SaaS Applications:</strong>
                  <span className="text-sm block">Pre-integrated gallery applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Applications:</strong>
                  <span className="text-sm block">Register and configure custom apps</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Legacy Applications:</strong>
                  <span className="text-sm block">Application Proxy for on-premises apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Benefits
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Enhanced Security</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Multi-factor authentication</li>
              <li>• Conditional access policies</li>
              <li>• Identity protection</li>
              <li>• Zero Trust architecture</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Improved Productivity</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Single sign-on experience</li>
              <li>• Self-service capabilities</li>
              <li>• Mobile device support</li>
              <li>• Seamless app access</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Operational Efficiency</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• Automated provisioning</li>
              <li>• Centralized management</li>
              <li>• Compliance reporting</li>
              <li>• Reduced IT overhead</li>
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
              <span>Microsoft Entra ID is a comprehensive cloud identity service with multiple service tiers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Core functions include authentication, user management, application integration, and device management</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Advanced features like Identity Protection and PIM are available in premium tiers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Supports hybrid scenarios and extensive application integration capabilities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EntraIDFunctionsTopic;