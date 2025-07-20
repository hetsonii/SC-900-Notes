import React from 'react';
import { Shield, Filter, Lock, Network } from 'lucide-react';

const NetworkSecurityGroupsTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Network Security Groups (NSGs)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Network Security Groups (NSGs) act as a basic firewall for controlling network 
                traffic to and from Azure resources. They contain security rules that allow or 
                deny network traffic based on source, destination, port, and protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          NSG Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Filter className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Rules</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Define traffic filtering rules based on multiple criteria.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Source and destination IP addresses</li>
              <li>• Port ranges</li>
              <li>• Protocol (TCP, UDP, Any)</li>
              <li>• Allow or deny actions</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Network className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Application Scope</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NSGs can be applied at different network levels for comprehensive protection.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Subnet level (recommended)</li>
              <li>• Network interface level</li>
              <li>• Virtual machine level</li>
              <li>• Application security groups</li>
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
              <span>NSGs provide basic firewall functionality for Azure virtual networks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Security rules filter traffic based on source, destination, port, and protocol</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Can be applied at subnet or network interface level for flexible security</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurityGroupsTopic;