import React from 'react';
import { Globe, FileText, Shield, CheckCircle } from 'lucide-react';

const ServiceTrustPortalTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Service Trust Portal
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Transparency and Trust Information Hub
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                The Microsoft Service Trust Portal is a public website that provides access to 
                detailed information about Microsoft's security, privacy, and compliance practices 
                for cloud services, helping organizations make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Content */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Available Information and Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Reports</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access to audit reports and compliance documentation.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• SOC reports</li>
              <li>• ISO certifications</li>
              <li>• FedRAMP documentation</li>
              <li>• Regional compliance reports</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Security Information</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Detailed security practices and implementation guides.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Security whitepapers</li>
              <li>• Implementation guides</li>
              <li>• Security best practices</li>
              <li>• Threat intelligence reports</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy Resources</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Privacy policies, data protection information, and privacy controls.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Privacy statements</li>
              <li>• Data protection impact assessments</li>
              <li>• Privacy controls documentation</li>
              <li>• GDPR compliance information</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Regional Information</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Region-specific compliance and regulatory information.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Regional data residency</li>
              <li>• Local compliance requirements</li>
              <li>• Government cloud information</li>
              <li>• Industry-specific guidance</li>
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
              <span>Service Trust Portal provides transparent access to Microsoft's compliance information</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Contains audit reports, certifications, and compliance documentation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers security whitepapers and implementation guidance</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides region-specific and industry-specific compliance information</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServiceTrustPortalTopic;