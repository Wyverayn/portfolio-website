import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-wider text-teal-400 font-mono">
          GRR.Systems
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Buttons */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-400 hover:text-teal-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors block"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;