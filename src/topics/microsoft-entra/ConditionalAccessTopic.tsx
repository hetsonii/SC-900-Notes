import React from 'react';
import { Shield, Users, Smartphone, MapPin } from 'lucide-react';

const ConditionalAccessTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Conditional Access Policies
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Intelligent Access Control
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Conditional Access is Microsoft Entra ID's tool for bringing signals together, 
                making decisions, and enforcing organizational policies. It's the control plane 
                for Zero Trust architecture, enabling intelligent access decisions based on 
                user, device, location, and risk signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Conditional Access Works */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          How Conditional Access Works
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Signal Collection</h4>
                <p className="text-gray-600 dark:text-gray-300">Gather signals about user, device, location, and application</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Decision Making</h4>
                <p className="text-gray-600 dark:text-gray-300">Evaluate signals against configured policies and conditions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Enforcement</h4>
                <p className="text-gray-600 dark:text-gray-300">Apply access controls: allow, block, or require additional verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Conditional Access Policy Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Assignments</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define who and what the policy applies to.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Users and Groups:</strong> Specific users, groups, or roles</li>
              <li>• <strong>Cloud Apps:</strong> Applications and services</li>
              <li>• <strong>Conditions:</strong> Sign-in risk, device platforms, locations</li>
              <li>• <strong>User Risk:</strong> Risk level based on behavior analysis</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Access Controls</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define what happens when policy conditions are met.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Grant Access:</strong> Allow with or without requirements</li>
              <li>• <strong>Block Access:</strong> Deny access completely</li>
              <li>• <strong>Require MFA:</strong> Additional authentication factors</li>
              <li>• <strong>Device Compliance:</strong> Require compliant devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Policy Scenarios */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Conditional Access Scenarios
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Location-Based Access</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-medium text-gray-900 dark:text-white">Trusted Locations</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Define trusted network locations where additional security measures aren't required.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Corporate office networks</li>
                  <li>• VPN endpoints</li>
                  <li>• Partner locations</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-medium text-gray-900 dark:text-white">Risky Locations</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Block or require additional verification from high-risk locations.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Countries with high fraud rates</li>
                  <li>• Tor exit nodes</li>
                  <li>• Anonymous proxy services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Device-Based Policies</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Smartphone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-medium text-gray-900 dark:text-white">Compliant Devices</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Require devices to meet compliance policies before accessing resources.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Device encryption enabled</li>
                  <li>• OS version requirements</li>
                  <li>• Security patch levels</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h5 className="font-medium text-gray-900 dark:text-white">Managed Devices</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Allow access only from devices managed by the organization.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Intune-managed devices</li>
                  <li>• Domain-joined computers</li>
                  <li>• Hybrid Azure AD joined</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Examples */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Example Conditional Access Policies
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Policy Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Conditions</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Access Control</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Admin MFA</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Admin roles accessing any app</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Require MFA</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Protect privileged accounts</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Block Legacy Auth</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Legacy authentication protocols</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Block access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Prevent protocol attacks</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Risky Sign-in</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">High sign-in risk detected</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Require MFA + password change</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Respond to suspicious activity</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Unmanaged Devices</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Non-compliant devices</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Block or limit access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Enforce device management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Conditional Access Best Practices
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Implementation Strategy</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Start with Report-Only:</strong>
                  <span className="text-sm block">Test policies before enforcement</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Phased Rollout:</strong>
                  <span className="text-sm block">Deploy to pilot groups first</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Emergency Access:</strong>
                  <span className="text-sm block">Maintain break-glass accounts</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Regular Review:</strong>
                  <span className="text-sm block">Monitor and adjust policies regularly</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Policy Design</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Specific Targeting:</strong>
                  <span className="text-sm block">Use precise user and app assignments</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Layered Approach:</strong>
                  <span className="text-sm block">Combine multiple policies for comprehensive coverage</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Experience:</strong>
                  <span className="text-sm block">Balance security with usability</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Documentation:</strong>
                  <span className="text-sm block">Maintain clear policy documentation</span>
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
              <span>Conditional Access enables intelligent, risk-based access decisions using multiple signals</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Policies combine assignments (who/what) with access controls (allow/block/require)</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Common scenarios include location-based, device-based, and risk-based access controls</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Successful implementation requires careful planning, testing, and ongoing monitoring</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ConditionalAccessTopic;