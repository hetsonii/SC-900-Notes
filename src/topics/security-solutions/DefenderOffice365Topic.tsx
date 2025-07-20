import React from 'react';
import { Mail, Shield, FileText, Users } from 'lucide-react';

const DefenderOffice365Topic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Defender for Office 365
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Advanced Email and Collaboration Protection
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Microsoft Defender for Office 365 provides comprehensive protection for email and 
                collaboration tools including Exchange Online, SharePoint Online, OneDrive for Business, 
                and Microsoft Teams against sophisticated threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Protection Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced threat protection for email communications and attachments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Safe Attachments</li>
              <li>• Safe Links</li>
              <li>• Anti-phishing policies</li>
              <li>• Spoof intelligence</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Document Protection</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Security for SharePoint, OneDrive, and Teams file sharing.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Safe Attachments for SharePoint</li>
              <li>• Safe Attachments for OneDrive</li>
              <li>• Safe Attachments for Teams</li>
              <li>• Real-time file scanning</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Collaboration Security</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protection for Microsoft Teams and other collaboration platforms.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Teams message protection</li>
              <li>• Channel security</li>
              <li>• Meeting safety</li>
              <li>• File sharing controls</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Threat intelligence and investigation capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Threat Explorer</li>
              <li>• Real-time detections</li>
              <li>• Campaign views</li>
              <li>• Attack simulation training</li>
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
              <span>Defender for Office 365 protects email and collaboration platforms</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Includes Safe Attachments and Safe Links for email protection</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provides security for SharePoint, OneDrive, and Teams</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Offers advanced analytics and threat investigation capabilities</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DefenderOffice365Topic;