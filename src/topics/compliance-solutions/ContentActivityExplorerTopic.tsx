import React from 'react';
import { Eye, Search, BarChart, Shield } from 'lucide-react';

const ContentActivityExplorerTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Content Explorer and Activity Explorer
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Data Discovery and Activity Monitoring
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Content Explorer and Activity Explorer are powerful tools in Microsoft Purview that 
                provide visibility into your organization's sensitive data and user activities. They 
                help organizations understand data distribution, monitor access patterns, and ensure 
                compliance with data protection policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Explorer */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Content Explorer Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Discovery</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover and visualize sensitive data across your organization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Sensitive information type detection</li>
              <li>• Label distribution analysis</li>
              <li>• Data location mapping</li>
              <li>• Content classification insights</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Visualization</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Visual representation of data distribution and classification.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Interactive dashboards</li>
              <li>• Drill-down capabilities</li>
              <li>• Trend analysis</li>
              <li>• Export functionality</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Monitoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Monitor compliance with data protection policies and regulations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Policy compliance tracking</li>
              <li>• Risk assessment</li>
              <li>• Regulatory reporting</li>
              <li>• Exception identification</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Content Preview</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Preview and examine sensitive content with appropriate permissions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Secure content viewing</li>
              <li>• Metadata examination</li>
              <li>• Classification verification</li>
              <li>• Access control enforcement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activity Explorer */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Activity Explorer Features
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">User Activity Tracking</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Label Activities:</strong>
                  <span className="text-sm block">Track sensitivity label application and changes</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Access Patterns:</strong>
                  <span className="text-sm block">Monitor file and document access patterns</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Policy Events:</strong>
                  <span className="text-sm block">Track DLP policy matches and violations</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Sharing Activities:</strong>
                  <span className="text-sm block">Monitor external sharing and collaboration</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Analytics and Insights</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Trend Analysis:</strong>
                  <span className="text-sm block">Identify patterns in data usage and protection</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Risk Indicators:</strong>
                  <span className="text-sm block">Highlight potential compliance risks</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Behavior:</strong>
                  <span className="text-sm block">Analyze user interaction with sensitive data</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Reporting:</strong>
                  <span className="text-sm block">Generate compliance and audit reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Data Governance</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Understand data landscape and distribution</li>
              <li>• Identify unprotected sensitive data</li>
              <li>• Monitor data classification effectiveness</li>
              <li>• Track data lifecycle and retention</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Compliance Reporting</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Generate regulatory compliance reports</li>
              <li>• Demonstrate data protection measures</li>
              <li>• Track policy enforcement effectiveness</li>
              <li>• Support audit requirements</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Risk Management</h4>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• Identify data exposure risks</li>
              <li>• Monitor unusual access patterns</li>
              <li>• Track policy violations</li>
              <li>• Assess security posture</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-4">Investigation Support</h4>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200">
              <li>• Forensic data analysis</li>
              <li>• Incident investigation</li>
              <li>• User activity reconstruction</li>
              <li>• Evidence collection</li>
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
              <span>Content Explorer provides comprehensive visibility into sensitive data distribution and classification</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Activity Explorer tracks user interactions with sensitive data and policy enforcement</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Both tools support compliance reporting, risk management, and investigation activities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integration with Microsoft Purview provides unified data governance and protection</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContentActivityExplorerTopic;