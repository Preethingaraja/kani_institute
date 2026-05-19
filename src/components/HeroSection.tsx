import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <section className="relative min-h-screen pt-20 md:pt-28 pb-16 flex items-center bg-gradient-to-br from-[#F5F7FF] via-white to-[#E8ECFF] overflow-hidden">
      {/* Floating Animated Background Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left"
          >
            {/* Quality Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white border border-primary/20 shadow-md px-4 py-2 rounded-full">
              <Award className="text-[#D4AF37]" size={20} />
              <span className="text-xs md:text-sm font-semibold text-primary tracking-wide">
                Salem's Premier Learning & Activity Center
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-dark leading-tight"
            >
              Unlock Your Child's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Full Potential
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed"
            >
              Salem's most trusted learning and activity center. We combine rigorous academic coaching with creative arts and life skills to shape tomorrow's leaders.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/classes"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary/95 transition-all shadow-lg hover:shadow-primary/30 hover:scale-105 flex items-center gap-2 group"
              >
                Explore Classes
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-text-dark border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-md hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6 scale-102 opacity-20 blur-lg animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative border-4 border-white bg-white shadow-2xl rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                  alt="Students learning happily at Kani Institute"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
                className="absolute -bottom-6 -left-6 bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-text-dark leading-none">15+ Years</h4>
                  <p className="text-xs text-text-muted">Educational Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
