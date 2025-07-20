# 🎯 SC-900 Study Platform

<div align="center">

[![Microsoft SC-900](https://img.shields.io/badge/Microsoft-SC--900-blue?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/learn/certifications/exams/sc-900)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**A comprehensive, interactive study platform for the Microsoft SC-900 Security, Compliance, and Identity Fundamentals exam**

[📚 Start Studying](#getting-started) • [🎨 Features](#-features) • [🔧 Installation](#-installation) • [📖 Usage](#-usage)

</div>

## 🌟 Overview

The SC-900 Study Platform is a modern, feature-rich web application designed to help you master the Microsoft Security, Compliance, and Identity Fundamentals exam. Built with React, TypeScript, and Tailwind CSS, it provides an engaging and efficient study experience with advanced features like progress tracking, interactive highlighting, and comprehensive note-taking.

## ✨ Features


#### 📋 **Comprehensive Note-Taking**
- **Rich Text Editor** - Powered by React Quill with formatting options
- **Topic-Associated Notes** - Notes automatically linked to specific topics
- **Advanced Search & Filtering** - Find notes by content, title, or tags
- **PDF Export** - Export all notes as professionally formatted PDF
- **Pinned Notes** - Pin important notes as floating windows
- **Tag System** - Organize notes with custom tags


#### 🎯 **Difficulty Assessment**
- **Personal Difficulty Ratings** - Rate topics as Easy, Medium, or Hard
- **Difficulty Overview Dashboard** - Visual breakdown of your assessments
- **Progress Insights** - Identify areas needing more focus

#### ⏰ **Exam Countdown**
- **Customizable Exam Date** - Set your target exam date
- **Visual Countdown** - See days remaining with urgency indicators
- **Progress Motivation** - Stay motivated with time-based goals

### 🗂️ **Content Organization**

#### 📚 **Four Main Study Sections**
1. **Security, Compliance, and Identity Concepts (10-15%)**
   - Security and compliance fundamentals
   - Shared responsibility model
   - Defense-in-depth strategy
   - Zero Trust principles

2. **Microsoft Entra (Azure AD) Capabilities (25-30%)**
   - Identity and access management
   - Authentication methods
   - Conditional access
   - Identity governance

3. **Microsoft Security Solutions (35-40%)**
   - Azure security services
   - Microsoft Defender suite
   - Sentinel SIEM
   - Threat protection

4. **Microsoft Compliance Solutions (25-30%)**
   - Microsoft Purview
   - Data classification
   - Information protection
   - Compliance management

## 🔧 Installation

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/hetsonii/sc-900-notes.git
   cd sc-900-notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start studying!

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Usage

#### 🚀 **Getting Started**

1. **Launch the Application** - Open the platform in your browser
2. **Explore the Dashboard** - View exam overview and study sections
3. **Start with Section 1** - Begin with Security, Compliance, and Identity Concepts
4. **Use Study Tools** - Enable highlighting, take notes, and bookmark important topics


#### 📋 **Note-Taking Strategy**
- Create summary notes for each topic
- Use tags like `#important`, `#review`, `#example`
- Pin frequently referenced notes
- Export notes before your exam for offline review


## 🏗️ Architecture

### **Tech Stack**
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2 for fast development and builds
- **Styling**: Tailwind CSS 3.4.1 for responsive design
- **Routing**: React Router DOM 7.6.3 for navigation
- **Rich Text**: React Quill 2.0.0 for note editing
- **Icons**: Lucide React 0.525.0 for beautiful icons
- **PDF Generation**: jsPDF 3.0.1 for note exports

### **Project Structure**
```
src/
├── components/          # Reusable UI components
│   ├── Bookmarks.tsx   # Bookmark management
│   ├── StudyNotes.tsx  # Note-taking interface
│   ├── SimpleHighlighter.tsx # Highlighting system
│   └── ...
├── contexts/           # React context providers
│   ├── ProgressContext.tsx # Study progress management
│   └── ThemeContext.tsx    # Theme management
├── data/              # Study content and structure
│   └── topicStructure.ts   # Exam topics organization
├── pages/             # Main application pages
│   ├── HomePage.tsx   # Landing and overview page
│   └── TopicPage.tsx  # Individual topic study page
├── topics/            # Study content by section
│   ├── security-compliance-identity/
│   ├── microsoft-entra/
│   ├── security-solutions/
│   └── compliance-solutions/
└── types/             # TypeScript type definitions
```

### **Data Persistence**
- **LocalStorage** - All user data stored locally in browser
- **Automatic Saving** - Progress, notes, and preferences saved automatically
- **Data Export** - Notes can be exported as PDF for backup

## 🎯 Exam Information

### **Target Audience**
- Business stakeholders
- New or existing IT professionals  
- Students interested in Microsoft security solutions
- Anyone preparing for Microsoft security certifications

### **Prerequisites**
- Familiarity with Microsoft Azure and Microsoft 365
- Basic understanding of security and compliance concepts
- Interest in Microsoft security, compliance, and identity solutions
- No specific technical background required

### **Exam Details**
- **Duration**: 60 minutes
- **Question Types**: Multiple choice, multiple select, scenario-based
- **Passing Score**: 700 out of 1000
- **Cost**: $99 USD
- **Languages**: Available in multiple languages

## 🚀 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Create production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for code quality
```

### **Development Environment**
- **Hot Module Replacement** - Instant updates during development
- **TypeScript Support** - Full type checking and IntelliSense
- **ESLint Configuration** - Consistent code style and quality
- **Responsive Testing** - Built-in responsive design testing

## 🤝 Contributing

We welcome contributions to improve the SC-900 Study Platform! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Report Bugs** - Found an issue? Let us know!
- 💡 **Suggest Features** - Have ideas for improvements?
- 📝 **Improve Content** - Help enhance study materials
- 🔧 **Code Contributions** - Submit pull requests

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🙋‍♂️ Support

### **Getting Help**
- 📖 **Documentation** - Refer to this README for comprehensive information
- 🐛 **Issues** - Report bugs or request features on GitHub
- 💬 **Discussions** - Join community discussions for study tips

### **Study Resources**
- [Microsoft SC-900 Official Page](https://docs.microsoft.com/en-us/learn/certifications/exams/sc-900)
- [Microsoft Learn Learning Path](https://docs.microsoft.com/en-us/learn/paths/describe-concepts-of-security-compliance-identity/)
- [Microsoft Security Documentation](https://docs.microsoft.com/en-us/security/)

---

<div align="center">

**Built with ❤️ for Microsoft SC-900 exam success**

[⭐ Star this repo](https://github.com/yourusername/sc-900-notes) if it helped you in your certification journey!

</div>
