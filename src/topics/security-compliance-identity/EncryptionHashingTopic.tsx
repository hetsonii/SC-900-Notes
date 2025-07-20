import React from 'react';
import { Lock, Key, Shield, FileText } from 'lucide-react';

const EncryptionHashingTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Encryption and Hashing
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Data Protection Fundamentals
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Encryption and hashing are cryptographic techniques that protect data confidentiality, 
                integrity, and authenticity. Understanding these concepts is essential for implementing 
                effective data protection strategies in cloud environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encryption Overview */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Encryption Fundamentals
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <Key className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Symmetric Encryption</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uses the same key for both encryption and decryption. Fast and efficient for large amounts of data.
            </p>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">Common Algorithms</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AES (Advanced Encryption Standard)</li>
                  <li>• DES/3DES (Data Encryption Standard)</li>
                  <li>• ChaCha20</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Database encryption</li>
                  <li>• File system encryption</li>
                  <li>• VPN tunnels</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Asymmetric Encryption</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uses a pair of keys (public and private) for encryption and decryption. Enables secure communication without shared secrets.
            </p>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">Common Algorithms</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• RSA (Rivest-Shamir-Adleman)</li>
                  <li>• ECC (Elliptic Curve Cryptography)</li>
                  <li>• Diffie-Hellman</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">Use Cases</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Digital signatures</li>
                  <li>• Key exchange</li>
                  <li>• SSL/TLS certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encryption States */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Data Encryption States
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data at Rest</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Data stored in databases, file systems, or any persistent storage.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
              <li>• Database encryption</li>
              <li>• Disk encryption</li>
              <li>• Backup encryption</li>
              <li>• Archive encryption</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data in Transit</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Data moving between locations, systems, or networks.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
              <li>• TLS/SSL protocols</li>
              <li>• VPN tunnels</li>
              <li>• HTTPS connections</li>
              <li>• Secure file transfers</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data in Use</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Data actively being processed in memory or computation.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-1">
              <li>• Homomorphic encryption</li>
              <li>• Secure enclaves</li>
              <li>• Confidential computing</li>
              <li>• Memory encryption</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hashing */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Hashing Functions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What is Hashing?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Hashing is a one-way cryptographic function that converts input data of any size 
                into a fixed-size string of characters (hash value or digest).
              </p>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Properties</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• <strong>Deterministic:</strong> Same input always produces same output</li>
                    <li>• <strong>Fixed output size:</strong> Regardless of input size</li>
                    <li>• <strong>Irreversible:</strong> Cannot derive input from output</li>
                    <li>• <strong>Avalanche effect:</strong> Small input change = large output change</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Common Hash Algorithms</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">SHA-256</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    256-bit hash, part of SHA-2 family, widely used for digital signatures and certificates
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Output: 64 hexadecimal characters</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">MD5</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Legacy algorithm, now considered insecure for cryptographic purposes
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Output: 32 hexadecimal characters</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">SHA-3</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Latest standard, different design from SHA-2, provides additional security
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Variable output sizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Encryption vs. Hashing
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Aspect</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Encryption</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Hashing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Purpose</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Protect data confidentiality</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Verify data integrity</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Reversibility</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Reversible with key</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">One-way (irreversible)</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Output Size</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Variable (depends on input)</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Fixed size</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Key Required</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Yes</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">No</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Use Cases</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Data protection, secure communication</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Password storage, data verification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Microsoft Implementation */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Encryption and Hashing Services
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Azure Encryption Services</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <strong className="text-gray-900 dark:text-white">Azure Key Vault:</strong>
                <span className="text-sm block">Manage encryption keys, secrets, and certificates</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Azure Disk Encryption:</strong>
                <span className="text-sm block">Encrypt VM disks using BitLocker/DM-Crypt</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Storage Service Encryption:</strong>
                <span className="text-sm block">Automatic encryption for Azure Storage</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">SQL TDE:</strong>
                <span className="text-sm block">Transparent Data Encryption for databases</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Microsoft 365 Protection</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <strong className="text-gray-900 dark:text-white">Message Encryption:</strong>
                <span className="text-sm block">Protect emails with encryption and rights management</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">SharePoint Encryption:</strong>
                <span className="text-sm block">File-level encryption for SharePoint content</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Customer Key:</strong>
                <span className="text-sm block">Customer-controlled encryption keys for Microsoft 365</span>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Always Encrypted:</strong>
                <span className="text-sm block">Column-level encryption for SQL databases</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Encryption Best Practices
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Management</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Use strong, randomly generated keys</li>
                <li>• Implement proper key rotation policies</li>
                <li>• Store keys securely (hardware security modules)</li>
                <li>• Separate key management from data storage</li>
                <li>• Implement principle of least privilege for key access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation Guidelines</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Use established, peer-reviewed algorithms</li>
                <li>• Encrypt data at all states (rest, transit, use)</li>
                <li>• Implement proper salt for password hashing</li>
                <li>• Use appropriate key lengths (AES-256, RSA-2048+)</li>
                <li>• Regular security audits and updates</li>
              </ul>
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
              <span>Encryption protects confidentiality while hashing ensures data integrity</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Data should be encrypted in all three states: at rest, in transit, and in use</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Proper key management is critical for encryption effectiveness</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Microsoft provides comprehensive encryption services across Azure and Microsoft 365</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EncryptionHashingTopic;