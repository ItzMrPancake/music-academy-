import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Mail, Phone, Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { InquiryFormData, validateInquiryForm, TUITION_TIERS, PROGRAMS } from '../utils/academy.ts';

interface ContactSectionProps {
  selectedProgramId?: string;
  selectedTierId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedProgramId,
  selectedTierId
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    program: selectedProgramId || 'guitar',
    tier: selectedTierId || 'standard'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Update default subject and selections when parent selection changes
  useEffect(() => {
    if (selectedProgramId || selectedTierId) {
      const prog = PROGRAMS.find((p) => p.id === selectedProgramId);
      const tier = TUITION_TIERS.find((t) => t.id === selectedTierId);
      setFormData((prev) => ({
        ...prev,
        program: selectedProgramId || prev.program,
        tier: selectedTierId || prev.tier,
        subject: `Enrollment Inquiry: ${prog ? prog.name : 'Music Lessons'} (${tier ? tier.name : 'Standard'})`
      }));
    }
  }, [selectedProgramId, selectedTierId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      program: 'guitar',
      tier: 'standard'
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#0c0c10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90 mb-3">
            04. Begin Your Music Instruction
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
            Connect & Visit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Reach out to schedule your preliminary evaluation or inquire about studio availability. We look forward to welcoming you to the Academy.
          </p>
        </div>

        {/* Layout: Split-Screen Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Minimalist Underline-Only Form */}
          <div className="lg:col-span-6 bg-zinc-950/40 p-8 sm:p-10 rounded-2xl border border-white/5">
            <h3 className="font-serif text-2xl font-medium text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-light">
              Fill in your details below and our faculty will respond within one business day.
            </p>

            {submitted ? (
              <div className="py-10 px-4 text-center space-y-5 bg-amber-500/5 rounded-2xl border border-amber-400/20">
                <div className="w-16 h-16 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto shadow-lg shadow-amber-950/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    Inquiry Received
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-amber-400/90 font-medium mt-1">
                    Wichita Falls Music Academy Faculty
                  </p>
                </div>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your enrollment inquiry for{' '}
                  <span className="text-amber-300 font-medium">
                    {PROGRAMS.find((p) => p.id === formData.program)?.name || 'Music'} Lessons
                  </span>. Our team will contact you at <span className="text-white font-medium">{formData.phone}</span> or <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Program & Tier Quick Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                  <div>
                    <label htmlFor="program-select" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1.5 font-medium">
                      Instrument Program
                    </label>
                    <select
                      id="program-select"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border-b border-white/20 text-white text-sm py-2 px-1 focus:border-amber-400 focus:outline-none transition-colors rounded-none"
                    >
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.id} className="bg-zinc-900 text-white">
                          {prog.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tier-select" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1.5 font-medium">
                      Tuition Format
                    </label>
                    <select
                      id="tier-select"
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border-b border-white/20 text-white text-sm py-2 px-1 focus:border-amber-400 focus:outline-none transition-colors rounded-none"
                    >
                      {TUITION_TIERS.map((tier) => (
                        <option key={tier.id} value={tier.id} className="bg-zinc-900 text-white">
                          {tier.name} (${tier.rate}/mo)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Underline-Only Input: Name */}
                <div className="relative">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 px-0 text-white placeholder-zinc-600 focus:ring-0 focus:border-amber-400 focus:outline-none text-base transition-colors"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Underline-Only Input: Phone */}
                <div className="relative">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(940) 555-0199"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 px-0 text-white placeholder-zinc-600 focus:ring-0 focus:border-amber-400 focus:outline-none text-base transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Underline-Only Input: Email */}
                <div className="relative">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 px-0 text-white placeholder-zinc-600 focus:ring-0 focus:border-amber-400 focus:outline-none text-base transition-colors"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                {/* Underline-Only Input: Subject */}
                <div className="relative">
                  <label htmlFor="subject" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Type the subject..."
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 px-0 text-white placeholder-zinc-600 focus:ring-0 focus:border-amber-400 focus:outline-none text-base transition-colors"
                  />
                  {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Underline-Only Input: Message */}
                <div className="relative">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 px-0 text-white placeholder-zinc-600 focus:ring-0 focus:border-amber-400 focus:outline-none text-base resize-none transition-colors"
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button with hover arrow animation */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#d4af37] text-zinc-950 font-semibold text-xs uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all duration-300 shadow-lg shadow-amber-950/30 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Clean Contact Details & Borderless Google Map */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            {/* Contact Information Block */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Studio Location
                  </h4>
                  <p className="text-base sm:text-lg text-white font-medium">
                    2949 Southwest Pkwy Ste A
                  </p>
                  <p className="text-sm text-zinc-400">
                    Wichita Falls, TX 76308, USA
                  </p>
                  <a
                    href="https://maps.app.goo.gl/v6Yr5jpDyWbdfVhK8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 mt-2 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Direct Telephone
                  </h4>
                  <a
                    href="tel:9402356190"
                    className="text-base sm:text-lg text-white hover:text-amber-300 transition-colors font-medium block"
                  >
                    (940) 235-6190
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Call for real-time class schedule & lesson availability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Electronic Mail
                  </h4>
                  <a
                    href="mailto:wfmusicacademy@gmail.com"
                    className="text-base sm:text-lg text-white hover:text-amber-300 transition-colors font-medium block"
                  >
                    wfmusicacademy@gmail.com
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Direct inquiries & scheduling requests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-400/10 text-amber-400 shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Instruction Hours
                  </h4>
                  <p className="text-sm text-zinc-200">
                    Monday – Friday: <span className="text-white font-medium">3:30 PM – 8:00 PM</span>
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Saturday: Exclusive sessions for Percussion & Guitar
                  </p>
                </div>
              </div>
            </div>

            {/* Seamlessly Embedded Borderless Google Map */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative bg-zinc-950 h-[260px] sm:h-[300px]">
              <iframe
                title="Wichita Falls Music Academy Location"
                src="https://maps.google.com/maps?q=2949+Southwest+Pkwy+Ste+A,+Wichita+Falls,+TX+76308&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                aria-label="Google Map showing Wichita Falls Music Academy"
              />
              <div className="absolute top-3 right-3">
                <a
                  href="https://maps.app.goo.gl/v6Yr5jpDyWbdfVhK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-amber-300 text-xs flex items-center gap-1.5 border border-amber-400/30 backdrop-blur-sm"
                >
                  <span>Google Places</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
