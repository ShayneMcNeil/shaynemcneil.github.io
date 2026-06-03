/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
