import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, GraduationCap, HeartHandshake, ArrowRight, Palette, BookOpen, Music, Languages, Lightbulb, Activity } from 'lucide-react';
import founderImg from '../assets/founder.png';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ClassCard from '../components/ClassCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CTABanner from '../components/CTABanner';
import { classes } from '../data/classes';

export default function Home() {
  // Stagger reveal animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Get 6 featured classes
  const featuredClasses = classes.slice(0, 6);

  const whyChooseUs = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      desc: "Headed by Mrs. Mekala Manikandan, M.Sc. (Maths), B.Ed., B.A. (Hindi), with years of teaching experience.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: HeartHandshake,
      title: "Personal Attention",
      desc: "We maintain optimal student-teacher ratios to ensure every student gets individual care and guidance.",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: ShieldCheck,
      title: "Holistic Development",
      desc: "Balanced education that integrates core school academics with visual arts, music, languages, and life skills.",
      color: "text-accent bg-accent/10"
    },
    {
      icon: Users,
      title: "Proven Results",
      desc: "A track record of excellence in academics and competitive performance, serving 500+ happy students.",
      color: "text-gold bg-gold/10"
    }
  ];

  const categoryFeatures = [
    { title: "Academic", icon: BookOpen, desc: "Classes 1 to 12 support, major board syllabi covered.", bg: "bg-blue-50 text-blue-600" },
    { title: "Arts & Crafts", icon: Palette, desc: "Drawing, painting, and visual arts classes.", bg: "bg-pink-50 text-pink-600" },
    { title: "Performing Arts", icon: Music, desc: "Keyboard, Guitar, Classical & Western Dance.", bg: "bg-purple-50 text-purple-600" },
    { title: "Languages", icon: Languages, desc: "Hindi, French, Japanese, and Spoken English.", bg: "bg-orange-50 text-orange-600" },
    { title: "Mental Math & Skills", icon: Lightbulb, desc: "Abacus, Vedic Maths, Chess, Handwriting.", bg: "bg-yellow-50 text-yellow-600" },
    { title: "Music & Vocal", icon: Activity, desc: "Flute, vocal training, and keyboard music.", bg: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar />

      {/* About Snapshot */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-10 pb-20 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block text-sm font-accent tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                About Kani Institute
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark leading-tight mt-3">
                Salem's Most Trusted Learning Center Since 2011
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                Kani Institute is an ISO 9001:2015 certified tutoring and activity center located in Salem, Tamil Nadu. Founded and directed by <strong>Mrs. Mekala Manikandan</strong>, our mission is to empower children to achieve academic excellence and develop creative talents.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                We believe in providing a stress-free learning environment that builds confidence, improves problem-solving abilities, and fosters lifelong curiosity.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  Read Our Full Story
                  <ArrowRight size={18} />
                </Link>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    🌐 Online
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    🏫 Offline
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-3xl transform -rotate-3 scale-102 opacity-15"></div>
                <div className="relative border-4 border-white bg-white shadow-2xl rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src={founderImg}
                    alt="Mrs. Mekala Manikandan"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Overlay Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100 text-left">
                    <h4 className="font-display font-bold text-lg text-text-dark">Mrs. Mekala Manikandan</h4>
                    <p className="text-xs text-text-muted font-medium mb-1">M.Sc. (Maths), B.Ed., B.A. (Hindi)</p>
                    <p className="text-[10px] uppercase font-bold text-accent tracking-wider">Founder & Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-20 bg-[#F5F7FF]"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-accent tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full">
              Explore Our Programs
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark mt-4">
              Featured Classes & Activities
            </h2>
            <p className="text-text-muted mt-2">
              We offer highly engaging classes designed to nurture both intellect and creative arts.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map((item) => (
              <ClassCard key={item.id} classItem={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/classes"
              className="bg-secondary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-secondary/95 transition-all shadow-lg hover:shadow-secondary/35 inline-flex items-center gap-2 group cursor-pointer"
            >
              View All Classes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-accent tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark mt-4">
              Providing Exceptional Standard of Education
            </h2>
            <p className="text-text-muted mt-2">
              We aim to develop well-rounded students who are confident, analytical, and highly competent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-bg-light border border-gray-100 rounded-2xl p-6 text-left hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Category Grid Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-20 bg-[#F5F7FF] relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark">
              Holistic Growth Categories
            </h2>
            <p className="text-text-muted mt-2">
              Our expansive learning and performance offerings categories cover everything a growing child needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryFeatures.map((cat, index) => {
              const IconComp = cat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className={`p-3 rounded-xl shrink-0 ${cat.bg}`}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-text-dark mb-1">{cat.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Banner */}
      <CTABanner />
    </main>
  );
}
