import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ARTICLE_TREE } from '../constants';
import { ArticleNode } from '../types';
import { ChevronRight, ChevronDown, FileText, Folder, BookOpen } from 'lucide-react';
// Note: In a real app we'd use react-markdown and rehype-katex. 
// For this demo, we simulate the renderer to fit file constraints.

// Recursive Tree Component
const FileTree = ({ nodes, level = 0, onSelect }: { nodes: ArticleNode[], level?: number, onSelect: (node: ArticleNode) => void }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ul className={`space-y-1 ${level > 0 ? 'ml-4 border-l border-gray-200 pl-2' : ''}`}>
      {nodes.map(node => (
        <li key={node.id}>
          <div 
            onClick={(e) => {
                if (node.type === 'folder') toggle(e, node.id);
                else onSelect(node);
            }}
            className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm text-gray-700 select-none"
          >
            <span className="mr-1.5 text-gray-400">
                {node.type === 'folder' ? (
                    expanded[node.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                ) : <div className="w-3.5" />}
            </span>
            <span className="mr-2 text-blue-500">
                {node.type === 'folder' ? <Folder size={14} /> : <FileText size={14} />}
            </span>
            <span className={node.type === 'file' ? 'font-normal' : 'font-medium'}>{node.title}</span>
          </div>
          
          {node.type === 'folder' && expanded[node.id] && node.children && (
            <FileTree nodes={node.children} level={level + 1} onSelect={onSelect} />
          )}
        </li>
      ))}
    </ul>
  );
};

// Simulated Markdown + Math Renderer
const MarkdownViewer = ({ content }: { content: string }) => {
  // Simple replacement for demo purposes. 
  // In production: <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />
  
  // Quick hack to show MathJax is "supported" in logic
  const renderContent = () => {
    const lines = content.split('\n').map((line, idx) => {
      if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-serif font-bold mb-4">{line.replace('# ', '')}</h1>;
      if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-serif font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
      if (line.startsWith('$$')) return (
        <div key={idx} className="my-6 p-4 bg-gray-50 border border-gray-200 rounded text-center font-mono text-lg">
            {line.replace(/\$\$/g, '')}
        </div>
      );
      return <p key={idx} className="mb-4 text-gray-800 leading-7">{line}</p>;
    });
    return lines;
  };

  return (
    <div className="max-w-3xl mx-auto">
        <article className="markdown-body">
            {renderContent()}
        </article>

        {/* Comment Placeholder */}
        <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Discussion</h3>
            <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Drop a comment or observation..."
                rows={3}
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                Post Comment
            </button>
        </div>
    </div>
  );
};

export const ArticlesView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeContent, setActiveContent] = useState<ArticleNode | null>(null);

  // In a real app, we'd find the node based on location.pathname
  // For demo, we just track local state or defaults

  const handleSelect = (node: ArticleNode) => {
      if (node.path) {
          // In real app: navigate(node.path);
          setActiveContent(node);
          window.scrollTo(0,0);
      }
  };

  return (
    <div className="flex h-full">
      {/* Internal Sidebar for Articles Tree */}
      <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-gray-50/50 p-4 overflow-y-auto hidden lg:block">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Index</h3>
        <FileTree nodes={ARTICLE_TREE} onSelect={handleSelect} />
      </div>

      {/* Article Content */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white">
        {activeContent ? (
            <MarkdownViewer content={activeContent.content || ""} />
        ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <BookOpen size={48} className="mb-4 opacity-20" />
                <p>Select an article from the index to begin reading.</p>
                <div className="mt-8 grid grid-cols-1 gap-4 w-full max-w-md lg:hidden">
                    <h3 className="text-center text-sm font-bold text-gray-900">Browse Topics</h3>
                     {/* Mobile friendly tree fallback */}
                     <FileTree nodes={ARTICLE_TREE} onSelect={handleSelect} />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};