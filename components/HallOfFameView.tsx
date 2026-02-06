import React from 'react';
import { HALL_OF_FAME } from '../constants';
import { MapPin, Calendar, Award } from 'lucide-react';

export const HallOfFameView = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="mb-12 text-center md:text-left">
         <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3">Hall of Fame</h1>
         <p className="text-lg text-gray-500 dark:text-gray-400">Adventures, service, and accolades beyond the terminal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Central Line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

        {HALL_OF_FAME.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right md:pr-12' : 'md:items-start md:pl-12 md:translate-y-12'}`}>
                
                <div className="relative group w-full md:w-auto">
                    {/* Timeline Dot */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-white dark:bg-[#262626] border-4 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 transition-colors z-10 
                        ${index % 2 === 0 ? '-right-[57px]' : '-left-[57px]'}`}></div>
                    
                    <div className="bg-white dark:bg-[#262626] p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <span className={`inline-block px-2 py-1 text-xs rounded border mb-3
                            ${item.category === 'Award' ? 'bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800' : 
                              item.category === 'Leadership' ? 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800' :
                              item.category === 'Arts' ? 'bg-pink-50 text-pink-700 border-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800' :
                              'bg-gray-50 text-gray-600 border-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'}
                        `}>
                            {item.category}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{item.title}</h3>
                        
                        <div className={`flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                             <Award size={14} className="mr-1.5 shrink-0" />
                             {item.organization}
                        </div>

                        {item.description && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                                {item.description}
                            </p>
                        )}

                        <div className={`flex items-center text-xs text-gray-400 font-mono gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                             <span className="flex items-center"><Calendar size={12} className="mr-1"/> {item.date}</span>
                             {item.location && <span className="flex items-center"><MapPin size={12} className="mr-1"/> {item.location}</span>}
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};