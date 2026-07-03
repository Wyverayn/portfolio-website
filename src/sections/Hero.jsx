import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center justify-center px-6 py-12 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Text Content (7 Cols wide on large screens) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Available for Engineering Roles
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">Geanne Rayn Radan</span>
          </h1>

          <p className="text-lg md:text-xl font-mono text-slate-300 font-medium">
            Automation & Systems Integration Engineer
          </p>

          <p className="text-slate-400 max-w-xl leading-relaxed text-base md:text-lg">
            Computer Engineering graduate specializing in connecting disparate workflows, building context-aware automation networks, and programming distributed embedded systems. Proven experience designing everything from real-time Voice AI architecture to hardware-level FPGA signal filters.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-lg shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Systems
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 hover:border-slate-600 transition-all transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Interactive System Architecture Preview Box (5 Cols wide) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative w-full max-w-md bg-slate-950/60 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm font-mono text-xs text-slate-400 space-y-4">
            
            {/* Terminal Window Header Controls */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
              </div>
              <span className="text-[10px] text-slate-500">grr_core_metrics.log</span>
            </div>

            {/* Simulated Live System Logs */}
            <div className="space-y-2">
              <p className="text-teal-400 font-semibold">&gt; Initializing systems_pipeline...</p>
              <p className="text-slate-500">[OK] Connected to GoHighLevel API Workflow Engine</p>
              <p className="text-slate-500">[OK] Voice AI Agent ("Alex") state: IDLE_WAIT_TRIGGER</p>
              <p className="text-slate-500">[OK] FPGA Preprocessing stream synchronized via UART</p>
              
              <div className="pt-4 border-t border-slate-900 space-y-1">
                <p className="text-slate-300 font-semibold">Active Core Focus:</p>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-emerald-400 block font-bold">DATA & AUTOMATION</span>
                    <span>Node Routing & Webhooks</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-teal-400 block font-bold">EMBEDDED HW</span>
                    <span>FPGA / Microcontrollers</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center text-[10px] text-slate-600 animate-pulse">
                -- Systems Live and Verified --
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;