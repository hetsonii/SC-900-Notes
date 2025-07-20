import React from 'react';
import { Tag, Eye, Shield, BarChart } from 'lucide-react';

const DataClassificationTopic: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Data Classification Capabilities
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Automatic and Manual Data Classification
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Data classification capabilities help organizations discover, classify, and protect 
                sensitive information across their environment using both automate machine learning 
                and manual classification methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Methods */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Classification Methods
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Automatic Classification</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              AI-powered classification using machine learning and pattern recognition.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Content inspection</li>
              <li>• Pattern matching</li>
              <li>• Machine learning models</li>
              <li>• Sensitive information types</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Tag className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Manual Classification</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              User-driven classification with guidance and recommendations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• User-applied labels</li>
              <li>• Recommended classifications</li>
              <li>• Mandatory labeling</li>
              
              <li>• Justification requirements</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Trainable Classifiers</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Custom machine learning models trained on your organization's data.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Custom model training</li>
              <li>• Organization-specific patterns</li>
              <li>• Continuous learning</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800  border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Classification Analytics</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Insights and reporting on data classification activities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Classification reports</li>
              <li>• Data discovery insights</li>
              <li>• Compliance tracking</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Take aways
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Data classification uses both automatic and manual methods for comprehensive coverage</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Automatic classification leverages AI and machine learning for pattern recognition</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Trainable classifiers can be customized for organization-specific data patterns</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Classification analytics provide insights for compliance and risk management</span>
            </li>
          </ul>
        </div>
      </section>
    
    </div>
  );
};

export default DataClassificationTopic;