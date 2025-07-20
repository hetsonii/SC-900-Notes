import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import PinnedStudyNote from './PinnedStudyNote';
import { useNavigate } from 'react-router-dom';

const PinnedStudyNotes: React.FC = () => {
  const { getStudyNotes, updateStudyNote } = useProgress();
  const navigate = useNavigate();
  
  // Get all pinned notes across all topics
  const allNotes = getStudyNotes();
  const pinnedNotes = allNotes.filter(note => note.isPinned);

  const handleUnpin = (noteId: string) => {
    const note = pinnedNotes.find(n => n.id === noteId);
    if (note) {
      updateStudyNote(noteId, {
        ...note,
        isPinned: false,
        pinnedPosition: undefined
      });
    }
  };

  const handlePositionChange = (noteId: string, position: { x: number; y: number }) => {
    const note = pinnedNotes.find(n => n.id === noteId);
    if (note) {
      updateStudyNote(noteId, {
        ...note,
        pinnedPosition: position
      });
    }
  };

  const handleNavigateToTopic = (topicId: string) => {
    navigate(`/topic/${topicId}`);
  };

  if (pinnedNotes.length === 0) {
    return null;
  }

  return (
    <>
      {pinnedNotes.map(note => (
        <PinnedStudyNote
          key={note.id}
          note={note}
          onUnpin={handleUnpin}
          onPositionChange={handlePositionChange}
          onNavigateToTopic={handleNavigateToTopic}
        />
      ))}
    </>
  );
};

export default PinnedStudyNotes;
