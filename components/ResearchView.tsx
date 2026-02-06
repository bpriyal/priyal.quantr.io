import React from 'react';
import { RESEARCH_ITEMS, USER_PROFILE } from '../constants';
import { ExternalLink, Printer, Copy } from 'lucide-react';

export const ResearchView = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-white dark:bg-[#1e1e1e] min-h-full">
        
        {/* Header Section */}
        <div className="bg-[#004d40] text-white p-6 rounded-t-lg shadow-md mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">{USER_PROFILE.name}</h1>
                    <div className="flex items-center gap-2 mt-2 text-sm opacity-90">
                        <div className="w-6 h-6 rounded-full bg-[#a6ce39] text-black flex items-center justify-center font-bold text-xs">iD</div>
                        <span>https://orcid.org/0000-000X-XXXX-XXXX</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="text-white/80 hover:text-white"><Copy size={18} /></button>
                    <button className="text-white/80 hover:text-white"><Printer size={18} /></button>
                </div>
            </div>
        </div>

        {/* Works Section */}
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2 px-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Works ({RESEARCH_ITEMS.length})</h2>
                <button className="text-sm text-blue-700 dark:text-blue-400 hover:underline">Sort</button>
            </div>
            
            <div className="bg-white dark:bg-[#262626] border border-gray-200 dark:border-gray-700 rounded shadow-sm">
                <div className="bg-[#5c8a00] text-white px-4 py-2 text-sm font-medium rounded-t flex justify-between items-center">
                    <span>Publications & Preprints</span>
                    <span className="text-xs opacity-80">Collapse all</span>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {RESEARCH_ITEMS.map(item => (
                        <div key={item.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-base font-bold text-gray-900 dark:text-white pr-4">
                                    {item.title}
                                </h3>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 text-xs shrink-0 whitespace-nowrap hover:underline">
                                        Show detail
                                    </a>
                                )}
                            </div>
                            
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {item.date} | {item.type}
                                {item.doi && <div className="mt-1 font-mono text-xs text-gray-500">DOI: <a href={`https://doi.org/${item.doi}`} className="hover:underline">{item.doi}</a></div>}
                            </div>

                            <div className="text-sm text-gray-500 dark:text-gray-500">
                                CONTRIBUTORS: {item.contributors.join(', ')}
                            </div>
                            
                            {item.journalOrConference && (
                                <div className="mt-2 text-sm italic text-gray-700 dark:text-gray-300">
                                    Source: {item.journalOrConference}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
            Record last modified on {new Date().toLocaleDateString()}
        </div>
    </div>
  );
};