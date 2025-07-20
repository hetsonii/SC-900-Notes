import React from 'react';
import { Shield, Eye, Zap, Network } from 'lucide-react';

const DefenderXDRTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender XDR Services
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Extended Detection and Response Platform
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender XDR is a unified pre- and post-breach enterprise defense suite 
                that natively coordinates detection, prevention, investigation, and response across 
                endpoints, identities, email, and applications to provide integrated protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XDR Components */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          XDR Platform Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Unified Detection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Correlate signals across multiple security domains for comprehensive threat detection.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cross-domain correlation</li>
              <li>• Advanced analytics</li>
              <li>• Behavioral analysis</li>
              <li>• Threat intelligence integration</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Automated Response</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Orchestrate automated responses across the entire security stack.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Incident response automation</li>
              <li>• Threat remediation</li>
              <li>• Containment actions</li>
              <li>• Recovery workflows</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Network className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Integrated Investigation</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unified investigation experience across all security domains.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cross-product investigation</li>
              <li>• Timeline reconstruction</li>
              <li>• Entity analysis</li>
              <li>• Attack chain visualization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Threat Hunting</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Proactive threat hunting across the entire environment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Advanced hunting queries</li>
              <li>• Custom detection rules</li>
              <li>• Threat analytics</li>
              <li>• Hunting dashboards</li>
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
              <span>Defender XDR provides unified detection and response across multiple security domains</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Correlates signals from endpoints, identities, email, and applications</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Enables automated response and orchestration across the security stack</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides integrated investigation and proactive threat hunting capabilities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderXDRTopic;