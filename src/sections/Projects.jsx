import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "B2B Outbound Hybrid Voice AI Agent ('Alex')",
      subtitle: "Systems Automation & CRM Integration",
      description: "Designed and engineered an advanced, context-aware B2B outbound Voice AI Agent optimized for automated cold outreach and high-intent lead generation for UK-based trades businesses. The system seamlessly bridges real-time conversational routing with multi-channel CRM automation.",
      contributions: [
        "Coupled real-time conversational node routing with asynchronous webhooks to automate lead processing and data logging.",
        "Integrated real-time adaptation triggers allowing the AI to instantly switch communication channels from voice to mobile-optimized SMS links based on live prospect preferences.",
        "Built and optimized 6 comprehensive GoHighLevel (GHL) workflows featuring data-sync buffer delays to guarantee spotless pipeline tracking across 5 distinct opportunity stages.",
        "Formulated a global 'Script-Lock Deflection Protocol' to handle unexpected user responses or Turing-test questions without disrupting sales momentum."
      ],
      tags: ["Voice AI", "GoHighLevel", "Webhooks", "CRM Automation", "Node Routing"],
      // Replace with your actual image filename in public folder, e.g., "/watermarked_img_11284719874566480923.png"
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
    },
    {
      title: "Auxiliary Electronic Control Unit (ECU)",
      subtitle: "Distributed Embedded Systems & Telemetry Integration",
      description: "Developed a retrofittable, supportive module for electric scooters to combat range anxiety. Operating independently without interfering with primary propulsion controls, the system intercepted raw electrical parameters to deliver real-time distance estimation and predictive monitoring.",
      contributions: [
        "Engineered the software stack and deployed a responsive Graphical User Interface (GUI) using Python/C++ development tools on a Raspberry Pi 5 to map, scale, and visualize live metrics through a custom TFT screen mount.",
        "Developed and integrated condition-based software rules to evaluate real-time logs for electrical threshold anomalies (voltage sags, overcurrent peaks), rendering live safety alerts directly onto the custom GUI.",
        "Co-developed the FPGA module, implementing hardware-level logic blocks on an Intel Cyclone 10 to manage synchronization buffers, filter signal jitter, and establish stable UART packet assembly.",
        "Executed static bench testing, validation routines, and electrical boundary checks on the Hall-effect speed sensor to verify noise traits and output stability."
      ],
      tags: ["Raspberry Pi 5", "Intel Cyclone 10 FPGA", "ATmega328P", "Python/C++", "UART", "Telemetry"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-b border-slate-800">
      <div className="mb-16">
        <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Engineering Case Studies
        </h2>
      </div>

      <div className="space-y-24">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Asset Showcase */}
            <div className="w-full lg:w-1/2 group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Project Metrics & Architecture Text */}
            <div className="w-full lg:w-1/2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 block mb-1">
                {project.subtitle}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3 font-semibold">
                Key System Contributions:
              </h4>
              <ul className="space-y-2 mb-6 text-slate-400 text-xs leading-relaxed list-disc list-inside">
                {project.contributions.map((bullet, idx) => (
                  <li key={idx} className="pl-1 text-slate-400">
                    <span className="text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;