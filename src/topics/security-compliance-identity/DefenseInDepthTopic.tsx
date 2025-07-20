import React from 'react';
import { Shield, Layers, Lock, Eye } from 'lucide-react';

const DefenseInDepthTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Defense-in-Depth Strategy
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Layered Security Approach
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Defense-in-depth is a security strategy that uses multiple layers of protection 
                to defend against cyber threats. If one layer fails, other layers continue to 
                provide protection, creating a comprehensive security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Layers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Security Layers
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Data Layer */}
            <div className="w-full max-w-2xl">
              <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="font-semibold text-red-900 dark:text-red-100">Data</h4>
                </div>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Encryption, classification, access controls
                </p>
              </div>
            </div>

            {/* Application Layer */}
            <div className="w-full max-w-3xl">
              <div className="bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100">Application</h4>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Secure coding, application security testing, WAF
                </p>
              </div>
            </div>

            {/* Compute Layer */}
            <div className="w-full max-w-4xl">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Layers className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Compute</h4>
                </div>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Endpoint protection, VM security, container security
                </p>
              </div>
            </div>

            {/* Network Layer */}
            <div className="w-full max-w-5xl">
              <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Network</h4>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Firewalls, network segmentation, DDoS protection
                </p>
              </div>
            </div>

            {/* Perimeter Layer */}
            <div className="w-full max-w-6xl">
              <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Perimeter</h4>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Edge protection, internet gateways, VPN
                </p>
              </div>
            </div>

            {/* Identity & Access Layer */}
            <div className="w-full max-w-7xl">
              <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100">Identity & Access</h4>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Authentication, authorization, conditional access
                </p>
              </div>
            </div>

            {/* Physical Layer */}
            <div className="w-full max-w-8xl">
              <div className="bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Physical</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Data center security, biometric access, surveillance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer Details */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Detailed Layer Protection
        </h3>
        <div className="grid gap-6">
          {/* Physical Security */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Physical Security</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Access Controls</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Biometric scanners</li>
                  <li>• Smart card access</li>
                  <li>• Security guards</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Monitoring</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• CCTV surveillance</li>
                  <li>• Motion detectors</li>
                  <li>• Alarm systems</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Environmental</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Fire suppression</li>
                  <li>• Power protection</li>
                  <li>• Climate control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Identity & Access */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Identity & Access</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Authentication</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Multi-factor authentication</li>
                  <li>• Single sign-on (SSO)</li>
                  <li>• Certificate-based auth</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Authorization</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Role-based access control</li>
                  <li>• Conditional access</li>
                  <li>• Privileged identity management</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Monitoring</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Identity protection</li>
                  <li>• Risk-based policies</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Network Security */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Network Security</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Segmentation</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Virtual networks</li>
                  <li>• Subnets</li>
                  <li>• Network security groups</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Filtering</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Firewalls</li>
                  <li>• Web application firewalls</li>
                  <li>• DDoS protection</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Monitoring</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Network flow logs</li>
                  <li>• Intrusion detection</li>
                  <li>• Traffic analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Implementation */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft's Defense-in-Depth Implementation
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Azure Security Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Azure Firewall:</strong> Network-level protection</li>
                <li>• <strong>Application Gateway WAF:</strong> Application protection</li>
                <li>• <strong>Azure DDoS Protection:</strong> Volumetric attack defense</li>
                <li>• <strong>Network Security Groups:</strong> Traffic filtering</li>
                <li>• <strong>Azure Bastion:</strong> Secure remote access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Identity & Compliance</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Microsoft Entra ID:</strong> Identity and access management</li>
                <li>• <strong>Conditional Access:</strong> Risk-based policies</li>
                <li>• <strong>Microsoft Purview:</strong> Data governance and compliance</li>
                <li>• <strong>Microsoft Defender:</strong> Threat protection</li>
                <li>• <strong>Azure Key Vault:</strong> Secrets management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Challenges */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Benefits and Considerations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Benefits</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Multiple failure points protect against single points of failure</li>
              <li>• Comprehensive coverage across all attack vectors</li>
              <li>• Allows for granular security controls</li>
              <li>• Supports compliance requirements</li>
              <li>• Provides detailed visibility and monitoring</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Considerations</h4>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• Increased complexity in management</li>
              <li>• Higher costs for multiple security tools</li>
              <li>• Potential for security gaps between layers</li>
              <li>• Requires skilled security professionals</li>
              <li>• May impact performance if not properly implemented</li>
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
              <span>Defense-in-depth provides redundant security layers to protect against various attack vectors</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Each layer has specific security controls that work together to create comprehensive protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides security services for each layer of the defense-in-depth model</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Proper implementation requires balancing security effectiveness with operational efficiency</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenseInDepthTopic;