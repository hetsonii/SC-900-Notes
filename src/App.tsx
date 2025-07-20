import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { getAllTopics } from './data/topicStructure';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';

function App() {
  const totalTopics = getAllTopics().length;

  return (
    <ThemeProvider>
      <ProgressProvider totalTopics={totalTopics}>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="topic/:id" element={<TopicPage />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;