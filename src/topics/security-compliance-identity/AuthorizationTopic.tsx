import React from 'react';
import { Shield, Users, Lock, Key } from 'lucide-react';

const AuthorizationTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Authorization Concepts and Access Control
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Controlling Access to Resources
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Authorization determines what an authenticated user is allowed to do. It's the process of 
                granting or denying access to specific resources based on the user's identity, role, 
                and applicable policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization vs Authentication */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Authorization vs. Authentication
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Authentication</h4>
            </div>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• <strong>Who are you?</strong></li>
              <li>• Verifies identity</li>
              <li>• Happens first</li>
              <li>• Uses credentials</li>
              <li>• Binary result (success/failure)</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">Authorization</h4>
            </div>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>What can you do?</strong></li>
              <li>• Controls access</li>
              <li>• Happens after authentication</li>
              <li>• Uses permissions and policies</li>
              <li>• Granular permissions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Access Control Models */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Access Control Models
        </h3>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Role-Based Access Control (RBAC)</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access permissions are assigned to roles, and users are assigned to roles based on their job functions.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Components</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <strong>Users:</strong> Individual people or entities</li>
                  <li>• <strong>Roles:</strong> Job functions or responsibilities</li>
                  <li>• <strong>Permissions:</strong> Specific access rights</li>
                  <li>• <strong>Sessions:</strong> Active user-role assignments</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Benefits</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Simplified administration</li>
                  <li>• Principle of least privilege</li>
                  <li>• Easier compliance auditing</li>
                  <li>• Scalable for large organizations</li>
                </ul>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2 mt-4">Examples</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Manager, Employee, Guest roles</li>
                  <li>• Admin, User, Read-only roles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Attribute-Based Access Control (ABAC)</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access decisions based on attributes of users, resources, environment, and actions.
                </p>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Attribute Types</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <strong>Subject:</strong> User department, clearance level</li>
                  <li>• <strong>Resource:</strong> Data classification, owner</li>
                  <li>• <strong>Environment:</strong> Time, location, device</li>
                  <li>• <strong>Action:</strong> Read, write, delete, execute</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Advantages</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Fine-grained control</li>
                  <li>• Dynamic policy evaluation</li>
                  <li>• Context-aware decisions</li>
                  <li>• Flexible policy language</li>
                </ul>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2 mt-4">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Time-based access restrictions</li>
                  <li>• Location-based policies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Principles */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Core Authorization Principles
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Principle of Least Privilege</h4>
            <p className="text-green-800 dark:text-green-200 mb-4">
              Users should only have the minimum access necessary to perform their job functions.
            </p>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Start with no access</li>
              <li>• Grant only required permissions</li>
              <li>• Regular access reviews</li>
              <li>• Time-limited elevated access</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Separation of Duties</h4>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              Critical tasks should require multiple people to complete, preventing fraud and errors.
            </p>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Divide sensitive operations</li>
              <li>• Require multiple approvals</li>
              <li>• Prevent conflicts of interest</li>
              <li>• Audit trail requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Permission Types */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Types of Permissions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Permission Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Examples</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Read</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">View or access information</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">View files, read emails</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Data consumption</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Write</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Modify or create content</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Edit documents, send emails</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Data modification</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Execute</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Run programs or scripts</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Launch applications, run commands</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">System operations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Delete</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Remove data or resources</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Delete files, remove users</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Data destruction</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Admin</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Manage system or resource settings</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Configure settings, manage permissions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">System management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft Authorization */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Authorization Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Azure RBAC</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Built-in Roles:</strong>
                  <span className="text-sm block">Owner, Contributor, Reader, User Access Administrator</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Roles:</strong>
                  <span className="text-sm block">Tailored permissions for specific needs</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Scope Levels:</strong>
                  <span className="text-sm block">Management group, subscription, resource group, resource</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Role Assignments:</strong>
                  <span className="text-sm block">Security principal + role + scope</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft Entra Roles</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Administrative Roles:</strong>
                  <span className="text-sm block">Global Admin, User Admin, Security Admin</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Application Roles:</strong>
                  <span className="text-sm block">Custom roles defined by applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Conditional Access:</strong>
                  <span className="text-sm block">Policy-based access control</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">PIM:</strong>
                  <span className="text-sm block">Just-in-time privileged access</span>
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
              <span>Authorization controls what authenticated users can access and do with resources</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>RBAC and ABAC are the primary access control models used in modern systems</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Least privilege and separation of duties are fundamental authorization principles</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides comprehensive RBAC solutions for both Azure and Microsoft Entra ID</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AuthorizationTopic;