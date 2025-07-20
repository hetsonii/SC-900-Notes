import React, { useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, Menu, CheckCircle, Circle, Grip } from 'lucide-react';
import { sections } from '../data/topicStructure';
import { useProgress } from '../contexts/ProgressContext';
import clsx from 'clsx';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { state, toggleSidebar, setSidebarWidth } = useProgress();
  const { completedTopics, sidebarCollapsed, sidebarWidth } = state;
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    new Set(sections.map(section => section.id))
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isResizing.current = true;
    e.preventDefault();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      
      const newWidth = Math.max(250, Math.min(500, e.clientX));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [setSidebarWidth]);

  if (sidebarCollapsed) {
    return (
      <div className="fixed left-0 top-0 h-full w-16 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 flex flex-col">
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Expand sidebar"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={sidebarRef}
        className="fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 flex flex-col"
        style={{ width: sidebarWidth }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 hide-horizontal-scrollbar">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-gray-900 dark:text-white truncate">SC-900</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Study Guide</p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
            aria-label="Collapse sidebar"
          >
            <Menu className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto custom-scrollbar py-4">
          <nav className="space-y-1 px-3">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hide-horizontal-scrollbar"
                >
                  <div className="flex items-center space-x-2 min-w-0">
                    <div className={clsx("w-3 h-3 rounded-full flex-shrink-0", section.color)} />
                    <span className="truncate">{section.title}</span>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  )}
                </button>

                {expandedSections.has(section.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {section.topics.map((topic) => {
                      const isActive = location.pathname === `/topic/${topic.id}`;
                      const isCompleted = completedTopics.has(topic.id);

                      return (
                        <Link
                          key={topic.id}
                          to={`/topic/${topic.id}`}
                          className={clsx(
                            "flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 group hide-horizontal-scrollbar",
                            isActive
                              ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-l-2 border-blue-500"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span className="truncate">{topic.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Progress */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Overall Progress</div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedTopics.size / sections.flatMap(s => s.topics).length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {completedTopics.size} of {sections.flatMap(s => s.topics).length} topics completed
          </div>
        </div>
      </div>

      {/* Resize Handle */}
      <div
        className="fixed top-0 bg-transparent hover:bg-blue-200 dark:hover:bg-blue-800 cursor-col-resize z-50 transition-colors"
        style={{
          left: sidebarWidth - 2,
          width: 4,
          height: '100vh',
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Grip className="w-3 h-3 text-gray-400 rotate-90" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;