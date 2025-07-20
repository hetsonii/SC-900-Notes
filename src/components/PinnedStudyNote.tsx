import React, { useState, useRef, useEffect } from 'react';
import { X, GripVertical, ExternalLink } from 'lucide-react';
import { StudyNote } from '../types';

interface PinnedStudyNoteProps {
  note: StudyNote;
  onUnpin: (noteId: string) => void;
  onPositionChange: (noteId: string, position: { x: number; y: number }) => void;
  onNavigateToTopic: (topicId: string) => void;
}

const PinnedStudyNote: React.FC<PinnedStudyNoteProps> = ({ 
  note, 
  onUnpin, 
  onPositionChange,
  onNavigateToTopic 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(note.pinnedPosition || { x: 100, y: 100 });
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (note.pinnedPosition) {
      setPosition(note.pinnedPosition);
    }
  }, [note.pinnedPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!noteRef.current) return;
    
    const rect = noteRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = {
        x: Math.max(0, Math.min(window.innerWidth - 320, e.clientX - dragOffset.x)),
        y: Math.max(0, Math.min(window.innerHeight - 400, e.clientY - dragOffset.y))
      };
      setPosition(newPosition);
      onPositionChange(note.id, newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, note.id, onPositionChange]);

  return (
    <div
      ref={noteRef}
      className="fixed w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
      style={{ 
        left: position.x, 
        top: position.y,
        maxHeight: '400px'
      }}
    >
      {/* Title bar */}
      <div 
        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-t-lg cursor-move border-b border-gray-200 dark:border-gray-600"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <GripVertical size={16} className="text-gray-400 flex-shrink-0" />
          <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate">
            {note.title}
          </h3>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => onNavigateToTopic(note.topicId)}
            className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title={`Go to ${note.topicTitle}`}
          >
            <ExternalLink size={14} />
          </button>
          <button
            onClick={() => onUnpin(note.id)}
            className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            title="Unpin note"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          From: {note.topicTitle}
        </div>
        <div 
            className="prose prose-sm dark:prose-invert max-w-none overflow-y-auto max-h-64 text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: note.content }}
        />
        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {note.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PinnedStudyNote;
