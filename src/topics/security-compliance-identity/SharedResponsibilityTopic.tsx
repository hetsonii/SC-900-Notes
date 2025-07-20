import React from 'react';
import { Cloud, Shield, Users, Server } from 'lucide-react';

const SharedResponsibilityTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Shared Responsibility Model
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Understanding Cloud Security Responsibilities
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                The shared responsibility model defines the division of security responsibilities 
                between cloud service providers and customers, ensuring clarity in who is 
                responsible for protecting different aspects of the cloud environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Model */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Responsibility Distribution
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Microsoft Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Microsoft Responsibilities
                </h4>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Physical Security</h5>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Data center security</li>
                    <li>• Physical access controls</li>
                    <li>• Environmental controls</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Infrastructure</h5>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Network infrastructure</li>
                    <li>• Hypervisor security</li>
                    <li>• Service availability</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Platform Services</h5>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Operating system patching</li>
                    <li>• Network controls</li>
                    <li>• Service management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Customer Responsibilities
                </h4>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Data & Content</h5>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Data classification</li>
                    <li>• Content protection</li>
                    <li>• Data governance</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Identity & Access</h5>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• User authentication</li>
                    <li>• Access management</li>
                    <li>• Privileged accounts</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Applications</h5>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Application security</li>
                    <li>• Configuration management</li>
                    <li>• Access controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model Variations */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Responsibility by Service Model
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Security Layer</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">On-Premises</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">IaaS</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">PaaS</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">SaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data & Content</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Identity & Access</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-purple-600 font-semibold">Shared</span></td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Applications</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-purple-600 font-semibold">Shared</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Operating System</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Network Controls</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-purple-600 font-semibold">Shared</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Physical Security</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 font-semibold">Customer</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
                <td className="px-6 py-4 text-center"><span className="text-blue-600 font-semibold">Microsoft</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Customer Responsibility</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Shared Responsibility</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Microsoft Responsibility</span>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Best Practices for Customers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Always Your Responsibility</h4>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Data classification and protection</li>
              <li>• Identity and access management</li>
              <li>• Application-level controls</li>
              <li>• Network traffic protection</li>
              <li>• Endpoint protection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Shared Considerations</h4>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Network security configurations</li>
              <li>• Firewall settings and rules</li>
              <li>• Identity federation setup</li>
              <li>• Directory synchronization</li>
              <li>• Platform feature configuration</li>
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
              <span>Customers are always responsible for data, identity, and access management regardless of service model</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft's responsibility increases as you move from IaaS to PaaS to SaaS</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Understanding the model prevents security gaps and ensures compliance</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Shared responsibilities require coordination between customer and provider</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SharedResponsibilityTopic;