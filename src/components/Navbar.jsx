import { Link } from 'react-router-dom';
import { motion, spring, AnimatePresence } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const dropdownVarients = {
  initial: { 
    opacity: 0, 
    y: 1,
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

const mobileMenuVariants = {
  closed: { 
    x: "100%", 
    opacity: 0, 
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 40 
    } 
  },
  open: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, damping: 30 
    } 
  }
};

const overlayVariant = {
  closed: {opacity: 0},
  open: {opacity: 1}
}

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <motion.nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">Client<span className="text-slate-900">Logo</span></Link>
      <div className="hidden lg:flex gap-6 font-medium text-slate-600">
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

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {/* Hamburger Icon */}
        <div className="z-50 lg:hidden">
          <Hamburger 
          toggled={isOpened} 
          toggle={setIsOpened} 
          color='rgb(15, 23, 42)' 
          rounded 
          key={"box"}/>
        </div>

        {isOpened && (<motion.div
          variants={overlayVariant}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 h-screen bg-slate-950/40 backdrop-blur-md z-30 md:hidden"
          onClick={() => setIsOpened(false)}
          key={3}
        />)}

        {isOpened && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl shadow-indigo-400 p-6 flex flex-col gap-6 lg:hidden z-40 pt-24"
            key={"boy"}
          >
            <Link to="/" onClick={() => setIsOpened(false)} className="text-lg">Home</Link>
            <Link to="/about" onClick={() => setIsOpened(false)} className="text-lg">About</Link>
            <div>
              <Link to="/services" onClick={() => setIsOpened(false)} className="text-lg">Services</Link>
              <motion.div
              className='flex flex-col pt-2'>
              <Link to="/services/webdev" onClick={() => setIsOpened(false)} className="text-md">Full-Stack Web Dev</Link>
              <Link to="/services/ecommerce" onClick={() => setIsOpened(false)} className="text-md">E-Commerce Engines</Link>
              <Link to="/services/design" onClick={() => setIsOpened(false)} className="text-md">UI/UX Interactive Prototyping</Link>
              </motion.div>
            </div>
            <Link to="/contact" onClick={() => setIsOpened(false)} className="text-lg">Contact</Link>
            <div className="flex-1" />
              <Link to="/" className="text-right text-xl font-bold text-indigo-600">
                Client<span className="text-slate-900">Logo</span>
              </Link>
          </motion.div>
        )}
      </AnimatePresence>


      </motion.nav>
  );
}