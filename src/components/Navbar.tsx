import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileClassesOpen, setMobileClassesOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileClassesOpen(false);
  }, [location.pathname]);

  const academicClasses = [
    { name: 'Primary School (1-5)', path: '/classes/acad-1' },
    { name: 'Middle School (6-8)', path: '/classes/acad-2' },
    { name: 'High School (9-10)', path: '/classes/acad-3' },
  ];

  const skillClasses = [
    { name: 'Abacus Coaching', path: '/classes/skill-8' },
    { name: 'Chess Coaching', path: '/classes/skill-1' },
    { name: 'Spoken Hindi & English', path: '/classes/skill-3' },
    { name: 'Drawing & Painting', path: '/classes/skill-5' },
  ];

  const artClasses = [
    { name: 'Classical Dance', path: '/classes/art-1' },
    { name: 'Keyboard & Guitar', path: '/classes/art-4' },
    { name: 'Violin Instruction', path: '/classes/art-5' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo size={36} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center space-x-8">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`font-medium text-sm transition-colors hover:text-accent relative group ${
                    location.pathname === '/' ? 'text-accent' : 'text-text-dark'
                  }`}
                >
                  Home
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>

              {/* About */}
              <li>
                <Link
                  to="/about"
                  className={`font-medium text-sm transition-colors hover:text-accent relative group ${
                    location.pathname === '/about' ? 'text-accent' : 'text-text-dark'
                  }`}
                >
                  About
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>

              {/* Classes Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`font-medium text-sm transition-colors hover:text-accent flex items-center gap-1 cursor-pointer py-2 ${
                    location.pathname.startsWith('/classes') ? 'text-accent' : 'text-text-dark'
                  }`}
                >
                  Classes
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Megamenu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[650px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-50 grid grid-cols-3 gap-6"
                    >
                      {/* Column 1 */}
                      <div>
                        <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-3">
                          Academic Coaching
                        </h4>
                        <ul className="space-y-2">
                          {academicClasses.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="text-sm text-text-muted hover:text-primary transition-colors block py-0.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h4 className="font-display font-bold text-xs uppercase tracking-wider text-secondary mb-3">
                          Skill Coaching
                        </h4>
                        <ul className="space-y-2">
                          {skillClasses.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="text-sm text-text-muted hover:text-secondary transition-colors block py-0.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h4 className="font-display font-bold text-xs uppercase tracking-wider text-accent mb-3">
                          Arts & Music
                        </h4>
                        <ul className="space-y-2">
                          {artClasses.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                className="text-sm text-text-muted hover:text-accent transition-colors block py-0.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* All Classes CTA Row */}
                      <div className="col-span-3 border-t border-gray-100 pt-4 mt-2 flex justify-between items-center">
                        <span className="text-xs text-text-muted">
                          Salem's premium tutor center
                        </span>
                        <Link
                          to="/classes"
                          className="text-xs font-bold text-primary hover:text-primary/95 flex items-center gap-1"
                        >
                          View All Classes →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={`font-medium text-sm transition-colors hover:text-accent relative group ${
                    location.pathname === '/contact' ? 'text-accent' : 'text-text-dark'
                  }`}
                >
                  Contact
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>
            </ul>

            <Link
              to="/contact"
              className="bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="/"
                    className={`block font-semibold text-base py-1.5 ${
                      location.pathname === '/' ? 'text-accent' : 'text-text-dark'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`block font-semibold text-base py-1.5 ${
                      location.pathname === '/about' ? 'text-accent' : 'text-text-dark'
                    }`}
                  >
                    About
                  </Link>
                </li>

                {/* Mobile Collapsible Classes Submenu */}
                <li>
                  <button
                    onClick={() => setMobileClassesOpen(!mobileClassesOpen)}
                    className={`w-full text-left font-semibold text-base py-1.5 flex items-center justify-between cursor-pointer ${
                      location.pathname.startsWith('/classes') ? 'text-accent' : 'text-text-dark'
                    }`}
                  >
                    Classes
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileClassesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileClassesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-4 border-l border-gray-100 overflow-hidden"
                      >
                        {/* Acad */}
                        <div>
                          <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                            Academic Coaching
                          </span>
                          <div className="space-y-2">
                            {academicClasses.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block text-sm text-text-muted hover:text-primary py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Skill */}
                        <div>
                          <span className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                            Skill Coaching
                          </span>
                          <div className="space-y-2">
                            {skillClasses.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block text-sm text-text-muted hover:text-secondary py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Arts */}
                        <div>
                          <span className="block text-xs font-bold text-accent uppercase tracking-wider mb-2">
                            Arts & Music
                          </span>
                          <div className="space-y-2">
                            {artClasses.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block text-sm text-text-muted hover:text-accent py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <Link
                          to="/classes"
                          className="block text-xs font-bold text-primary pt-2 border-t border-gray-100"
                        >
                          View All Classes →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className={`block font-semibold text-base py-1.5 ${
                      location.pathname === '/contact' ? 'text-accent' : 'text-text-dark'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              <Link
                to="/contact"
                className="w-fit bg-accent text-white px-8 py-3 rounded-xl font-semibold text-center mt-2 shadow-md hover:bg-accent/90 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
