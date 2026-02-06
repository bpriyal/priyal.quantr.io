import React from 'react';
import { PlayCircle } from 'lucide-react';

export const MusicCultureView = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
       <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Music & Culture</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Video Placeholder 1 */}
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all" />
                <span className="absolute bottom-4 left-4 text-white font-medium">National Choir Participation</span>
            </div>
            
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Vedic Narratives & Semiotics</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Researching the underlying mathematical structures in Sanskrit prosody and the semiotics of ancient Vedic rituals. 
                    Exploring how recursive patterns in language influenced early computational thought in India.
                </p>
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
                    <strong>Current Focus:</strong> The "Chandas Shastra" (Pingala) and its relation to binary combinatorics.
                </div>
            </div>
       </div>

       {/* Additional Text Content */}
       <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold">Inner Engineering</h3>
            <p>
                Exploring the mechanics of human consciousness through the lens of traditional yoga and modern neuroscience.
            </p>
       </div>
    </div>
  );
};