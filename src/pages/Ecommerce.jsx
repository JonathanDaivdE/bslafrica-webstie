import { easeOut, motion } from "framer-motion";

const pageVariants= {
    initial: { opacity:0, y:15 },
    animate: { opacity:1, y:0, transition: {duration: 0.3, ease: "easeOut"} },
    exit: { opacity:0, y:-15, transition: {duration: 0.4, ease: "easeIn"} }
}

export default function Ecommerce() {
  const features = [
    "Optimized Single-Page Checkout Streams",
    "Secure Payment Gateway Gateways (Stripe, Paystack)",
    "Live Inventory and Order Webhooks",
    "Automated Abandoned Cart Notifications"
  ];

  return (
    <motion.section 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-slate-50 py-16 px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Content Box */}
        <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Commerce
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight">
              Engineered to Turn Visitors into Buyers
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Slow stores kill profit margins. We build lightweight e-commerce frameworks completely independent of heavy legacy plugins, ensuring instantaneous catalog sorting and layout responses.
            </p>
          </div>

          {/* Clean Checkmark Feature List */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary Metric/Highlight Box */}
        <div className="lg:col-span-5 bg-linear-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">The Speed Advantage</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Every 100ms drop in load velocity increases overall user checkout interactions by up to 7%.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-800/60">
            <div className="text-4xl font-extrabold text-indigo-400">99+</div>
            <div className="text-xs tracking-wide uppercase text-indigo-200 mt-1">
              Average Lighthouse Performance Score Target
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}