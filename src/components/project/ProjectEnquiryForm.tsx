'use client';

import React, { useState } from 'react';
import { addStoredEnquiry } from '@/data/storage';
import { CheckCircle2, Send, Calendar, ShieldAlert } from 'lucide-react';

interface ProjectEnquiryFormProps {
  projectSlug: string;
  projectName: string;
}

export default function ProjectEnquiryForm({ projectSlug, projectName }: ProjectEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: `I am interested in exploring available residences and scheduling a private briefing for ${projectName}.`,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and telephone number.');
      return;
    }

    // Basic email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        addStoredEnquiry({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectSlug: projectSlug,
          projectName: projectName,
          preferredDate: formData.preferredDate || undefined,
          message: formData.message,
        });

        setIsSubmitted(true);
        setIsSubmitting(false);
      } catch (err) {
        setErrorMessage('Failed to save demo enquiry. Please try again.');
        setIsSubmitting(false);
      }
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#202A27] text-white p-8 sm:p-12 text-center space-y-6 border-t-4 border-[#A88B65]">
        <div className="w-16 h-16 mx-auto bg-[#A88B65]/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#A88B65]" />
        </div>
        <h3 className="font-serif text-3xl font-light">Enquiry Registered</h3>
        <p className="text-sm text-[#F3F0E9]/80 font-light max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your private dossier request for <span className="text-[#A88B65]">{projectName}</span> has been logged into the simulated demonstration repository.
        </p>

        <div className="p-4 bg-[#161D1B] text-xs text-[#777C77] border border-white/5 max-w-sm mx-auto">
          <ShieldAlert className="w-4 h-4 text-[#A88B65] mx-auto mb-1" />
          This is an interactive concept test. You can review this enquiry right now in the{' '}
          <a href="/admin" className="text-[#A88B65] underline">
            Demo Admin Dashboard
          </a>.
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              preferredDate: '',
              message: `I am interested in exploring available residences and scheduling a private briefing for ${projectName}.`,
            });
          }}
          className="text-xs uppercase tracking-[0.2em] text-[#A88B65] hover:underline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#202A27] text-white p-8 sm:p-10 border border-white/10 shadow-2xl">
      <div className="space-y-2 mb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-medium block">
          Private Client Services
        </span>
        <h3 className="font-serif text-3xl text-white font-light">
          Enquire About {projectName}
        </h3>
        <p className="text-xs text-[#777C77] font-light">
          Connect with an ESTORA curator for floor plan specifications, site walkthroughs, and private viewings.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-3 bg-red-900/30 border border-red-500/40 text-red-200 text-xs">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Alistair Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98000 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
            Preferred Site Visit Date (Optional)
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
            Specific Requirements or Inquiries
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#A88B65] hover:bg-[#8F724E] disabled:opacity-50 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          {isSubmitting ? (
            <span>Transmitting Request...</span>
          ) : (
            <>
              <span>Submit Confidential Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <p className="text-[10px] text-[#777C77] text-center leading-normal">
          Simulated enquiry. Data is securely persisted in your browser&apos;s LocalStorage.
        </p>
      </form>
    </div>
  );
}

