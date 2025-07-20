import React from 'react';
import { Network, Shield, Lock, Layers } from 'lucide-react';

const NetworkSegmentationTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Network Segmentation with Azure Virtual Networks
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Network className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Network segmentation divides a network into smaller, isolated segments to improve 
                security and performance. Azure Virtual Networks provide the foundation for 
                implementing network segmentation in the cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Segmentation Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Isolation</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Isolate different workloads and limit lateral movement of threats.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Contain security breaches</li>
              <li>• Reduce attack surface</li>
              <li>• Implement zero trust principles</li>
              <li>• Control traffic flow</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Layers className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Optimization</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Improve network performance by reducing broadcast domains and traffic.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Reduce network congestion</li>
              <li>• Optimize bandwidth usage</li>
              <li>• Improve application performance</li>
              <li>• Enable traffic prioritization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Takeaways
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Network segmentation improves security by isolating workloads and limiting threat movement</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Azure Virtual Networks provide the foundation for cloud network segmentation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Proper segmentation supports zero trust architecture and compliance requirements</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NetworkSegmentationTopic;