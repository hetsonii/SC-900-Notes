import React from 'react';
import { Users, AlertTriangle, Eye, Shield } from 'lucide-react';

const InsiderRiskTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Insider Risk Management
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Detecting and Managing Insider Threats
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Insider Risk Management in Microsoft Purview helps organizations identify, investigate, 
                and respond to malicious and inadvertent insider risks. It uses machine learning and 
                analytics to detect risky user behavior while maintaining privacy and providing 
                actionable insights for security teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Indicators */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Insider Risk Indicators
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Theft Indicators</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Behaviors that may indicate unauthorized data access or exfiltration.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Unusual file downloads or copying</li>
              <li>• Access to unrelated sensitive data</li>
              <li>• Use of unauthorized storage devices</li>
              <li>• Abnormal email or sharing patterns</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Violations</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Activities that violate organizational security policies and procedures.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Policy circumvention attempts</li>
              <li>• Unauthorized software installation</li>
              <li>• Privilege escalation activities</li>
              <li>• Security control bypassing</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">HR Risk Events</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Human resources events that may increase insider risk potential.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Performance issues or disciplinary actions</li>
              <li>• Job role changes or demotion</li>
              <li>• Resignation or termination notice</li>
              <li>• Financial stress indicators</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Behavioral Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Machine learning analysis of user behavior patterns and anomalies.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Baseline behavior establishment</li>
              <li>• Anomaly detection algorithms</li>
              <li>• Risk scoring and prioritization</li>
              <li>• Contextual analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Policy Templates */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Insider Risk Policy Templates
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Template</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Focus Area</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Key Indicators</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Theft</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Unauthorized data access</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">File downloads, copying, sharing</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Intellectual property protection</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Leaks</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Inadvertent data exposure</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Oversharing, mishandling</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Privacy compliance</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Departing Users</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Employee departure risks</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Pre-departure activities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Offboarding security</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Security Violations</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Policy circumvention</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Security control bypassing</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Security policy enforcement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Investigation Workflow */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Investigation and Response Workflow
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Alert Generation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Machine learning algorithms detect risky behavior and generate alerts based on policy configurations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Risk Assessment</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Security analysts review alerts, assess risk levels, and prioritize investigations based on severity
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Investigation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Detailed analysis of user activities, timeline reconstruction, and evidence collection
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Case Management</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Create cases, collaborate with stakeholders, and document investigation findings
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Response Actions</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Implement appropriate remediation measures, from user education to disciplinary actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Privacy Protection Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Privacy by Design</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Pseudonymization of user identities</li>
              <li>• Role-based access to investigation data</li>
              <li>• Configurable privacy controls</li>
              <li>• Audit trails for all access</li>
              <li>• Data minimization principles</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Compliance Safeguards</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• GDPR and privacy regulation compliance</li>
              <li>• Employee rights protection</li>
              <li>• Transparent investigation processes</li>
              <li>• Data retention and deletion controls</li>
              <li>• Legal and HR collaboration features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Integration with Microsoft Security Ecosystem
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Data Sources</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Microsoft 365:</strong>
                  <span className="text-sm block">Email, files, Teams, SharePoint activities</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Azure AD:</strong>
                  <span className="text-sm block">Authentication and access patterns</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Defender for Endpoint:</strong>
                  <span className="text-sm block">Device and application activities</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">HR Systems:</strong>
                  <span className="text-sm block">Employee lifecycle and performance data</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Response Integration</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">DLP Policies:</strong>
                  <span className="text-sm block">Trigger additional data protection measures</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Conditional Access:</strong>
                  <span className="text-sm block">Adjust access controls based on risk</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">eDiscovery:</strong>
                  <span className="text-sm block">Escalate to legal investigation tools</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">SIEM Integration:</strong>
                  <span className="text-sm block">Feed alerts to security operations center</span>
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
              <span>Insider Risk Management uses machine learning to detect malicious and inadvertent insider threats</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Policy templates provide pre-configured detection for common insider risk scenarios</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Privacy protection features ensure employee rights while enabling effective risk detection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integration with Microsoft security ecosystem provides comprehensive threat detection and response</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InsiderRiskTopic;