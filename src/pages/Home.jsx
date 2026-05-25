import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
};

const word = "Experience";

// Variants for the parent container to control the delay between each letter
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
  }),
};

// Variants for each individual character
const child = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
        Modern Web <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className='text-indigo-800'
        >
          {word.split("").map((char, index) => (
            <motion.span variants={child} key={index}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        Welcome to your new production-grade client project. Built clean, fast, and fully interactive.
      </p>
    </motion.div>
  );
}