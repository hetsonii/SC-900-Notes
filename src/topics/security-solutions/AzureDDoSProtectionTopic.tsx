import React from 'react';
import { Shield, Globe, AlertTriangle, BarChart } from 'lucide-react';

const AzureDDoSProtectionTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Azure DDoS Protection
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Azure DDoS Protection provides enhanced DDoS mitigation features to defend against 
                DDoS attacks. Combined with application design best practices, DDoS Protection 
                provides defense against DDoS attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          DDoS Protection Tiers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automatically enabled for all Azure services at no additional cost.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Always-on traffic monitoring</li>
              <li>• Real-time mitigation of common attacks</li>
              <li>• Global scale protection</li>
              <li>• No configuration required</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Standard Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhanced protection with additional mitigation capabilities and monitoring.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Adaptive tuning and machine learning</li>
              <li>• Attack analytics and reporting</li>
              <li>• DDoS rapid response support</li>
              <li>• Cost protection guarantee</li>
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
              <span>Azure DDoS Protection provides defense against distributed denial-of-service attacks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Basic protection is automatically enabled for all Azure services</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Standard protection offers enhanced features and dedicated support</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AzureDDoSProtectionTopic;