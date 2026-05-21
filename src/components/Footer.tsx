import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full wave-divider transform rotate-180 text-bg-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo size={36} light={true} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Salem's premier destination for holistic child development, offering academic tuition, skill development, and performing arts classes.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="Facebook: Mekala Mani">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="Instagram: Kani Institute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Classes', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Classes */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 relative inline-block">
              Popular Classes
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Primary Tuition (1-5)', path: '/classes/acad-1' },
                { title: 'High School (9-10)', path: '/classes/acad-3' },
                { title: 'Spoken Hindi', path: '/classes/skill-3' },
                { title: 'Abacus & Vedic Maths', path: '/classes/skill-8' },
                { title: 'Classical Dance', path: '/classes/art-1' },
                { title: 'Keyboard & Guitar', path: '/classes/art-4' }
              ].map((item) => (
                <li key={item.title}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>123/59, Kanagaraja Ganapathy Street,<br/>Ponnammapet, Salem - 636001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:9442969593" className="hover:text-white transition-colors">94429 69593</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:kaniinstitute28@gmail.com" className="hover:text-white transition-colors">kaniinstitute28@gmail.com</a>
              </li>
              {/* Online / Offline badge */}
              <li className="pt-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Classes Available</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Online
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Offline
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kani Institute. All Rights Reserved.</p>
          <p>Salem's Premier Learning & Activity Center</p>
        </div>
      </div>
    </footer>
  );
}
