import React from 'react';
import { Shield, Globe, Lock, AlertTriangle } from 'lucide-react';

const AzureFirewallTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Azure Firewall
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Azure Firewall is a managed, cloud-based network security service that protects 
                your Azure Virtual Network resources. It's a fully stateful firewall as a service 
                with built-in high availability and unrestricted cloud scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Application Rules</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Control outbound HTTP/S traffic based on fully qualified domain names (FQDNs).
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• FQDN filtering</li>
              <li>• HTTP/HTTPS traffic control</li>
              <li>• URL filtering</li>
              <li>• SSL termination</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Network Rules</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Filter traffic based on source and destination IP addresses, ports, and protocols.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Layer 3 and 4 filtering</li>
              <li>• Protocol-based rules</li>
              <li>• Port-based filtering</li>
              <li>• IP address ranges</li>
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
              <span>Azure Firewall provides centralized network security for Azure virtual networks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Supports both application-level and network-level filtering rules</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Fully managed service with built-in high availability and scalability</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AzureFirewallTopic;