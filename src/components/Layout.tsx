import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';
import ThemeToggle from './ThemeToggle';
import StudyNotes from './StudyNotes';
import PinnedStudyNotes from './PinnedStudyNotes';
import Breadcrumbs from './Breadcrumbs';
import ExamCountdown from './ExamCountdown';
import { useProgress } from '../contexts/ProgressContext';

const Layout: React.FC = () => {
  const { state } = useProgress();
  const { sidebarCollapsed, sidebarWidth } = state;
  const [isGlobalNotesOpen, setIsGlobalNotesOpen] = useState(false);

  const mainMarginLeft = sidebarCollapsed ? 64 : sidebarWidth;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Sidebar />
      
      {/* Top bar with exam countdown and theme toggle */}
      <div 
        className="fixed top-4 right-4 z-30 flex items-center space-x-3"
        style={{ marginLeft: mainMarginLeft }}
      >
        <ExamCountdown />
        <ThemeToggle />
      </div>

      {/* Global Study Notes Access */}
      <StudyNotes
        isOpen={isGlobalNotesOpen}
        onToggle={() => setIsGlobalNotesOpen(!isGlobalNotesOpen)}
      />

      {/* Pinned Study Notes */}
      <PinnedStudyNotes />

      <main
        className="transition-all duration-300 ease-in-out"
        style={{ marginLeft: mainMarginLeft }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs />
          
          <Outlet />
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Layout;