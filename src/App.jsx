import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} Geanne Rayn Radan. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;