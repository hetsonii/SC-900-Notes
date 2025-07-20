import React from 'react';
import { CheckCircle, BarChart, FileText, Shield } from 'lucide-react';

const ComplianceManagerTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Compliance Manager
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Risk Assessment and Compliance Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Compliance Manager helps organizations simplify compliance and reduce risk by 
                providing pre-built assessments for common industry and regional standards, 
                workflow capabilities, and step-by-step improvement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Compliance Manager Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Pre-built Assessments</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ready-to-use assessments for major compliance frameworks.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• ISO 27001</li>
              <li>• NIST 800-53</li>
              <li>• GDPR</li>
              <li>• SOC 2</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Score</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Risk-based scoring to measure compliance posture.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Real-time scoring</li>
              <li>• Progress tracking</li>
              <li>• Improvement recommendations</li>
              <li>• Benchmark comparisons</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Improvement Actions</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Step-by-step guidance for implementing compliance controls.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Implementation guidance</li>
              <li>• Testing procedures</li>
              <li>• Evidence collection</li>
              <li>• Status tracking</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Workflow Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Collaborative workflows for compliance activities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Task assignment</li>
              <li>• Review processes</li>
              <li>• Approval workflows</li>
              <li>• Notification management</li>
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
              <span>Compliance Manager provides pre-built assessments for major compliance frameworks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers risk-based compliance scoring and progress tracking</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides step-by-step improvement actions and implementation guidance</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes collaborative workflow management for compliance activities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComplianceManagerTopic;