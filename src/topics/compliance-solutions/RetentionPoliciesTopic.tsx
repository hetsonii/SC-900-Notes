import React from 'react';
import { Clock, Archive, Shield, FileText } from 'lucide-react';

const RetentionPoliciesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Retention Policies and Labels
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Data Retention and Disposition Management
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Retention policies and labels in Microsoft Purview help organizations automatically 
                retain or delete content based on organizational policies and regulatory requirements. 
                They provide proactive governance to manage information lifecycle and reduce compliance risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Retention Management Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Retention Policies</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Broad policies that apply retention settings to entire locations or services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Location-based application</li>
              <li>• Automatic content inclusion</li>
              <li>• Uniform retention periods</li>
              <li>• Service-wide enforcement</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Archive className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Retention Labels</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Granular labels applied to specific content for precise retention control.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Item-level application</li>
              <li>• Manual or automatic assignment</li>
              <li>• Flexible retention periods</li>
              <li>• Content-specific rules</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Adaptive Scopes</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dynamic targeting of users and content based on attributes and properties.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Attribute-based targeting</li>
              <li>• Dynamic membership</li>
              <li>• Conditional application</li>
              <li>• Flexible scope management</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Disposition Reviews</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Review process before content is permanently deleted or archived.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Manual review workflows</li>
              <li>• Approval processes</li>
              <li>• Content evaluation</li>
              <li>• Disposition decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Retention Actions */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Retention Actions and Behaviors
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Action</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Considerations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Retain Only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Keep content for specified period</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Legal requirements, business needs</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Storage costs, access management</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Delete Only</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Automatically delete after period</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Data minimization, privacy compliance</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Irreversible action, backup needs</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Retain then Delete</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Keep for period, then auto-delete</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Balanced compliance approach</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Timeline coordination, exceptions</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Start Retention</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Begin retention period on trigger</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Event-based retention</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Trigger identification, timing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Retention Triggers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Retention Period Triggers
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Time-Based Triggers</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Creation Date:</strong>
                  <span className="text-sm block">When content was originally created</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Last Modified:</strong>
                  <span className="text-sm block">When content was last changed</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Label Applied:</strong>
                  <span className="text-sm block">When retention label was assigned</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Date:</strong>
                  <span className="text-sm block">User-defined date property</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Event-Based Triggers</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Employee Departure:</strong>
                  <span className="text-sm block">When employee leaves organization</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Contract Expiration:</strong>
                  <span className="text-sm block">When business contract ends</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Product Lifecycle:</strong>
                  <span className="text-sm block">Product discontinuation or end-of-life</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Custom Events:</strong>
                  <span className="text-sm block">Organization-specific business events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Implementation Strategy
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Planning Phase</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Inventory existing content and systems</li>
              <li>• Identify regulatory requirements</li>
              <li>• Define retention schedules</li>
              <li>• Map content to business functions</li>
              <li>• Plan for legal holds and exceptions</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Deployment Phase</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Start with pilot groups and content</li>
              <li>• Implement in simulation mode first</li>
              <li>• Train users on retention concepts</li>
              <li>• Monitor and adjust policies</li>
              <li>• Gradually expand scope</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Retention Best Practices
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Policy Design</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Principle of Least Retention:</strong>
                  <span className="text-sm block">Keep data only as long as necessary</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Clear Documentation:</strong>
                  <span className="text-sm block">Document retention rationale and requirements</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Regular Reviews:</strong>
                  <span className="text-sm block">Periodically review and update retention schedules</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Exception Handling:</strong>
                  <span className="text-sm block">Plan for legal holds and special circumstances</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Operational Management</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Monitoring:</strong>
                  <span className="text-sm block">Track policy effectiveness and compliance</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">User Training:</strong>
                  <span className="text-sm block">Educate users on retention requirements</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Audit Trails:</strong>
                  <span className="text-sm block">Maintain records of retention actions</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Backup Coordination:</strong>
                  <span className="text-sm block">Align with backup and recovery policies</span>
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
              <span>Retention policies and labels automate information lifecycle management based on business and regulatory needs</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Different retention actions support various compliance scenarios from data minimization to long-term preservation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Event-based retention enables dynamic retention periods based on business events and triggers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Successful implementation requires careful planning, user training, and ongoing monitoring</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RetentionPoliciesTopic;