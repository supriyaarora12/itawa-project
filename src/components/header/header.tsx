'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home',
    'Apartments',
    'Amenities',
    'Floor Plans',
    'Specification',
    'Gallery',
    'Location',
    'Reviews',
    'Contact',
  ];

  return (
    <header className="w-full" style={{ backgroundColor: 'transparent', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top Utility Bar */}
      <div className="w-full bg-[var(--gray-dark)] py-2 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Envato Market Logo */}
          <div className="flex items-center gap-2 px-3 py-1 border border-white rounded -ml-12 md:-ml-16 lg:-ml-20">
            <svg
              className="w-4 h-4 text-[var(--green)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white font-bold text-sm">envato</span>
            <span className="text-white text-sm">market</span>
          </div>

          {/* Buy Now Button */}
          <button
            className="bg-[var(--green-buy-now)] text-[var(--white)] px-5 py-[5px] text-sm font-normal rounded-lg hover:opacity-90 transition-opacity -mr-12 md:-mr-16 lg:-mr-20"
            style={{ fontFamily: 'var(--font-family-sans-serif)' }}
          >
            Buy now
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full py-4 px-4 md:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: isScrolled ? '#ffffff' : '#FCEEEB' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* ITAWA Logo */}
          <div className="flex items-center">
            <span className="text-[var(--dark)] font-bold text-xl md:text-2xl lg:text-3xl">
              ITAWA
            </span>
            <span className="text-[var(--red)] font-bold text-xl md:text-2xl lg:text-3xl">
              .
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className={`text-base font-medium transition-colors ${
                  link === 'Home'
                    ? 'text-[var(--red)] border-b-2 border-[var(--red)] pb-1'
                    : 'text-[var(--dark)] hover:text-[var(--red)]'
                }`}
                style={{ fontFamily: 'Assistant, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[var(--dark)] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold transition-colors px-2 py-1 ${
                    link === 'Home'
                      ? 'text-[var(--red)] border-l-4 border-[var(--red)]'
                      : 'text-[var(--dark)] hover:text-[var(--red)]'
                  }`}
                  style={{ fontFamily: 'Assistant, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
