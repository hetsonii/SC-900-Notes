import React, { useEffect, useState } from 'react';
import { Highlighter as HighlighterIcon } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

interface SimpleHighlighterProps {
  topicId: string;
  isActive: boolean;
  onToggle: () => void;
}

const HIGHLIGHT_COLORS = {
  yellow: 'bg-yellow-200 dark:bg-yellow-400/30',
  green: 'bg-green-200 dark:bg-green-400/30',
  blue: 'bg-blue-200 dark:bg-blue-400/30',
  pink: 'bg-pink-200 dark:bg-pink-400/30',
  purple: 'bg-purple-200 dark:bg-purple-400/30',
} as const;

const SimpleHighlighter: React.FC<SimpleHighlighterProps> = ({ topicId, isActive, onToggle }) => {
  const { addHighlight, getTopicHighlights } = useProgress();
  const [selectedColor, setSelectedColor] = useState<keyof typeof HIGHLIGHT_COLORS>('yellow');
  const [currentSelection, setCurrentSelection] = useState<{
    text: string;
    range: Range;
  } | null>(null);
  const highlights = getTopicHighlights(topicId);

  // Apply highlights when component mounts or highlights change
  useEffect(() => {
    if (!isActive) return;

    const applyHighlights = () => {
      // Remove existing highlight spans
      document.querySelectorAll('.highlight-span').forEach(span => {
        const parent = span.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(span.textContent || ''), span);
          parent.normalize();
        }
      });

      // Apply new highlights
      highlights.forEach(highlight => {
        try {
          const container = document.querySelector(highlight.containerSelector);
          if (!container) return;

          const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT,
            null
          );

          let currentOffset = 0;
          let textNode: Text | null = null;
          
          while (textNode = walker.nextNode() as Text) {
            const nodeText = textNode.textContent || '';
            const nodeStart = currentOffset;
            const nodeEnd = currentOffset + nodeText.length;

            if (highlight.startOffset >= nodeStart && highlight.endOffset <= nodeEnd) {
              const start = highlight.startOffset - nodeStart;
              const end = highlight.endOffset - nodeStart;
              
              const beforeText = nodeText.substring(0, start);
              const highlightText = nodeText.substring(start, end);
              const afterText = nodeText.substring(end);

              const span = document.createElement('span');
              span.className = `highlight-span ${HIGHLIGHT_COLORS[highlight.color]} rounded px-1`;
              span.textContent = highlightText;
              span.title = highlight.annotation || 'Highlighted text';

              const parent = textNode.parentNode!;
              if (beforeText) parent.insertBefore(document.createTextNode(beforeText), textNode);
              parent.insertBefore(span, textNode);
              if (afterText) parent.insertBefore(document.createTextNode(afterText), textNode);
              parent.removeChild(textNode);
              break;
            }
            currentOffset = nodeEnd;
          }
        } catch (error) {
          console.error('Error applying highlight:', error);
        }
      });
    };

    setTimeout(applyHighlights, 100);
  }, [highlights, isActive, topicId]);

  // Handle text selection
  useEffect(() => {
    if (!isActive) return;

    const handleSelection = (event: MouseEvent) => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      const selectedText = range.toString().trim();
      
      if (selectedText.length > 0) {
        const target = event.target as Element;
        const topicContent = document.getElementById('topic-content');
        const isInTopicContent = topicContent && topicContent.contains(target);
        
        if (isInTopicContent) {
          setCurrentSelection({ 
            text: selectedText, 
            range: range.cloneRange()
          });
        }
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [isActive]);

  const handleHighlight = () => {
    if (!currentSelection) return;

    const range = currentSelection.range;
    const container = range.commonAncestorContainer;
    
    let containerElement = container.nodeType === Node.TEXT_NODE 
      ? container.parentElement 
      : container as Element;
    
    while (containerElement && !containerElement.id && !containerElement.className) {
      containerElement = containerElement.parentElement;
    }

    if (!containerElement) return;

    const beforeRange = document.createRange();
    beforeRange.setStart(containerElement, 0);
    beforeRange.setEnd(range.startContainer, range.startOffset);
    const startOffset = beforeRange.toString().length;
    const endOffset = startOffset + currentSelection.text.length;

    const highlight = {
      topicId,
      text: currentSelection.text,
      color: selectedColor,
      annotation: '',
      startOffset,
      endOffset,
      containerSelector: containerElement.id 
        ? `#${containerElement.id}`
        : `.${containerElement.className.split(' ')[0]}`,
    };

    addHighlight(highlight);
    setCurrentSelection(null);
    window.getSelection()?.removeAllRanges();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3">
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={onToggle}
            className={`p-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            title={isActive ? 'Stop highlighting' : 'Start highlighting'}
          >
            <HighlighterIcon size={18} />
          </button>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {isActive ? 'Highlighting' : 'Highlight'}
          </span>
        </div>

        {isActive && (
          <>
            <div className="flex gap-1 mb-3">
              {Object.entries(HIGHLIGHT_COLORS).map(([color, className]) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color as keyof typeof HIGHLIGHT_COLORS)}
                  className={`w-6 h-6 rounded ${className} border-2 ${
                    selectedColor === color ? 'border-gray-800 dark:border-white' : 'border-gray-300'
                  }`}
                  title={`Highlight with ${color}`}
                />
              ))}
            </div>

            {currentSelection && (
              <button
                onClick={handleHighlight}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Highlight Text
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SimpleHighlighter;
