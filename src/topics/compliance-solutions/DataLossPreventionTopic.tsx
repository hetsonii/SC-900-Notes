import React from 'react';
import { Shield, AlertTriangle, Eye, Lock } from 'lucide-react';

const DataLossPreventionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Data Loss Prevention (DLP)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Preventing Sensitive Data Loss and Leakage
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Data Loss Prevention (DLP) in Microsoft Purview helps organizations identify, monitor, 
                and protect sensitive information across Microsoft 365 services, on-premises systems, 
                cloud applications, and endpoints to prevent accidental or intentional data leakage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DLP Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          DLP Core Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Content Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Identify sensitive information using various detection methods.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Sensitive information types (SITs)</li>
              <li>• Trainable classifiers</li>
              <li>• Exact data match (EDM)</li>
              <li>• Document fingerprinting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Actions</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automated responses when sensitive data is detected.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Block or restrict access</li>
              <li>• Encrypt content</li>
              <li>• Generate alerts and notifications</li>
              <li>• Apply sensitivity labels</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Endpoint DLP</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Extend DLP protection to Windows and macOS endpoints.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• File activity monitoring</li>
              <li>• USB and removable media control</li>
              <li>• Print and clipboard protection</li>
              <li>• Browser upload restrictions</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Adaptive Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dynamic protection based on risk levels and user behavior.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Risk-based policies</li>
              <li>• User risk scoring</li>
              <li>• Contextual enforcement</li>
              <li>• Adaptive controls</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DLP Locations */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          DLP Protection Locations
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft 365 Services</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Exchange Online:</strong>
                  <span className="text-sm block">Email messages and attachments</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">SharePoint Online:</strong>
                  <span className="text-sm block">Documents and sites</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">OneDrive for Business:</strong>
                  <span className="text-sm block">Personal and shared files</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Microsoft Teams:</strong>
                  <span className="text-sm block">Chat messages and shared files</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Extended Protection</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Windows Devices:</strong>
                  <span className="text-sm block">Local files and applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">macOS Devices:</strong>
                  <span className="text-sm block">Mac endpoints and applications</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Cloud Apps:</strong>
                  <span className="text-sm block">Third-party cloud services</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">On-Premises:</strong>
                  <span className="text-sm block">File shares and repositories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Configuration */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          DLP Policy Configuration
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Component</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Conditions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">What content to detect</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">SITs, keywords, classifiers, labels</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Locations</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Where to apply protection</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Exchange, SharePoint, Teams, Endpoints</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Actions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">What to do when content is detected</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Block, encrypt, notify, audit</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Exceptions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">When not to apply the policy</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">User groups, content types, conditions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          DLP Implementation Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Deployment Strategy</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Start with test mode to understand impact</li>
              <li>• Begin with high-confidence detection rules</li>
              <li>• Gradually expand scope and enforcement</li>
              <li>• Monitor and adjust based on user feedback</li>
              <li>• Provide clear user guidance and training</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Policy Design</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Use specific and accurate detection conditions</li>
              <li>• Implement appropriate confidence thresholds</li>
              <li>• Design user-friendly policy tips</li>
              <li>• Plan for legitimate business exceptions</li>
              <li>• Regular review and optimization</li>
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
              <span>DLP prevents sensitive data loss through detection, monitoring, and automated protection actions</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Protection extends across Microsoft 365 services, endpoints, and third-party cloud applications</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Adaptive protection adjusts controls based on user risk and contextual factors</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Successful implementation requires careful planning, testing, and user education</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DataLossPreventionTopic;