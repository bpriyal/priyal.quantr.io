import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserProfile } from '../types';
import { FolderGit2, BookOpen, Music, Trophy, FileText, FlaskConical, Clock, Monitor, Send } from 'lucide-react';

interface SidebarProps {
  profile: UserProfile;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // In a real app, send to Substack webhook here
      setTimeout(() => {
        window.open(profile.newsletter, '_blank');
      }, 1000);
    }
  };

  const navItems = [
    { name: 'Portfolio / Resume', path: '/resume', icon: FileText },
    { name: 'Articles & Notes', path: '/articles', icon: BookOpen },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Research', path: '/research', icon: FlaskConical },
    { name: 'Hall of Fame', path: '/hall-of-fame', icon: Trophy },
    { name: 'Music & Culture', path: '/culture', icon: Music },
    { name: 'Now', path: '/now', icon: Clock },
    { name: 'Setup', path: '/setup', icon: Monitor },
  ];

  return (
    <div className="flex flex-col h-full p-6 bg-white dark:bg-[#262626] border-r border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* User Header */}
      <div className="mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{profile.name}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
           {profile.role}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
            <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                    flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group mb-1
                    ${isActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}
                `}
            >
                <item.icon className="w-4 h-4 mr-3 opacity-70" />
                {item.name}
            </NavLink>
        ))}
      </nav>

      {/* Newsletter Signup */}
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
         <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Newsletter</h4>
         {!subscribed ? (
             <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                 <input 
                    type="email" 
                    placeholder="Enter email..." 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
                 />
                 <button 
                    type="submit" 
                    className="w-full flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors"
                 >
                    Subscribe <Send size={12} className="ml-2"/>
                 </button>
             </form>
         ) : (
             <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs rounded border border-green-100 dark:border-green-800">
                 Thanks! Redirecting to Substack...
             </div>
         )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-xs text-gray-400">
        <p>© 2024</p>
        <div className="flex gap-2">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300">IN</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300">GH</a>
        </div>
      </div>
    </div>
  );
};