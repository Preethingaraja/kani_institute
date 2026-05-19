import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  gender: 'boy' | 'girl';
}

const BoyAvatar = () => (
  <svg className="w-11 h-11 rounded-full shadow-sm shrink-0 border border-blue-100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#E0E7FF"/>
    {/* Neck */}
    <rect x="44" y="62" width="12" height="15" fill="#F3A37E" rx="4"/>
    {/* Head */}
    <circle cx="50" cy="46" r="19" fill="#FBCDB6"/>
    {/* Hair */}
    <path d="M31 43C31 30 40 22 50 22C60 22 69 30 69 43C69 43 67 36 63 34C59 32 50 34 50 34C50 34 41 32 37 34C33 36 31 43 31 43Z" fill="#1E1B4B"/>
    {/* Eyes */}
    <circle cx="44" cy="46" r="2" fill="#1E1B4B"/>
    <circle cx="56" cy="46" r="2" fill="#1E1B4B"/>
    {/* Smile */}
    <path d="M46 54C46 54 48 57 50 57C52 57 54 54 54 54" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round"/>
    {/* Clothes */}
    <path d="M28 78C28 70 38 66 50 66C62 66 72 70 72 78V88H28V78Z" fill="#3B82F6"/>
  </svg>
);

const GirlAvatar = () => (
  <svg className="w-11 h-11 rounded-full shadow-sm shrink-0 border border-pink-100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#FCE7F3"/>
    {/* Neck */}
    <rect x="44" y="62" width="12" height="15" fill="#F3A37E" rx="4"/>
    {/* Hair Back */}
    <circle cx="50" cy="53" r="23" fill="#4C1D95"/>
    {/* Head */}
    <circle cx="50" cy="46" r="19" fill="#FBCDB6"/>
    {/* Hair Front */}
    <path d="M31 43C31 30 40 22 50 22C60 22 69 30 69 43C67 36 63 33 50 33C37 33 33 36 31 43Z" fill="#4C1D95"/>
    {/* Blush */}
    <circle cx="40" cy="50" r="2" fill="#FDA4AF"/>
    <circle cx="60" cy="50" r="2" fill="#FDA4AF"/>
    {/* Eyes */}
    <circle cx="44" cy="46" r="2" fill="#1E1B4B"/>
    <circle cx="56" cy="46" r="2" fill="#1E1B4B"/>
    {/* Smile */}
    <path d="M46 54C46 54 48 57 50 57C52 57 54 54 54 54" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round"/>
    {/* Clothes */}
    <path d="M28 78C28 70 38 66 50 66C62 66 72 70 72 78V88H28V78Z" fill="#EC4899"/>
  </svg>
);

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Yuvaraj Anandhan",
      role: "Local Guide (Google Review)",
      rating: 5,
      text: "Each subject has specialized expert teachers, masters, and tutors. It is hard to find all this knowledge sharing and tutoring in a single place, covering both standard academic subjects and arts & culture. One of the best and leading institutions in Salem town.",
      gender: "boy"
    },
    {
      id: 2,
      name: "Nithya Rubini",
      role: "Student (Google Review)",
      rating: 5,
      text: "Attending the Kani Institute felt like acing a public exam with flying colors, thanks to the experienced teachers who were my secret to success. Their positive vibes fueled my learning journey, paving the way for me to achieve my dreams. It's an educational experience that's not just about grades but about reaching for the stars!",
      gender: "girl"
    },
    {
      id: 3,
      name: "Revathi V",
      role: "Parent (Google Review)",
      rating: 5,
      text: "Best tuition center around Ponnamapet and Ammapet. Special care and attention are given towards 11th and 12th students, with full tests highly focused during the critical January and February months.",
      gender: "girl"
    },
    {
      id: 4,
      name: "Thennarasi T",
      role: "Parent (Google Review)",
      rating: 5,
      text: "Great learning experience. Both Sir and Mam are very cool, giving child-friendly space for learning in an extremely secured and comfortable environment.",
      gender: "girl"
    },
    {
      id: 5,
      name: "Muthuvel S.",
      role: "12th Student (Google Review)",
      rating: 5,
      text: "Physics, chemistry, and maths coaching for 12th standard tuition is very good. Friendly teachers and regular mock tests. Highly recommended.",
      gender: "boy"
    },
    {
      id: 6,
      name: "Mkumar Mkumar",
      role: "Parent (Google Review)",
      rating: 5,
      text: "Best coaching in Salem. All classes are in one place for students—awesome Chess class, drawing class, abacus classes, and academic tutions are all taken. Really good teaching and a great learning environment.",
      gender: "boy"
    }
  ];

  // Double the testimonials array for continuous loop animation
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#F5F7FF] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-accent tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-dark mt-4">
            What Parents & Students Say
          </h2>
          <p className="text-text-muted mt-2">
            Hear directly from the community that trusts us with their education.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient overlay for fade effects */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F5F7FF] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F5F7FF] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Marquee Container */}
          <div className="animate-marquee flex gap-6 py-2">
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[330px] h-[300px] bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between flex-shrink-0 relative group hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-colors" size={48} />

                <div>
                  {/* Star Rating */}
                  <div className="flex gap-0.5 mb-3 text-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-text-dark/95 text-[13px] leading-relaxed italic line-clamp-[6] mt-3">
                    "{item.text}"
                  </p>
                </div>

                {/* Author Details */}
                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center gap-3">
                  {item.gender === 'boy' ? <BoyAvatar /> : <GirlAvatar />}
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-text-dark leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
