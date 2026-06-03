import { Github, Linkedin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
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
}
