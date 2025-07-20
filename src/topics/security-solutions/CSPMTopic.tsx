import React from 'react';
import { Shield, CheckCircle, AlertTriangle, BarChart } from 'lucide-react';

const CSPMTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Cloud Security Posture Management (CSPM)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Continuous Security Assessment
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Cloud Security Posture Management (CSPM) continuously monitors cloud environments 
                to identify misconfigurations, compliance violations, and security risks. It provides 
                automated assessment and remediation guidance to maintain strong security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSPM Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Key CSPM Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Configuration Assessment</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Continuously evaluate cloud resource configurations against security best practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security baseline compliance</li>
              <li>• Misconfiguration detection</li>
              <li>• Best practice recommendations</li>
              <li>• Automated remediation guidance</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Secure Score</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Quantify and track your security posture with actionable metrics.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Overall security rating</li>
              <li>• Improvement recommendations</li>
              <li>• Progress tracking</li>
              <li>• Benchmark comparisons</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Risk Prioritization</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Identify and prioritize the most critical security risks and vulnerabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Risk-based scoring</li>
              <li>• Impact assessment</li>
              <li>• Remediation prioritization</li>
              <li>• Resource allocation guidance</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Monitoring</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Monitor compliance with industry standards and regulatory requirements.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Regulatory frameworks</li>
              <li>• Industry standards</li>
              <li>• Compliance dashboards</li>
              <li>• Audit reporting</li>
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
              <span>CSPM provides continuous monitoring and assessment of cloud security configurations</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Secure Score quantifies security posture and provides improvement guidance</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Risk prioritization helps focus remediation efforts on critical vulnerabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Compliance monitoring ensures adherence to regulatory and industry standards</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CSPMTopic;