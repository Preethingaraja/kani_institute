import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2B2FA8] to-[#7B1FA2] text-white">
      {/* Decorative Blob Animations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-4xl">
        <span className="text-xs uppercase font-bold tracking-widest text-[#F9A825] bg-[#F9A825]/10 border border-[#F9A825]/20 px-4 py-2 rounded-full">
          Admissions Open for {new Date().getFullYear()} - {new Date().getFullYear() + 1}
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-6 mb-4 leading-tight">
          Unlock Your Child’s Potential Today
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Enroll your child now to ensure personal attention and a holistic educational environment. Limited seats are available for all classes!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="tel:9442969593"
            className="w-fit bg-[#E53935] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#D32F2F] hover:shadow-[#E53935]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Phone size={20} className="animate-bounce" />
            Call: 94429 69593
          </a>
          <Link
            to="/contact"
            className="w-fit bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl hover:bg-gray-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Enquiry Form
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
