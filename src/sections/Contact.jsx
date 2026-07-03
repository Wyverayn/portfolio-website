import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
          I am currently seeking opportunities in Systems Automation, Integration, or Embedded Systems Engineering. Drop me a line if you want to chat about engineering!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Direct Contact Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100">Connect Directly</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Feel free to reach out through my official channels for professional inquiries, engineering collaborations, or technical roles.
          </p>
          
          <div className="space-y-4 font-mono text-xs">
            {/* Email Target */}
            <a 
              href="mailto:geanneraynradan@gmail.com" // Replace with your actual email address
              className="flex items-center gap-3 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-all group"
            >
              <svg className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
              <span>geanneraynradan@gmail.com</span>
            </a>

            {/* LinkedIn Target */}
            <a 
              href="https://linkedin.com" // Replace with your actual LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-all group"
            >
              <svg className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/geanne-radan</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Form Wrapper */}
        <form 
          onSubmit={(e) => e.preventDefault()} // Stops page reload on click
          className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4"
        >
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 focus:border-teal-500 focus:outline-none text-sm text-slate-200"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 focus:border-teal-500 focus:outline-none text-sm text-slate-200"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Message</label>
            <textarea 
              rows="4" 
              placeholder="Hi Geanne, let's discuss a technical role..."
              className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 focus:border-teal-500 focus:outline-none text-sm text-slate-200 resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-medium text-sm rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;