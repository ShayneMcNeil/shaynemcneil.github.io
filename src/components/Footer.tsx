import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
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
