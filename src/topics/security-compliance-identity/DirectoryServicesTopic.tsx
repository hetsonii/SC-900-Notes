import React from 'react';
import { FolderTree, Server, Users, Database } from 'lucide-react';

const DirectoryServicesTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Directory Services and Active Directory
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <FolderTree className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Centralized Information Repository
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Directory services provide a centralized repository for storing and managing information 
                about network resources, users, and services. They enable efficient organization, 
                discovery, and management of distributed computing environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Service Concepts */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Core Directory Service Concepts
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Hierarchical Structure</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Information is organized in a tree-like structure with parent-child relationships.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Root directory at the top</li>
              <li>• Organizational units (containers)</li>
              <li>• Objects (users, computers, groups)</li>
              <li>• Attributes (properties of objects)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Distributed Architecture</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Directory data can be distributed across multiple servers for scalability and availability.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Multiple directory servers</li>
              <li>• Replication for redundancy</li>
              <li>• Load balancing</li>
              <li>• Geographic distribution</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Authentication & Authorization</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Provides centralized authentication and authorization services for network resources.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User credential verification</li>
              <li>• Access control policies</li>
              <li>• Single sign-on capabilities</li>
              <li>• Group-based permissions</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FolderTree className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Schema Definition</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Defines the structure and rules for objects and attributes stored in the directory.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Object classes</li>
              <li>• Attribute definitions</li>
              <li>• Data validation rules</li>
              <li>• Extensibility options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Active Directory Overview */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Microsoft Active Directory (AD)
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What is Active Directory?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Microsoft's directory service that provides authentication, authorization, and other 
                services in Windows domain networks. It's the foundation for enterprise identity 
                management in Microsoft environments.
              </p>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Components</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>Domain Controllers:</strong> Servers hosting AD database</li>
                <li>• <strong>Domains:</strong> Administrative boundaries</li>
                <li>• <strong>Trees:</strong> Collection of domains</li>
                <li>• <strong>Forests:</strong> Collection of trees</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">AD Services</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">AD DS:</strong>
                  <span className="text-sm block">Domain Services - core directory functionality</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">AD FS:</strong>
                  <span className="text-sm block">Federation Services - web-based authentication</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">AD CS:</strong>
                  <span className="text-sm block">Certificate Services - PKI infrastructure</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">AD RMS:</strong>
                  <span className="text-sm block">Rights Management - information protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AD Structure */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Active Directory Structure
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="space-y-6">
            {/* Forest Level */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Forest: contoso.com</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Highest level container, defines security boundary
              </p>
              
              {/* Tree Level */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Tree: contoso.com</h5>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  Collection of domains sharing contiguous namespace
                </p>
                
                {/* Domain Level */}
                <div className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3">
                    <h6 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Domain: contoso.com</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div className="bg-white dark:bg-gray-800 rounded p-2">
                        <strong>Users OU</strong><br/>
                        - John Doe<br/>
                        - Jane Smith
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded p-2">
                        <strong>Computers OU</strong><br/>
                        - DESKTOP-001<br/>
                        - LAPTOP-002
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded p-2">
                        <strong>Groups OU</strong><br/>
                        - IT Admins<br/>
                        - Sales Team
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3">
                    <h6 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Child Domain: sales.contoso.com</h6>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">Regional or departmental subdivision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LDAP Protocol */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          LDAP (Lightweight Directory Access Protocol)
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Protocol Overview</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                LDAP is an open standard protocol for accessing and maintaining distributed 
                directory information services over an IP network.
              </p>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Features</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Platform independent</li>
                <li>• TCP/IP based communication</li>
                <li>• Hierarchical data structure</li>
                <li>• Standardized query language</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">LDAP Operations</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Bind:</strong>
                  <span className="text-sm block">Authenticate to directory server</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Search:</strong>
                  <span className="text-sm block">Query directory for objects</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Add/Modify:</strong>
                  <span className="text-sm block">Create or update directory entries</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Delete:</strong>
                  <span className="text-sm block">Remove entries from directory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Directory Services */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Modern Directory Services Evolution
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Service</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Key Features</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Active Directory DS</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On-premises</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Kerberos, Group Policy, LDAP</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Enterprise networks</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Microsoft Entra ID</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">OAuth, SAML, REST APIs</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Cloud applications</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Entra Domain Services</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Managed cloud</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Domain join, Group Policy</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Legacy app migration</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">OpenLDAP</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Open source</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">LDAP v3, cross-platform</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Mixed environments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits and Challenges */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Benefits and Challenges
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Benefits</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Centralized Management:</strong> Single point of administration</li>
              <li>• <strong>Scalability:</strong> Supports large enterprise environments</li>
              <li>• <strong>Security:</strong> Centralized authentication and authorization</li>
              <li>• <strong>Standardization:</strong> Consistent identity management</li>
              <li>• <strong>Integration:</strong> Works with many applications and services</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Challenges</h4>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• <strong>Complexity:</strong> Requires specialized knowledge</li>
              <li>• <strong>Single Point of Failure:</strong> Directory outage affects all services</li>
              <li>• <strong>Performance:</strong> Can become bottleneck in large environments</li>
              <li>• <strong>Security Risk:</strong> High-value target for attackers</li>
              <li>• <strong>Maintenance:</strong> Requires ongoing administration and updates</li>
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
              <span>Directory services provide centralized storage and management of network resource information</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Active Directory is Microsoft's enterprise directory service with hierarchical structure</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>LDAP is the standard protocol for accessing directory services across platforms</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Modern directory services are evolving to support cloud and hybrid environments</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DirectoryServicesTopic;