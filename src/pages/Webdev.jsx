import { animate, easeInOut, motion } from "framer-motion";

const pageVariants = {
    initial: {y:15, opacity:0},
    animate: {y:0, opacity:1, transition: { duration:0.3, ease: "easeInOut"}},
    exit: {y:-15, opacity: 0, transition: { duration:0.4, ease: "easeIn"}},
}

export default function WebDev() {
  const capabilities = [
    { title: "Next-Gen Frameworks", desc: "Building with React, Vite, and highly optimized rendering architectures." },
    { title: "API Systems", desc: "Designing secure, structured REST and GraphQL data pipelines." },
    { title: "Database Optimization", desc: "Relational and document-based indexing configured for scale." }
  ];

  return (
    <motion.section 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-white py-16 px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Editorial Text Block */}
        <div>
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
            Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
            Robust Architecture, Seamless Operations
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We build performant, highly secure codebases designed to handle traffic spikes smoothly. Our web engines focus on load speed optimization and strict layout stability metrics.
          </p>
          <div className="border-l-4 border-indigo-600 pl-4 italic text-sm text-slate-500">
            "Prioritizing component reusability and explicit clean-code principles over quick patches."
          </div>
        </div>

        {/* Modular Specs List */}
        <div className="space-y-4">
          {capabilities.map((item, index) => (
            <div key={index} className="p-6 bg-slate-50 border border-slate-200/60 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}