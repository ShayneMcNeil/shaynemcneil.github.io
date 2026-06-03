export default function Education() {
  return (
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
}
