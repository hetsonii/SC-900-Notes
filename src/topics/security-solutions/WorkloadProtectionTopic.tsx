import React from 'react';
import { Shield, Server, Database, Cloud } from 'lucide-react';

const WorkloadProtectionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Enhanced Security Features for Workload Protection
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Advanced Threat Protection for Cloud Workloads
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Enhanced security features provide advanced threat protection for specific cloud 
                workloads including virtual machines, databases, containers, and storage accounts. 
                These features offer real-time threat detection and automated response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workload Protection Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Workload-Specific Protection
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Virtual Machine Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced threat detection and response for virtual machines.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Behavioral analytics</li>
              <li>• Malware detection</li>
              <li>• Network attack detection</li>
              <li>• File integrity monitoring</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Database Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized security for SQL databases and other data services.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SQL injection detection</li>
              <li>• Anomalous database activities</li>
              <li>• Vulnerability assessments</li>
              <li>• Data classification</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Container Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Security monitoring for containerized applications and Kubernetes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Container image scanning</li>
              <li>• Runtime threat detection</li>
              <li>• Kubernetes security</li>
              <li>• Registry vulnerability scanning</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Storage Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced security for storage accounts and data repositories.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Malware scanning</li>
              <li>• Suspicious access detection</li>
              <li>• Data exfiltration monitoring</li>
              <li>• Encryption compliance</li>
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
              <span>Enhanced security features provide workload-specific threat protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Virtual machine protection includes behavioral analytics and malware detection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Database protection offers specialized security for SQL and data services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Container and storage protection address modern cloud workload security needs</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkloadProtectionTopic;