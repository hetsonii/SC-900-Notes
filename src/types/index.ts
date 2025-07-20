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

export interface ProgressState {
  completedTopics: Set<string>;
  currentTopic: string | null;
  sidebarCollapsed: boolean;
  sidebarWidth: number;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface ProgressContextType {
  state: ProgressState;
  completeCurrentTopic: () => void;
  setCurrentTopic: (topicId: string) => void;
  toggleSidebar: () => void;
  setSidebarWidth: (width: number) => void;
  getProgress: () => { completed: number; total: number; percentage: number };
}