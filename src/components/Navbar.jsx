import { Link } from 'react-router-dom';
import { motion, spring } from 'framer-motion';

const dropdownVarients = {
  initial: { 
    opacity: 0, 
    y: 2,
    pointerEvents: "none",
  },
  hover: { 
    opacity: 1, 
    y: 0, 
    pointerEvents: "auto",
    transition: { 
      type: "spring", 
      stiffness: 700,
      mass: 0.2,
    } 
  }
}

export default function Navbar() {
  return (
    <motion.nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">Client<span className="text-slate-900">Logo</span></Link>
      <div className="flex gap-6 font-medium text-slate-600">
        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
        <motion.div
        initial="initial"
        whileHover="hover"
        className='relative'>
          <Link to="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
          <motion.div
          variants={dropdownVarients} 
          className="absolute flex flex-col gap-0.5 whitespace-nowrap border-2 border-slate-300 shadow bg-white rounded-xl p-2.5 -left-1/2 -translate-x-1 transition-all">
            <Link to="/services/webdev" className="hover:text-indigo-600 transition-colors">Full-Stack Web Dev</Link>
            <Link to="/services/ecommerce" className="hover:text-indigo-600 transition-colors">E-Commerce Engines</Link>
            <Link to="/services/design" className="whitespace-normal leading-none hover:text-indigo-600 transition-colors">UI/UX Interactive Prototyping</Link>
          </motion.div>
        </motion.div>
        <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
      </div>
    </motion.nav>
  );
}