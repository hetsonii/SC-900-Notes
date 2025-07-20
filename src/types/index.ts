export interface Topic {
  id: string;
  title: string;
  description: string;
  content: React.ComponentType;
  section: string;
  completed?: boolean;
  estimatedTime?: number;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  percentage: string;
  topics: Topic[];
  color: string;
}

export interface Highlight {
  id: string;
  topicId: string;
  text: string;
  color: 'yellow' | 'green' | 'blue' | 'pink' | 'purple';
  annotation?: string;
  startOffset: number;
  endOffset: number;
  containerSelector: string;
  createdAt: number;
}

export interface Bookmark {
  id: string;
  topicId: string;
  topicTitle: string;
  sectionTitle: string;
  note?: string;
  createdAt: number;
}

export interface StudyNote {
  id: string;
  topicId: string; // Always associated with a topic
  topicTitle: string; // Store topic title for easy reference
  title: string;
  content: string; // Rich text HTML
  createdAt: number;
  updatedAt: number;
  tags: string[];
  isPinned?: boolean; // Track if note is currently pinned as floating window
  pinnedPosition?: { x: number; y: number }; // Position of pinned window
}

export interface ProgressState {
  completedTopics: Set<string>;
  currentTopic: string | null;
  sidebarCollapsed: boolean;
  sidebarWidth: number;
  highlights: Highlight[];
  bookmarks: Bookmark[];
  studyNotes: StudyNote[];
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface ProgressContextType {
  state: ProgressState;
  completeCurrentTopic: () => void;
  completeTopic: (topicId: string) => void;
  toggleTopicCompletion: (topicId: string) => void;
  setCurrentTopic: (topicId: string) => void;
  toggleSidebar: () => void;
  setSidebarWidth: (width: number) => void;
  getProgress: () => { completed: number; total: number; percentage: number };
  // Highlight functions
  addHighlight: (highlight: Omit<Highlight, 'id' | 'createdAt'>) => void;
  removeHighlight: (highlightId: string) => void;
  updateHighlight: (highlightId: string, updates: Partial<Highlight>) => void;
  getTopicHighlights: (topicId: string) => Highlight[];
  // Bookmark functions
  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => void;
  removeBookmark: (bookmarkId: string) => void;
  getBookmarks: () => Bookmark[];
  // Study notes functions
  addStudyNote: (note: Omit<StudyNote, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateStudyNote: (noteId: string, updates: Partial<StudyNote>) => void;
  removeStudyNote: (noteId: string) => void;
  getStudyNotes: (topicId?: string) => StudyNote[];
  exportNotesAsPDF: () => Promise<void>;
}