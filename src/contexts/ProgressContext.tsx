import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ProgressContextType, ProgressState } from '../types';

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
  | { type: 'SET_CURRENT_TOPIC'; payload: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_SIDEBAR_WIDTH'; payload: number }
  | { type: 'LOAD_STATE'; payload: Partial<ProgressState> };

const initialState: ProgressState = {
  completedTopics: new Set(),
  currentTopic: null,
  sidebarCollapsed: false,
  sidebarWidth: 320,
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
        completedTopics: new Set(action.payload.completedTopics || [])
      };
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

  useEffect(() => {
    const saved = localStorage.getItem('sc900-progress');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ 
          type: 'LOAD_STATE', 
          payload: {
            ...parsedState,
            completedTopics: parsedState.completedTopics || []
          }
        });
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      ...state,
      completedTopics: Array.from(state.completedTopics)
    };
    localStorage.setItem('sc900-progress', JSON.stringify(stateToSave));
  }, [state]);

  const completeCurrentTopic = () => {
    dispatch({ type: 'COMPLETE_CURRENT_TOPIC' });
  };

  const setCurrentTopic = (topicId: string) => {
    dispatch({ type: 'SET_CURRENT_TOPIC', payload: topicId });
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const setSidebarWidth = (width: number) => {
    dispatch({ type: 'SET_SIDEBAR_WIDTH', payload: width });
  };

  const getProgress = () => {
    const completed = state.completedTopics.size;
    const percentage = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;
    return { completed, total: totalTopics, percentage };
  };

  return (
    <ProgressContext.Provider value={{
      state,
      completeCurrentTopic,
      setCurrentTopic,
      toggleSidebar,
      setSidebarWidth,
      getProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};