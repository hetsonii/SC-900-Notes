import React from 'react';
import { Shield, Globe, Lock, AlertTriangle } from 'lucide-react';

const WebApplicationFirewallTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Web Application Firewall (WAF)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Web Application Firewall (WAF) provides centralized protection of web applications 
                from common exploits and vulnerabilities. It helps protect against OWASP Top 10 
                threats and provides real-time monitoring and alerting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Protection Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">OWASP Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protects against the OWASP Top 10 web application security risks.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SQL injection attacks</li>
              <li>• Cross-site scripting (XSS)</li>
              <li>• Cross-site request forgery</li>
              <li>• Remote file inclusion</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Custom Rules</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create custom security rules tailored to your application needs.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Rate limiting</li>
              <li>• IP allow/block lists</li>
              <li>• Geographic filtering</li>
              <li>• Bot protection</li>
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
              <span>WAF provides application-layer protection against common web vulnerabilities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes pre-configured rules for OWASP Top 10 protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Supports custom rules for organization-specific security requirements</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WebApplicationFirewallTopic;