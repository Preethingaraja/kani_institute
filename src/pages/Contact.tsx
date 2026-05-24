import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 md:pt-28 pb-20 bg-bg-light min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-sm font-accent tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text-dark mt-4 mb-4">
            Contact Kani Institute
          </h1>
          <p className="text-text-muted text-base md:text-lg">
            Have questions about admissions, timings, or fee structures? Reach out to us today!
          </p>
        </section>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left: Enquiry Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <ContactForm />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">

            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
              <h3 className="font-display font-bold text-2xl text-text-dark mb-4">
                Our Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-dark mb-1">Location Address</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    123/59, Kanagaraja Ganapathy Street,<br />
                    Ponnammapet, Salem - 636001,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-dark mb-1">Direct Calling</h4>
                  <a href="tel:9442969593" className="text-sm text-secondary font-bold hover:underline transition-all">
                    94429 69593
                  </a>
                  <p className="text-xs text-text-muted mt-1">Available 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 text-accent p-3 rounded-xl shrink-0 mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-dark mb-1">Email Correspondence</h4>
                  <a href="mailto:kaniinstitute28@gmail.com" className="text-sm text-accent font-bold hover:underline transition-all break-all">
                    kaniinstitute28@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex items-center justify-between">
              <span className="font-bold text-sm text-text-dark">Follow us on Socials:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl h-[300px] relative">
              <iframe
                title="Kani Institute Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6!2d78.1483!3d11.6541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1d5e2d3c4b1%3A0xa1b2c3d4e5f67890!2sKANI%20INSTITUTE%2C%20123%2F59%2C%20Kanagaraja%20Ganapathy%20St%2C%20Ponnammapet%2C%20Salem%2C%20Tamil%20Nadu%20636001!5e0!3m2!1sen!2sin!4v1716091129031!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.google.com/?q=KANI+INSTITUTE,+123/59,+Kanagaraja+Ganapathy+St,+Ponnammapet,+Salem,+Tamil+Nadu+636001"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md hover:bg-primary hover:text-white transition-all border border-gray-100"
              >
                Open in Maps ↗
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.main>
  );
}
