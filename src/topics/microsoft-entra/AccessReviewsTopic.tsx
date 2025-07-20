import React from 'react';
import { CheckCircle, Users, Calendar, Shield } from 'lucide-react';

const AccessReviewsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Access Reviews
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Periodic Access Certification
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Access Reviews in Microsoft Entra ID help organizations efficiently manage group 
                memberships, access to enterprise applications, and role assignments to ensure 
                users have appropriate access levels and maintain compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Access Reviews */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Types of Access Reviews
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Group Membership Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Review and certify group memberships to ensure appropriate access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security group memberships</li>
              <li>• Microsoft 365 group memberships</li>
              <li>• Dynamic group rule validation</li>
              <li>• Nested group reviews</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Application Access Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Review user access to enterprise applications and SaaS services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Enterprise application access</li>
              <li>• SaaS application permissions</li>
              <li>• Application role assignments</li>
              <li>• Guest user application access</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Role Assignment Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Review privileged role assignments and administrative access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Azure AD administrative roles</li>
              <li>• Azure resource roles</li>
              <li>• Privileged Identity Management roles</li>
              <li>• Custom role assignments</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Guest User Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Review external user access and B2B collaboration permissions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Guest user access validation</li>
              <li>• B2B collaboration reviews</li>
              <li>• External partner access</li>
              <li>• Time-bound guest access</li>
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
              <span>Access Reviews provide periodic certification of user access rights and permissions</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Multiple review types cover groups, applications, roles, and guest user access</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Automated workflows and notifications streamline the review process</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Regular access reviews help maintain compliance and reduce security risks</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AccessReviewsTopic;