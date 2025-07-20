import React from 'react';
import { Cloud, Server, FolderSync as Sync, Shield } from 'lucide-react';

const HybridIdentityTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Hybrid Identity Scenarios and Implementations
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Bridging On-Premises and Cloud Identity
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Hybrid identity enables organizations to maintain their on-premises Active Directory 
                while extending identity services to the cloud. This approach provides a seamless 
                user experience across both environments while maintaining security and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Identity Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Hybrid Identity Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">On-Premises Active Directory</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The authoritative source for user identities and authentication in the corporate network.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Domain controllers and directory services</li>
              <li>• Group Policy management</li>
              <li>• Kerberos authentication</li>
              <li>• LDAP directory access</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Microsoft Entra ID</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cloud-based identity service that extends on-premises capabilities to the cloud.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cloud application access</li>
              <li>• Modern authentication protocols</li>
              <li>• Conditional access policies</li>
              <li>• Multi-factor authentication</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Sync className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Azure AD Connect</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Synchronization tool that bridges on-premises and cloud identities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Identity synchronization</li>
              <li>• Password hash sync</li>
              <li>• Pass-through authentication</li>
              <li>• Federation integration</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Hybrid Authentication</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Seamless authentication experience across on-premises and cloud resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Single sign-on (SSO)</li>
              <li>• Seamless SSO</li>
              <li>• Federation services</li>
              <li>• Device registration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Hybrid Authentication Methods
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Password Hash Synchronization (PHS)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Synchronizes password hashes from on-premises AD to Microsoft Entra ID.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Extracts password hash from on-premises AD</li>
                  <li>• Applies additional hashing for security</li>
                  <li>• Stores hash in Microsoft Entra ID</li>
                  <li>• Enables cloud authentication</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Benefits</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Simple to implement and maintain</li>
                  <li>• High availability</li>
                  <li>• Supports leaked credential detection</li>
                  <li>• No additional infrastructure required</li>
                </ul>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2 mt-4">Considerations</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Password changes sync every 2 minutes</li>
                  <li>• Requires network connectivity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pass-through Authentication (PTA)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Validates passwords directly against on-premises Active Directory.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Authentication agent on-premises</li>
                  <li>• Forwards authentication requests</li>
                  <li>• Validates against local AD</li>
                  <li>• Returns result to cloud</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Benefits</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Passwords never stored in cloud</li>
                  <li>• Immediate password policy enforcement</li>
                  <li>• Supports on-premises security features</li>
                  <li>• Real-time authentication</li>
                </ul>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2 mt-4">Requirements</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Authentication agents on-premises</li>
                  <li>• High availability setup recommended</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Federation with AD FS</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Uses Active Directory Federation Services for claims-based authentication.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">How it Works</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AD FS issues security tokens</li>
                  <li>• Claims-based authentication</li>
                  <li>• Trust relationship with Microsoft Entra ID</li>
                  <li>• Custom authentication flows</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Complex authentication requirements</li>
                  <li>• Smart card authentication</li>
                  <li>• Third-party MFA solutions</li>
                  <li>• Custom claims requirements</li>
                </ul>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2 mt-4">Infrastructure</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AD FS servers required</li>
                  <li>• Web Application Proxy</li>
                  <li>• SSL certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Authentication Method Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Password Hash Sync</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Pass-through Auth</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Federation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Complexity</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Low</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Medium</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">High</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Infrastructure</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Minimal</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Authentication agents</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">AD FS farm</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Password Storage</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hash in cloud</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On-premises only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On-premises only</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">High Availability</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Built-in</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Multiple agents</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Load balancer required</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Custom Claims</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Limited</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Limited</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Full support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Scenarios */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Implementation Scenarios
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Recommended: PHS + Seamless SSO</h4>
            <p className="text-green-800 dark:text-green-200 mb-4">
              Best for most organizations seeking simplicity and reliability.
            </p>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Use Case:</strong> Standard cloud adoption</li>
              <li>• <strong>Benefits:</strong> Simple, reliable, secure</li>
              <li>• <strong>Requirements:</strong> Azure AD Connect only</li>
              <li>• <strong>Backup:</strong> Can enable PTA as fallback</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Security-Focused: PTA</h4>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              For organizations with strict password security requirements.
            </p>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• <strong>Use Case:</strong> High security requirements</li>
              <li>• <strong>Benefits:</strong> No password hashes in cloud</li>
              <li>• <strong>Requirements:</strong> Authentication agents</li>
              <li>• <strong>Backup:</strong> PHS as disaster recovery</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Complex Requirements: Federation</h4>
            <p className="text-purple-800 dark:text-purple-200 mb-4">
              For organizations with complex authentication needs.
            </p>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• <strong>Use Case:</strong> Smart cards, custom MFA</li>
              <li>• <strong>Benefits:</strong> Full control over authentication</li>
              <li>• <strong>Requirements:</strong> AD FS infrastructure</li>
              <li>• <strong>Backup:</strong> PHS for disaster recovery</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-4">Hybrid Approach</h4>
            <p className="text-orange-800 dark:text-orange-200 mb-4">
              Combining multiple methods for different user groups.
            </p>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200">
              <li>• <strong>Use Case:</strong> Mixed requirements</li>
              <li>• <strong>Benefits:</strong> Flexibility per user group</li>
              <li>• <strong>Requirements:</strong> Multiple configurations</li>
              <li>• <strong>Complexity:</strong> Higher management overhead</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Hybrid Identity Best Practices
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Planning and Design</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Assess current AD environment and health</li>
                <li>• Plan for high availability and disaster recovery</li>
                <li>• Consider network connectivity requirements</li>
                <li>• Design for scalability and performance</li>
                <li>• Plan migration strategy for existing applications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security and Monitoring</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Enable Azure AD Connect Health monitoring</li>
                <li>• Implement conditional access policies</li>
                <li>• Configure password protection</li>
                <li>• Monitor synchronization and authentication</li>
                <li>• Regular security assessments and updates</li>
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
              <span>Hybrid identity bridges on-premises Active Directory with cloud services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Password Hash Synchronization is recommended for most organizations</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Pass-through Authentication keeps passwords on-premises only</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Federation provides maximum flexibility but requires more infrastructure</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HybridIdentityTopic;