import React, { useState, useRef, useEffect } from 'react';
import { StickyNote, Pin, PinOff, Move } from 'lucide-react';

interface StudyNotePreviewProps {
  note: {
    id: string;
    title: string;
    content: string;
    createdAt: number;
  };
  position: { x: number; y: number };
  isVisible: boolean;
  isPinned: boolean;
  onPin: () => void;
  onUnpin: () => void;
  onPositionChange?: (position: { x: number; y: number }) => void;
}

const StudyNotePreview: React.FC<StudyNotePreviewProps> = ({
  note,
  position,
  isVisible,
  isPinned,
  onPin,
  onUnpin,
  onPositionChange
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState(position);
  const previewRef = useRef<HTMLDivElement>(null);
  
  // Update position when prop changes (for non-pinned state)
  useEffect(() => {
    if (!isPinned) {
      setCurrentPosition(position);
    }
  }, [position, isPinned]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isPinned) return; // Only allow dragging when pinned
    
    e.preventDefault();
    setIsDragging(true);
    
    const rect = previewRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !isPinned) return;
    
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    };
    
    // Ensure the preview stays within viewport bounds
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const previewWidth = 320; // Approximate width
    const previewHeight = 200; // Approximate height
    
    newPosition.x = Math.max(10, Math.min(viewportWidth - previewWidth - 10, newPosition.x));
    newPosition.y = Math.max(10, Math.min(viewportHeight - previewHeight - 10, newPosition.y));
    
    setCurrentPosition(newPosition);
    onPositionChange?.(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  // Strip HTML tags for preview
  const stripHtml = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const plainContent = stripHtml(note.content);
  const truncatedContent = plainContent.length > 200 
    ? plainContent.substring(0, 200) + '...' 
    : plainContent;

  return (
    <div
      ref={previewRef}
      className={`fixed z-[9999] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-80 transition-all duration-200 ${
        isPinned ? 'border-blue-400 dark:border-blue-500 shadow-blue-100 dark:shadow-blue-900/20' : ''
      } ${isDragging ? 'shadow-2xl scale-105' : ''}`}
      style={{
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        transform: isPinned ? 'none' : 'translateY(-50%)',
        cursor: isDragging ? 'grabbing' : 'default',
      }}
    >
      {/* Header */}
      <div 
        className={`flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 ${
          isPinned ? 'bg-blue-50 dark:bg-blue-900/20 cursor-grab hover:cursor-grab active:cursor-grabbing' : 'bg-gray-50 dark:bg-gray-750'
        } ${isPinned ? 'select-none' : ''}`}
        onMouseDown={handleMouseDown}
        title={isPinned ? 'Drag to move' : ''}
      >
        <div className="flex items-center space-x-2">
          <StickyNote className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Study Note
          </span>
          {isPinned && (
            <Move className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          )}
        </div>
        <button
          onClick={isPinned ? onUnpin : onPin}
          className={`p-1 rounded transition-colors ${
            isPinned 
              ? 'text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30' 
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          title={isPinned ? 'Unpin note' : 'Pin note'}
        >
          {isPinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Title */}
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm line-clamp-1">
          {note.title}
        </h4>

        {/* Content Preview */}
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
          {truncatedContent}
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Created: {formatDate(note.createdAt)}</span>
          {isPinned && (
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Pinned
            </span>
          )}
        </div>
      </div>

      {/* Pointer arrow */}
      <div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2"
        style={{ marginLeft: '-8px' }}
      >
        <div className={`w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent ${
          isPinned 
            ? 'border-r-blue-100 dark:border-r-blue-900/40' 
            : 'border-r-white dark:border-r-gray-800'
        }`}></div>
      </div>
    </div>
  );
};

export default StudyNotePreview;
