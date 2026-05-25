import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
};

const serviceList = [
  { link: "/services/webdev", title: 'Full-Stack Web Dev', desc: 'Custom web application engineering using fast, highly responsive UI frameworks.' },
  { link: "/services/ecommerce", title: 'E-Commerce Engines', desc: 'Secure online store configurations engineered for maximum checkout conversion.' },
  { link: "/services/design", title: 'UI/UX Interactive Prototyping', desc: 'Polished layouts matching brand aesthetics with smooth operational logic.' },
];

export default function Services() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">Expertise</span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">What We Do Best</h1>
        <p className="text-slate-600">Tailored digital solutions engineered to fix architectural bottlenecks and scale user retention.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-6">
                0{index + 1}
              </div>
              <Link to={service.link} className="text-xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">{service.title}</Link>
              <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}