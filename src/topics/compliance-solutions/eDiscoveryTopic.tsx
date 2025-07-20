import React from 'react';
import { Search, FileText, Shield, Scale } from 'lucide-react';

const eDiscoveryTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          eDiscovery Solutions
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Legal Hold and Electronic Discovery
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                eDiscovery solutions in Microsoft Purview help organizations identify, preserve, 
                collect, and review electronically stored information (ESI) for legal proceedings, 
                investigations, and regulatory compliance. They provide end-to-end workflow 
                management for legal discovery processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* eDiscovery Tiers */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          eDiscovery Solution Tiers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Content Search</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Basic search and export capabilities for simple discovery needs.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Cross-service content search</li>
              <li>• Keyword and property queries</li>
              <li>• Search statistics and preview</li>
              <li>• Export to PST or native formats</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">eDiscovery (Standard)</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Case-based discovery with legal hold and basic workflow management.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Case management</li>
              <li>• Legal hold capabilities</li>
              <li>• Custodian management</li>
              <li>• Search and collection tools</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">eDiscovery (Premium)</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced discovery platform with AI-powered analytics and comprehensive workflow management.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Advanced Analytics</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Machine learning classification</li>
                  <li>• Predictive coding</li>
                  <li>• Near-duplicate detection</li>
                  <li>• Email threading</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Review Capabilities</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Native file review</li>
                  <li>• Annotation and redaction</li>
                  <li>• Privilege review</li>
                  <li>• Quality control</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Workflow Management</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• End-to-end case management</li>
                  <li>• Custodian communications</li>
                  <li>• Legal hold notifications</li>
                  <li>• Production management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eDiscovery Process */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Electronic Discovery Reference Model (EDRM)
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Information Governance</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Establish policies and procedures for managing information throughout its lifecycle
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Identification</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Locate and identify potentially relevant information sources and custodians
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Preservation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Implement legal holds to preserve potentially relevant information from alteration or deletion
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Collection</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Gather and extract relevant information from identified sources in a forensically sound manner
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Processing</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Prepare collected data for review through indexing, deduplication, and format conversion
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">6</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Review</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Analyze documents for relevance, privilege, and responsiveness to legal requests
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">7</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Analysis</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Evaluate reviewed information to understand patterns, relationships, and case strategy
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">8</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Production</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deliver responsive documents to opposing parties or regulatory authorities
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">9</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Presentation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Present information in legal proceedings, depositions, or regulatory submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Advanced eDiscovery Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">AI and Machine Learning</h4>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• Relevance scoring and ranking</li>
              <li>• Predictive coding for document review</li>
              <li>• Themes and concept identification</li>
              <li>• Optical character recognition (OCR)</li>
              <li>• Language detection and translation</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4">Collaboration Tools</h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• Multi-user review environments</li>
              <li>• Real-time collaboration features</li>
              <li>• Review assignment and tracking</li>
              <li>• Quality control and validation</li>
              <li>• External reviewer access</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-4">Data Processing</h4>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200">
              <li>• Advanced indexing and search</li>
              <li>• Deduplication and threading</li>
              <li>• Metadata extraction and analysis</li>
              <li>• File format conversion</li>
              <li>• Error handling and reporting</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Export and Production</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Multiple export formats</li>
              <li>• Load file generation</li>
              <li>• Redaction and privilege protection</li>
              <li>• Production set management</li>
              <li>• Chain of custody documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance Integration */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Integration with Compliance Solutions
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Data Governance</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Retention Policies:</strong>
                  <span className="text-sm block">Coordinate with retention and deletion schedules</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Sensitivity Labels:</strong>
                  <span className="text-sm block">Leverage classification for targeted discovery</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Records Management:</strong>
                  <span className="text-sm block">Handle declared records appropriately</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Data Classification:</strong>
                  <span className="text-sm block">Use existing classification for scope definition</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Security Integration</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Insider Risk:</strong>
                  <span className="text-sm block">Escalate high-risk cases to eDiscovery</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">DLP Policies:</strong>
                  <span className="text-sm block">Investigate policy violations</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Audit Logs:</strong>
                  <span className="text-sm block">Include audit data in discovery scope</span>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Communication Compliance:</strong>
                  <span className="text-sm block">Investigate communication violations</span>
                </li>
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
              <span>eDiscovery solutions provide end-to-end workflow management for legal discovery processes</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Multiple tiers support different complexity levels from basic search to advanced analytics</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>AI and machine learning capabilities significantly reduce review time and costs</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integration with other compliance solutions provides comprehensive information governance</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default eDiscoveryTopic;