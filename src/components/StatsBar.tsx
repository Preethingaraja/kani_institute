import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

function StatItem({ end, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Allow looping when scrolled back

  useEffect(() => {
    let timerId: any;
    let timeoutId: any;

    const startCounter = () => {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      timerId = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timerId);
          setCount(end);
          // Wait 3 seconds then restart
          timeoutId = setTimeout(() => {
            startCounter();
          }, 3000);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    if (isInView) {
      startCounter();
    } else {
      setCount(0); // reset when out of view
    }

    return () => {
      clearInterval(timerId);
      clearTimeout(timeoutId);
    };
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-4">
      <h3 className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
        {count}
        {suffix}
      </h3>
      <p className="text-text-muted text-xs md:text-sm font-semibold tracking-wider uppercase">
        {label}
      </p>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { end: 15, suffix: '+ Years', label: 'Experience' },
    { end: 500, suffix: '+', label: 'Students' },
    { end: 20, suffix: '+', label: 'Classes' },
    { end: 100, suffix: '%', label: 'Quality Standard' },
  ];

  return (
    <section className="bg-white border-y border-gray-100 shadow-sm relative z-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className={idx > 1 ? 'pt-6 md:pt-0' : idx === 1 ? 'pt-0' : ''}>
              <StatItem end={stat.end} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
