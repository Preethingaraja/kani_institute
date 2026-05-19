import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { classes, type ClassCategory } from '../data/classes';
import ClassCard from '../components/ClassCard';

export default function Classes() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ClassCategory>('all');

  const filterTabs: { label: string; value: 'all' | ClassCategory }[] = [
    { label: 'All Classes', value: 'all' },
    { label: 'Academic Tuition', value: 'academic' },
    { label: 'Skill & Development', value: 'skill' },
    { label: 'Arts & Music', value: 'arts' },
  ];

  const filteredClasses = classes.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <main className="pt-20 md:pt-28 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-sm font-accent tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full">
            Our Offerings
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text-dark mt-4 mb-4">
            Diverse Classes for Total Growth
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            From critical academic tuition for primary and higher secondary school levels to abacus, visual arts, and professional classical music.
          </p>
        </section>

        {/* Academic Tuition Notification Banner */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center text-primary">
            <h3 className="font-display font-bold text-lg md:text-xl mb-1">Academic Tuition Support</h3>
            <p className="text-sm md:text-base opacity-90 leading-relaxed">
              Classes 1 to 10 - All Subjects | 11th & 12th - Maths, Physics, Chemistry, Accountancy
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden cursor-pointer ${
                selectedFilter === tab.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-muted hover:text-text-dark border border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              {tab.label}
              {selectedFilter === tab.value && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </section>

        {/* Dynamic Classes Grid */}
        <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ClassCard classItem={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Empty state (fallback) */}
        {filteredClasses.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-text-muted text-base">No classes found matching this category.</p>
          </div>
        )}

      </div>
    </main>
  );
}
