import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { classes, type ClassItem } from '../data/classes';

export default function ContactForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prefilledClass = queryParams.get('class') || location.state?.selectedClass || '';

  const [formData, setFormData] = useState({
    fullName: '',
    childName: '',
    gradeClass: '',
    courseInterested: prefilledClass,
    learningMode: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (prefilledClass) {
      setFormData((prev) => ({ ...prev, courseInterested: prefilledClass }));
    }
  }, [prefilledClass]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
    if (!formData.childName.trim()) tempErrors.childName = "Child's name is required";
    if (!formData.gradeClass.trim()) tempErrors.gradeClass = 'Grade or class is required';
    if (!formData.courseInterested) tempErrors.courseInterested = 'Please select a class';
    if (!formData.learningMode) tempErrors.learningMode = 'Please select a learning mode';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Format details to WhatsApp message
    const formattedMessage = `Hello Kani Institute, I would like to make an enquiry:
• *Name:* ${formData.fullName}
• *Child's Name:* ${formData.childName}
• *Grade / Class:* ${formData.gradeClass}
• *Class of Interest:* ${formData.courseInterested}
• *Learning Mode:* ${formData.learningMode}
• *Phone Number:* ${formData.phone}
• *Message:* ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919442969593&text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      // Open owner WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setFormData({
        fullName: '',
        childName: '',
        gradeClass: '',
        courseInterested: '',
        learningMode: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-2xl text-text-dark mb-2">
        Enquiry Form
      </h3>
      <p className="text-sm text-text-muted mb-6">
        Fill out this form and our academic advisor will reach out to you within 24 hours.
      </p>

      {status === 'success' && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-sm">Enquiry Form Opened in WhatsApp!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Your details are pre-filled. Please tap "Send" in WhatsApp to submit your request.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-sm">Submission Failed</h4>
            <p className="text-xs text-rose-700 mt-1">
              There was an issue sending your message. Please try again or call us directly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${errors.fullName ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
              }`}
          />
          {errors.fullName && <p className="text-xs text-accent mt-1">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Child's Name */}
          <div>
            <label htmlFor="childName" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Child's full name"
              className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${errors.childName ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
                }`}
            />
            {errors.childName && <p className="text-xs text-accent mt-1">{errors.childName}</p>}
          </div>

          {/* Grade/Class */}
          <div>
            <label htmlFor="gradeClass" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
              Grade / Class
            </label>
            <input
              type="text"
              id="gradeClass"
              name="gradeClass"
              value={formData.gradeClass}
              onChange={handleChange}
              placeholder="e.g. Class 8 or Grade 5"
              className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${errors.gradeClass ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
                }`}
            />
            {errors.gradeClass && <p className="text-xs text-accent mt-1">{errors.gradeClass}</p>}
          </div>
        </div>

        {/* Course Dropdown */}
        <div>
          <label htmlFor="courseInterested" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
            Class Interested In
          </label>
          <select
            id="courseInterested"
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleChange}
            className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${errors.courseInterested ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
              }`}
          >
            <option value="">-- Select a Class --</option>
            {classes.map((item: ClassItem) => (
              <option key={item.id} value={item.title}>
                {item.title} ({item.category.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        {/* Learning Mode */}
        <div>
          <label className="block text-xs font-semibold text-text-dark mb-2.5 uppercase tracking-wider">
            Preferred Learning Mode
          </label>
          <div className="flex gap-4">
            {['Online', 'Offline'].map((mode) => (
              <label
                key={mode}
                className={`flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-semibold ${formData.learningMode === mode
                    ? mode === 'Online'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-gray-200 bg-bg-light text-text-muted hover:border-gray-300'
                  }`}
              >
                <input
                  type="radio"
                  name="learningMode"
                  value={mode}
                  checked={formData.learningMode === mode}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.learningMode === mode
                    ? mode === 'Online' ? 'border-primary bg-primary' : 'border-secondary bg-secondary'
                    : 'border-gray-300'
                  }`}>
                  {formData.learningMode === mode && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  )}
                </span>
                {mode === 'Online' ? 'Online' : 'Offline'}
              </label>
            ))}
          </div>
          {errors.learningMode && <p className="text-xs text-accent mt-1">{errors.learningMode}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
              }`}
          />
          {errors.phone && <p className="text-xs text-accent mt-1">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-text-dark mb-1.5 uppercase tracking-wider">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your queries or specific requirements..."
            rows={4}
            className={`w-full bg-bg-light border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-accent focus:ring-accent/20' : 'border-gray-200 focus:ring-primary/20'
              }`}
          ></textarea>
          {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-fit bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer self-start"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending Enquiry...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}
