import React from 'react';
import { Eye, FileText, BarChart, Shield } from 'lucide-react';

const AuditSolutionsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Audit Solutions
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Auditing and Monitoring Organizational Activities
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Audit solutions in Microsoft Purview provide comprehensive logging, monitoring, and 
                reporting capabilities to track user activities, administrative actions, and system 
                events across Microsoft 365 services. They support compliance requirements, security 
                investigations, and organizational governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Audit Solution Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Log Search</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Search and analyze audit logs across Microsoft 365 services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cross-service log search</li>
              <li>• Advanced filtering and queries</li>
              <li>• Real-time and historical data</li>
              <li>• Export capabilities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced analytics and insights from audit data patterns.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Activity trend analysis</li>
              <li>• Anomaly detection</li>
              <li>• User behavior insights</li>
              <li>• Risk indicators</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Retention</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Configurable retention periods for audit logs and compliance requirements.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Standard 90-day retention</li>
              <li>• Extended retention options</li>
              <li>• Long-term archival</li>
              <li>• Compliance-driven retention</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Real-time Monitoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Live monitoring and alerting for critical activities and security events.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Activity alerts</li>
              <li>• Threshold-based notifications</li>
              <li>• Security event monitoring</li>
              <li>• Custom alert rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audited Activities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Audited Activities by Service
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Service</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">User Activities</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Admin Activities</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">System Events</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Exchange Online</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Email send/receive, folder access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Mailbox permissions, transport rules</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Service configuration changes</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">SharePoint Online</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">File access, sharing, downloads</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Site creation, permissions</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Feature activations, policies</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Microsoft Teams</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Chat, calls, meetings, file sharing</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Team creation, policy changes</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">App installations, compliance</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Azure Active Directory</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Sign-ins, password changes</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">User management, role assignments</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Directory synchronization</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Power Platform</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">App usage, data access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Environment management</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Connector activities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Audit Use Cases */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Common Audit Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Security Investigations</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Unauthorized access investigations</li>
              <li>• Data breach analysis</li>
              <li>• Suspicious activity tracking</li>
              <li>• Incident timeline reconstruction</li>
              <li>• Forensic evidence collection</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Compliance Monitoring</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Regulatory compliance verification</li>
              <li>• Policy adherence monitoring</li>
              <li>• Audit trail maintenance</li>
              <li>• Control effectiveness testing</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Operational Insights</h4>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• User adoption analysis</li>
              <li>• Service usage patterns</li>
              <li>• Performance monitoring</li>
              <li>• Capacity planning</li>
              <li>• Change impact assessment</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-4">Legal Discovery</h4>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200">
              <li>• Litigation support</li>
              <li>• Evidence preservation</li>
              <li>• Discovery scope definition</li>
              <li>• Legal hold compliance</li>
              <li>• Expert witness support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Audit Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Advanced Audit Capabilities
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Enhanced Features</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Intelligent Insights:</strong>
                  <span className="text-sm block">AI-powered analysis of audit patterns</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Retention:</strong>
                  <span className="text-sm block">Extended retention periods up to 10 years</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">High-Value Events:</strong>
                  <span className="text-sm block">Priority logging of critical activities</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Bandwidth Throttling:</strong>
                  <span className="text-sm block">Higher API limits for audit access</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Integration Capabilities</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">SIEM Integration:</strong>
                  <span className="text-sm block">Stream audit data to security tools</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Power BI Dashboards:</strong>
                  <span className="text-sm block">Custom analytics and visualizations</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">API Access:</strong>
                  <span className="text-sm block">Programmatic access to audit data</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Third-party Tools:</strong>
                  <span className="text-sm block">Integration with compliance platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Audit Management Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Planning and Configuration</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Define audit objectives and scope</li>
              <li>• Configure appropriate retention periods</li>
              <li>• Set up automated alerting for critical events</li>
              <li>• Establish regular review processes</li>
              <li>• Document audit procedures and responsibilities</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Monitoring and Analysis</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Regular audit log review and analysis</li>
              <li>• Trend monitoring and anomaly detection</li>
              <li>• Cross-reference with security events</li>
              <li>• Maintain audit trail integrity</li>
              <li>• Prepare for compliance audits</li>
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
              <span>Audit solutions provide comprehensive logging and monitoring across Microsoft 365 services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Advanced analytics and AI capabilities enhance audit data analysis and insights</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Configurable retention and alerting support various compliance and security requirements</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integration capabilities enable audit data to feed into broader security and compliance ecosystems</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AuditSolutionsTopic;