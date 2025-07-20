import React from 'react';
import { Shield, UserCheck, Eye, Lock } from 'lucide-react';

const ZeroTrustTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Zero Trust Security Model
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                "Never Trust, Always Verify"
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Zero Trust is a security strategy that assumes no trust for any user or device, 
                whether inside or outside the network perimeter. Every access request is verified 
                before granting access to resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Zero Trust Principles
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Verify Explicitly</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Always authenticate and authorize based on all available data points including 
              user identity, location, device, service, workload, and data classification.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Use Least Privilege</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Limit user access with just-in-time and just-enough-access (JIT/JEA), 
              risk-based adaptive policies, and data protection.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Assume Breach</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Minimize blast radius and segment access. Verify end-to-end encryption 
              and use analytics to get visibility, drive threat detection, and improve defenses.
            </p>
          </div>
        </div>
      </section>

      {/* Zero Trust Architecture */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Zero Trust Architecture Components
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Control Plane */}
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Control Plane</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Policy Engine</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Makes access decisions based on policies and risk</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Policy Administrator</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Establishes and maintains policies</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Policy Enforcement Point</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Enables, monitors, and terminates connections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sources */}
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Data Sources</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Identity Systems</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">User identities, attributes, and privileges</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Device Security</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Device compliance and health status</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Threat Intelligence</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Security analytics and threat data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Pillars */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Six Pillars of Zero Trust
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Identity</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Strong authentication</li>
              <li>• Conditional access</li>
              <li>• Risk-based policies</li>
              <li>• Identity protection</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Devices</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Device compliance</li>
              <li>• Mobile device management</li>
              <li>• Endpoint protection</li>
              <li>• Device health attestation</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Applications</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Application security</li>
              <li>• API protection</li>
              <li>• Cloud app security</li>
              <li>• Application discovery</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Data</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Data classification</li>
              <li>• Information protection</li>
              <li>• Data loss prevention</li>
              <li>• Encryption at rest/transit</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Infrastructure</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Software-defined perimeters</li>
              <li>• Micro-segmentation</li>
              <li>• Infrastructure hardening</li>
              <li>• JIT access</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Networks</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• Network segmentation</li>
              <li>• End-to-end encryption</li>
              <li>• Network monitoring</li>
              <li>• Threat protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Microsoft Zero Trust */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Zero Trust Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Identity & Access Management</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Microsoft Entra ID:</strong> Identity and access management</li>
                <li>• <strong>Conditional Access:</strong> Risk-based access policies</li>
                <li>• <strong>Privileged Identity Management:</strong> JIT privileged access</li>
                <li>• <strong>Identity Protection:</strong> Risk detection and remediation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security & Compliance</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Microsoft Defender XDR:</strong> Extended detection and response</li>
                <li>• <strong>Microsoft Sentinel:</strong> Cloud-native SIEM/SOAR</li>
                <li>• <strong>Microsoft Purview:</strong> Information protection and governance</li>
                <li>• <strong>Intune:</strong> Unified endpoint management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Zero Trust Implementation Journey
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Secure Identity</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Implement strong authentication, MFA, and conditional access policies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Gain Visibility</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deploy monitoring and analytics to understand your environment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Mitigate Threats</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Implement threat protection and automated response capabilities
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Optimize and Mature</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Continuously improve policies and expand Zero Trust across all pillars
                </p>
              </div>
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
              <span>Zero Trust assumes no implicit trust and continuously validates every transaction</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>The model focuses on protecting resources rather than network perimeters</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Implementation covers six key pillars: identity, devices, applications, data, infrastructure, and networks</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides comprehensive Zero Trust solutions across its security portfolio</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustTopic;