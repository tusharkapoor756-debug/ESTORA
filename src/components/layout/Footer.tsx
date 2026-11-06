import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldAlert, Globe, Share2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#202A27] text-[#F3F0E9] border-t border-[#F3F0E9]/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#F3F0E9]/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] font-medium text-white group-hover:text-[#A88B65] transition-colors">
                ESTORA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-[#A88B65] mt-1 font-sans">
                SPACES THAT SHAPE TOMORROW
              </span>
            </Link>
            <p className="text-sm text-[#777C77] max-w-sm leading-relaxed font-light">
              Crafting residential architecture of enduring dignity, geological honesty, and environmental longevity. A concept studio exploring the threshold of contemporary living.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#demo-social"
                title="Global Network (Demo Placeholder)"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#A88B65] hover:border-[#A88B65] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                title="Share & Social (Demo Placeholder)"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#A88B65] hover:border-[#A88B65] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                title="Newsletter & Press (Demo Placeholder)"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#A88B65] hover:border-[#A88B65] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F3F0E9]/80 font-light">
              <li>
                <Link href="/projects" className="hover:text-[#A88B65] transition-colors">
                  All Developments
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A88B65] transition-colors">
                  Architectural Philosophy
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="hover:text-[#A88B65] transition-colors">
                  Living & Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A88B65] transition-colors">
                  Private Consultations
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#A88B65] text-[#A88B65]/80 transition-colors inline-flex items-center gap-1">
                  CMS Administration <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Developments */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-semibold">
              Developments
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F3F0E9]/80 font-light">
              <li>
                <Link href="/projects/the-grand-arc" className="hover:text-[#A88B65] transition-colors">
                  The Grand Arc
                </Link>
              </li>
              <li>
                <Link href="/projects/solenne-residences" className="hover:text-[#A88B65] transition-colors">
                  Solenne Residences
                </Link>
              </li>
              <li>
                <Link href="/projects/aurelia-heights" className="hover:text-[#A88B65] transition-colors">
                  Aurelia Heights
                </Link>
              </li>
              <li>
                <Link href="/projects/elysian-wharf" className="hover:text-[#A88B65] transition-colors">
                  Elysian Wharf
                </Link>
              </li>
            </ul>
          </div>

          {/* Fictional Studio Address */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-semibold">
              Private Atelier
            </h4>
            <address className="not-italic text-sm text-[#777C77] space-y-2 font-light">
              <p className="text-white">ESTORA Gallery & Studio</p>
              <p>Pavilion 4, Architectural Boulevard</p>
              <p>Metropolis Central, 110001</p>
              <p className="pt-2 text-white/90">advisory@estora-concept.example</p>
              <p>+91 (0) 800 000 7860 (Demo)</p>
            </address>
          </div>
        </div>

        {/* Concept Disclosure Warning Banner */}
        <div className="my-8 p-4 rounded-none bg-[#161D1B] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#777C77]">
          <ShieldAlert className="w-5 h-5 text-[#A88B65] shrink-0" />
          <div className="flex-1">
            <span className="font-semibold text-white/90">Portfolio Concept Disclosure: </span>
            ESTORA is a self-initiated design and frontend engineering demonstration created by{' '}
            <span className="text-[#A88B65] font-medium">TUSHAR LABS</span>. All properties, floor plans, specifications, values, and addresses are fictional concept content and do not represent a commercial real estate entity or RERA-registered projects.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777C77] pt-4 font-light">
          <p>© {new Date().getFullYear()} ESTORA Concept. Designed & Architected by Tushar Labs.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#A88B65] cursor-pointer">Architectural Disclaimer</span>
            <span className="hover:text-[#A88B65] cursor-pointer">Simulated Privacy Terms</span>
            <Link href="/admin" className="text-[#A88B65] hover:underline">
              Demo CMS Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
