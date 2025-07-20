import React from 'react';
import { Key, Lock, Shield, Database } from 'lucide-react';

const AzureKeyVaultTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Azure Key Vault
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Key className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <p className="text-blue-800 dark:text-blue-200">
                Azure Key Vault is a cloud service for securely storing and accessing secrets, 
                keys, and certificates. It helps solve the problem of securely storing and 
                managing cryptographic keys and other secrets used by cloud applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Vault Objects
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Secrets</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Securely store sensitive information like passwords and connection strings.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Database passwords</li>
              <li>• API keys</li>
              <li>• Connection strings</li>
              <li>• Storage account keys</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Key className="w-8 h-8 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Keys</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create and manage cryptographic keys for encryption and digital signing.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• RSA keys</li>
              <li>• Elliptic curve keys</li>
              <li>• HSM-protected keys</li>
              <li>• Software-protected keys</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certificates</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manage SSL/TLS certificates with automatic renewal capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SSL/TLS certificates</li>
              <li>• Code signing certificates</li>
              <li>• Automatic renewal</li>
              <li>• Certificate lifecycle management</li>
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
              <span>Azure Key Vault securely stores and manages secrets, keys, and certificates</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides centralized secret management with access control and auditing</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Supports both software and hardware security module (HSM) protection</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AzureKeyVaultTopic;