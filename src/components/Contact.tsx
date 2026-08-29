"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending API dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setToast({ message: "Thank you! Your message has been sent successfully.", type: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setToast({ message: "Something went wrong. Please try again later.", type: "error" });
    } finally {
      setIsSubmitting(false);
      // Auto clear toast after 4s
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background radial highlights */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-accent-emerald/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base"
          >
            Have a project concept, remote position, or want to discuss full-stack integrations? Send a message directly.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Chips */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-2">Direct Contact Details</h3>
            
            {/* Contact details cards */}
            <a
              href="mailto:ambadyviswas7@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-accent-cyan/25 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/10 group-hover:bg-accent-cyan/20 group-hover:scale-105 transition-all">
                <Mail className="w-6 h-6 text-accent-cyan" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Email Me</span>
                <span className="text-sm md:text-base font-bold text-white group-hover:text-accent-cyan transition-colors">
                  ambadyviswas7@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+919747362645"
              className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-accent-emerald/25 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-accent-emerald/10 border border-accent-emerald/10 group-hover:bg-accent-emerald/20 group-hover:scale-105 transition-all">
                <Phone className="w-6 h-6 text-accent-emerald" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Call Me</span>
                <span className="text-sm md:text-base font-bold text-white group-hover:text-accent-emerald transition-colors">
                  +91 9747362645
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl glass-card">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Location</span>
                <span className="text-sm md:text-base font-bold text-zinc-200">
                  Kerala, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email in Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-zinc-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan placeholder-zinc-600 transition-all ${
                        errors.name ? "border-rose-500/50 focus:ring-rose-500 focus:border-rose-500" : "border-white/5"
                      }`}
                      placeholder="Viswas Y"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-zinc-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan placeholder-zinc-600 transition-all ${
                        errors.email ? "border-rose-500/50 focus:ring-rose-500 focus:border-rose-500" : "border-white/5"
                      }`}
                      placeholder="viswas@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan placeholder-zinc-600 transition-all ${
                      errors.subject ? "border-rose-500/50 focus:ring-rose-500 focus:border-rose-500" : "border-white/5"
                    }`}
                    placeholder="Project Inquiry / Job Proposal"
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan placeholder-zinc-600 transition-all resize-none ${
                      errors.message ? "border-rose-500/50 focus:ring-rose-500 focus:border-rose-500" : "border-white/5"
                    }`}
                    placeholder="Tell me more about your design requirements or application scopes..."
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-emerald text-zinc-950 font-bold text-sm hover:opacity-90 shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/25 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl border shadow-2xl glass-card ${
              toast.type === "success" ? "border-accent-emerald/20" : "border-rose-500/20"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-accent-emerald flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
            )}
            <p className="text-sm font-semibold text-white">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
