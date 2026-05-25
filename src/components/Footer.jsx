import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <Link to="/" className="text-xl font-bold text-white tracking-tight">
            Client<span className="text-indigo-400">Logo</span>
          </Link>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Building high-performance digital experiences tailored to scale your business.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Email: hello@clientdomain.com</li>
            <li>Phone: +234 (0) 80 0000 0000</li>
            <li>Office: Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {currentYear} ClientLogo. All rights reserved. Built by Jonathan.
      </div>
    </footer>
  );
}