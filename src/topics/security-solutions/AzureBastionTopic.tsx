import React from 'react';
import { Shield, Monitor, Lock, Key } from 'lucide-react';

const AzureBastionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Azure Bastion
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Azure Bastion provides secure and seamless RDP/SSH connectivity to virtual machines 
                directly through the Azure portal over TLS. It eliminates the need for public IP 
                addresses on VMs and provides protection against port scanning and other threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Enhanced Security</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Eliminates exposure of VMs to the public internet while providing secure access.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• No public IP addresses needed</li>
              <li>• Protection against port scanning</li>
              <li>• TLS encryption</li>
              <li>• Azure AD integration</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Seamless Experience</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access VMs directly through the Azure portal without additional client software.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Browser-based access</li>
              <li>• No VPN required</li>
              <li>• Single sign-on</li>
              <li>• Cross-platform support</li>
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
              <span>Azure Bastion provides secure RDP/SSH access without exposing VMs to the internet</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Browser-based access eliminates the need for VPN or additional client software</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integrates with Azure AD for authentication and provides TLS encryption</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AzureBastionTopic;