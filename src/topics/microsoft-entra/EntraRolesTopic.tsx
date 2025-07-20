import React from 'react';
import { Users, Shield, Key, Crown } from 'lucide-react';

const EntraRolesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Entra Roles and Role-Based Access Control (RBAC)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Crown className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra roles provide fine-grained access control for administrative tasks 
                and resource management. RBAC ensures users have only the permissions they need 
                to perform their job functions, following the principle of least privilege.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Built-in Administrative Roles
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-red-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Global Administrator</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Highest level of access with full control over all aspects of the tenant.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Manage all administrative features</li>
              <li>• Assign administrator roles to others</li>
              <li>• Reset passwords for any user</li>
              <li>• Manage domains and tenant settings</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User Administrator</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manages users and groups with some limitations on privileged users.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Create and manage users and groups</li>
              <li>• Manage user licenses</li>
              <li>• Reset passwords for non-admin users</li>
              <li>• Manage user properties and settings</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Administrator</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manages security-related features and policies across Microsoft services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Configure security policies</li>
              <li>• Manage conditional access</li>
              <li>• View security reports and alerts</li>
              <li>• Manage identity protection settings</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Application Administrator</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manages all aspects of app registrations and enterprise applications.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Create and manage app registrations</li>
              <li>• Configure enterprise applications</li>
              <li>• Manage application permissions</li>
              <li>• Configure single sign-on settings</li>
            </ul>
          </div>
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
              <span>Microsoft Entra roles provide granular administrative permissions following least privilege</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Built-in roles cover common administrative scenarios with predefined permissions</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Custom roles allow organizations to create specific permission sets for unique requirements</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EntraRolesTopic;