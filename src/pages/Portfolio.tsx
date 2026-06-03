import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
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
}
