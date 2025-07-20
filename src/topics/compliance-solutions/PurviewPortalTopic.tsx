import React from 'react';
import { Monitor, Shield, BarChart, Settings } from 'lucide-react';

const PurviewPortalTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Purview Portal
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Unified Compliance Management Hub
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Purview Portal is the central hub for managing data governance, risk, 
                and compliance across your organization. It provides a unified interface for 
                accessing all Microsoft Purview solutions and compliance tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Portal Capabilities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Dashboard</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Centralized view of compliance posture and risk metrics.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Compliance score overview</li>
              <li>• Risk indicators</li>
              <li>• Action items</li>
              <li>• Trend analysis</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive data protection and information governance tools.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Sensitivity labeling</li>
              <li>• Data loss prevention</li>
              <li>• Information protection</li>
              <li>• Retention policies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Centralized policy creation, deployment, and monitoring.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Policy templates</li>
              <li>• Deployment tracking</li>
              <li>• Compliance monitoring</li>
              <li>• Exception management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Reporting and Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive reporting and analytics for compliance activities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Compliance reports</li>
              <li>• Audit trails</li>
              <li>• Risk assessments</li>
              <li>• Executive dashboards</li>
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
              <span>Purview Portal provides a unified interface for all compliance management activities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers centralized compliance dashboards and risk monitoring</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integrates data protection and information governance tools</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides comprehensive reporting and analytics capabilities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PurviewPortalTopic;