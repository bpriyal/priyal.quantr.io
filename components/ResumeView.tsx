import React, { useEffect, useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { PROJECTS } from '../constants';

// This component simulates a LaTeX document structure using HTML/CSS
// and provides a side-panel for timeline context as you scroll.

export const ResumeView = () => {
  const [activeSection, setActiveSection] = useState('intro');

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'education', 'experience', 'projects', 'skills', 'awards'];
      for (const section of sections) {
        const el = document.getElementById(`resume-${section}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    const container = document.getElementById('resume-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-full relative">
      
      {/* LEFT: The "Paper" (Resume) */}
      <div id="resume-container" className="flex-1 overflow-y-auto bg-gray-200 dark:bg-[#121212] p-4 md:p-8 flex justify-center">
        <div className="bg-white text-black w-full max-w-[850px] min-h-[1100px] shadow-2xl p-[50px] mb-10 font-latex text-[15px] leading-relaxed relative selection:bg-blue-100">
            
            {/* Download Button overlay */}
            <a href="/resume.pdf" className="absolute top-8 right-8 text-gray-400 hover:text-black print:hidden">
                <Download size={20} />
            </a>

            {/* Header */}
            <div id="resume-intro" className="text-center border-b-2 border-black pb-4 mb-6">
                <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">Priyal Bhagwanani</h1>
                <div className="text-sm flex justify-center gap-4">
                    <span>contact@priyal.dev</span>
                    <span>•</span>
                    <span>github.com/bpriyal</span>
                    <span>•</span>
                    <span>linkedin.com/in/bpriyal</span>
                </div>
            </div>

            {/* Education */}
            <section id="resume-education" className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Education</h2>
                <div className="mb-3">
                    <div className="flex justify-between font-bold">
                        <span>LNM Institute of Information Technology</span>
                        <span>Jaipur, India</span>
                    </div>
                    <div className="flex justify-between italic">
                        <span>Bachelor of Technology in Computer Science</span>
                        <span>2016 - 2020</span>
                    </div>
                    <ul className="list-disc ml-5 mt-1 text-sm">
                         <li>GPA: 8.5/10.0</li>
                         <li>Relevant Coursework: Stochastic Processes, Distributed Systems, Game Theory.</li>
                         <li><strong>Teaching Assistant:</strong> Lab TA for Prof Philip Miller (CMU) - Distributed Systems.</li>
                    </ul>
                </div>
                <div className="mb-2">
                     <div className="flex justify-between font-bold text-sm">
                        <span>CBSE Board</span>
                        <span>India</span>
                    </div>
                    <div className="flex justify-between italic text-sm">
                        <span>Secondary & Senior Secondary</span>
                        <span>2014 - 2016</span>
                    </div>
                    <ul className="list-disc ml-5 mt-1 text-sm">
                         <li>Class 12 (2016): <strong>94.3%</strong></li>
                         <li>Class 10 (2014): <strong>10/10 CGPA</strong> - Merit Scholar (Top 10)</li>
                    </ul>
                </div>
            </section>

             {/* Experience */}
             <section id="resume-experience" className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Experience</h2>
                
                <div className="mb-4">
                    <div className="flex justify-between font-bold">
                        <span>WorldQuant</span>
                        <span>Mumbai, India</span>
                    </div>
                    <div className="flex justify-between italic">
                        <span>Quantitative Researcher</span>
                        <span>2022 - Present</span>
                    </div>
                    <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                         <li>Developed alpha factors using fundamental and alternative datasets achieving Sharpe > 2.0.</li>
                         <li>Optimized backtesting engine performance by 40% using vectorization techniques in Python/Pandas.</li>
                         <li>CML/BDA Group Coordinator.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between font-bold">
                        <span>Admission Counselling Cell, LNM IIT</span>
                        <span>Jaipur, India</span>
                    </div>
                    <div className="flex justify-between italic">
                        <span>Admission Counselling Head</span>
                        <span>2019</span>
                    </div>
                    <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                         <li>Managed nationwide counseling logistics and data processing for incoming undergraduates.</li>
                         <li>Previously Associate Coordinator (2018).</li>
                    </ul>
                </div>
            </section>

             {/* Projects (Embedded LaTeX Style) */}
             <section id="resume-projects" className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Select Projects</h2>
                {PROJECTS.slice(0, 3).map(p => (
                    <div key={p.id} className="mb-3">
                         <div className="flex justify-between font-bold">
                            <span>{p.title}</span>
                            <span className="font-normal text-xs bg-gray-100 px-1 rounded">{p.tags.join(', ')}</span>
                        </div>
                        <p className="text-sm mt-1">{p.description}</p>
                    </div>
                ))}
             </section>

             {/* Skills */}
             <section id="resume-skills" className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Technical Skills</h2>
                <div className="text-sm">
                    <p className="mb-1"><span className="font-bold">Languages:</span> C++20, Python, Rust, SQL, JavaScript (React).</p>
                    <p className="mb-1"><span className="font-bold">Technologies:</span> Linux, Docker, AWS, S2 Geometry, Pandas, NumPy, Torch.</p>
                </div>
             </section>

              {/* Awards */}
              <section id="resume-awards" className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3">Honors & Awards</h2>
                <ul className="list-disc ml-5 text-sm space-y-1">
                    <li><strong>All India Rank 15</strong>, National Creativity and Aptitude Test (NCAT) (2019)</li>
                    <li><strong>All India Rank 11</strong>, CEPT Aptitude Test (2016)</li>
                    <li><strong>All India Rank 4</strong>, National Group Singing Competition (2013)</li>
                    <li>Best Research Poster, ACM Algorithmic Game Theory, IIT Gandhinagar (2019)</li>
                    <li>Yogkala Chitrakala Illustration Gold Medallist, Ministry Of External Affairs (2014)</li>
                    <li>Voice Artist for Cartoon Network (2007) & All India Radio Host (2010)</li>
                </ul>
             </section>
        </div>
      </div>

      {/* RIGHT: Context Timeline (Only visible on large screens) */}
      <div className="w-80 hidden xl:block bg-white dark:bg-[#1e1e1e] border-l border-gray-200 dark:border-gray-800 p-6 overflow-y-auto">
         <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Timeline Journey</h3>
         
         <div className="space-y-8 border-l border-gray-200 dark:border-gray-700 ml-2">
            
            {/* Intro */}
            <div className={`pl-6 relative transition-all duration-500 ${activeSection === 'intro' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-colors ${activeSection === 'intro' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className="text-sm font-bold dark:text-white">Profile</div>
                <p className="text-xs text-gray-500 mt-1">Quant Researcher & Engineer.</p>
            </div>

            {/* Education */}
            <div className={`pl-6 relative transition-all duration-500 ${activeSection === 'education' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-colors ${activeSection === 'education' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className="text-sm font-bold dark:text-white">The Inputs</div>
                <p className="text-xs text-gray-500 mt-1">"The determinant shifts to your inputs..."</p>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    10/10 CGPA (2014)<br/>
                    94.3% (2016)<br/>
                    Rank 11 CEPT
                </div>
            </div>

            {/* Experience */}
            <div className={`pl-6 relative transition-all duration-500 ${activeSection === 'experience' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-colors ${activeSection === 'experience' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                <div className="text-sm font-bold dark:text-white">Professional & Leadership</div>
                <div className="mt-2 space-y-2">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs border border-green-100 dark:border-green-800">
                        <strong>WorldQuant</strong><br/>Alpha Generation
                    </div>
                     <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs">
                        <strong>Leadership</strong><br/>Counselling Head, Senator, Coordinator
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className={`pl-6 relative transition-all duration-500 ${activeSection === 'projects' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-colors ${activeSection === 'projects' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                <div className="text-sm font-bold dark:text-white">Engineering</div>
                <p className="text-xs text-gray-500 mt-1">Systems that scale.</p>
            </div>

             {/* Awards */}
             <div className={`pl-6 relative transition-all duration-500 ${activeSection === 'awards' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-colors ${activeSection === 'awards' ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
                <div className="text-sm font-bold dark:text-white">Hall of Fame</div>
                <p className="text-xs text-gray-500 mt-1">NCAT Rank 15, National Singing Rank 4.</p>
            </div>
         </div>
      </div>

    </div>
  );
};