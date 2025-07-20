import React, { createContext, useContext, useReducer, useEffect, useCallback, useState } from 'react';
import { ProgressContextType, ProgressState, Highlight, Bookmark, StudyNote } from '../types';

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

type ProgressAction =
  | { type: 'COMPLETE_CURRENT_TOPIC' }
  | { type: 'COMPLETE_TOPIC'; payload: string }
  | { type: 'TOGGLE_TOPIC_COMPLETION'; payload: string }
  | { type: 'SET_CURRENT_TOPIC'; payload: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_SIDEBAR_WIDTH'; payload: number }
  | { type: 'LOAD_STATE'; payload: Partial<ProgressState> }
  // Highlight actions
  | { type: 'ADD_HIGHLIGHT'; payload: Highlight }
  | { type: 'REMOVE_HIGHLIGHT'; payload: string }
  | { type: 'UPDATE_HIGHLIGHT'; payload: { id: string; updates: Partial<Highlight> } }
  // Bookmark actions
  | { type: 'ADD_BOOKMARK'; payload: Bookmark }
  | { type: 'REMOVE_BOOKMARK'; payload: string }
  // Study note actions
  | { type: 'ADD_STUDY_NOTE'; payload: StudyNote }
  | { type: 'UPDATE_STUDY_NOTE'; payload: { id: string; updates: Partial<StudyNote> } }
  | { type: 'REMOVE_STUDY_NOTE'; payload: string }
  // Difficulty actions
  | { type: 'SET_TOPIC_DIFFICULTY'; payload: { topicId: string; difficulty: 'easy' | 'medium' | 'hard' } }
  // Exam date actions
  | { type: 'SET_EXAM_DATE'; payload: string };

const initialState: ProgressState = {
  completedTopics: new Set(),
  currentTopic: null,
  sidebarCollapsed: false,
  sidebarWidth: 320,
  highlights: [],
  bookmarks: [],
  studyNotes: [],
  topicDifficulties: {},
  examDate: null,
};

function progressReducer(state: ProgressState, action: ProgressAction): ProgressState {
  switch (action.type) {
    case 'COMPLETE_CURRENT_TOPIC':
      if (state.currentTopic) {
        const newCompleted = new Set(state.completedTopics);
        newCompleted.add(state.currentTopic);
        return { ...state, completedTopics: newCompleted };
      }
      return state;
    case 'COMPLETE_TOPIC':
      const newCompleted = new Set(state.completedTopics);
      newCompleted.add(action.payload);
      return { ...state, completedTopics: newCompleted };
    case 'TOGGLE_TOPIC_COMPLETION':
      const toggledCompleted = new Set(state.completedTopics);
      if (toggledCompleted.has(action.payload)) {
        toggledCompleted.delete(action.payload);
      } else {
        toggledCompleted.add(action.payload);
      }
      return { ...state, completedTopics: toggledCompleted };
    case 'SET_CURRENT_TOPIC':
      return { ...state, currentTopic: action.payload };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    case 'SET_SIDEBAR_WIDTH':
      return { ...state, sidebarWidth: action.payload };
    case 'LOAD_STATE':
      return { 
        ...state, 
        ...action.payload,
        completedTopics: action.payload.completedTopics 
          ? new Set(action.payload.completedTopics) 
          : state.completedTopics,
        highlights: action.payload.highlights || state.highlights,
        bookmarks: action.payload.bookmarks || state.bookmarks,
        studyNotes: action.payload.studyNotes || state.studyNotes,
        topicDifficulties: action.payload.topicDifficulties || state.topicDifficulties,
        examDate: action.payload.examDate || state.examDate,
      };
    // Highlight cases
    case 'ADD_HIGHLIGHT':
      return { ...state, highlights: [...state.highlights, action.payload] };
    case 'REMOVE_HIGHLIGHT':
      return { 
        ...state, 
        highlights: state.highlights.filter(h => h.id !== action.payload) 
      };
    case 'UPDATE_HIGHLIGHT':
      return {
        ...state,
        highlights: state.highlights.map(h => 
          h.id === action.payload.id ? { ...h, ...action.payload.updates } : h
        )
      };
    // Bookmark cases
    case 'ADD_BOOKMARK':
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case 'REMOVE_BOOKMARK':
      return { 
        ...state, 
        bookmarks: state.bookmarks.filter(b => b.id !== action.payload) 
      };
    // Study note cases
    case 'ADD_STUDY_NOTE':
      return { ...state, studyNotes: [...state.studyNotes, action.payload] };
    case 'UPDATE_STUDY_NOTE':
      return {
        ...state,
        studyNotes: state.studyNotes.map(n => 
          n.id === action.payload.id ? { ...n, ...action.payload.updates, updatedAt: Date.now() } : n
        )
      };
    case 'REMOVE_STUDY_NOTE':
      return { 
        ...state, 
        studyNotes: state.studyNotes.filter(n => n.id !== action.payload) 
      };
    // Difficulty cases
    case 'SET_TOPIC_DIFFICULTY':
      return {
        ...state,
        topicDifficulties: {
          ...state.topicDifficulties,
          [action.payload.topicId]: action.payload.difficulty
        }
      };
    // Exam date cases
    case 'SET_EXAM_DATE':
      return { ...state, examDate: action.payload };
    default:
      return state;
  }
}

interface ProgressProviderProps {
  children: React.ReactNode;
  totalTopics: number;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children, totalTopics }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sc900-progress');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ 
          type: 'LOAD_STATE', 
          payload: {
            completedTopics: parsedState.completedTopics || [],
            sidebarCollapsed: parsedState.sidebarCollapsed ?? false,
            sidebarWidth: parsedState.sidebarWidth ?? 320,
            highlights: parsedState.highlights || [],
            bookmarks: parsedState.bookmarks || [],
            studyNotes: parsedState.studyNotes || [],
            topicDifficulties: parsedState.topicDifficulties || {},
            examDate: parsedState.examDate || null,
          }
        });
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
    // Set loaded flag after attempting to load
    setHasLoaded(true);
  }, []);

  // Save state to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (!hasLoaded) return;
    
    const stateToSave = {
      completedTopics: Array.from(state.completedTopics),
      sidebarCollapsed: state.sidebarCollapsed,
      sidebarWidth: state.sidebarWidth,
      highlights: state.highlights,
      bookmarks: state.bookmarks,
      studyNotes: state.studyNotes,
      topicDifficulties: state.topicDifficulties,
      examDate: state.examDate,
    };
    localStorage.setItem('sc900-progress', JSON.stringify(stateToSave));
  }, [state.completedTopics, state.sidebarCollapsed, state.sidebarWidth, state.highlights, state.bookmarks, state.studyNotes, state.topicDifficulties, state.examDate, hasLoaded]);

  const completeCurrentTopic = useCallback(() => {
    dispatch({ type: 'COMPLETE_CURRENT_TOPIC' });
  }, []);

  const completeTopic = useCallback((topicId: string) => {
    dispatch({ type: 'COMPLETE_TOPIC', payload: topicId });
  }, []);

  const toggleTopicCompletion = useCallback((topicId: string) => {
    dispatch({ type: 'TOGGLE_TOPIC_COMPLETION', payload: topicId });
  }, []);

  const setCurrentTopic = useCallback((topicId: string) => {
    dispatch({ type: 'SET_CURRENT_TOPIC', payload: topicId });
  }, []);

  const toggleSidebar = useCallback(() => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }, []);

  const setSidebarWidth = useCallback((width: number) => {
    dispatch({ type: 'SET_SIDEBAR_WIDTH', payload: width });
  }, []);

  const getProgress = useCallback(() => {
    const completed = state.completedTopics.size;
    const percentage = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;
    return { completed, total: totalTopics, percentage };
  }, [state.completedTopics.size, totalTopics]);

  // Highlight functions
  const addHighlight = useCallback((highlight: Omit<Highlight, 'id' | 'createdAt'>) => {
    const newHighlight: Highlight = {
      ...highlight,
      id: `highlight-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: Date.now(),
    };
    dispatch({ type: 'ADD_HIGHLIGHT', payload: newHighlight });
  }, []);

  const removeHighlight = useCallback((highlightId: string) => {
    dispatch({ type: 'REMOVE_HIGHLIGHT', payload: highlightId });
  }, []);

  const updateHighlight = useCallback((highlightId: string, updates: Partial<Highlight>) => {
    dispatch({ type: 'UPDATE_HIGHLIGHT', payload: { id: highlightId, updates } });
  }, []);

  const getTopicHighlights = useCallback((topicId: string) => {
    return state.highlights.filter(h => h.topicId === topicId);
  }, [state.highlights]);

  // Bookmark functions
  const addBookmark = useCallback((bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => {
    const newBookmark: Bookmark = {
      ...bookmark,
      id: `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: Date.now(),
    };
    dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark });
  }, []);

  const removeBookmark = useCallback((bookmarkId: string) => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload: bookmarkId });
  }, []);

  const getBookmarks = useCallback(() => {
    return state.bookmarks.sort((a, b) => b.createdAt - a.createdAt);
  }, [state.bookmarks]);

  // Study notes functions
  const addStudyNote = useCallback((note: Omit<StudyNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: StudyNote = {
      ...note,
      id: `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    dispatch({ type: 'ADD_STUDY_NOTE', payload: newNote });
  }, []);

  const updateStudyNote = useCallback((noteId: string, updates: Partial<StudyNote>) => {
    dispatch({ type: 'UPDATE_STUDY_NOTE', payload: { id: noteId, updates } });
  }, []);

  const removeStudyNote = useCallback((noteId: string) => {
    dispatch({ type: 'REMOVE_STUDY_NOTE', payload: noteId });
  }, []);

  const getStudyNotes = useCallback((topicId?: string) => {
    const notes = topicId 
      ? state.studyNotes.filter(n => n.topicId === topicId)
      : state.studyNotes;
    return notes.sort((a, b) => b.updatedAt - a.updatedAt);
  }, [state.studyNotes]);

  const exportNotesAsPDF = useCallback(async () => {
    try {
      const { default: jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      // PDF Configuration
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      const margins = { top: 20, right: 20, bottom: 20, left: 20 };
      const contentWidth = pageWidth - margins.left - margins.right;
      
      let yPosition = margins.top;
      
      // Header
      doc.setFontSize(24);
      doc.setTextColor(59, 130, 246); // Blue color
      doc.text('SC-900 Study Notes Export', margins.left, yPosition);
      yPosition += 15;
      
      // Date and summary
      doc.setFontSize(10);
      doc.setTextColor(107, 114, 128); // Gray color
      doc.text(`Generated on: ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}`, margins.left, yPosition);
      yPosition += 8;
      
      doc.text(`Total Notes: ${state.studyNotes.length}`, margins.left, yPosition);
      yPosition += 15;
      
      // Add separator line
      doc.setDrawColor(229, 231, 235);
      doc.line(margins.left, yPosition, pageWidth - margins.right, yPosition);
      yPosition += 15;
      
      // Process each note
      state.studyNotes.forEach((note, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 60) {
          doc.addPage();
          yPosition = margins.top;
        }
        
        // Note number and title
        doc.setFontSize(16);
        doc.setTextColor(31, 41, 55); // Dark gray
        const titleText = `${index + 1}. ${note.title}`;
        doc.text(titleText, margins.left, yPosition);
        yPosition += 12;
        
        // Topic association with clickable link
        if (note.topicId && note.topicTitle) {
          doc.setFontSize(9);
          doc.setTextColor(59, 130, 246); // Blue color for links
          const topicText = `Topic: ${note.topicTitle}`;
          const topicLink = `${window.location.origin}/#/topic/${note.topicId}`;
          
          // Add clickable link
          doc.textWithLink(topicText, margins.left, yPosition, { url: topicLink });
          yPosition += 8;
        }
        
        // Creation date
        if (note.createdAt) {
          doc.setFontSize(9);
          doc.setTextColor(107, 114, 128);
          doc.text(`Created: ${new Date(note.createdAt).toLocaleDateString()}`, margins.left, yPosition);
          yPosition += 10;
        }
        
        // Content
        doc.setFontSize(11);
        doc.setTextColor(55, 65, 81);
        
        // Strip HTML and clean content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = note.content;
        const cleanContent = tempDiv.textContent || tempDiv.innerText || '';
        
        if (cleanContent.trim()) {
          const contentLines = doc.splitTextToSize(cleanContent, contentWidth);
          
          // Check if content fits on current page
          const contentHeight = contentLines.length * 5;
          if (yPosition + contentHeight > pageHeight - margins.bottom) {
            doc.addPage();
            yPosition = margins.top;
          }
          
          doc.text(contentLines, margins.left, yPosition);
          yPosition += contentLines.length * 5 + 5;
        }
        
        // Tags
        if (note.tags && note.tags.length > 0) {
          doc.setFontSize(9);
          doc.setTextColor(37, 99, 235); // Blue color for tags
          doc.text(`Tags: ${note.tags.join(', ')}`, margins.left, yPosition);
          yPosition += 8;
        }
        
        // Separator between notes
        yPosition += 5;
        doc.setDrawColor(229, 231, 235);
        doc.line(margins.left, yPosition, pageWidth - margins.right, yPosition);
        yPosition += 15;
      });
      
      // Footer on last page
      const totalPages = doc.internal.pages.length - 1;
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(107, 114, 128);
        doc.text(`Page ${i} of ${totalPages}`, pageWidth - margins.right - 30, pageHeight - 10);
        doc.text('SC-900 Study Guide - Study Notes Export', margins.left, pageHeight - 10);
      }
      
      // Generate filename with date
      const dateStr = new Date().toISOString().split('T')[0];
      const filename = `SC900-StudyNotes-${dateStr}.pdf`;
      
      doc.save(filename);
      
      // Success feedback could be added here
      console.log(`Study notes exported successfully as ${filename}`);
      
    } catch (error) {
      console.error('Failed to export notes as PDF:', error);
      alert('Failed to export notes as PDF. Please try again.');
    }
  }, [state.studyNotes]);

  // Difficulty assessment functions
  const setTopicDifficulty = useCallback((topicId: string, difficulty: 'easy' | 'medium' | 'hard') => {
    dispatch({ type: 'SET_TOPIC_DIFFICULTY', payload: { topicId, difficulty } });
  }, []);

  const getTopicDifficulty = useCallback((topicId: string) => {
    return state.topicDifficulties[topicId];
  }, [state.topicDifficulties]);

  const getTopicsByDifficulty = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    return Object.entries(state.topicDifficulties)
      .filter(([, diff]) => diff === difficulty)
      .map(([topicId]) => topicId);
  }, [state.topicDifficulties]);

  // Exam date functions
  const setExamDate = useCallback((date: string) => {
    dispatch({ type: 'SET_EXAM_DATE', payload: date });
  }, []);

  const getExamDate = useCallback(() => {
    return state.examDate;
  }, [state.examDate]);

  const getDaysUntilExam = useCallback(() => {
    if (!state.examDate) return null;
    const examDate = new Date(state.examDate);
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }, [state.examDate]);

  return (
    <ProgressContext.Provider value={{
      state,
      completeCurrentTopic,
      completeTopic,
      toggleTopicCompletion,
      setCurrentTopic,
      toggleSidebar,
      setSidebarWidth,
      getProgress,
      // Highlight functions
      addHighlight,
      removeHighlight,
      updateHighlight,
      getTopicHighlights,
      // Bookmark functions
      addBookmark,
      removeBookmark,
      getBookmarks,
      // Study notes functions
      addStudyNote,
      updateStudyNote,
      removeStudyNote,
      getStudyNotes,
      exportNotesAsPDF,
      // Difficulty assessment functions
      setTopicDifficulty,
      getTopicDifficulty,
      getTopicsByDifficulty,
      // Exam date functions
      setExamDate,
      getExamDate,
      getDaysUntilExam,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};