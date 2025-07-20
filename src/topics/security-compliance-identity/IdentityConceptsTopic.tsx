import React from 'react';
import { User, Shield, Key, Lock } from 'lucide-react';

const IdentityConceptsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Identity as the Primary Security Perimeter
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <User className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                In modern security architectures, identity has become the new security perimeter. 
                With the shift to cloud computing and remote work, traditional network-based security 
                models are no longer sufficient. Identity-centric security ensures that the right 
                people have the right access to the right resources at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Core Identity Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Identity</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A unique representation of a person, service, or device that can be authenticated and authorized.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User accounts (employees, customers, partners)</li>
              <li>• Service accounts (applications, services)</li>
              <li>• Device identities (computers, mobile devices)</li>
              <li>• Workload identities (containers, VMs)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Credentials</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Information used to prove an identity's authenticity during authentication.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Passwords and passphrases</li>
              <li>• Digital certificates</li>
              <li>• Biometric data</li>
              <li>• Hardware tokens</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Attributes</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Additional information about an identity that can influence access decisions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Role and job title</li>
              <li>• Department and location</li>
              <li>• Group memberships</li>
              <li>• Custom properties</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-red-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Permissions</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Rights and privileges granted to an identity to access specific resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Resource access rights</li>
              <li>• Operation permissions (read, write, delete)</li>
              <li>• Administrative privileges</li>
              <li>• Conditional access policies</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Identity Lifecycle Management
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Provisioning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Creating and configuring identities when users join the organization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Management</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Updating attributes, permissions, and access rights throughout the lifecycle
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Governance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Regular review and certification of access rights and permissions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deprovisioning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Removing or disabling identities when users leave the organization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Identity Types in Modern Organizations
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Identity Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Examples</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Management Considerations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Human Identities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Real people who access systems</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Employees, contractors, customers</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Self-service, lifecycle automation</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Service Identities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Applications and services</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Web apps, APIs, databases</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Certificate management, rotation</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Device Identities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Physical devices and endpoints</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Laptops, phones, IoT devices</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Device compliance, health attestation</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Workload Identities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud resources and workloads</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">VMs, containers, functions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Managed identities, role assignment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Takeaways
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Identity is the new security perimeter in cloud-first and remote work environments</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Proper identity lifecycle management ensures security and compliance throughout the user journey</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Modern organizations must manage multiple identity types including humans, services, devices, and workloads</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Identity attributes and permissions must be carefully managed to implement least privilege access</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdentityConceptsTopic;