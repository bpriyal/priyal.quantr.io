import React from 'react';
import { Link } from 'react-router-dom';
import { USER_PROFILE } from '../constants';
import { ArrowRight, FolderGit2, BookOpen, Music, Trophy } from 'lucide-react';

export const HomeView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-4 md:px-8 py-12">
      
      {/* Central Content Block */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        {/* Left Side of Block: Image */}
        <div className="w-full md:w-1/3 h-64 md:h-auto bg-gray-100 relative overflow-hidden group">
            <img 
              src={USER_PROFILE.avatarUrl} 
              alt={USER_PROFILE.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right Side of Block: Markdown/Info */}
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                {USER_PROFILE.name}
            </h1>
            <p className="text-lg text-blue-600 font-medium mb-6">{USER_PROFILE.role}</p>
            
            {/* Simulating Markdown rendering of short bio */}
            <div className="prose prose-slate text-gray-600 mb-8 leading-relaxed">
                <p>{USER_PROFILE.shortBio}</p>
                <p className="mt-4">
                    Welcome to my digital garden. This space is structured to reflect my mental models: 
                    a rigorous tree of knowledge for quantitative research, a gallery for engineering projects, 
                    and a timeline of experiences that ground me.
                </p>
            </div>

            {/* Quick Links Structure (The "Left Sidebar" data displayed in structure) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/articles" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                    <BookOpen className="w-5 h-5 text-gray-500 group-hover:text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">Articles & Notes</span>
                </Link>
                <Link to="/projects" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                    <FolderGit2 className="w-5 h-5 text-gray-500 group-hover:text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">Projects</span>
                </Link>
                <Link to="/hall-of-fame" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                    <Trophy className="w-5 h-5 text-gray-500 group-hover:text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">Hall of Fame</span>
                </Link>
                <Link to="/culture" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                    <Music className="w-5 h-5 text-gray-500 group-hover:text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">Music & Culture</span>
                </Link>
            </div>

            <div className="mt-8 flex gap-4">
                 <a href={USER_PROFILE.github} className="text-sm font-semibold text-gray-900 hover:text-blue-600 flex items-center">
                    GitHub <ArrowRight size={14} className="ml-1" />
                 </a>
                 <a href={USER_PROFILE.linkedin} className="text-sm font-semibold text-gray-900 hover:text-blue-600 flex items-center">
                    LinkedIn <ArrowRight size={14} className="ml-1" />
                 </a>
            </div>
        </div>
      </div>
    </div>
  );
};