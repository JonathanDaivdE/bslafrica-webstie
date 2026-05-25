import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">Our Story</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-6">
            Driven by Passion, Focused on Results
          </h1>
          <p className="text-slate-600 leading-relaxed mb-4">
            We partner with forward-thinking brands to build clean, functional, and user-centric interfaces. We believe that exceptional design is invisible—it simply works beautifully.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With deep expertise across modern stacks, we turn complex technical requirements into smooth, intuitive web operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-sm text-slate-500">To deliver performant web apps that elevate daily operational metrics.</p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Our Value</h3>
            <p className="text-sm text-slate-500">Writing clean, maintainable codebases built strictly to web standards.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}