import React from 'react';
import { Shield, Users, FileText, AlertTriangle } from 'lucide-react';

const MicrosoftPrivaTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Priva
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Privacy Risk Management and Subject Rights
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Priva helps organizations proactively identify and manage privacy risks, 
                automate subject rights requests, and build a privacy-resilient workplace while 
                maintaining compliance with privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Priva Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Priva Core Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Risk Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Proactively identify and manage privacy risks across your organization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data overexposure detection</li>
              <li>• Data transfer monitoring</li>
              <li>• Data minimization insights</li>
              <li>• Privacy risk scoring</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Subject Rights Requests</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automate and manage data subject rights requests efficiently.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Request intake and tracking</li>
              <li>• Automated data discovery</li>
              <li>• Response generation</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Assessments</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Conduct privacy impact assessments and data protection evaluations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Privacy impact assessments</li>
              <li>• Data protection impact assessments</li>
              <li>• Risk evaluation templates</li>
              <li>• Compliance tracking</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Controls</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Implement and monitor privacy controls across your environment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data handling policies</li>
              <li>• Consent management</li>
              <li>• Data retention controls</li>
              <li>• Privacy training programs</li>
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
              <span>Microsoft Priva helps organizations proactively manage privacy risks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Automates subject rights requests and data discovery processes</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides privacy impact assessment and evaluation capabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Implements comprehensive privacy controls and monitoring</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MicrosoftPrivaTopic;