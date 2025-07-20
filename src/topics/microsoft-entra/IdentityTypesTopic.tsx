import React from 'react';
import { User, Users, Smartphone, Server } from 'lucide-react';

const IdentityTypesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Types of Identities in Microsoft Entra ID
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID supports various types of identities to accommodate different 
                scenarios and use cases. Understanding these identity types is crucial for 
                implementing comprehensive identity and access management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Primary Identity Types
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User Identities</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Individual people who need access to organizational resources and applications.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Internal Users:</strong> Employees and staff members</li>
              <li>• <strong>External Users:</strong> Partners, vendors, customers</li>
              <li>• <strong>Guest Users:</strong> B2B collaboration participants</li>
              <li>• <strong>Consumer Users:</strong> B2C application users</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Service Identities</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Non-human identities used by applications, services, and automated processes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Service Principals:</strong> Application identities</li>
              <li>• <strong>Managed Identities:</strong> Azure resource identities</li>
              <li>• <strong>Application Objects:</strong> App registrations</li>
              <li>• <strong>Workload Identities:</strong> Container and function identities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-8 h-8 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Device Identities</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Physical devices that connect to and access organizational resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Azure AD Joined:</strong> Cloud-only devices</li>
              <li>• <strong>Hybrid Joined:</strong> Domain and cloud joined</li>
              <li>• <strong>Registered:</strong> Personal devices with work access</li>
              <li>• <strong>Compliant:</strong> Policy-compliant devices</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-orange-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Group Identities</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Collections of users or other objects for simplified access management.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• <strong>Security Groups:</strong> Access control and permissions</li>
              <li>• <strong>Microsoft 365 Groups:</strong> Collaboration and resources</li>
              <li>• <strong>Distribution Groups:</strong> Email distribution lists</li>
              <li>• <strong>Dynamic Groups:</strong> Rule-based membership</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          User Identity Details
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">User Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Source</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Authentication</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Cloud-only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Created in Entra ID</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Entra ID credentials</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud-first organizations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Synchronized</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On-premises AD</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hybrid authentication</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hybrid environments</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Guest (B2B)</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">External organization</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Home tenant credentials</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Partner collaboration</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Consumer (B2C)</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">B2C tenant</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Social or local accounts</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Customer applications</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Service Principal Types
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Application Service Principals</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Represent applications that need to access Azure resources or Microsoft Graph APIs.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Characteristics</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Created from app registrations</li>
                  <li>• Can have multiple service principals</li>
                  <li>• Support certificate and secret authentication</li>
                  <li>• Can be assigned roles and permissions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Web applications accessing APIs</li>
                  <li>• Daemon services and background jobs</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Third-party integrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Managed Identities</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">System-assigned</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Automatically created and tied to a specific Azure resource lifecycle.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• One-to-one relationship with resource</li>
                  <li>• Deleted when resource is deleted</li>
                  <li>• No credential management required</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">User-assigned</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Standalone identity that can be assigned to multiple Azure resources.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Independent lifecycle</li>
                  <li>• Can be shared across resources</li>
                  <li>• Centralized management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Group Types and Management
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security Groups</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Used for managing access to resources and applications.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Assigned membership:</strong> Manually managed</li>
                <li>• <strong>Dynamic membership:</strong> Rule-based automatic membership</li>
                <li>• <strong>Role assignable:</strong> Can be assigned to Azure roles</li>
                <li>• <strong>Mail-enabled:</strong> Can receive email</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft 365 Groups</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Collaboration groups with associated resources and services.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Shared mailbox:</strong> Group email address</li>
                <li>• <strong>SharePoint site:</strong> Document collaboration</li>
                <li>• <strong>Teams integration:</strong> Microsoft Teams workspace</li>
                <li>• <strong>Planner:</strong> Task management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Device Identity Management
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Join Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Management</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Azure AD Joined</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud-only domain join</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Intune, Group Policy</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud-first organizations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Hybrid Joined</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Both on-premises and cloud</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">AD Group Policy, Intune</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hybrid environments</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Registered</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Personal device with work access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Intune MAM</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">BYOD scenarios</td>
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
              <span>Microsoft Entra ID supports multiple identity types: users, services, devices, and groups</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>User identities can be cloud-only, synchronized, guest (B2B), or consumer (B2C)</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Service identities include application service principals and managed identities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Device identities support various join types for different organizational scenarios</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdentityTypesTopic;