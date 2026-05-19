import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { ClassItem } from '../data/classes';

interface ClassCardProps {
  classItem: ClassItem;
}

export default function ClassCard({ classItem }: ClassCardProps) {
  // Safe icon lookup
  const IconComponent = (Icons as any)[classItem.icon] || Icons.BookOpen;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`bg-white border-t-4 border-t-primary rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col justify-between h-full relative overflow-hidden group`}
      style={{ borderTopColor: classItem.category === 'academic' ? '#61039f' : classItem.category === 'skill' ? '#7B1FA2' : '#E53935' }}
    >
      <div>
        {/* Category Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
            {classItem.category}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${classItem.color}`}>
            {classItem.badge}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}
            style={{
              backgroundColor: classItem.category === 'academic' ? 'rgba(97, 3, 159, 0.1)' : classItem.category === 'skill' ? 'rgba(123, 31, 162, 0.1)' : 'rgba(229, 57, 53, 0.1)',
              color: classItem.category === 'academic' ? '#61039f' : classItem.category === 'skill' ? '#7B1FA2' : '#E53935'
            }}
          >
            <IconComponent size={24} />
          </div>
          <h3 className="font-display font-bold text-lg md:text-xl text-text-dark group-hover:text-primary transition-colors">
            {classItem.title}
          </h3>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {classItem.description}
        </p>
      </div>

      <Link
        to={`/classes/${classItem.id}`}
        className="text-sm font-bold flex items-center gap-1 transition-colors hover:gap-2 group-hover:text-primary"
        style={{ color: classItem.category === 'academic' ? '#61039f' : classItem.category === 'skill' ? '#7B1FA2' : '#E53935' }}
      >
        Learn More
        <Icons.ArrowRight size={16} />
      </Link>

      {/* Decorative Blob */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-[-1]"></div>
    </motion.div>
  );
}
