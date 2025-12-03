import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Cpu, 
  BookOpen, 
  Users,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Maximize2,
  Minimize2,
  AlertTriangle,
  Egg,
  RefreshCw
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [systemCrashed, setSystemCrashed] = useState(false);

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'certifications', 'projects', 'skills', 'courses', 'organizations'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Easter Egg Trigger
  const triggerKernelPanic = () => {
    setSystemCrashed(true);
  };

  const navItems = [
    { id: 'about', label: 'ABOUT_ME', icon: User },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
    { id: 'education', label: 'EDUCATION', icon: GraduationCap },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: Award },
    { id: 'projects', label: 'PROJECTS', icon: Code },
    { id: 'skills', label: 'SKILLS', icon: Cpu },
    { id: 'courses', label: 'COURSES', icon: BookOpen },
    { id: 'organizations', label: 'ORG_UNITS', icon: Users },
  ];

  if (systemCrashed) {
    return (
      <div className="min-h-screen bg-black text-red-600 font-mono p-8 flex flex-col items-start justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[rgba(255,0,0,0.05)] pointer-events-none"></div>
        <div className="border-4 border-red-600 p-8 max-w-3xl w-full mx-auto shadow-[0_0_20px_rgba(220,38,38,0.5)] bg-black z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">SYSTEM HALTED</h1>
          <div className="space-y-2 text-sm md:text-base border-t border-b border-red-800 py-4 my-4">
             <p>{`> KERNEL_PANIC: Unexpected poultry interaction detected at address 0xDEADBEEF.`}</p>
             <p>{`> FATAL_EXCEPTION: EGG_CRACK_OVERFLOW`}</p>
             <p>{`> MODULE_FAILURE: omelette.sys responded with status "SCRAMBLED"`}</p>
             <p>{`> DIAGNOSTIC: User attempted to fry the mainframe.`}</p>
             <p>{`> ... dumping physical memory to disk ...`}</p>
             <p>{`> ... 45% ...`}</p>
             <p>{`> ... 99% ...`}</p>
             <p>{`> SYSTEM_STATUS: COOKED`}</p>
          </div>
          <p className="mb-8">The system has been shut down to prevent damage to the CPU (Central Poultry Unit).</p>
          
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center gap-2 border border-red-600 px-6 py-3 hover:bg-red-600 hover:text-black transition-colors font-bold uppercase"
          >
            <RefreshCw size={20} />
            [ INITIATE_HARD_RESET ]
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-900 selection:text-green-100 overflow-x-hidden">
      {/* CRT Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-screen overflow-hidden">
        
        {/* Sidebar / Terminal Header */}
        <aside className="w-full md:w-72 bg-neutral-900/50 md:h-full border-b md:border-b-0 md:border-r border-green-900 flex flex-col z-40 relative">
          <div className="p-6 border-b border-green-900">
            <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2 glow-text">
              <Terminal size={24} />
              DEV_TERMINAL
            </h1>
            <div className="text-xs text-green-700 mt-2">v2.4.1-student</div>
            <div className="text-xs text-green-700 mt-1">
              STATUS: ONLINE<span className="animate-pulse">_</span>
            </div>
            <div className="text-xs text-green-700 mt-1">
              UPTIME: {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-xs text-green-700 mt-1">
              LAST_UPDATE: 2025-12-03T21:36:57.000Z
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex flex-col flex-1 overflow-y-auto p-4 gap-1 custom-scrollbar">
            <div className="text-xs text-green-800 mb-2 uppercase px-2">Directory Listing</div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 group text-left
                  ${activeSection === item.id 
                    ? 'bg-green-900/30 text-green-400 border-l-2 border-green-500 pl-2' 
                    : 'hover:bg-green-900/10 hover:text-green-400 text-green-700 border-l-2 border-transparent'
                  }`}
              >
                <item.icon size={16} className={activeSection === item.id ? 'animate-pulse' : ''} />
                <span className="group-hover:translate-x-1 transition-transform">./{item.label}</span>
              </button>
            ))}

            <div className="mt-auto pt-6 border-t border-green-900">
               <div className="text-xs text-green-800 mb-3 uppercase px-2">External Links</div>
               <div className="flex gap-4 px-2">
                 <a href="https://github.com/ShayneMcNeil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub"><Github size={18} /></a>
                 <a href="https://www.linkedin.com/in/shayne-mcneil/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn"><Linkedin size={18} /></a>
                 <a href="mailto:mr.amero081494@gmail.com" className="hover:text-white transition-colors" title="Email"><Mail size={18} /></a>
               </div>
            </div>
          </nav>

          {/* Navigation - Mobile Toggle */}
          <div className="md:hidden p-4 bg-black border-t border-green-900 flex justify-between items-center">
             <span className="text-sm">root@portfolio:~$</span>
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border border-green-700 px-3 py-1 text-xs uppercase hover:bg-green-900"
             >
                {isMobileMenuOpen ? 'CLOSE_NAV' : 'OPEN_NAV'}
             </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
             <nav className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-green-900 p-4 z-50 shadow-2xl shadow-green-900/20">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex w-full items-center gap-3 px-3 py-3 text-sm border-l-2 border-transparent hover:bg-green-900/20 hover:border-green-500"
                  >
                    <item.icon size={16} />
                    <span>./{item.label}</span>
                  </button>
                ))}
             </nav>
          )}
        </aside>

        {/* Main Content Window */}
        <main className="flex-1 h-full overflow-y-auto relative custom-scrollbar bg-black p-4 md:p-8 lg:p-12 scroll-smooth">
          
          {/* Top Status Bar Decoration */}
          <div className="relative border-b border-green-900/50 pb-4 mb-8 flex justify-between items-end">
             <div>
               <div className="text-xs text-green-800">CURRENT_DIRECTORY</div>
               <div className="text-lg font-bold text-green-400 flex items-center gap-2">
                 /home/developer/{activeSection}
                 <span className="w-2.5 h-4 bg-green-500 animate-pulse block"></span>
               </div>
             </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-24 pb-20">
            
            {/* ABOUT ME */}
            <section id="about" className="space-y-6 animate-fadeIn">
               <div className="border border-green-800 bg-green-900/5 p-6 md:p-10 relative group hover:border-green-500 transition-colors">
                  <div className="absolute top-0 right-0 p-2 opacity-50">
                    <User size={48} strokeWidth={1} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white glow-text">Incoming Transmission: Shayne McNeil</h2>
                  <div className="space-y-4 text-lg leading-relaxed text-green-300">
                    <p>
                      Hello, World.
                    </p>
                    <p>
                      My journey into the digital realm began in childhood, where I was always drawn to solving challenges like code breaking and complex puzzles. This naturally evolved into building websites for family members as a hobby. JavaScript was the first language I truly learned, and it remains my "baby"—the tool I feel most at home with.
                    </p>
                    <p>
                      I often say my major weakness is that I get frustrated when I don't understand a topic. However, this frustration fuels an obsession where I put all my effort into mastering the subject—a trait that has proven invaluable in my studies and professional growth.
                    </p>
                    <p>
                      Currently, I am expanding my toolkit in the IT Programming Diploma at NSCC with Java and Spring Boot. However, my career vector is locked on <strong>Full-Stack JavaScript development</strong>, specifically the MERN stack.
                    </p>
                    <p>
                      I believe we are entering a golden age where AI is a powerful exoskeleton for developers—a tool to amplify creativity, not replace it. My long-term roadmap includes specialized consulting. If you have a problem that needs solving today, feel free to contact me.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
                    <span className="px-3 py-1 border border-green-600">LOCATION: Remote / Canada</span>
                    <span className="px-3 py-1 border border-green-600">AVAILABILITY: Open for Work</span>
                    <span className="px-3 py-1 border border-green-600">EXP_LEVEL: Student</span>
                  </div>
               </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience">
              <SectionHeader title="Experience_Log" />
              <div className="space-y-8 border-l border-green-900 pl-8 ml-4">
                
                {/* Quirky Error Message */}
                <div className="border border-red-900/30 bg-red-950/10 p-6 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="text-red-500 animate-pulse mt-1">
                      <AlertTriangle size={24} />
                    </div>
                    <div className="space-y-4 w-full">
                      <div>
                        <h3 className="text-red-500 font-bold text-lg tracking-wider uppercase">ERROR: Failed to load Experience_Module</h3>
                        <p className="text-xs text-red-700 font-mono mt-1">ERR_CODE: FRESH_GRAD_EXCEPTION (0x000000)</p>
                      </div>
                      
                      <div className="text-sm text-red-400/80 font-mono leading-relaxed">
                        <p className="mb-2">{'>'}{'>'} SYSTEM_DIAGNOSTIC_REPORT:</p>
                        <p>Scanning database... <span className="text-red-300">0 records found</span>.</p>
                        <p>The system has detected a critical lack of corporate history. This is a known issue in the <span className="text-red-300">Student_v2.4.1</span> build.</p>
                      </div>

                      <div className="bg-black/50 border border-green-900/50 p-4 mt-2">
                        <p className="text-green-600 text-xs font-bold uppercase mb-2">{'>'}{'>'} SUGGESTED_RESOLUTION:</p>
                        <p className="text-green-400 text-sm mb-3">To patch this bug, the Administrator must initiate the Employment Protocol immediately.</p>
                        <div className="font-mono text-sm">
                          <span className="text-green-700">$</span> <span className="text-green-500">sudo hire shayne --role=Developer --start=NOW</span>
                          <br/>
                          <span className="text-green-700 opacity-50 animate-pulse">... Executing fix...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* EDUCATION */}
            <section id="education">
              <SectionHeader title="Education_History" />
              <div className="w-full">
                <TerminalCard title="Diploma in IT Programming" subtitle="Nova Scotia Community College (eCampus)" date="Sept 2024 - Apr 2026">
                   Focusing on full-stack application development, database management, and object-oriented programming.
                </TerminalCard>
              </div>
            </section>

            {/* LICENSES */}
            <section id="certifications">
              <SectionHeader title="Licenses_&_Certifications" />
              <div className="grid gap-4">
                 {[
                   { name: "Advanced Spring: Effective Integration Testing", issuer: "LinkedIn Learning", date: "Nov 2025" },
                   { name: "React Essential Training", issuer: "LinkedIn Learning", date: "Nov 2025" },
                   { name: "Java Testing with JUnit", issuer: "LinkedIn Learning", date: "Oct 2025" },
                   { name: "Pilot Certificate - Small Remotely Piloted Aircraft", issuer: "Transport Canada", date: "Oct 2025" },
                   { name: "Spring Boot 2.0 Essential Training", issuer: "LinkedIn Learning", date: "Oct 2025" },
                   { name: "JavaScript Essentials 2", issuer: "Cisco Networking Academy", date: "May 2025" },
                   { name: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", date: "Jan 2025" },
                   { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "Dec 2024" },
                   { name: "Excel Essential Training (Microsoft 365)", issuer: "LinkedIn Learning", date: "Sep 2024" },
                   { name: "Intro to WHMIS", issuer: "NSCC", date: "Sep 2024" },
                   { name: "Intro to NS OH&S Act", issuer: "NSCC", date: "Sep 2024" }
                 ].map((cert, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-900 py-3 hover:bg-green-900/10 px-2 transition-colors">
                       <div>
                         <div className="font-bold text-green-300">{cert.name}</div>
                         <div className="text-xs text-green-700">ISSUER: {cert.issuer}</div>
                       </div>
                       <div className="text-xs font-mono text-green-600 mt-1 md:mt-0">[{cert.date}]</div>
                    </div>
                 ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects">
              <SectionHeader title="Project_Manifest" />
              <div className="w-full space-y-6">
                {[
                  { 
                    title: "React.js Simple FlashCard App", 
                    tech: "React.js", 
                    date: "Nov 2025 - Present",
                    desc: "A minimal flashcard program for students. Currently in development with additional features planned.",
                    link: "https://shaynemcneil.github.io/my-flashcard-app"
                  }
                ].map((project, idx) => (
                  <a 
                    key={idx} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-green-800 p-5 hover:bg-green-900/10 hover:border-green-400 transition-all group cursor-pointer"
                  >
                     <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-green-200 group-hover:text-green-100 transition-colors">{project.title}</h3>
                          <div className="text-xs text-green-700 font-mono mt-1">[{project.date}]</div>
                        </div>
                        <ExternalLink size={16} className="text-green-600 group-hover:text-green-300 transition-colors" />
                     </div>
                     <div className="text-xs text-green-600 mb-3 uppercase tracking-wider border-b border-green-900/50 pb-2 inline-block">
                        {project.tech}
                     </div>
                     <p className="text-sm text-green-400 group-hover:text-green-300">{project.desc}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
              <SectionHeader title="Skill_Matrix" />
              <div className="space-y-6">
                <div>
                   <h4 className="text-sm uppercase text-green-700 mb-3 border-b border-green-900 inline-block">Technical Skills</h4>
                   <div className="flex flex-wrap gap-2">
                     {[
                       'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 
                       'Java', 'Spring Boot', 'C', 'C++', 'Next.js', 
                       'SQL', 'JUnit', 'Mockito'
                     ].map(skill => (
                       <SkillBadge key={skill} name={skill} />
                     ))}
                   </div>
                </div>
                <div>
                   <h4 className="text-sm uppercase text-green-700 mb-3 border-b border-green-900 inline-block">Networking Protocols</h4>
                   <div className="flex flex-wrap gap-2">
                     {['Cisco IOS', 'IPv4/IPv6', 'TCP/IP', 'OSI Model'].map(skill => (
                       <SkillBadge key={skill} name={skill} />
                     ))}
                   </div>
                </div>
                <div>
                   <h4 className="text-sm uppercase text-green-700 mb-3 border-b border-green-900 inline-block">Operations & Safety</h4>
                   <div className="flex flex-wrap gap-2">
                     {['Microsoft Excel', 'WHMIS', 'OH&S', 'Drone Piloting (RPAS)'].map(skill => (
                       <SkillBadge key={skill} name={skill} />
                     ))}
                   </div>
                </div>
                <div>
                   <h4 className="text-sm uppercase text-green-700 mb-3 border-b border-green-900 inline-block">Spoken/Written Languages</h4>
                   <div className="flex flex-wrap gap-2">
                     {['English (Native/Fluent)', 'Mandarin Chinese (HSK Level 3)', 'French (Conversational)'].map(skill => (
                       <SkillBadge key={skill} name={skill} />
                     ))}
                   </div>
                </div>
              </div>
            </section>

            {/* COURSES */}
            <section id="courses">
               <SectionHeader title="Additional_Training" />
               <div className="w-full">
                 <div className="border border-green-900/50 bg-green-900/5 p-4 hover:border-green-500 transition-colors">
                    <div className="flex items-start gap-3">
                        <ChevronRight size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-green-300 text-lg">Configuration and Information Management (MGMT1771)</h3>
                            <div className="text-xs text-green-700 font-mono mt-1 mb-2">PROVIDER: Irving Shipbuilding / NSCC</div>
                            <p className="text-sm text-green-400/90 leading-relaxed">
                                Completed specialized industry training facilitated by Irving Shipbuilding. Focused on best practices for configuration control, data management standards, and the handling of technical information within complex engineering environments.
                            </p>
                        </div>
                    </div>
                 </div>
               </div>
            </section>

             {/* ORGANIZATIONS */}
             <section id="organizations">
               <SectionHeader title="Affiliations" />
               <div className="w-full">
                 <TerminalCard title="NSCC eCampus Student Association" subtitle="Student Representative" date="Sept 2024 - Present">
                   Serving as the sole representative for the IT Programming Diploma cohort. Key responsibilities include participating in governance meetings to allocate funds for student activities, acting as a strategic liaison between the student body and administration, and advocating for the academic and social interests of my peers.
                 </TerminalCard>
               </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center text-xs text-green-800 pt-20 pb-10 border-t border-green-900 relative">
               <p>END OF LINE.</p>
               <p className="mt-2">© {new Date().getFullYear()} DEV_TERMINAL // SYSTEM_ID: 8849-XA</p>
               
               {/* Easter Egg Trigger */}
               <button 
                 onClick={triggerKernelPanic}
                 className="absolute bottom-4 right-4 text-green-600 hover:text-red-500 opacity-50 hover:opacity-100 transition-all duration-500"
                 title="Do not click"
               >
                 <Egg size={16} />
               </button>
            </footer>

          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000; 
          border-left: 1px solid #14532d;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #15803d; 
          border: 1px solid #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #22c55e; 
        }
        .glow-text {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  );
};

// Sub-components for cleanliness
const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-8">
     <h2 className="text-2xl font-bold uppercase tracking-widest text-green-400 glow-text w-max whitespace-nowrap">
       {`> ${title}`}
     </h2>
     <div className="h-px bg-green-900 w-full relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-green-500"></div>
     </div>
  </div>
);

const TerminalCard = ({ title, subtitle, date, children }) => (
  <div className="bg-black border border-green-800 p-4 hover:border-green-500 transition-colors">
     <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-green-300">{title}</h4>
        <span className="text-xs text-green-700 font-mono border border-green-900 px-1">{date}</span>
     </div>
     <div className="text-xs text-green-600 mb-2 uppercase">{subtitle}</div>
     <p className="text-sm text-green-400/90 leading-relaxed">
       {children}
     </p>
  </div>
);

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1 bg-green-900/20 text-green-400 text-sm border border-green-800 hover:bg-green-500 hover:text-black hover:font-bold transition-all cursor-default">
    {name}
  </span>
);

export default App;