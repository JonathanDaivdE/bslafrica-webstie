import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeOut"} },
    exit: { opacity: 0, y: -15, transition: {duration: 0.4, ease: "easeIn"} }
}

export default function Design() {
  return (
    <motion.section 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Product Design
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            User Journeys Grounded in Real Data
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Beautiful interfaces are useless if your target users can't find the sign-up form. We wireframe user experiences around strict psychological operational patterns.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Wireframing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Mapping behavioral logic flows and feature interaction trees before touchpoints ever touch code.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Design Systems</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Locking down typography tokens, color weights, and layout margins for flawless cross-page scaling.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Micro-Interactions</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Designing subtle status indicators and fluid transition states that delight your final clients.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}