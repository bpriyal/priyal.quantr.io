import React from 'react';
import { Monitor, Cpu, Terminal } from 'lucide-react';

export const SetupView = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Workspace & Setup</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                    <Monitor className="w-5 h-5 mr-2" />
                    <h2 className="font-bold uppercase tracking-wider text-sm">Hardware</h2>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Workstation</span>
                        <span className="font-mono text-gray-500">Custom PC (Ryzen 9, RTX 4080)</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Laptop</span>
                        <span className="font-mono text-gray-500">MacBook Pro M2 Max</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Monitor</span>
                        <span className="font-mono text-gray-500">Dell UltraSharp 40" 5K2K</span>
                    </li>
                    <li className="flex justify-between pt-2">
                        <span>Audio</span>
                        <span className="font-mono text-gray-500">Sony WH-1000XM5</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center mb-4 text-purple-600 dark:text-purple-400">
                    <Terminal className="w-5 h-5 mr-2" />
                    <h2 className="font-bold uppercase tracking-wider text-sm">Software Environment</h2>
                </div>
                 <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>OS</span>
                        <span className="font-mono text-gray-500">Arch Linux / macOS</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Editor</span>
                        <span className="font-mono text-gray-500">Neovim (LazyVim)</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Terminal</span>
                        <span className="font-mono text-gray-500">Alacritty + Tmux</span>
                    </li>
                    <li className="flex justify-between pt-2">
                        <span>Shell</span>
                        <span className="font-mono text-gray-500">Fish Shell</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-bold mb-2 dark:text-white">Why this setup?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                My workflow is keyboard-centric and terminal-driven. I prioritize latency and screen real estate for viewing multiple data streams and code buffers simultaneously.
            </p>
        </div>
    </div>
  );
};