import React, { useState, useMemo } from 'react';
import { StickyNote, Plus, Edit3, Trash2, Download, X, Tag, Calendar, Search, Pin, PinOff } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useParams } from 'react-router-dom';
import { getTopicById } from '../data/topicStructure';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface StudyNotesProps {
  isOpen: boolean;
  onToggle: () => void;
}

const StudyNotes: React.FC<StudyNotesProps> = ({ isOpen, onToggle }) => {
  const { addStudyNote, updateStudyNote, removeStudyNote, getStudyNotes, exportNotesAsPDF } = useProgress();
  const [showEditor, setShowEditor] = useState(false);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'current'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { id: currentTopicId } = useParams<{ id: string }>();
  const currentTopic = currentTopicId ? getTopicById(currentTopicId) : null;

  const allNotes = getStudyNotes();
  
  // Sort notes: current topic first, then by update time
  const sortedNotes = useMemo(() => {
    return [...allNotes].sort((a, b) => {
      // If filtering by current topic, no special sorting needed
      if (filter === 'current') {
        return b.updatedAt - a.updatedAt;
      }
      
      // For all notes: current topic notes first, then others by date
      if (currentTopicId) {
        const aIsCurrent = a.topicId === currentTopicId;
        const bIsCurrent = b.topicId === currentTopicId;
        
        if (aIsCurrent && !bIsCurrent) return -1;
        if (!aIsCurrent && bIsCurrent) return 1;
      }
      
      // If both or neither are current topic, sort by date
      return b.updatedAt - a.updatedAt;
    });
  }, [allNotes, filter, currentTopicId]);

  const topicNotes = currentTopicId ? getStudyNotes(currentTopicId) : [];
  const displayNotes = filter === 'current' ? topicNotes : sortedNotes;
  
  const filteredNotes = useMemo(() => {
    if (!searchQuery) return displayNotes;
    
    const query = searchQuery.toLowerCase();
    return displayNotes.filter(note => 
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query) ||
      note.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [displayNotes, searchQuery]);

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'blockquote', 'code-block', 'link'
  ];

  const handleSaveNote = () => {
    if (!title.trim() || !currentTopicId || !currentTopic) return;

    const noteData = {
      topicId: currentTopicId,
      topicTitle: currentTopic.title,
      title: title.trim(),
      content,
      tags,
    };

    if (editingNote) {
      updateStudyNote(editingNote, noteData);
    } else {
      addStudyNote(noteData);
    }

    resetEditor();
  };

  const handleEditNote = (noteId: string) => {
    const note = allNotes.find(n => n.id === noteId);
    if (!note) return;

    setEditingNote(noteId);
    setTitle(note.title);
    setContent(note.content);
    setTags(note.tags);
    setShowEditor(true);
  };

  const resetEditor = () => {
    setShowEditor(false);
    setEditingNote(null);
    setTitle('');
    setContent('');
    setTags([]);
    setTagInput('');
  };

  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handlePinNote = (noteId: string) => {
    const note = allNotes.find(n => n.id === noteId);
    if (!note) return;

    // Find a good position for the new pinned note
    const pinnedNotes = allNotes.filter(n => n.isPinned);
    const baseX = 100;
    const baseY = 100;
    const offset = pinnedNotes.length * 30; // Stagger pinned notes

    updateStudyNote(noteId, {
      isPinned: true,
      pinnedPosition: { x: baseX + offset, y: baseY + offset }
    });
  };

  const handleUnpinNote = (noteId: string) => {
    updateStudyNote(noteId, {
      isPinned: false,
      pinnedPosition: undefined
    });
  };

  const stripHtml = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-16 right-4 z-40">
        <button
          onClick={onToggle}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg border-2 border-green-600 hover:border-green-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
          title="Study Notes - View & Export All Notes"
        >
          <StickyNote className="w-5 h-5" />
          <span className="font-semibold text-sm">Study Notes</span>
          {allNotes.length > 0 && (
            <span className="bg-white text-green-600 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold border-2 border-white">
              {allNotes.length}
            </span>
          )}
        </button>
      </div>

      {/* Study Notes Panel */}
      {isOpen && (
        <div className="fixed right-4 top-60 w-96 max-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center space-x-2">
              <StickyNote className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Study Notes</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({filteredNotes.length})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowEditor(true)}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium transition-colors flex items-center space-x-1"
                title="Add new note"
              >
                <Plus className="w-4 h-4" />
                <span>Add Note</span>
              </button>
              <button
                onClick={exportNotesAsPDF}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors flex items-center space-x-1"
                title="Export all notes as PDF"
              >
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={onToggle}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-500 dark:text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 space-y-3">
            {/* Filter Tabs */}
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                All Notes ({allNotes.length})
              </button>
              {currentTopic && (
                <button
                  onClick={() => setFilter('current')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    filter === 'current'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  This Topic ({topicNotes.length})
                </button>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Notes List */}
          <div className="flex-1 overflow-y-auto">
            {filteredNotes.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                <StickyNote className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">
                  {searchQuery ? 'No notes found' : 'No notes yet'}
                </p>
                {!searchQuery && (
                  <button
                    onClick={() => setShowEditor(true)}
                    className="mt-2 text-green-600 dark:text-green-400 hover:underline text-sm"
                  >
                    Create your first note
                  </button>
                )}
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredNotes.map((note) => (
                  <div key={note.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
                        {note.title}
                      </h4>
                      <div className="flex items-center space-x-1 ml-2">
                        <button
                          onClick={() => note.isPinned ? handleUnpinNote(note.id) : handlePinNote(note.id)}
                          className={`p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors ${
                            note.isPinned ? 'text-orange-500' : 'text-gray-500 dark:text-gray-400'
                          }`}
                          title={note.isPinned ? 'Unpin note' : 'Pin note as floating window'}
                        >
                          {note.isPinned ? <PinOff className="w-3 h-3" /> : <Pin className="w-3 h-3" />}
                        </button>
                        <button
                          onClick={() => handleEditNote(note.id)}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-blue-500"
                          title="Edit note"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this note?')) {
                              removeStudyNote(note.id);
                            }
                          }}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-red-500"
                          title="Delete note"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Content Preview */}
                    <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-3">
                      {stripHtml(note.content).substring(0, 150)}
                      {stripHtml(note.content).length > 150 ? '...' : ''}
                    </div>
                    
                    {/* Tags */}
                    {note.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {note.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          >
                            <Tag className="w-2 h-2 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Topic and Date */}
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                      <div className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {note.topicTitle}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(note.updatedAt)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Note Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Editor Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {editingNote ? 'Edit Note' : 'New Study Note'}
              </h3>
              <button
                onClick={resetEditor}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Editor Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter note title..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Tags */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    >
                      <Tag className="w-2 h-2 mr-1" />
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="w-2 h-2" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={handleTagInputKeyPress}
                    placeholder="Add a tag..."
                    className="flex-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                  />
                  <button
                    onClick={handleAddTag}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Rich Text Editor */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content
                </label>
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Write your study notes here..."
                    style={{ height: '300px' }}
                  />
                </div>
              </div>
            </div>

            {/* Editor Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 mt-16">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {filter === 'current' && currentTopic && (
                  <span>Will be saved to: {currentTopic.title}</span>
                )}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={resetEditor}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNote}
                  disabled={!title.trim()}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  {editingNote ? 'Update Note' : 'Save Note'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudyNotes;
