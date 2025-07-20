import React from 'react';
import { Archive, Clock, Shield, FileText } from 'lucide-react';

const RecordsManagementTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Records Management
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Archive className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Managing Organizational Records Lifecycle
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Records Management in Microsoft Purview helps organizations manage their regulatory, 
                legal, and business-critical records throughout their lifecycle. It provides tools 
                to declare, classify, retain, and dispose of records according to organizational 
                policies and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Records Management Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Records Management Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Record Declaration</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Process of formally designating content as an organizational record.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Manual record declaration</li>
              <li>• Automatic record labeling</li>
              <li>• Event-based triggers</li>
              <li>• Regulatory compliance marking</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Retention Schedules</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define how long records must be retained and when they can be disposed.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Retention periods</li>
              <li>• Disposition triggers</li>
              <li>• Legal hold capabilities</li>
              <li>• Review and approval workflows</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Record Versioning</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manage different versions of records and their lifecycle stages.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Version control</li>
              <li>• Record immutability</li>
              <li>• Audit trail maintenance</li>
              <li>• Change documentation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Archive className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Disposition Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Controlled process for disposing of records at the end of their lifecycle.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Disposition reviews</li>
              <li>• Approval workflows</li>
              <li>• Secure deletion</li>
              <li>• Disposition reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Record Types */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Types of Organizational Records
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Legal Records</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Contracts and agreements</li>
              <li>• Legal correspondence</li>
              <li>• Litigation documents</li>
              <li>• Intellectual property filings</li>
              <li>• Regulatory submissions</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Financial Records</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Financial statements</li>
              <li>• Tax documents</li>
              <li>• Audit reports</li>
              <li>• Budget and forecasts</li>
              <li>• Transaction records</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Operational Records</h4>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• Policies and procedures</li>
              <li>• Meeting minutes</li>
              <li>• Project documentation</li>
              <li>• Quality assurance records</li>
              <li>• Training materials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* File Plan */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          File Plan Structure
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">File Plan Components</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">File Plan Descriptors:</strong>
                  <span className="text-sm block">Metadata fields for record classification</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Retention Labels:</strong>
                  <span className="text-sm block">Labels that define retention and disposition</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Citation References:</strong>
                  <span className="text-sm block">Legal or regulatory authority references</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Department Codes:</strong>
                  <span className="text-sm block">Organizational unit identifiers</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Implementation Benefits</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Standardization:</strong>
                  <span className="text-sm block">Consistent record classification across organization</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Compliance:</strong>
                  <span className="text-sm block">Meet regulatory record-keeping requirements</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Efficiency:</strong>
                  <span className="text-sm block">Automated retention and disposition processes</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Risk Reduction:</strong>
                  <span className="text-sm block">Minimize legal and compliance risks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Record Lifecycle Stages
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Creation and Capture</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Documents are created and identified as potential records based on business value and regulatory requirements
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Classification and Declaration</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Content is formally declared as a record and classified according to the file plan structure
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Active Management</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Records are actively managed with appropriate access controls, versioning, and audit trails
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Retention and Review</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Records are retained according to schedule and reviewed for continued business value
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Disposition</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Records are securely disposed of or transferred to archives according to approved disposition actions
                </p>
              </div>
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
              <span>Records management ensures proper lifecycle management of business-critical and regulatory records</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>File plans provide structured classification and retention schedules for different record types</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Record declaration creates immutable, auditable records with controlled access and disposition</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Automated workflows support compliance with legal and regulatory record-keeping requirements</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecordsManagementTopic;