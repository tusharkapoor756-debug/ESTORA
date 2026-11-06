'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Developments', href: '/projects' },
  { label: 'Philosophy', href: '/about' },
  { label: 'Design & Living', href: '/lifestyle' },
  { label: 'Private Advisory', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLightHero = pathname === '/' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#202A27]/95 backdrop-blur-md py-4 border-b border-[#F3F0E9]/10 shadow-lg'
            : isLightHero
            ? 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6 text-white'
            : 'bg-[#202A27] py-5 border-b border-[#F3F0E9]/10 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-opacity hover:opacity-90 focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-medium text-white group-hover:text-[#A88B65] transition-colors">
              ESTORA
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A88B65] -mt-1 font-sans">
              DEVELOPMENTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#A88B65]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A88B65]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Contact & Admin */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/admin"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none border text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                isAdmin
                  ? 'border-[#A88B65] text-[#A88B65] bg-[#A88B65]/10'
                  : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#A88B65]" />
              Demo Admin
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#A88B65] hover:bg-[#8F724E] text-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              href="/admin"
              className="text-[10px] uppercase tracking-wider text-[#A88B65] border border-[#A88B65]/40 px-2 py-1"
            >
              Admin
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#A88B65] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[73px] bg-[#202A27] z-40 md:hidden flex flex-col justify-between px-6 py-10 border-t border-white/10"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A88B65]">
                Navigation
              </span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-3xl text-white hover:text-[#A88B65] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 text-sm text-[#A88B65] uppercase tracking-wider"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Demo Admin CMS
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50">
                Fictional luxury portfolio concept by Tushar Labs.
              </p>
              <Link
                href="/contact"
                className="w-full text-center block bg-[#A88B65] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium"
              >
                Schedule Site Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

