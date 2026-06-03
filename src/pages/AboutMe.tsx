import { MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutMe() {
  return (
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
}
