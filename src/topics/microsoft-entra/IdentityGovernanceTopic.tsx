import React from 'react';
import { Shield, Users, CheckCircle, Clock } from 'lucide-react';

const IdentityGovernanceTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Entra ID Governance
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Comprehensive Identity Lifecycle Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Entra ID Governance provides organizations with the ability to balance 
                security and employee productivity with the right processes and visibility. It helps 
                ensure that the right people have the right access to the right resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Identity Governance Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Entitlement Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automate access request workflows and manage the identity lifecycle at scale.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Access packages for bundled resources</li>
              <li>• Automated approval workflows</li>
              <li>• Time-bound access assignments</li>
              <li>• Self-service access requests</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Access Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Periodic review and certification of user access rights to ensure compliance.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Automated review campaigns</li>
              <li>• Manager-based reviews</li>
              <li>• Application access reviews</li>
              <li>• Group membership reviews</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Privileged Identity Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Just-in-time access and approval workflows for privileged roles.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Just-in-time activation</li>
              <li>• Approval workflows</li>
              <li>• Access reviews for privileged roles</li>
              <li>• Risk-based activation policies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Lifecycle Workflows</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automate identity lifecycle processes for joiners, movers, and leavers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Pre-hire workflows</li>
              <li>• Onboarding automation</li>
              <li>• Role change processes</li>
              <li>• Offboarding workflows</li>
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
              <span>Identity Governance provides comprehensive lifecycle management for identities and access</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Entitlement management automates access requests and approvals at scale</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Access reviews ensure ongoing compliance and appropriate access levels</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Lifecycle workflows automate identity processes for organizational changes</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdentityGovernanceTopic;