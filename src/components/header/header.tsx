'use client';

import { useState, useEffect } from 'react';
import { warehouseConfig } from '@/config/warehouse-content';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = ['home', 'features', 'locations', 'specifications', 'gallery', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section
    const handleInitialScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    handleInitialScroll();
    window.addEventListener('scroll', handleInitialScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleInitialScroll);
    };
  }, []);

  // Navigation links - can be updated in config if needed
  const navLinks = [
    'Home',
    'Features',
    'Locations',
    'Specifications',
    'Gallery',
    'Contact',
  ];

  return (
    <header className="w-full" style={{ backgroundColor: 'transparent', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top Utility Bar */}
      <div className="w-full bg-[var(--gray-dark)] py-2 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Website Link */}
          <div className="flex items-center gap-2 px-3 py-1 -ml-12 md:-ml-16 lg:-ml-20">
            <a 
              href={`https://${warehouseConfig.brand.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-family-sans-serif)' }}
            >
              {warehouseConfig.brand.website}
            </a>
          </div>

          {/* CTA Button */}
          <a
            href={warehouseConfig.ctas.primary.link}
            className="px-5 py-[5px] text-sm font-normal rounded-lg hover:opacity-90 transition-opacity -mr-12 md:-mr-16 lg:-mr-20 border-2"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#000000',
              borderColor: '#173C65',
              fontFamily: 'var(--font-family-sans-serif)' 
            }}
          >
            {warehouseConfig.ctas.primary.text}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full py-4 px-4 md:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: isScrolled ? '#ffffff' : '#EFF6FF' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* NEWMARK Logo */}
          <div className="flex items-center">
            <div 
              className="font-bold text-black uppercase"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
                fontFamily: 'Arial, Helvetica, sans-serif',
                letterSpacing: '0.05em',
                lineHeight: '1',
                fontWeight: 700,
              }}
            >
              NEWMA<span className="relative inline-block">
                R
                <span
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '18%',
                    width: '2px',
                    height: '58%',
                    backgroundColor: '#000',
                    transform: 'translateX(-50%) rotate(25deg)',
                    transformOrigin: 'center',
                  }}
                />
              </span>K
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((link, index) => {
              const linkId = link.toLowerCase().replace(' ', '-');
              const isActive = activeSection === linkId;
              
              return (
                <a
                  key={index}
                  href={`#${linkId}`}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? 'border-b-2 pb-1'
                      : ''
                  }`}
                  style={{ 
                    fontFamily: 'Assistant, sans-serif',
                    color: isActive ? '#173C65' : 'var(--dark)',
                    borderColor: isActive ? '#173C65' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#173C65';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--dark)';
                    }
                  }}
                >
                  {link}
                </a>
              );
            })}
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
              {navLinks.map((link, index) => {
                const linkId = link.toLowerCase().replace(' ', '-');
                const isActive = activeSection === linkId;
                
                return (
                  <a
                    key={index}
                    href={`#${linkId}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-semibold transition-colors px-2 py-1 ${
                      isActive
                        ? 'border-l-4'
                        : ''
                    }`}
                    style={{
                      color: isActive ? '#173C65' : 'var(--dark)',
                      borderColor: isActive ? '#173C65' : 'transparent',
                      fontFamily: 'Assistant, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#173C65';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--dark)';
                      }
                    }}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
