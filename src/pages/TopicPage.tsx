import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Highlighter as HighlighterIcon } from 'lucide-react';
import { getTopicById, getNextTopic, getPreviousTopic } from '../data/topicStructure';
import { useProgress } from '../contexts/ProgressContext';
import Bookmarks from '../components/Bookmarks';
import DifficultyAssessment from '../components/DifficultyAssessment';
import clsx from 'clsx';

const TopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, setCurrentTopic, toggleTopicCompletion } = useProgress();
  const { completedTopics } = state;
  const hasScrolled = useRef(false);

  // State for feature panels
  const [isHighlighterActive, setIsHighlighterActive] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  const topic = id ? getTopicById(id) : null;
  const nextTopic = id ? getNextTopic(id) : null;
  const previousTopic = id ? getPreviousTopic(id) : null;

  // Load and save highlights to localStorage
  const getStorageKey = (topicId: string) => `auto-highlights-${topicId}`;
  
  const loadHighlights = (topicId: string) => {
    try {
      const saved = localStorage.getItem(getStorageKey(topicId));
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading highlights:', error);
      return [];
    }
  };

  const saveHighlights = (topicId: string, highlights: any[]) => {
    try {
      localStorage.setItem(getStorageKey(topicId), JSON.stringify(highlights));
    } catch (error) {
      console.error('Error saving highlights:', error);
    }
  };

  const getTopicHighlights = (topicId: string) => {
    return loadHighlights(topicId);
  };

  const addTopicHighlight = (topicId: string, highlightData: any) => {
    const existing = loadHighlights(topicId);
    const newHighlight = {
      id: `highlight-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...highlightData,
      createdAt: Date.now()
    };
    const updated = [...existing, newHighlight];
    saveHighlights(topicId, updated);
    return newHighlight;
  };

  const removeTopicHighlight = (topicId: string, highlightId: string) => {
    const existing = loadHighlights(topicId);
    const updated = existing.filter((h: any) => h.id !== highlightId);
    saveHighlights(topicId, updated);
  };

  useEffect(() => {
    if (id) {
      setCurrentTopic(id);
      hasScrolled.current = false;
    }
  }, [id, setCurrentTopic]);

  // Restore highlights when topic loads
  useEffect(() => {
    if (!topic) return;
    
    const restoreHighlights = () => {
      // Clear any existing highlights first
      document.querySelectorAll('.auto-highlight').forEach(span => {
        const parent = span.parentNode;
        if (parent) {
          const textNode = document.createTextNode(span.textContent || '');
          parent.replaceChild(textNode, span);
          
          // Safely normalize
          try {
            if (parent && typeof parent.normalize === 'function') {
              parent.normalize();
            }
          } catch (error) {
            console.warn('Could not normalize during cleanup:', error);
          }
        }
      });

      // Get saved highlights for this topic
      const savedHighlights = getTopicHighlights(topic.id);
      
      console.log('Restoring highlights for topic:', topic.id, savedHighlights);
      
      // If no highlights saved, we're done
      if (savedHighlights.length === 0) {
        console.log('No highlights to restore');
        return;
      }

      // Apply each saved highlight
      savedHighlights.forEach((highlight: any) => {
        try {
          const topicContent = document.getElementById('topic-content');
          if (!topicContent) return;

          // Find text nodes that contain the highlighted text
          const walker = document.createTreeWalker(
            topicContent,
            NodeFilter.SHOW_TEXT,
            node => {
              // Skip nodes that are already inside highlights
              const parent = node.parentElement;
              return parent && !parent.closest('.auto-highlight') 
                ? NodeFilter.FILTER_ACCEPT 
                : NodeFilter.FILTER_REJECT;
            }
          );

          let textNode: Text | null = null;
          let found = false;
          
          while ((textNode = walker.nextNode() as Text) && !found) {
            const nodeText = textNode.textContent || '';
            const highlightIndex = nodeText.indexOf(highlight.text);
            
            if (highlightIndex !== -1) {
              // Split the text node and wrap the highlight
              const beforeText = nodeText.substring(0, highlightIndex);
              const highlightText = nodeText.substring(highlightIndex, highlightIndex + highlight.text.length);
              const afterText = nodeText.substring(highlightIndex + highlight.text.length);

              const parent = textNode.parentNode!;
              
              // Create highlight span
              const span = document.createElement('span');
              span.className = 'auto-highlight bg-yellow-300 dark:bg-yellow-600/50 rounded px-1';
              span.textContent = highlightText;
              span.setAttribute('data-highlight-id', highlight.id);

              // Insert new nodes
              if (beforeText) parent.insertBefore(document.createTextNode(beforeText), textNode);
              parent.insertBefore(span, textNode);
              if (afterText) parent.insertBefore(document.createTextNode(afterText), textNode);
              parent.removeChild(textNode);
              
              found = true; // Found and applied this highlight, move to next
            }
          }
        } catch (error) {
          console.error('Error restoring highlight:', error);
        }
      });
    };

    // Small delay to ensure DOM is ready
    setTimeout(restoreHighlights, 100);
  }, [topic]);

  // New automatic highlighting effect
  useEffect(() => {
    if (!isHighlighterActive) return;

    const handleTextSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      const selectedText = range.toString().trim();
      
      if (selectedText.length === 0) return;

      // Check if selection is within topic content
      const topicContent = document.getElementById('topic-content');
      if (!topicContent || !topicContent.contains(range.commonAncestorContainer)) return;

      // Check if clicking on already highlighted text to remove it
      const startContainer = range.startContainer;
      const element = startContainer.nodeType === Node.TEXT_NODE 
        ? startContainer.parentElement 
        : startContainer as Element;

      if (element && element.closest('.auto-highlight')) {
        // Remove highlight
        const highlightSpan = element.closest('.auto-highlight') as HTMLElement;
        if (highlightSpan && highlightSpan.parentNode && topic) {
          const highlightId = highlightSpan.getAttribute('data-highlight-id');
          const highlightText = highlightSpan.textContent || '';
          const parent = highlightSpan.parentNode;
          
          console.log('Removing highlight:', { highlightId, highlightText, topicId: topic.id });
          
          // Create text node and replace
          const textNode = document.createTextNode(highlightText);
          parent.replaceChild(textNode, highlightSpan);
          
          // Safely normalize only if parent still exists and has normalize method
          try {
            if (parent && typeof parent.normalize === 'function') {
              parent.normalize();
            }
          } catch (error) {
            console.warn('Could not normalize parent node:', error);
          }
          
          // Remove from localStorage
          if (highlightId) {
            removeTopicHighlight(topic.id, highlightId);
            
            // Verify removal by checking what's left in storage
            const remaining = getTopicHighlights(topic.id);
            console.log('Remaining highlights after removal:', remaining);
          }
        }
      } else if (topic) {
        // Add highlight
        try {
          const span = document.createElement('span');
          span.className = 'auto-highlight bg-yellow-300 dark:bg-yellow-600/50 rounded px-1';
          
          // Save to localStorage before applying
          const highlightData = {
            text: selectedText,
            topicId: topic.id
          };
          const savedHighlight = addTopicHighlight(topic.id, highlightData);
          span.setAttribute('data-highlight-id', savedHighlight.id);
          
          range.surroundContents(span);
        } catch (error) {
          // Fallback for complex selections
          console.log('Selection spans multiple elements, skipping highlight');
        }
      }

      // Clear selection
      selection.removeAllRanges();
    };

    // Add slight delay to allow for double-click and other interactions
    const handleMouseUp = () => {
      setTimeout(handleTextSelection, 100);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [isHighlighterActive]);

  // Separate effect for scrolling to prevent interference
  useEffect(() => {
    if (id && !hasScrolled.current) {
      hasScrolled.current = true;
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, [id]);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The requested topic could not be found.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const isCompleted = completedTopics.has(topic.id);
  const TopicContent = topic.content;

  const handleNext = () => {
    if (!isCompleted && topic) {
      toggleTopicCompletion(topic.id);
    }
    if (nextTopic) {
      navigate(`/topic/${nextTopic.id}`);
    }
  };

  const handlePrevious = () => {
    if (previousTopic) {
      navigate(`/topic/${previousTopic.id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Go home"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {topic.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1 mb-3">
                {topic.description}
              </p>
              
              {/* Difficulty Assessment */}
              <DifficultyAssessment topicId={topic.id} />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {topic.estimatedTime && (
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{topic.estimatedTime} min</span>
              </div>
            )}
            {isCompleted && (
              <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
            <button
              onClick={() => toggleTopicCompletion(topic.id)}
              className={clsx(
                "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium",
                isCompleted
                  ? "bg-gray-600 hover:bg-gray-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              )}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{isCompleted ? "Mark as Incomplete" : "Mark as Completed"}</span>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1">
          <div
            className="bg-blue-600 h-1 rounded-full transition-all duration-300"
            style={{
              width: `${((completedTopics.size + (isCompleted ? 0 : 1)) / 60) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div id="topic-content" className="p-8">
          <TopicContent />
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {previousTopic && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Previous</div>
                    <div className="font-medium">{previousTopic.title}</div>
                  </div>
                </button>
              )}
            </div>

            <div className="flex-1 flex justify-end">
              {nextTopic && (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  <div className="text-right">
                    <div className="text-xs text-blue-100">Next</div>
                    <div>{nextTopic.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              {!nextTopic && (
                <button
                  onClick={() => navigate('/')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Complete Study Guide
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Study Tools */}
      {topic && (
        <>
          <Bookmarks
            isOpen={isBookmarksOpen}
            onToggle={() => setIsBookmarksOpen(!isBookmarksOpen)}
          />
          
          {/* Simple Highlighter Toggle */}
          <div className="fixed top-72 right-4 z-40">
            <button
              onClick={() => setIsHighlighterActive(!isHighlighterActive)}
              className={`p-3 rounded-lg shadow-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                isHighlighterActive
                  ? 'bg-yellow-400 border-yellow-500 text-yellow-900 shadow-yellow-200'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              title={isHighlighterActive ? 'Click to disable highlighting mode' : 'Click to enable highlighting mode'}
            >
              <HighlighterIcon size={20} />
              {isHighlighterActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopicPage;