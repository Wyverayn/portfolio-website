import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Systems Integration",
      description: "Connecting platforms, managing data pipelines, and designing conversational architectures.",
      skills: [
        "Voice AI Node Routing",
        "GoHighLevel (GHL) Workflows",
        "Asynchronous Webhooks",
        "CRM Data Pipelines",
        "Platform QA Testing",
        "Trello & Google Workspace Automation"
      ]
    },
    {
      title: "Embedded Systems & Hardware",
      description: "Interfacing microcontrollers with digital logic and handling physical signal routing.",
      skills: [
        "Intel Cyclone 10 FPGA",
        "Hardware Description Languages (HDL)",
        "ATmega328P Microcontroller",
        "Raspberry Pi 5 Hubs",
        "UART Communication Protocols",
        "Signal Filtering & Data Acquisition"
      ]
    },
    {
      title: "Core Programming & IT Ops",
      description: "Writing structural execution logic and deploying hardware infrastructure.",
      skills: [
        "Python",
        "C / C++",
        "Fixed-Point Arithmetic",
        "10-bit ADC Processing",
        "IT Equipment Deployment",
        "Hardware Troubleshooting"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-b border-slate-800">
      <div className="mb-16">
        <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Core Capabilities Matrix
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Category Title */}
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-sans">
                {category.title}
              </h3>
              {/* Category Subtitle */}
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-900/60 text-teal-400 text-xs font-mono border border-slate-800 hover:bg-slate-900 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;