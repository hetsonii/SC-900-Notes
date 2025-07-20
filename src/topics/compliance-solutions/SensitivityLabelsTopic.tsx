import React from 'react';
import { Tag, Shield, Lock, Eye } from 'lucide-react';

const SensitivityLabelsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Sensitivity Labels and Policies
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Data Protection Through Sensitivity Labeling
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Sensitivity labels in Microsoft Purview help organizations classify and protect their 
                data based on its sensitivity level. These labels can be applied automatically or 
                manually and enforce protection actions like encryption, access restrictions, and 
                visual markings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Label Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Sensitivity Label Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Tag className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Label Hierarchy</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Organize labels in a hierarchical structure with parent and sub-labels.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Parent labels (e.g., Confidential)</li>
              <li>• Sub-labels (e.g., Confidential\Internal)</li>
              <li>• Label ordering and priority</li>
              <li>• Inheritance rules</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Protection Actions</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automatic protection measures applied when labels are assigned.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Encryption with rights management</li>
              <li>• Access restrictions and permissions</li>
              <li>• Content marking (headers, footers)</li>
              <li>• Watermarks and visual indicators</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Label Policies</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Control how and where sensitivity labels are applied and enforced.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User and group targeting</li>
              <li>• Application scope</li>
              <li>• Default label assignment</li>
              <li>• Mandatory labeling requirements</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Auto-Labeling</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automatically apply labels based on content analysis and conditions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Sensitive information types</li>
              <li>• Trainable classifiers</li>
              <li>• Keyword matching</li>
              <li>• Pattern recognition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Label Examples */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Sensitivity Label Examples
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Label</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Protection Actions</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Public</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Information intended for public consumption</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Visual markings only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Marketing materials, press releases</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Internal</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Information for internal use only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Access restrictions, markings</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Internal communications, policies</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Confidential</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Sensitive business information</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Encryption, access controls</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Financial data, contracts</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Highly Confidential</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Most sensitive organizational data</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Strong encryption, strict access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Trade secrets, personal data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Process */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Implementation Process
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Plan Label Taxonomy</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Design a logical hierarchy of sensitivity labels based on business needs and data classification requirements
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Create Labels</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Configure sensitivity labels with appropriate protection actions, visual markings, and conditions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Publish Label Policies</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deploy label policies to target users and applications with appropriate scope and settings
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Configure Auto-Labeling</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Set up automatic labeling policies to classify content based on sensitive information detection
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Monitor and Optimize</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Track label usage, analyze effectiveness, and refine policies based on user behavior and compliance needs
                </p>
              </div>
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
              <span>Sensitivity labels provide persistent protection that travels with data across platforms</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Labels can be applied manually by users or automatically based on content analysis</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Protection actions include encryption, access controls, and visual markings</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Label policies control deployment scope and enforcement across the organization</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SensitivityLabelsTopic;