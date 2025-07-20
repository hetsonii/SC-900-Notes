import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPrinciplesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Privacy Principles of Microsoft
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Fundamental Privacy Commitments
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft's privacy principles guide how the company collects, uses, and protects 
                personal data. These principles reflect Microsoft's commitment to transparency, 
                user control, and responsible data handling practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Privacy Principles */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Microsoft's Six Privacy Principles
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Control</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Users have meaningful choices about the collection and use of their data.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Privacy settings and controls</li>
              <li>• Data deletion options</li>
              <li>• Consent management</li>
              <li>• Opt-out mechanisms</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Transparency</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Clear and understandable information about data practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Privacy statements</li>
              <li>• Data collection notices</li>
              <li>• Processing purpose explanations</li>
              <li>• Third-party sharing disclosure</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Strong security measures to protect personal data from unauthorized access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data encryption</li>
              <li>• Access controls</li>
              <li>• Security monitoring</li>
              <li>• Incident response</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Strong Legal Protections</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Respect for local privacy laws and resistance to unlawful government requests.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Legal compliance</li>
              <li>• Government request transparency</li>
              <li>• Data sovereignty respect</li>
              <li>• Legal challenge processes</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">No Content-Based Targeting</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Microsoft does not use email, chat, files, or other personal content for advertising.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• No email scanning for ads</li>
              <li>• No document content analysis</li>
              <li>• No chat monitoring for targeting</li>
              <li>• Content privacy protection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Benefits to You</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Data use should benefit the user and improve their experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Service improvement</li>
              <li>• Personalization benefits</li>
              <li>• Security enhancements</li>
              <li>• User value creation</li>
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
              <span>Microsoft's six privacy principles guide all data handling practices</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Users maintain control over their data with meaningful choices and settings</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Transparency ensures users understand how their data is collected and used</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft does not use personal content for advertising targeting</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPrinciplesTopic;