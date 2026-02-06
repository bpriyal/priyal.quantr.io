import React from 'react';
import { Clock } from 'lucide-react';

export const NowView = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
        <div className="flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Clock className="w-6 h-6 text-gray-400 mr-3" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Now</h1>
        </div>

        <div className="prose prose-lg dark:prose-invert">
            <p className="lead">
                What I'm currently focused on, inspired by the <a href="https://nownownow.com/about" target="_blank" className="text-blue-600 hover:underline">Now Page movement</a>.
            </p>
            
            <h3>Building</h3>
            <ul>
                <li>Developing high-frequency trading backtesting engines in Rust.</li>
                <li>Refining the <strong>Geospatial Context Adapter</strong> for open-source release.</li>
            </ul>

            <h3>Reading & Research</h3>
            <ul>
                <li>Deep diving into <em>"Stochastic Calculus for Finance II"</em> by Shreve.</li>
                <li>Investigating the intersection of Vedic prosody (Chandas) and binary counting systems.</li>
            </ul>

            <h3>Life</h3>
            <ul>
                <li>Training for a half-marathon.</li>
                <li>Experimenting with fermentation: Sourdough and Kimchi.</li>
            </ul>

            <div className="mt-12 pt-4 text-sm text-gray-400 italic">
                Last updated: January 2024 from Mumbai, India.
            </div>
        </div>
    </div>
  );
};