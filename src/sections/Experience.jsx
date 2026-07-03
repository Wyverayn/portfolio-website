import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Marketing & Administration Technology Intern",
      company: "Choros.io",
      duration: "March 2026 - June 2026",
      highlights: [
        "Served as a technical quality control layer between digital marketing campaigns and operations, auditing multi-channel data pipelines to monitor CPL, CTR, and ad spend benchmarks.",
        "Investigated and resolved critical platform data mismatches between live advertising dashboards and internal CRMs, actively protecting lead tracking integrity.",
        "Executed functional Platform Quality Assurance (QA) testing for the company's lead management ecosystem, successfully identifying and filing system bugs regarding data redundancy and server limit overloads."
      ]
    },
    {
      role: "IT Technical Services Intern",
      company: "MF Solutions",
      duration: "Prior Internship",
      highlights: [
        "Diagnosed, troubleshot, and maintained critical computer hardware components for direct consumer and corporate client systems, including laptops, printers, and system units.",
        "Managed end-to-end IT network setups, hardware configurations, and desktop environment deployments under strict client operational deadlines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-800">
      <div className="mb-16">
        <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">
          Work History
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Professional Experience
        </h2>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-teal-400 transition-colors duration-300" />
            
            {/* Header Details */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-1">
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-slate-400 font-mono">
                  {exp.company}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500 md:text-right">
                {exp.duration}
              </span>
            </div>

            {/* Impact Highlights List */}
            <ul className="space-y-3 text-sm text-slate-400 leading-relaxed list-disc list-inside">
              {exp.highlights.map((bullet, idx) => (
                <li key={idx} className="pl-1 marker:text-slate-700">
                  <span className="text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;