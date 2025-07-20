import React from 'react';
import { Crown, Shield, Clock, Key } from 'lucide-react';

const PrivilegedIdentityTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Entra Privileged Identity Management (PIM)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Crown className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Just-in-Time Privileged Access Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Privileged Identity Management (PIM) is a service in Microsoft Entra ID that enables 
                you to manage, control, and monitor access to important resources. PIM provides 
                just-in-time privileged access to reduce the risks of excessive, unnecessary, 
                or misused access permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core PIM Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core PIM Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Just-in-Time Access</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Provide time-bound access to privileged roles only when needed.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Time-limited role activation</li>
              <li>• Configurable activation duration</li>
              <li>• Automatic role deactivation</li>
              <li>• Emergency access procedures</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Approval Workflows</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Require approval for privileged role activation with customizable workflows.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multi-stage approval processes</li>
              <li>• Designated approvers</li>
              <li>• Justification requirements</li>
              <li>• Approval notifications</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Access Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Regular review and certification of privileged role assignments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Periodic access reviews</li>
              <li>• Role assignment validation</li>
              <li>• Automated review campaigns</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Audit and Monitoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive logging and monitoring of privileged access activities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Detailed audit logs</li>
              <li>• Real-time alerts</li>
              <li>• Activity dashboards</li>
              <li>• Security reports</li>
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
              <span>PIM provides just-in-time access to privileged roles, reducing security risks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Approval workflows ensure proper authorization for privileged access</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Regular access reviews maintain appropriate privileged role assignments</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Comprehensive auditing provides visibility into privileged access activities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivilegedIdentityTopic;