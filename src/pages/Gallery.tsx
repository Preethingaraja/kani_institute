import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all gallery images
import img1 from '../assets/State level Abacus competition @Trichy.jpeg';
import img2 from '../assets/Summercamp.jpeg';
import img3 from '../assets/Tuition.jpeg';
import img4 from '../assets/Spoken English class.jpeg';
import img5 from '../assets/Classical dance 2025.png';
import img6 from '../assets/Summercamp1.jpeg';
import img7 from '../assets/Krishna Jayanthi classical dance.jpeg';
import img8 from '../assets/Abacus world record event.jpeg';
import img9 from '../assets/Tuition1.jpeg';
import img10 from '../assets/Vijayadhasami classical dance.jpeg';
import img11 from '../assets/Guitar class.jpeg';
import img12 from '../assets/Keyboard class.jpeg';
import img13 from '../assets/Tuition class 10 and 12th.jpeg';
import img14 from '../assets/Tuition2.jpeg';
import img15 from '../assets/Tuition 12th 2025.jpeg';
import img16 from '../assets/Abacus competition trichy.jpeg';
import img17 from '../assets/Hindi exam.jpeg';
import img18 from '../assets/State level Abacus competition 2025.jpeg';
import img19 from '../assets/State level Abacus competition 20251.jpeg';
import img20 from '../assets/Tuition3.jpeg';
import img21 from '../assets/12th tuition.jpeg';
import img22 from '../assets/12th tuition1.jpeg';
import img23 from '../assets/12th tuition2.jpeg';
import img24 from '../assets/Spoken English class1.jpeg';
import img25 from '../assets/Classical dance.jpeg';
import img26 from '../assets/National level Abacus competition.jpeg';
import img27 from '../assets/Summercamp 2025.jpeg';
import img28 from '../assets/World record event.jpeg';
import img29 from '../assets/Chess district tournament.jpeg';
import img30 from '../assets/Salem district level tournament.jpeg';
import img31 from '../assets/Chess tournament.jpeg';
import img32 from '../assets/Chess.jpeg';
import img33 from '../assets/Abacus.jpeg';
import img34 from '../assets/Classical dance program.jpeg';
import img35 from '../assets/National level Abacus competition.png';
import img36 from '../assets/Drawing.jpeg';
import img37 from '../assets/Drawing1.jpeg';
import img38 from '../assets/Tuition.png';
import img39 from '../assets/Chess FIDE players.jpeg';
import img40 from '../assets/Chess.png';
import img41 from '../assets/International book of records abacus competition.png';
import img42 from '../assets/Board exam preparation.jpeg';
import img43 from '../assets/New year celebration.jpeg';
import img44 from '../assets/New year celebration1.jpeg';
import img45 from '../assets/New year celebration.png';
import img46 from '../assets/New year celebration2.jpeg';
import img47 from '../assets/Classical dance program1.jpeg';
import img48 from '../assets/Classical dance program2.jpeg';
import img49 from '../assets/Chess state level tournament.jpeg';
import img50 from '../assets/Drawing Competition winner.jpeg';
import img51 from '../assets/Chess district level competition.jpeg';
import img52 from '../assets/Abacus International book of records.jpeg';
import img53 from '../assets/Abacus International of records winner.jpeg';
import img54 from '../assets/State level chess tournament winner.jpeg';
import img55 from '../assets/Summer camp.jpeg';
import img56 from '../assets/Tuition4.jpeg';
import img57 from '../assets/Tuition5.jpeg';
import img58 from '../assets/Chess students.jpeg';
import img59 from '../assets/Sharing day.jpeg';
import img60 from '../assets/Abacus International level competition.png';
import img61 from '../assets/Abacus champions.png';
import img62 from '../assets/Got best center award.png';

type Category = 'All' | 'Academic' | 'Abacus' | 'Dance' | 'Music' | 'Language' | 'Events' | 'Sports' | 'Arts';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  { id: 1,  src: img1,  title: 'State Level Abacus Competition @ Trichy', category: 'Abacus' },
  { id: 2,  src: img2,  title: 'Summer Camp',                              category: 'Events' },
  { id: 3,  src: img3,  title: 'Tuition',                                  category: 'Academic' },
  { id: 4,  src: img4,  title: 'Spoken English Class',                     category: 'Language' },
  { id: 5,  src: img5,  title: 'Classical Dance 2025',                     category: 'Dance' },
  { id: 6,  src: img6,  title: 'Summer Camp',                              category: 'Events' },
  { id: 7,  src: img7,  title: 'Krishna Jayanthi Classical Dance',         category: 'Dance' },
  { id: 8,  src: img8,  title: 'Abacus World Record Event',                category: 'Abacus' },
  { id: 9,  src: img9,  title: 'Tuition',                                  category: 'Academic' },
  { id: 10, src: img10, title: 'Vijayadasami Classical Dance',             category: 'Dance' },
  { id: 11, src: img11, title: 'Guitar Class',                             category: 'Music' },
  { id: 12, src: img12, title: 'Keyboard Class',                           category: 'Music' },
  { id: 13, src: img13, title: 'Tuition - Class 10 & 12',                  category: 'Academic' },
  { id: 14, src: img14, title: 'Tuition',                                  category: 'Academic' },
  { id: 15, src: img15, title: 'Tuition 12th 2025',                        category: 'Academic' },
  { id: 16, src: img16, title: 'Abacus Competition - Trichy',              category: 'Abacus' },
  { id: 17, src: img17, title: 'Hindi Exam',                               category: 'Language' },
  { id: 18, src: img18, title: 'State Level Abacus Competition 2025',      category: 'Abacus' },
  { id: 19, src: img19, title: 'State Level Abacus Competition 2025',      category: 'Abacus' },
  { id: 20, src: img20, title: 'Tuition',                                  category: 'Academic' },
  { id: 21, src: img21, title: '12th Tuition',                             category: 'Academic' },
  { id: 22, src: img22, title: '12th Tuition',                             category: 'Academic' },
  { id: 23, src: img23, title: '12th Tuition',                             category: 'Academic' },
  { id: 24, src: img24, title: 'Spoken English Class',                     category: 'Language' },
  { id: 25, src: img25, title: 'Classical Dance',                          category: 'Dance' },
  { id: 26, src: img26, title: 'National Level Abacus Competition',        category: 'Abacus' },
  { id: 27, src: img27, title: 'Summer Camp 2025',                         category: 'Events' },
  { id: 28, src: img28, title: 'World Record Event',                       category: 'Events' },
  { id: 29, src: img29, title: 'Chess District Tournament', category: 'Sports' },
  { id: 30, src: img30, title: 'Salem District Level Tournament', category: 'Sports' },
  { id: 31, src: img31, title: 'Chess Tournament', category: 'Sports' },
  { id: 32, src: img32, title: 'Chess', category: 'Sports' },
  { id: 33, src: img33, title: 'Abacus', category: 'Abacus' },
  { id: 34, src: img34, title: 'Classical Dance Program', category: 'Dance' },
  { id: 35, src: img35, title: 'National Level Abacus Competition', category: 'Abacus' },
  { id: 36, src: img36, title: 'Drawing', category: 'Arts' },
  { id: 37, src: img37, title: 'Drawing', category: 'Arts' },
  { id: 38, src: img38, title: 'Tuition', category: 'Academic' },
  { id: 39, src: img39, title: 'Chess FIDE Players', category: 'Sports' },
  { id: 40, src: img40, title: 'Chess', category: 'Sports' },
  { id: 41, src: img41, title: 'International Book of Records Abacus Competition', category: 'Abacus' },
  { id: 42, src: img42, title: 'Board Exam Preparation', category: 'Academic' },
  { id: 43, src: img43, title: 'New Year Celebration', category: 'Events' },
  { id: 44, src: img44, title: 'New Year Celebration', category: 'Events' },
  { id: 45, src: img45, title: 'New Year Celebration', category: 'Events' },
  { id: 46, src: img46, title: 'New Year Celebration', category: 'Events' },
  { id: 47, src: img47, title: 'Classical Dance Program', category: 'Dance' },
  { id: 48, src: img48, title: 'Classical Dance Program', category: 'Dance' },
  { id: 49, src: img49, title: 'Chess State Level Tournament', category: 'Sports' },
  { id: 50, src: img50, title: 'Drawing Competition Winner', category: 'Arts' },
  { id: 51, src: img51, title: 'Chess District Level Competition', category: 'Sports' },
  { id: 52, src: img52, title: 'Abacus International Book of Records', category: 'Abacus' },
  { id: 53, src: img53, title: 'Abacus International of Records Winner', category: 'Abacus' },
  { id: 54, src: img54, title: 'State Level Chess Tournament Winner', category: 'Sports' },
  { id: 55, src: img55, title: 'Summer Camp', category: 'Events' },
  { id: 56, src: img56, title: 'Tuition', category: 'Academic' },
  { id: 57, src: img57, title: 'Tuition', category: 'Academic' },
  { id: 58, src: img58, title: 'Chess Students', category: 'Sports' },
  { id: 59, src: img59, title: 'Sharing Day', category: 'Events' },
  { id: 60, src: img60, title: 'Abacus International Level Competition', category: 'Abacus' },
  { id: 61, src: img61, title: 'Abacus Champions', category: 'Abacus' },
  { id: 62, src: img62, title: 'Got Best Center Award', category: 'Events' },
];

const categories: Category[] = ['All', 'Academic', 'Abacus', 'Dance', 'Music', 'Language', 'Events', 'Sports', 'Arts'];

const categoryColors: Record<Category, string> = {
  All:      'bg-primary text-white border-primary',
  Academic: 'bg-blue-500 text-white border-blue-500',
  Abacus:   'bg-yellow-500 text-white border-yellow-500',
  Dance:    'bg-pink-500 text-white border-pink-500',
  Music:    'bg-purple-500 text-white border-purple-500',
  Language: 'bg-orange-500 text-white border-orange-500',
  Events:   'bg-emerald-500 text-white border-emerald-500',
  Sports:   'bg-red-500 text-white border-red-500',
  Arts:     'bg-indigo-500 text-white border-indigo-500',
};

const categoryInactive: Record<Category, string> = {
  All:      'border-primary/30 text-primary hover:bg-primary/10',
  Academic: 'border-blue-300 text-blue-600 hover:bg-blue-50',
  Abacus:   'border-yellow-300 text-yellow-600 hover:bg-yellow-50',
  Dance:    'border-pink-300 text-pink-600 hover:bg-pink-50',
  Music:    'border-purple-300 text-purple-600 hover:bg-purple-50',
  Language: 'border-orange-300 text-orange-600 hover:bg-orange-50',
  Events:   'border-emerald-300 text-emerald-600 hover:bg-emerald-50',
  Sports:   'border-red-300 text-red-600 hover:bg-red-50',
  Arts:     'border-indigo-300 text-indigo-600 hover:bg-indigo-50',
};

const categoryBadge: Record<Category, string> = {
  All:      '',
  Academic: 'bg-blue-100 text-blue-700',
  Abacus:   'bg-yellow-100 text-yellow-700',
  Dance:    'bg-pink-100 text-pink-700',
  Music:    'bg-purple-100 text-purple-700',
  Language: 'bg-orange-100 text-orange-700',
  Events:   'bg-emerald-100 text-emerald-700',
  Sports:   'bg-red-100 text-red-700',
  Arts:     'bg-indigo-100 text-indigo-700',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (filteredIndex: number) => setLightboxIndex(filteredIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <main className="pt-20 md:pt-28 pb-20 bg-bg-light min-h-screen">
      {/* ── Header ── */}
      <section className="container mx-auto px-4 md:px-6 text-center max-w-4xl mb-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-accent tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full"
        >
          Our Moments
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-text-dark mt-4 mb-4"
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-base md:text-lg leading-relaxed"
        >
          A glimpse into the vibrant learning, performances, competitions, and memories created at Kani Institute.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {[
            { label: 'Photos', value: `${galleryItems.length}+` },
            { label: 'Categories', value: `${categories.length - 1}` },
            { label: 'Events Captured', value: '10+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-display font-bold text-2xl text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Filter Tabs ── */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="container mx-auto px-4 md:px-6 mb-10"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 cursor-pointer ${
                  isActive ? categoryColors[cat] + ' shadow-md scale-105' : 'bg-white ' + categoryInactive[cat]
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/25 text-white' : categoryBadge[cat]
                  }`}>
                    {galleryItems.filter((g) => g.category === cat).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* ── Masonry Grid ── */}
      <section className="container mx-auto px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 cursor-pointer bg-white"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Always-visible overlay with title + badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-sm leading-snug drop-shadow-md">{item.title}</p>
                  <span className={`mt-1.5 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${categoryBadge[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                {/* Zoom icon - hover only */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md">
                  <ZoomIn size={14} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all z-10 cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl object-contain"
              />
              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-lg">{filtered[lightboxIndex].title}</p>
                <span className={`mt-1.5 inline-block text-xs font-bold px-3 py-1 rounded-full ${categoryBadge[filtered[lightboxIndex].category]}`}>
                  {filtered[lightboxIndex].category}
                </span>
                <p className="text-white/50 text-xs mt-2">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all z-10 cursor-pointer"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
