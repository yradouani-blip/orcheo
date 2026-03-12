import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, AlertCircle } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (phone && !isValidPhoneNumber(phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (!phone) {
      newErrors.phone = 'Phone number is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Let's build your <span className="italic text-emerald">next experience.</span>
        </h2>
        <p className="text-sm text-text-2 max-w-md">
          Have a complex event in mind? Our team of experts is ready to help you 
          architect the perfect solution. Reach out for a custom demo.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-s1 border border-border p-8 md:p-10 rounded-[32px] relative overflow-hidden">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Message Received</h3>
              <p className="text-text-2 text-sm max-w-xs">
                Thank you for reaching out. One of our event architects will contact you within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setPhone(undefined);
                  setCompany('');
                  setMessage('');
                }}
                className="mt-8 text-[10px] font-bold tracking-[0.2em] uppercase text-emerald hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-s2 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className={`w-full bg-s2 border ${errors.email ? 'border-red-500/50' : 'border-border'} rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald/50 transition-colors`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-medium mt-1 ml-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase ml-1">Phone Number</label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={phone}
                      onChange={setPhone}
                      placeholder="Enter phone number"
                      className={errors.phone ? 'phone-input-error' : ''}
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-medium mt-1 ml-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase ml-1">Company Name</label>
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Events"
                      className="w-full bg-s2 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your event..."
                    className="w-full bg-s2 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald/50 transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-emerald text-white py-5 rounded-xl font-bold tracking-[0.2em] uppercase text-xs hover:bg-emerald-light transition-all flex items-center justify-center gap-3 group"
                >
                  Contact Us
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-s2 border border-border flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-emerald" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.3em] text-muted uppercase mb-0.5">Email</span>
                    <a href="mailto:contact@orcheo.com" className="text-sm text-text hover:text-emerald transition-colors font-medium">contact@orcheo.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-s2 border border-border flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-emerald" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.3em] text-muted uppercase mb-0.5">Phone</span>
                    <a href="tel:+1234567890" className="text-sm text-text hover:text-emerald transition-colors font-medium">+1 (234) 567-890</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
