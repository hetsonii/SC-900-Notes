import React, { useState, useRef, useEffect } from 'react';
import { StickyNote, Save, X } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface FloatingStudyNotesProps {
  isVisible: boolean;
  position: { x: number; y: number };
  selectedText: string;
  topicId: string;
  onClose: () => void;
  onSave: (note: string) => void;
}

const FloatingStudyNotes: React.FC<FloatingStudyNotesProps> = ({
  isVisible,
  position,
  selectedText,
  topicId,
  onClose,
  onSave
}) => {
  const { addStudyNote } = useProgress();
  const [noteContent, setNoteContent] = useState('');
  const [title, setTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-generate title from selected text
  useEffect(() => {
    if (selectedText && !title) {
      const truncatedText = selectedText.length > 50 
        ? selectedText.substring(0, 50) + '...' 
        : selectedText;
      setTitle(`Note: ${truncatedText}`);
    }
  }, [selectedText, title]);

  // Position the floating window
  useEffect(() => {
    if (containerRef.current && isVisible) {
      const container = containerRef.current;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = position.x;
      let adjustedY = position.y;

      // Adjust position if it goes off-screen
      if (adjustedX + 400 > viewportWidth) {
        adjustedX = viewportWidth - 420;
      }
      if (adjustedY + 300 > viewportHeight) {
        adjustedY = position.y - 320;
      }

      container.style.left = `${Math.max(10, adjustedX)}px`;
      container.style.top = `${Math.max(10, adjustedY)}px`;
    }
  }, [position, isVisible]);

  const handleSave = async () => {
    if (!noteContent.trim()) return;

    setIsSaving(true);
    try {
      const studyNote = {
        id: Date.now().toString(),
        topicId,
        topicTitle: '', // Add the required topicTitle property
        title: title || 'Quick Note',
        content: noteContent,
        tags: ['highlight-note'],
        createdAt: new Date().toISOString(),
        associatedHighlight: selectedText
      };

      addStudyNote(studyNote);
      onSave(noteContent);
      
      // Reset form
      setNoteContent('');
      setTitle('');
      onClose();
    } catch (error) {
      console.error('Failed to save note:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    }
  };

  const quillFormats = [
    'bold', 'italic', 'underline', 'list', 'bullet', 'link'
  ];

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-[9999] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-96 max-h-96 overflow-hidden"
      style={{ position: 'fixed' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
        <div className="flex items-center space-x-2">
          <StickyNote className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Add Study Note
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Selected Text Preview */}
      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-b border-gray-200 dark:border-gray-700">
        <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
          Selected Text:
        </div>
        <div className="text-sm text-gray-800 dark:text-gray-200 italic line-clamp-2">
          "{selectedText}"
        </div>
      </div>

      {/* Note Title */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-2 py-1 text-sm bg-transparent border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {/* Note Content */}
      <div className="p-3 max-h-48 overflow-y-auto">
        <ReactQuill
          theme="snow"
          value={noteContent}
          onChange={setNoteContent}
          modules={quillModules}
          formats={quillFormats}
          placeholder="Write your study note here..."
          className="text-sm"
          style={{ 
            height: '120px',
            fontSize: '14px'
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Associated with highlight
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!noteContent.trim() || isSaving}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded text-xs transition-colors"
          >
            <Save className="w-3 h-3" />
            <span>{isSaving ? 'Saving...' : 'Save Note'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingStudyNotes;
