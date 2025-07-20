import { Section } from '../types';

// Security, Compliance, and Identity Topics
import SecurityComplianceConceptsTopic from '../topics/security-compliance-identity/SecurityComplianceConceptsTopic';
import SharedResponsibilityTopic from '../topics/security-compliance-identity/SharedResponsibilityTopic';
import DefenseInDepthTopic from '../topics/security-compliance-identity/DefenseInDepthTopic';
import ZeroTrustTopic from '../topics/security-compliance-identity/ZeroTrustTopic';
import EncryptionHashingTopic from '../topics/security-compliance-identity/EncryptionHashingTopic';
import GRCConceptsTopic from '../topics/security-compliance-identity/GRCConceptsTopic';
import IdentityConceptsTopic from '../topics/security-compliance-identity/IdentityConceptsTopic';
import AuthenticationTopic from '../topics/security-compliance-identity/AuthenticationTopic';
import AuthorizationTopic from '../topics/security-compliance-identity/AuthorizationTopic';
import IdentityProvidersTopic from '../topics/security-compliance-identity/IdentityProvidersTopic';
import DirectoryServicesTopic from '../topics/security-compliance-identity/DirectoryServicesTopic';
import FederationTopic from '../topics/security-compliance-identity/FederationTopic';

// Microsoft Entra Topics
import EntraIDFunctionsTopic from '../topics/microsoft-entra/EntraIDFunctionsTopic';
import IdentityTypesTopic from '../topics/microsoft-entra/IdentityTypesTopic';
import HybridIdentityTopic from '../topics/microsoft-entra/HybridIdentityTopic';
import AuthenticationMethodsTopic from '../topics/microsoft-entra/AuthenticationMethodsTopic';
import MFATopic from '../topics/microsoft-entra/MFATopic';
import PasswordProtectionTopic from '../topics/microsoft-entra/PasswordProtectionTopic';
import ConditionalAccessTopic from '../topics/microsoft-entra/ConditionalAccessTopic';
import EntraRolesTopic from '../topics/microsoft-entra/EntraRolesTopic';
import IdentityGovernanceTopic from '../topics/microsoft-entra/IdentityGovernanceTopic';
import AccessReviewsTopic from '../topics/microsoft-entra/AccessReviewsTopic';
import PrivilegedIdentityTopic from '../topics/microsoft-entra/PrivilegedIdentityTopic';
import IdentityProtectionTopic from '../topics/microsoft-entra/IdentityProtectionTopic';

// Security Solutions Topics
import AzureDDoSProtectionTopic from '../topics/security-solutions/AzureDDoSProtectionTopic';
import AzureFirewallTopic from '../topics/security-solutions/AzureFirewallTopic';
import WebApplicationFirewallTopic from '../topics/security-solutions/WebApplicationFirewallTopic';
import NetworkSegmentationTopic from '../topics/security-solutions/NetworkSegmentationTopic';
import NetworkSecurityGroupsTopic from '../topics/security-solutions/NetworkSecurityGroupsTopic';
import AzureBastionTopic from '../topics/security-solutions/AzureBastionTopic';
import AzureKeyVaultTopic from '../topics/security-solutions/AzureKeyVaultTopic';
import DefenderForCloudTopic from '../topics/security-solutions/DefenderForCloudTopic';
import CSPMTopic from '../topics/security-solutions/CSPMTopic';
import SecurityPoliciesTopic from '../topics/security-solutions/SecurityPoliciesTopic';
import WorkloadProtectionTopic from '../topics/security-solutions/WorkloadProtectionTopic';
import SentinelSIEMTopic from '../topics/security-solutions/SentinelSIEMTopic';
import ThreatDetectionTopic from '../topics/security-solutions/ThreatDetectionTopic';
import DefenderXDRTopic from '../topics/security-solutions/DefenderXDRTopic';
import DefenderOffice365Topic from '../topics/security-solutions/DefenderOffice365Topic';
import DefenderEndpointTopic from '../topics/security-solutions/DefenderEndpointTopic';
import DefenderCloudAppsTopic from '../topics/security-solutions/DefenderCloudAppsTopic';
import DefenderIdentityTopic from '../topics/security-solutions/DefenderIdentityTopic';
import VulnerabilityManagementTopic from '../topics/security-solutions/VulnerabilityManagementTopic';
import ThreatIntelligenceTopic from '../topics/security-solutions/ThreatIntelligenceTopic';
import DefenderPortalTopic from '../topics/security-solutions/DefenderPortalTopic';

// Compliance Solutions Topics
import ServiceTrustPortalTopic from '../topics/compliance-solutions/ServiceTrustPortalTopic';
import PrivacyPrinciplesTopic from '../topics/compliance-solutions/PrivacyPrinciplesTopic';
import MicrosoftPrivaTopic from '../topics/compliance-solutions/MicrosoftPrivaTopic';
import PurviewPortalTopic from '../topics/compliance-solutions/PurviewPortalTopic';
import ComplianceManagerTopic from '../topics/compliance-solutions/ComplianceManagerTopic';
import ComplianceScoreTopic from '../topics/compliance-solutions/ComplianceScoreTopic';
import DataClassificationTopic from '../topics/compliance-solutions/DataClassificationTopic';
import ContentActivityExplorerTopic from '../topics/compliance-solutions/ContentActivityExplorerTopic';
import SensitivityLabelsTopic from '../topics/compliance-solutions/SensitivityLabelsTopic';
import DataLossPreventionTopic from '../topics/compliance-solutions/DataLossPreventionTopic';
import RecordsManagementTopic from '../topics/compliance-solutions/RecordsManagementTopic';
import RetentionPoliciesTopic from '../topics/compliance-solutions/RetentionPoliciesTopic';
import InsiderRiskTopic from '../topics/compliance-solutions/InsiderRiskTopic';
import eDiscoveryTopic from '../topics/compliance-solutions/eDiscoveryTopic';
import AuditSolutionsTopic from '../topics/compliance-solutions/AuditSolutionsTopic';

export const sections: Section[] = [
  {
    id: 'security-compliance-identity',
    title: 'Security, Compliance, and Identity Concepts',
    description: 'Fundamental concepts of security, compliance, and identity',
    percentage: '10-15%',
    color: 'bg-blue-500',
    topics: [
      {
        id: 'security-compliance-concepts',
        title: 'Security and Compliance Concepts',
        description: 'Overview of security and compliance fundamentals',
        content: SecurityComplianceConceptsTopic,
        section: 'security-compliance-identity',
        estimatedTime: 15,
      },
      {
        id: 'shared-responsibility',
        title: 'Shared Responsibility Model',
        description: 'Understanding the shared responsibility model in cloud computing',
        content: SharedResponsibilityTopic,
        section: 'security-compliance-identity',
        estimatedTime: 20,
      },
      {
        id: 'defense-in-depth',
        title: 'Defense-in-Depth',
        description: 'Multi-layered security approach and strategy',
        content: DefenseInDepthTopic,
        section: 'security-compliance-identity',
        estimatedTime: 25,
      },
      {
        id: 'zero-trust',
        title: 'Zero Trust Model',
        description: 'Zero Trust security model principles and implementation',
        content: ZeroTrustTopic,
        section: 'security-compliance-identity',
        estimatedTime: 30,
      },
      {
        id: 'encryption-hashing',
        title: 'Encryption and Hashing',
        description: 'Data protection through encryption and hashing techniques',
        content: EncryptionHashingTopic,
        section: 'security-compliance-identity',
        estimatedTime: 25,
      },
      {
        id: 'grc-concepts',
        title: 'Governance, Risk, and Compliance (GRC)',
        description: 'GRC framework and concepts in organizational security',
        content: GRCConceptsTopic,
        section: 'security-compliance-identity',
        estimatedTime: 20,
      },
      {
        id: 'identity-concepts',
        title: 'Identity Concepts',
        description: 'Identity as the primary security perimeter',
        content: IdentityConceptsTopic,
        section: 'security-compliance-identity',
        estimatedTime: 15,
      },
      {
        id: 'authentication',
        title: 'Authentication',
        description: 'Authentication methods and mechanisms',
        content: AuthenticationTopic,
        section: 'security-compliance-identity',
        estimatedTime: 20,
      },
      {
        id: 'authorization',
        title: 'Authorization',
        description: 'Authorization concepts and access control',
        content: AuthorizationTopic,
        section: 'security-compliance-identity',
        estimatedTime: 20,
      },
      {
        id: 'identity-providers',
        title: 'Identity Providers',
        description: 'Understanding identity providers and their role',
        content: IdentityProvidersTopic,
        section: 'security-compliance-identity',
        estimatedTime: 15,
      },
      {
        id: 'directory-services',
        title: 'Directory Services and Active Directory',
        description: 'Directory services concepts and Active Directory',
        content: DirectoryServicesTopic,
        section: 'security-compliance-identity',
        estimatedTime: 25,
      },
      {
        id: 'federation',
        title: 'Federation',
        description: 'Federation concepts and cross-domain authentication',
        content: FederationTopic,
        section: 'security-compliance-identity',
        estimatedTime: 20,
      },
    ],
  },
  {
    id: 'microsoft-entra',
    title: 'Microsoft Entra Capabilities',
    description: 'Comprehensive coverage of Microsoft Entra ID features and capabilities',
    percentage: '25-30%',
    color: 'bg-green-500',
    topics: [
      {
        id: 'entra-id-functions',
        title: 'Microsoft Entra ID Functions',
        description: 'Core functions and capabilities of Microsoft Entra ID',
        content: EntraIDFunctionsTopic,
        section: 'microsoft-entra',
        estimatedTime: 20,
      },
      {
        id: 'identity-types',
        title: 'Types of Identities',
        description: 'Different types of identities in Microsoft Entra ID',
        content: IdentityTypesTopic,
        section: 'microsoft-entra',
        estimatedTime: 25,
      },
      {
        id: 'hybrid-identity',
        title: 'Hybrid Identity',
        description: 'Hybrid identity scenarios and implementations',
        content: HybridIdentityTopic,
        section: 'microsoft-entra',
        estimatedTime: 30,
      },
      {
        id: 'authentication-methods',
        title: 'Authentication Methods',
        description: 'Various authentication methods supported by Entra ID',
        content: AuthenticationMethodsTopic,
        section: 'microsoft-entra',
        estimatedTime: 25,
      },
      {
        id: 'multi-factor-authentication',
        title: 'Multi-Factor Authentication (MFA)',
        description: 'MFA implementation and configuration',
        content: MFATopic,
        section: 'microsoft-entra',
        estimatedTime: 30,
      },
      {
        id: 'password-protection',
        title: 'Password Protection and Management',
        description: 'Password policies and protection mechanisms',
        content: PasswordProtectionTopic,
        section: 'microsoft-entra',
        estimatedTime: 20,
      },
      {
        id: 'conditional-access',
        title: 'Conditional Access',
        description: 'Conditional Access policies and implementation',
        content: ConditionalAccessTopic,
        section: 'microsoft-entra',
        estimatedTime: 35,
      },
      {
        id: 'entra-roles',
        title: 'Microsoft Entra Roles and RBAC',
        description: 'Role-based access control in Microsoft Entra',
        content: EntraRolesTopic,
        section: 'microsoft-entra',
        estimatedTime: 30,
      },
      {
        id: 'identity-governance',
        title: 'Microsoft Entra ID Governance',
        description: 'Identity governance features and capabilities',
        content: IdentityGovernanceTopic,
        section: 'microsoft-entra',
        estimatedTime: 25,
      },
      {
        id: 'access-reviews',
        title: 'Access Reviews',
        description: 'Access review processes and automation',
        content: AccessReviewsTopic,
        section: 'microsoft-entra',
        estimatedTime: 20,
      },
      {
        id: 'privileged-identity',
        title: 'Privileged Identity Management',
        description: 'PIM features and privileged access management',
        content: PrivilegedIdentityTopic,
        section: 'microsoft-entra',
        estimatedTime: 35,
      },
      {
        id: 'identity-protection',
        title: 'Microsoft Entra ID Protection',
        description: 'Identity protection and risk-based policies',
        content: IdentityProtectionTopic,
        section: 'microsoft-entra',
        estimatedTime: 30,
      },
    ],
  },
  {
    id: 'security-solutions',
    title: 'Microsoft Security Solutions',
    description: 'Azure security services and Microsoft Defender suite',
    percentage: '35-40%',
    color: 'bg-red-500',
    topics: [
      {
        id: 'azure-ddos-protection',
        title: 'Azure DDoS Protection',
        description: 'Distributed denial-of-service protection in Azure',
        content: AzureDDoSProtectionTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'azure-firewall',
        title: 'Azure Firewall',
        description: 'Network security with Azure Firewall',
        content: AzureFirewallTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'web-application-firewall',
        title: 'Web Application Firewall (WAF)',
        description: 'Application layer protection with WAF',
        content: WebApplicationFirewallTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'network-segmentation',
        title: 'Network Segmentation with Azure Virtual Networks',
        description: 'Network isolation and segmentation strategies',
        content: NetworkSegmentationTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'network-security-groups',
        title: 'Network Security Groups (NSGs)',
        description: 'Traffic filtering with Network Security Groups',
        content: NetworkSecurityGroupsTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'azure-bastion',
        title: 'Azure Bastion',
        description: 'Secure remote access with Azure Bastion',
        content: AzureBastionTopic,
        section: 'security-solutions',
        estimatedTime: 15,
      },
      {
        id: 'azure-key-vault',
        title: 'Azure Key Vault',
        description: 'Secrets and key management with Azure Key Vault',
        content: AzureKeyVaultTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'defender-for-cloud',
        title: 'Microsoft Defender for Cloud',
        description: 'Cloud security posture management and protection',
        content: DefenderForCloudTopic,
        section: 'security-solutions',
        estimatedTime: 30,
      },
      {
        id: 'cspm',
        title: 'Cloud Security Posture Management (CSPM)',
        description: 'Security posture assessment and improvement',
        content: CSPMTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'security-policies',
        title: 'Security Policies and Initiatives',
        description: 'Implementing security policies to improve posture',
        content: SecurityPoliciesTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'workload-protection',
        title: 'Enhanced Security Features for Workload Protection',
        description: 'Advanced protection for cloud workloads',
        content: WorkloadProtectionTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'sentinel-siem',
        title: 'Microsoft Sentinel - SIEM and SOAR',
        description: 'Security information and event management with Sentinel',
        content: SentinelSIEMTopic,
        section: 'security-solutions',
        estimatedTime: 30,
      },
      {
        id: 'threat-detection',
        title: 'Threat Detection and Mitigation in Sentinel',
        description: 'Advanced threat detection capabilities',
        content: ThreatDetectionTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'defender-xdr',
        title: 'Microsoft Defender XDR Services',
        description: 'Extended detection and response capabilities',
        content: DefenderXDRTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'defender-office365',
        title: 'Microsoft Defender for Office 365',
        description: 'Email and collaboration protection',
        content: DefenderOffice365Topic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'defender-endpoint',
        title: 'Microsoft Defender for Endpoint',
        description: 'Endpoint detection and response',
        content: DefenderEndpointTopic,
        section: 'security-solutions',
        estimatedTime: 30,
      },
      {
        id: 'defender-cloud-apps',
        title: 'Microsoft Defender for Cloud Apps',
        description: 'Cloud application security broker (CASB)',
        content: DefenderCloudAppsTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'defender-identity',
        title: 'Microsoft Defender for Identity',
        description: 'Identity-based security monitoring',
        content: DefenderIdentityTopic,
        section: 'security-solutions',
        estimatedTime: 25,
      },
      {
        id: 'vulnerability-management',
        title: 'Microsoft Defender Vulnerability Management',
        description: 'Vulnerability assessment and management',
        content: VulnerabilityManagementTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'threat-intelligence',
        title: 'Microsoft Defender Threat Intelligence',
        description: 'Threat intelligence and analysis',
        content: ThreatIntelligenceTopic,
        section: 'security-solutions',
        estimatedTime: 20,
      },
      {
        id: 'defender-portal',
        title: 'Microsoft Defender Portal',
        description: 'Unified security operations center',
        content: DefenderPortalTopic,
        section: 'security-solutions',
        estimatedTime: 15,
      },
    ],
  },
  {
    id: 'compliance-solutions',
    title: 'Microsoft Compliance Solutions',
    description: 'Comprehensive compliance management with Microsoft Purview',
    percentage: '20-25%',
    color: 'bg-purple-500',
    topics: [
      {
        id: 'service-trust-portal',
        title: 'Microsoft Service Trust Portal',
        description: 'Accessing compliance and security information',
        content: ServiceTrustPortalTopic,
        section: 'compliance-solutions',
        estimatedTime: 15,
      },
      {
        id: 'privacy-principles',
        title: 'Privacy Principles of Microsoft',
        description: 'Microsoft\'s approach to privacy and data protection',
        content: PrivacyPrinciplesTopic,
        section: 'compliance-solutions',
        estimatedTime: 15,
      },
      {
        id: 'microsoft-priva',
        title: 'Microsoft Priva',
        description: 'Privacy risk management and subject rights requests',
        content: MicrosoftPrivaTopic,
        section: 'compliance-solutions',
        estimatedTime: 20,
      },
      {
        id: 'purview-portal',
        title: 'Microsoft Purview Portal',
        description: 'Central hub for compliance management',
        content: PurviewPortalTopic,
        section: 'compliance-solutions',
        estimatedTime: 15,
      },
      {
        id: 'compliance-manager',
        title: 'Compliance Manager',
        description: 'Risk assessment and compliance management',
        content: ComplianceManagerTopic,
        section: 'compliance-solutions',
        estimatedTime: 25,
      },
      {
        id: 'compliance-score',
        title: 'Compliance Score',
        description: 'Measuring and improving compliance posture',
        content: ComplianceScoreTopic,
        section: 'compliance-solutions',
        estimatedTime: 20,
      },
      {
        id: 'data-classification',
        title: 'Data Classification Capabilities',
        description: 'Automatic and manual data classification',
        content: DataClassificationTopic,
        section: 'compliance-solutions',
        estimatedTime: 25,
      },
      {
        id: 'content-activity-explorer',
        title: 'Content Explorer and Activity Explorer',
        description: 'Data discovery and activity monitoring',
        content: ContentActivityExplorerTopic,
        section: 'compliance-solutions',
        estimatedTime: 20,
      },
      {
        id: 'sensitivity-labels',
        title: 'Sensitivity Labels and Policies',
        description: 'Data protection through sensitivity labeling',
        content: SensitivityLabelsTopic,
        section: 'compliance-solutions',
        estimatedTime: 30,
      },
      {
        id: 'data-loss-prevention',
        title: 'Data Loss Prevention (DLP)',
        description: 'Preventing sensitive data loss and leakage',
        content: DataLossPreventionTopic,
        section: 'compliance-solutions',
        estimatedTime: 30,
      },
      {
        id: 'records-management',
        title: 'Records Management',
        description: 'Managing organizational records lifecycle',
        content: RecordsManagementTopic,
        section: 'compliance-solutions',
        estimatedTime: 25,
      },
      {
        id: 'retention-policies',
        title: 'Retention Policies and Labels',
        description: 'Data retention and disposition management',
        content: RetentionPoliciesTopic,
        section: 'compliance-solutions',
        estimatedTime: 25,
      },
      {
        id: 'insider-risk',
        title: 'Insider Risk Management',
        description: 'Detecting and managing insider threats',
        content: InsiderRiskTopic,
        section: 'compliance-solutions',
        estimatedTime: 25,
      },
      {
        id: 'ediscovery',
        title: 'eDiscovery Solutions',
        description: 'Legal hold and electronic discovery',
        content: eDiscoveryTopic,
        section: 'compliance-solutions',
        estimatedTime: 30,
      },
      {
        id: 'audit-solutions',
        title: 'Audit Solutions',
        description: 'Auditing and monitoring organizational activities',
        content: AuditSolutionsTopic,
        section: 'compliance-solutions',
        estimatedTime: 20,
      },
    ],
  },
];

export const getAllTopics = () => {
  return sections.flatMap(section => section.topics);
};

export const getTopicById = (id: string) => {
  return getAllTopics().find(topic => topic.id === id);
};

export const getNextTopic = (currentTopicId: string) => {
  const topics = getAllTopics();
  const currentIndex = topics.findIndex(topic => topic.id === currentTopicId);
  return currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;
};

export const getPreviousTopic = (currentTopicId: string) => {
  const topics = getAllTopics();
  const currentIndex = topics.findIndex(topic => topic.id === currentTopicId);
  return currentIndex > 0 ? topics[currentIndex - 1] : null;
};