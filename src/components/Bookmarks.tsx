import React from 'react';
import { Bookmark as BookmarkIcon, Trash2, ExternalLink, X } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useParams, useNavigate } from 'react-router-dom';
import { getTopicById } from '../data/topicStructure';

interface BookmarksProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Bookmarks: React.FC<BookmarksProps> = ({ isOpen, onToggle }) => {
  const { addBookmark, removeBookmark, getBookmarks } = useProgress();
  const { id: currentTopicId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const bookmarks = getBookmarks();
  const currentTopic = currentTopicId ? getTopicById(currentTopicId) : null;
  const isCurrentTopicBookmarked = currentTopic ? bookmarks.some(b => b.topicId === currentTopic.id) : false;

  const handleToggleBookmark = () => {
    if (!currentTopic) return;

    if (isCurrentTopicBookmarked) {
      // Remove bookmark
      const bookmark = bookmarks.find(b => b.topicId === currentTopic.id);
      if (bookmark) {
        removeBookmark(bookmark.id);
      }
    } else {
      // Add bookmark
      const bookmark = {
        topicId: currentTopic.id,
        topicTitle: currentTopic.title,
        sectionTitle: currentTopic.section,
      };
      addBookmark(bookmark);
    }
  };

  const handleBookmarkClick = (topicId: string) => {
    navigate(`/topic/${topicId}`);
    onToggle(); // Close bookmarks panel
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-56 right-4 z-40 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors"
        title="Bookmarks"
      >
        <BookmarkIcon className="w-5 h-5" />
        {bookmarks.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {bookmarks.length}
          </span>
        )}
      </button>

      {/* Bookmarks Panel */}
      {isOpen && (
        <div className="fixed right-4 top-48 w-80 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <BookmarkIcon className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Bookmarks</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({bookmarks.length})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {currentTopic && (
                <button
                  onClick={handleToggleBookmark}
                  className={`p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors ${
                    isCurrentTopicBookmarked 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  title={isCurrentTopicBookmarked ? "Remove bookmark" : "Bookmark this topic"}
                >
                  <BookmarkIcon className={`w-4 h-4 ${isCurrentTopicBookmarked ? 'fill-current' : ''}`} />
                </button>
              )}
              <button
                onClick={onToggle}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-500 dark:text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bookmarks List */}
          <div className="overflow-y-auto max-h-72">
            {bookmarks.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                <BookmarkIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No bookmarks yet</p>
                {currentTopic && (
                  <button
                    onClick={handleToggleBookmark}
                    className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Bookmark this topic
                  </button>
                )}
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {bookmarks.map((bookmark) => (
                  <div key={bookmark.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 cursor-pointer" onClick={() => handleBookmarkClick(bookmark.topicId)}>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
                            {bookmark.topicTitle}
                          </h4>
                          <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {bookmark.sectionTitle}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {formatDate(bookmark.createdAt)}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeBookmark(bookmark.id);
                        }}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-red-500 ml-2"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Bookmarks;
