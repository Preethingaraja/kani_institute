import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Award, Mail, Globe, Camera } from 'lucide-react';

export default function About() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreCards = [
    {
      icon: Target,
      title: 'Our Vision',
      desc: 'To shape confident, skilled, and academically sound individuals who excel in both standard curriculums and creative disciplines.',
      color: 'border-t-primary bg-blue-50/50',
      iconColor: 'text-primary bg-primary/10',
    },
    {
      icon: Compass,
      title: 'Our Mission',
      desc: 'To deliver customized academic support and modern training in languages, mental maths, and visual & performing arts within an engaging environment.',
      color: 'border-t-secondary bg-purple-50/50',
      iconColor: 'text-secondary bg-secondary/10',
    },
    {
      icon: Sparkles,
      title: 'Our Values',
      desc: 'Committed to child-centric development, personal integrity, excellence, continuous growth, and respecting each individual student’s unique pace.',
      color: 'border-t-accent bg-red-50/50',
      iconColor: 'text-accent bg-accent/10',
    },
  ];

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 md:pt-28 pb-20 bg-bg-light"
    >
      {/* Intro Header */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-4xl">
        <motion.span variants={itemVariants} className="inline-block text-sm font-accent tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
          About Kani Institute
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-4xl md:text-5xl text-text-dark mt-4 mb-4"
        >
          Dedicated to Enriching Young Minds
        </motion.h1>
        <motion.p variants={itemVariants} className="text-text-muted text-base md:text-lg leading-relaxed">
          Kani Institute is an educational tutoring and activity center located in the heart of Salem. We focus on academic excellence, skill acquisition, and performing arts to deliver holistic mental development.
        </motion.p>
      </section>

      {/* ISO Certification Highlight */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Floating background blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-blob"></div>

          <div className="space-y-4 relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full border border-white/20">
              <Award className="text-gold shrink-0" size={18} />
              <span className="text-xs font-bold tracking-wider uppercase">ISO 9001:2015 Certified</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl">Standardized Excellence In Education</h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Our tutoring modules, training systems, and student evaluation guidelines comply with ISO 9001:2015 quality standards. This guarantees high organizational quality and structured, successful progress tracking for your child.
            </p>
          </div>
          <div className="shrink-0 relative z-10 bg-white text-primary p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center w-40 h-40">
            <span className="font-accent text-3xl font-bold tracking-wide">ISO</span>
            <span className="text-xs font-extrabold tracking-widest uppercase text-text-muted mt-1">9001:2015</span>
            <span className="text-[10px] font-bold text-accent mt-2">CERTIFIED</span>
          </div>
        </motion.div>
      </section>

      {/* Teacher Profile Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20 bg-white py-16 rounded-3xl border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-secondary rounded-3xl transform rotate-3 scale-102 opacity-20"></div>
              <div className="relative border-4 border-white bg-white shadow-2xl rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600"
                  alt="Mrs. Mekala Manikandan Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div variants={itemVariants} className="space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Leadership</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark mt-2">
                Mrs. Mekala Manikandan
              </h2>
              <p className="text-sm font-semibold text-primary mt-1">
                Founder, Managing Director & Head Instructor
              </p>
              <div className="h-1 w-20 bg-accent rounded-full mt-4"></div>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-text-dark">Qualifications</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  M.Sc.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  B.Ed.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  PGDCA
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  B.A. (Hindi)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-text-dark">Our Mission & Approach</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                With a robust background across academic disciplines, computing applications, and multilingual capabilities (B.A. Hindi), Mrs. Mekala Manikandan guides a group of elite, dedicated instructors.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Her primary mission is to create a dynamic platform where educational theory meets action. She works to guide each child towards critical conceptual mastery, artistic flexibility, and confidence.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
                  title="Facebook: Mekala Mani"
                >
                  <Globe size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-white hover:bg-secondary hover:border-secondary transition-all"
                  title="Instagram: Kani Institute"
                >
                  <Camera size={16} />
                </a>
                <a
                  href="mailto:mekalammks@gmail.com"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-white hover:bg-accent hover:border-accent transition-all"
                  title="Email: mekalammks@gmail.com"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story, Vision, Mission, Values */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-white border-t-4 ${card.color} p-8 rounded-2xl shadow-md flex flex-col items-center text-center`}
              >
                <div className={`p-4 rounded-2xl ${card.iconColor} mb-6`}>
                  <IconComp size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-text-dark mb-4">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
}
