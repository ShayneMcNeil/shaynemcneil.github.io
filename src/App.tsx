/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { HardHat, Menu, X, Github, Linkedin, Mail, ExternalLink, MapPin, CheckCircle2, Sun, Moon } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// --- Theme Context ---
const ThemeContext = createContext({
  isDark: false,
  toggleDark: () => {},
});

const useTheme = () => useContext(ThemeContext);

// --- Page Components ---
function ContactForm() {
  const [state, handleSubmit] = useForm('xrevgepk');
  if (state.succeeded) {
      return (
        <div className="p-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
            <p className="text-green-700 dark:text-green-400">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-2xl shadow-sm text-left">
      <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            required 
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
            placeholder="you@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      
      <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white resize-y"
            placeholder="How can I help you?"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

// --- Page Components ---
const AboutMe = () => (
  <div className="flex flex-col md:flex-row gap-12 p-8 md:p-16 w-full">
    <div className="md:w-1/3 flex flex-col items-center">
      <div className="w-64 h-64 bg-gray-50 dark:bg-gray-800 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-gray-700 shadow-lg shadow-blue-200 dark:shadow-none overflow-hidden group relative">
         <img 
           src="/shayne-mcneil-portrait.jpg" 
           alt="Shayne McNeil" 
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
         />
      </div>
      <div className="mt-8 text-center space-y-2">
         <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Shayne McNeil</h2>
         <p className="text-blue-700 dark:text-blue-300 font-semibold tracking-wide text-sm uppercase">Freelance Software Developer & IT Consultant</p>
         <div className="flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-300 text-sm mt-2">
            <MapPin size={16} />
            <span>Nova Scotia, Canada</span>
         </div>
      </div>
    </div>
    
    <div className="md:w-2/3 space-y-10">
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Hello, World.</h3>
        <div className="prose prose-gray dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
           <p>
             My name is Shayne McNeil and I am a Freelance Full Stack Software Developer and IT Consultant based in Nova Scotia on the Atlantic coast of Canada. I specialize in the MERN stack but can bring the whole gamet of my skills to your business. Contact me to see what I can do for your business.
           </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Software Development', 'Web Design', 'IT Consulting', 
            'IT Project Management', 'Business and Systems Analysis', 
            'Database Design', 'Contracting', 'IT Support'
          ].map(service => (
             <div key={service} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
               <CheckCircle2 size={18} className="text-blue-500/80 dark:text-blue-400/80" />
               <span className="text-sm md:text-base">{service}</span>
             </div>
          ))}
        </div>
      </section>
      
      <section>
         <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Core Skills</h3>
         <div className="flex flex-wrap gap-2">
           {[
             'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 
             'Java', 'Spring Boot', 'C', 'C++', 'Next.js', 
             'SQL', 'JUnit', 'Mockito', 'IPv4/IPv6', 'TCP/IP'
           ].map(skill => (
             <span key={skill} className="px-3 py-1.5 bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium border border-gray-200/60 dark:border-gray-700 shadow-sm transition-colors">
               {skill}
             </span>
           ))}
         </div>
      </section>
    </div>
  </div>
);

const Education = () => (
   <div className="p-8 md:p-16 w-full space-y-12">
     <div className="max-w-3xl border-l-[3px] border-blue-500 pl-6 mb-8">
       <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Education and Training</h1>
       <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Academic background, courses, and professional certifications.</p>
     </div>
     
     <section>
        <div className="bg-white dark:bg-gray-900 backdrop-blur-md border text-left border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors">
           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Diploma in IT Programming</h3>
           <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base mb-4 mt-1">Nova Scotia Community College (eCampus) • Sept 2024 - May 2026</p>
           <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">Focusing on full-stack application development, database management, and object-oriented programming.</p>
        </div>
     </section>

     <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Additional Courses</h2>
        <div className="space-y-6 text-left">
           <div className="bg-white dark:bg-gray-900 backdrop-blur-md border text-left border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Configuration and Information Management (MGMT1771)</h3>
              <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base mb-4 mt-1">Irving Shipbuilding / NSCC</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">Completed specialized industry training facilitated by Irving Shipbuilding. Focused on best practices for configuration control, data management standards, and the handling of technical information within complex engineering environments.</p>
           </div>
           <div className="bg-white dark:bg-gray-900 backdrop-blur-md border text-left border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pulsar Launchpad 2025</h3>
              <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base mb-4 mt-1">Pulsar Institute</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">This 8-week long course focused on introducing post-secondary students across Canada to careers in the space industry. The format of this course followed a series of seminars by guests in the space industry and a Q&A section for networking.</p>
           </div>
        </div>
     </section>
     
     <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
           {[
             {name: "Introduction to AI Literacy", issuer:  "Acadia University", date: "Mar 2026"},
             { name: "Advanced Spring: Effective Integration Testing", issuer: "LinkedIn Learning", date: "Nov 2025" },
             { name: "React Essential Training", issuer: "LinkedIn Learning", date: "Nov 2025" },
             { name: "Java Testing with JUnit", issuer: "LinkedIn Learning", date: "Oct 2025" },
             { name: "Pilot Certificate - Small Remotely Piloted Aircraft", issuer: "Transport Canada", date: "Oct 2025" },
             { name: "Spring Boot 2.0 Essential Training", issuer: "LinkedIn Learning", date: "Oct 2025" },
             { name: "JavaScript Essentials 1 & 2", issuer: "Cisco Networking Academy", date: "2025" },
             { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "Dec 2024" }
           ].map((cert, idx) => (
              <div key={idx} className="flex gap-3 bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                 <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{cert.name}</h4>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-1">{cert.issuer} • {cert.date}</p>
                 </div>
              </div>
           ))}
        </div>
     </section>
   </div>
);

const Portfolio = () => (
  <div className="p-8 md:p-16 w-full text-left space-y-12">
     <div className="max-w-3xl border-l-[3px] border-blue-500 pl-6 mb-8">
       <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Portfolio</h1>
       <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Notable projects, applications, and professional affiliations.</p>
     </div>

     <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-6 text-left">
          {[
             { 
               title: "React.js Simple FlashCard App", 
               tech: "React.js", 
               date: "Nov 2025 - Present",
               desc: "A minimal flashcard program for students. Currently in development with additional features planned.",
               link: "https://shaynemcneil.github.io/my-flashcard-app"
             }
          ].map((project, idx) => (
             <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="block group bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-2xl p-6 sm:p-8 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                   <div>
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                     <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1 uppercase tracking-wide">{project.date}</p>
                   </div>
                   <div className="p-2 bg-gray-100/95 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                     <ExternalLink size={20} />
                   </div>
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100/90 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-semibold uppercase tracking-wider rounded-lg mb-4 shadow-sm">
                   {project.tech}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{project.desc}</p>
             </a>
          ))}
        </div>
     </section>
     
     <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Affiliations</h2>
        <div className="bg-white dark:bg-gray-900 backdrop-blur-md border text-left border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors">
           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">NSCC eCampus Student Association</h3>
           <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base mb-4 mt-1">Student Representative and Bookkeeper • Sept 2024 - Apr 2026</p>
           <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">Serving as the sole representative for the IT Programming Diploma cohort. Key responsibilities include participating in governance meetings to allocate funds for student activities, acting as a strategic liaison between the student body and administration, and advocating for the academic and social interests of my peers. I also handled the association's financial records in my second year as bookkeeper handling bank reconciliations and budget tracking.</p>
        </div>
     </section>
  </div>
);

const Contact = () => (
  <div className="flex flex-col items-center justify-center p-8 md:p-16 min-h-[60vh] text-center max-w-3xl mx-auto">
    <div className="mb-12">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Get in Touch</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        I'm currently available for freelance projects and IT consulting. <br className="hidden sm:block" />
        Whether you have a question or just want to say hi, feel free to reach out.
      </p>
    </div>
    
    <div className="w-full mb-12">
      <ContactForm />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
       <a href="https://github.com/ShayneMcNeil" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:border-gray-800 dark:hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-gray-800 dark:group-hover:bg-gray-600 group-hover:text-white transition-colors">
            <Github size={28} />
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">GitHub</span>
       </a>
       
       <a href="https://www.linkedin.com/in/shayne-mcneil/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="p-4 bg-blue-100 dark:bg-gray-800 text-blue-800 dark:text-blue-400 rounded-full group-hover:bg-[#0A66C2] dark:group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
            <Linkedin size={28} />
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">LinkedIn</span>
       </a>
    </div>
  </div>
);

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- Layout Components ---
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 px-4 pt-3 pb-2 rounded-t-lg font-mono text-sm font-semibold border-b-2 flex items-center ${
      isActive
        ? 'text-blue-800 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/50 border-blue-600 dark:border-blue-400'
        : 'text-gray-800 dark:text-gray-200 hover:text-blue-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800/50 border-transparent hover:border-gray-300 dark:hover:border-gray-500'
    }`;

  const getMobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-3 rounded-md font-mono text-sm font-semibold transition-colors duration-200 ${
      isActive 
        ? 'text-blue-800 dark:text-blue-300 bg-blue-100/90 dark:bg-blue-900/50 border-l-4 border-blue-600 dark:border-blue-400' 
        : 'text-gray-800 dark:text-gray-200 hover:text-blue-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
    }`;

  const navLinks = [
    { path: '/', label: 'about' },
    { path: '/education', label: 'education_and_training' },
    { path: '/portfolio', label: 'portfolio' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b shadow-sm 
        ${scrolled 
          ? 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800' 
          : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Wordmark */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <NavLink
              to="/"
              className="font-mono font-semibold text-xl tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-blue-600 dark:text-blue-500">&lt;</span>ShayneMcNeil<span className="text-blue-600 dark:text-blue-500">/&gt;</span>
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Links */}
            <div className="hidden md:flex md:space-x-2 mr-2">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={getLinkClasses}>
                  /{link.label}/
                </NavLink>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b border-gray-100 dark:border-gray-800 px-2 pt-2 pb-3 space-y-1 shadow-lg transition-colors ${
          scrolled ? 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 backdrop-blur-none' : 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md'
        }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={getMobileLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              /{link.label}/
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100/95 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Left side: Brand and Info */}
          <div className="flex flex-col space-y-4 max-w-sm">
            <span className="font-mono font-semibold text-xl tracking-tight text-gray-900 dark:text-gray-100">
              <span className="text-blue-600 dark:text-blue-500">&lt;</span>ShayneMcNeil<span className="text-blue-600 dark:text-blue-500">/&gt;</span>
            </span>
            <p className="text-sm text-gray-900 dark:text-gray-300 font-medium leading-relaxed">
              Freelance Full Stack Software Developer and IT Consultant based in Nova Scotia, Canada. Building robust and scalable web applications.
            </p>
          </div>

          {/* Right side: Contact Links */}
          <div className="flex flex-col space-y-3">
             <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-1">Connect</h4>
            <a href="mailto:mr.amero081494@gmail.com" className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              <Mail size={16} /> mr.amero081494@gmail.com
            </a>
            <a href="https://github.com/ShayneMcNeil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={16} /> GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/shayne-mcneil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={16} /> LinkedIn Network
            </a>
          </div>
        </div>

        {/* Bottom: Copyright and Attribution */}
        <div className="pt-8 border-t border-blue-200/50 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-800 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shayne McNeil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  // Update DOM when dark mode changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300 relative">
          
          {/* Fixed Background Image */}
          <div className="fixed inset-0 z-[-2] bg-center bg-cover bg-no-repeat bg-[#e0f2fe]" style={{ backgroundImage: "url('/nova-scotia-shoreline.png')" }}></div>
          
          {/* Background Overlay */}
          <div className="fixed inset-0 z-[-1] bg-white/70 dark:bg-gray-900/80 backdrop-blur-[2px] transition-colors duration-300 pointer-events-none"></div>
          
          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            <Navigation />
            
            {/* Main Content Area */}
            <main className="flex-grow flex flex-col pt-8 pb-16 max-w-7xl mx-auto w-full">
              <div className="flex-grow bg-transparent border border-transparent shadow-none rounded-2xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden transition-colors duration-300">
                <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </main>
            
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}
