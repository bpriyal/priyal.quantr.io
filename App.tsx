import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { HomeView } from './components/HomeView';
import { ProjectsView } from './components/ProjectsView';
import { ArticlesView } from './components/ArticlesView';
import { HallOfFameView } from './components/HallOfFameView';
import { MusicCultureView } from './components/MusicCultureView';
import { ResearchView } from './components/ResearchView';
import { NowView } from './components/NowView';
import { SetupView } from './components/SetupView';
import { ResumeView } from './components/ResumeView';
import { USER_PROFILE } from './constants';

// Layout Wrapper to handle conditional Sidebar rendering
const LayoutWrapper = ({ children, isDark, toggleDark }: { children?: React.ReactNode, isDark: boolean, toggleDark: () => void }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`flex h-screen w-full overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'dark bg-google-darkbg text-gray-200' : 'bg-[#f8f9fa] text-[#202124]'}`}>
      {/* Sidebar is hidden on Home page */}
      {!isHome && (
        <aside className="w-64 flex-shrink-0 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-google-darksurface z-20 hidden md:block transition-all duration-300">
           <Sidebar profile={USER_PROFILE} />
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <TopBar isHome={isHome} isDark={isDark} toggleDark={toggleDark} />
        <main className="flex-1 overflow-y-auto scroll-smooth bg-white/50 dark:bg-google-darkbg/50">
          {children}
        </main>
      </div>
    </div>
  );
};

const App = () => {
  // Dark Mode Logic
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    setIsDark(prev => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  return (
    <Router>
      <LayoutWrapper isDark={isDark} toggleDark={toggleDark}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/articles/*" element={<ArticlesView />} />
          <Route path="/hall-of-fame" element={<HallOfFameView />} />
          <Route path="/culture" element={<MusicCultureView />} />
          <Route path="/research" element={<ResearchView />} />
          <Route path="/now" element={<NowView />} />
          <Route path="/setup" element={<SetupView />} />
          <Route path="/resume" element={<ResumeView />} />
          
          {/* Fallback */}
          <Route path="*" element={<div className="p-10">Page not found</div>} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;