'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredProjects, addStoredEnquiry } from '@/data/storage';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { Project } from '@/types';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ShieldAlert,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

export default function ContactPage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectSlug: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loaded = getStoredProjects();
    setProjects(loaded);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name, email, and phone number.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const selectedProj = projects.find((p) => p.slug === formData.projectSlug);

    setTimeout(() => {
      try {
        addStoredEnquiry({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectSlug: formData.projectSlug || undefined,
          projectName: selectedProj ? selectedProj.title : 'General Portfolio Enquiry',
          preferredDate: formData.preferredDate || undefined,
          message: formData.message || 'General enquiry regarding ESTORA residential portfolio.',
        });

        setIsSubmitted(true);
        setIsSubmitting(false);
      } catch (err) {
        setErrorMessage('Failed to save simulated enquiry. Please try again.');
        setIsSubmitting(false);
      }
    }, 600);
  };

  const whatsappUrl =
    'https://wa.me/918000007860?text=Hello%20ESTORA%20Advisory,%20I%20would%20like%20to%20schedule%20a%20private%20portfolio%20consultation.';

  return (
    <div className="bg-[#F3F0E9] text-[#202A27] min-h-screen pt-28 pb-32">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-16 border-b border-[#202A27]/10">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              Private Client Relations
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#202A27] leading-[1.08]">
            Begin the Dialogue
          </h1>

          <p className="text-base sm:text-lg text-[#777C77] font-light leading-relaxed">
            Our advisory curators are at your disposal to arrange confidential residential walkthroughs, discuss architectural specifications, or coordinate private viewing appointments.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Experience */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Atelier Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white p-8 sm:p-10 border border-[#202A27]/10 shadow-sm space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] font-semibold block mb-2">
                  Head Atelier & Gallery
                </span>
                <h3 className="font-serif text-2xl text-[#202A27] font-medium">
                  ESTORA Pavilion
                </h3>
                <address className="not-italic text-sm text-[#777C77] mt-3 space-y-1 font-light leading-relaxed">
                  <p>Pavilion 4, Architectural Boulevard</p>
                  <p>Sector 18, Metropolis Central — 110001</p>
                </address>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#202A27]/10 text-sm">
                <div className="flex items-center space-x-3 text-[#777C77]">
                  <Phone className="w-4 h-4 text-[#A88B65] shrink-0" />
                  <span className="text-[#202A27] font-medium">+91 (0) 800 000 7860 (Demo)</span>
                </div>
                <div className="flex items-center space-x-3 text-[#777C77]">
                  <Mail className="w-4 h-4 text-[#A88B65] shrink-0" />
                  <span className="text-[#202A27] font-medium">advisory@estora-concept.example</span>
                </div>
                <div className="flex items-center space-x-3 text-[#777C77]">
                  <Clock className="w-4 h-4 text-[#A88B65] shrink-0" />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM (By Private Appointment)</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#202A27] hover:bg-[#161D1B] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#A88B65]" />
                  <span>Connect via WhatsApp (Demo)</span>
                </a>
              </div>
            </div>

            {/* Concept Project Reminder */}
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#A88B65] text-xs text-[#777C77] space-y-2">
              <div className="flex items-center space-x-2 text-[#202A27] font-semibold">
                <ShieldAlert className="w-4 h-4 text-[#A88B65]" />
                <span>Simulated Portfolio Concept</span>
              </div>
              <p>
                This form logs test inquiries into LocalStorage. No confidential personal information is shared with outside entities. You may inspect and manage all inquiries inside the{' '}
                <Link href="/admin" className="text-[#A88B65] underline">
                  Admin Dashboard
                </Link>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-[#202A27] text-white p-10 sm:p-14 text-center space-y-6 border-t-4 border-[#A88B65] shadow-2xl">
                <div className="w-16 h-16 mx-auto bg-[#A88B65]/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#A88B65]" />
                </div>
                <h3 className="font-serif text-3xl font-light">
                  Simulated Consultation Requested
                </h3>
                <p className="text-sm text-[#F3F0E9]/80 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your enquiry has been recorded in your local browser demonstration store.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/admin"
                    className="inline-flex items-center gap-2 bg-[#A88B65] hover:bg-[#8F724E] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    <span>View in Admin Dashboard</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectSlug: '',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="border border-white/20 text-white px-6 py-3 text-xs uppercase tracking-[0.2em] hover:border-white transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#202A27] text-white p-8 sm:p-12 shadow-2xl border border-white/10">
                <div className="space-y-2 mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-medium block">
                    Private Viewing & Consultation
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                    Request an Advisory Appointment
                  </h2>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-3 bg-red-900/30 border border-red-500/40 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
                      Select Development of Interest
                    </label>
                    <select
                      value={formData.projectSlug}
                      onChange={(e) => setFormData({ ...formData, projectSlug: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
                    >
                      <option value="">General Portfolio Exploration</option>
                      {projects.map((p) => (
                        <option key={p.id} value={p.slug}>
                          {p.title} ({p.category} — {p.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siobhan Roy"
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
                      Preferred Date for Site Visit or Call (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F3F0E9]/70 mb-2 font-medium">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your spatial preferences, unit configurations, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161D1B] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A88B65] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#A88B65] hover:bg-[#8F724E] disabled:opacity-50 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-[#777C77] text-center">
                    All demo submissions are logged locally in your browser storage and will not contact external sales teams.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

