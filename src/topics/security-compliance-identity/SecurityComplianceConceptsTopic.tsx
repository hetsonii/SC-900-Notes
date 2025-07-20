import React from 'react';
import { Shield, Users, FileText, AlertTriangle } from 'lucide-react';

const SecurityComplianceConceptsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Security and Compliance Concepts Overview
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Foundation of Microsoft Security
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Security and compliance form the cornerstone of Microsoft's cloud strategy, 
                providing organizations with the tools and frameworks needed to protect data, 
                maintain regulatory compliance, and manage risk effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Concepts */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Core Security Concepts
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Confidentiality</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensuring that information is accessible only to those authorized to have access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data encryption at rest and in transit</li>
              <li>• Access controls and authentication</li>
              <li>• Information classification and labeling</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Integrity</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Maintaining the accuracy and completeness of data and systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Digital signatures and checksums</li>
              <li>• Version control and audit trails</li>
              <li>• Tamper detection mechanisms</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Availability</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensuring that authorized users have access to information and resources when needed.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Redundancy and failover systems</li>
              <li>• Disaster recovery planning</li>
              <li>• Performance monitoring and optimization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Non-repudiation</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensuring that parties cannot deny their actions or transactions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Digital certificates and PKI</li>
              <li>• Comprehensive audit logging</li>
              <li>• Legal and forensic evidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Compliance Framework
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Regulatory</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Meeting external legal and regulatory requirements like GDPR, HIPAA, SOX
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Adhering to industry standards like ISO 27001, NIST, PCI DSS
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Internal</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Following organizational policies and corporate governance requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security vs Compliance */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Security vs. Compliance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Aspect</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Security</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Purpose</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Protect against threats and vulnerabilities</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Meet regulatory and legal requirements</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Approach</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Proactive and adaptive</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Reactive and standardized</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Timeline</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Continuous monitoring and improvement</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Periodic audits and assessments</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Scope</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Comprehensive protection strategy</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Specific regulatory requirements</td>
              </tr>
            </tbody>
          </table>
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
              <span>Security and compliance work together but serve different purposes in organizational protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>The CIA triad (Confidentiality, Integrity, Availability) forms the foundation of security</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Compliance frameworks provide structured approaches to meeting regulatory requirements</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft's security and compliance solutions integrate across Azure and Microsoft 365</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SecurityComplianceConceptsTopic;