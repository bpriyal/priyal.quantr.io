import React, { useState } from 'react';
import { PROJECTS, USER_PROFILE } from '../constants';
import { Github, ExternalLink, Calendar, LayoutGrid, LayoutList } from 'lucide-react';

export const ProjectsView = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
        
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Projects</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Engineering systems, algorithms, and models.</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* View Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                >
                    <LayoutList size={18} />
                </button>
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-600 shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                >
                    <LayoutGrid size={18} />
                </button>
            </div>

            <a 
                href={USER_PROFILE.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center px-4 py-2 bg-[#202124] dark:bg-white dark:text-black text-white rounded-full hover:opacity-90 transition-opacity shadow-sm text-sm font-medium"
            >
                <Github className="w-4 h-4 mr-2" />
                <span>bpriyal</span>
            </a>
        </div>
      </div>

      {/* Tiles Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {PROJECTS.map((project) => (
            <div 
                key={project.id} 
                className={`
                    group relative bg-white dark:bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 
                    hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 overflow-hidden flex flex-col
                    ${viewMode === 'list' ? 'md:p-8 p-6' : 'p-6'}
                `}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, viewMode === 'grid' ? 2 : 5).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded border border-gray-200 dark:border-gray-700">
                                {tag}
                            </span>
                        ))}
                        {viewMode === 'grid' && project.tags.length > 2 && (
                             <span className="px-2 py-1 text-gray-400 text-xs">+</span>
                        )}
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                        {project.dateRange}
                    </span>
                </div>

                <h2 className={`${viewMode === 'list' ? 'text-3xl' : 'text-xl'} font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {project.title}
                </h2>
                
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-6 ${viewMode === 'grid' ? 'text-sm line-clamp-4' : 'text-lg max-w-4xl'}`}>
                    {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        View Repository <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};