import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { classes } from '../data/classes';

export default function ClassDetail() {
  const { classId } = useParams<{ classId: string }>();
  const navigate = useNavigate();
  
  const classItem = classes.find((c) => c.id === classId);

  if (!classItem) {
    return (
      <div className="pt-32 pb-20 bg-bg-light min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Icons.AlertCircle className="mx-auto text-accent mb-4" size={64} />
          <h2 className="font-display font-bold text-2xl text-text-dark mb-2">Class Not Found</h2>
          <p className="text-text-muted mb-6">
            The class details you are looking for are unavailable or have been updated.
          </p>
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <Icons.ArrowLeft size={18} />
            Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  // Safe icon lookup
  const IconComponent = (Icons as any)[classItem.icon] || Icons.BookOpen;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Color mapping based on category
  const themeColor = classItem.category === 'academic' ? '#61039f' : classItem.category === 'skill' ? '#7B1FA2' : '#E53935';
  const themeBgLight = classItem.category === 'academic' ? 'rgba(97, 3, 159, 0.05)' : classItem.category === 'skill' ? 'rgba(123, 31, 162, 0.05)' : 'rgba(229, 57, 53, 0.05)';

  const handleEnrollClick = () => {
    // Navigate to contact page and pre-fill class
    navigate(`/contact?class=${encodeURIComponent(classItem.title)}`, {
      state: { selectedClass: classItem.title }
    });
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 md:pt-28 pb-20 bg-bg-light min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary font-semibold transition-colors group"
          >
            <Icons.ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Classes
          </Link>
        </div>

        {/* Dynamic Class Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Info Columns (8 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: themeColor }}></div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-text-muted">
                  {classItem.category} Class
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${classItem.color}`}>
                  {classItem.badge}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div
                  className="p-5 rounded-2xl shrink-0"
                  style={{ backgroundColor: themeBgLight, color: themeColor }}
                >
                  <IconComponent size={40} />
                </div>
                <div>
                  <h1 className="font-display font-bold text-3xl md:text-4xl text-text-dark mb-4">
                    {classItem.title}
                  </h1>
                  <p className="text-text-muted text-base leading-relaxed">
                    {classItem.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Curriculum/Syllabus */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl">
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-dark mb-6 flex items-center gap-3">
                <Icons.BookOpenCheck style={{ color: themeColor }} size={24} />
                Class Curriculum & Topics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classItem.curriculum.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-bg-light border border-gray-100 hover:border-primary/10 transition-colors"
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                      style={{ backgroundColor: themeBgLight, color: themeColor }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-text-dark font-medium leading-relaxed mt-0.5">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl">
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-dark mb-6 flex items-center gap-3">
                <Icons.Sparkles style={{ color: themeColor }} size={24} />
                Key Learning Outcomes
              </h3>
              <div className="space-y-4">
                {classItem.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="p-1 rounded-full shrink-0 mt-0.5"
                      style={{ backgroundColor: themeBgLight, color: themeColor }}
                    >
                      <Icons.Check size={16} strokeWidth={3} />
                    </div>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Sidebar Info (4 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            
            {/* Quick Info Box */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl space-y-6">
              <h4 className="font-display font-bold text-lg text-text-dark border-b border-gray-100 pb-3">
                Class Information
              </h4>

              {/* Duration */}
              <div className="flex items-start gap-3">
                <Icons.Clock className="text-text-muted mt-0.5 shrink-0" size={18} />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-text-dark">
                    {classItem.duration}
                  </span>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-3">
                <Icons.Calendar className="text-text-muted mt-0.5 shrink-0" size={18} />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Class Schedule
                  </span>
                  <span className="text-sm font-bold text-text-dark leading-relaxed">
                    {classItem.schedule}
                  </span>
                </div>
              </div>

              {/* Category type */}
              <div className="flex items-start gap-3">
                <Icons.Layers className="text-text-muted mt-0.5 shrink-0" size={18} />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Division
                  </span>
                  <span className="text-sm font-bold text-text-dark capitalize">
                    {classItem.category} Coaching
                  </span>
                </div>
              </div>

              {/* Target Age / Badge */}
              <div className="flex items-start gap-3">
                <Icons.Users2 className="text-text-muted mt-0.5 shrink-0" size={18} />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Target Group
                  </span>
                  <span className="text-sm font-bold text-text-dark">
                    {classItem.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick CTA Box */}
            <div
              className="rounded-3xl p-6 text-center border shadow-xl relative overflow-hidden flex flex-col justify-between"
              style={{ backgroundColor: themeBgLight, borderColor: themeColor + '20' }}
            >
              <div className="relative z-10">
                <h4 className="font-display font-bold text-xl text-text-dark mb-2">
                  Interested in this Class?
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  Get details about batch sizes, fee structure, and book a free trial session today.
                </p>
                <button
                  onClick={handleEnrollClick}
                  className="w-fit mx-auto text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: themeColor }}
                >
                  <Icons.ArrowUpRight size={18} />
                  Enroll Now
                </button>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.main>
  );
}
