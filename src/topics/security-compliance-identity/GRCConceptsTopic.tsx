import React from 'react';
import { Shield, AlertTriangle, FileCheck, Users } from 'lucide-react';

const GRCConceptsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Governance, Risk, and Compliance (GRC)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Integrated Approach to Organizational Security
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                GRC is a structured approach that aligns IT with business objectives while 
                managing risk and meeting compliance requirements. It provides a framework 
                for coordinating governance, risk management, and compliance activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRC Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          The Three Pillars of GRC
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Governance</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The framework for decision-making, oversight, and strategic direction.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Executive oversight and accountability</li>
              <li>• Strategic planning and objectives</li>
              <li>• Policy development and enforcement</li>
              <li>• Resource allocation and management</li>
              <li>• Performance monitoring and reporting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Risk</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Identifying, assessing, and managing potential threats to the organization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Risk identification and assessment</li>
              <li>• Risk appetite and tolerance definition</li>
              <li>• Risk mitigation strategies</li>
              <li>• Continuous risk monitoring</li>
              <li>• Incident response and recovery</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Compliance</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensuring adherence to laws, regulations, standards, and internal policies.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Regulatory requirement tracking</li>
              <li>• Compliance monitoring and testing</li>
              <li>• Audit management and reporting</li>
              <li>• Remediation and corrective actions</li>
              <li>• Documentation and evidence collection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk Management Framework */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Risk Management Process
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Identify</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Discover and catalog potential risks across the organization
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assess</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Evaluate probability and impact of identified risks
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mitigate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Implement controls and strategies to reduce risk
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Monitor</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Continuously track and review risk status and controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Response Strategies */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Risk Response Strategies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Avoid</h4>
              <p className="text-red-800 dark:text-red-200 text-sm">
                Eliminate the risk by not engaging in the risky activity or removing the risk source.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mitigate</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                Reduce the likelihood or impact of the risk through preventive controls and measures.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Transfer</h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                Shift the risk to another party through insurance, outsourcing, or contractual agreements.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Accept</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">
                Acknowledge the risk and accept the potential consequences when mitigation costs exceed benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Types */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Types of Compliance Requirements
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Examples</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Regulatory</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">GDPR, HIPAA, SOX, FISMA</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Legal and regulatory obligations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Industry Standards</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">ISO 27001, NIST, PCI DSS</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Best practices and security frameworks</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Contractual</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">SLAs, vendor agreements, customer contracts</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Business relationship obligations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Internal Policies</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Security policies, code of conduct, procedures</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Organizational governance and control</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft GRC Solutions */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft GRC Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Governance & Compliance</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Microsoft Purview:</strong>
                  <span className="text-sm block">Unified data governance and compliance platform</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Compliance Manager:</strong>
                  <span className="text-sm block">Risk assessment and compliance tracking</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Service Trust Portal:</strong>
                  <span className="text-sm block">Transparency and compliance documentation</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Azure Policy:</strong>
                  <span className="text-sm block">Governance controls and compliance automation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Risk Management</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Microsoft Defender:</strong>
                  <span className="text-sm block">Threat protection and risk detection</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Microsoft Sentinel:</strong>
                  <span className="text-sm block">Security information and event management</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Insider Risk Management:</strong>
                  <span className="text-sm block">Internal threat detection and prevention</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Azure Security Center:</strong>
                  <span className="text-sm block">Cloud security posture management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GRC Benefits */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Benefits of Integrated GRC
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Operational Efficiency</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Streamlined processes and workflows</li>
              <li>• Reduced duplication of efforts</li>
              <li>• Automated compliance monitoring</li>
              <li>• Centralized reporting and dashboards</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Risk Reduction</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Better risk visibility and management</li>
              <li>• Proactive threat identification</li>
              <li>• Improved incident response</li>
              <li>• Enhanced decision-making</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Business Value</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• Increased stakeholder confidence</li>
              <li>• Competitive advantage</li>
              <li>• Cost reduction and optimization</li>
              <li>• Strategic alignment</li>
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
              <span>GRC provides an integrated approach to managing organizational governance, risk, and compliance</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Risk management involves a continuous cycle of identification, assessment, mitigation, and monitoring</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Compliance requirements come from various sources including regulations, standards, and internal policies</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides comprehensive GRC solutions across governance, risk management, and compliance domains</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GRCConceptsTopic;