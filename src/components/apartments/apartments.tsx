'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { image } from '@/assets';
import { Bed, Bath, Square } from 'lucide-react';

export default function Apartments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const apartments = [
    {
      title: 'Tokas Penthouse',
      description: 'Lorem ipsum dolor sit amet',
      beds: 3,
      baths: 3,
      sqft: 700,
    },
    {
      title: 'Journal Square',
      description: 'Lorem ipsum dolor sit amet',
      beds: 3,
      baths: 3,
      sqft: 700,
    },
    {
      title: 'Tokas Penthouse',
      description: 'Lorem ipsum dolor sit amet',
      beds: 3,
      baths: 3,
      sqft: 700,
    },
    {
      title: 'Broadway View',
      description: 'Lorem ipsum dolor sit amet',
      beds: 3,
      baths: 3,
      sqft: 700,
    },
    {
      title: 'Park Avenue',
      description: 'Lorem ipsum dolor sit amet',
      beds: 3,
      baths: 3,
      sqft: 700,
    },
  ];

  // With 5 cards, we can show 3 at a time, so we have 3 positions (0, 1, and 2)
  const maxPosition = apartments.length - 2; // 3 positions: 0, 1, and 2

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxPosition + 1));
    }, 12000); // 12 seconds

    return () => clearInterval(interval);
  }, [maxPosition]);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: 'var(--gray-dark)',
              fontFamily: 'var(--font-family-sans-serif)',
            }}
          >
            Apartments for Sale
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: 'var(--gray)',
              fontFamily: 'var(--font-family-sans-serif)',
            }}
          >
            The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.
          </p>
        </div>

        {/* Apartment Cards Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {/* Render all cards - show 3 at a time */}
            {apartments.map((apartment, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
              >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                    style={{
                      borderRadius: '8px',
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={image}
                        alt={apartment.title}
                        fill
                        className="object-cover"
                        style={{
                          borderTopLeftRadius: '8px',
                          borderTopRightRadius: '8px',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: 'var(--gray-dark)',
                          fontFamily: 'var(--font-family-sans-serif)',
                          fontSize: '1.25rem',
                        }}
                      >
                        {apartment.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="mb-4"
                        style={{
                          color: 'var(--gray)',
                          fontFamily: 'var(--font-family-sans-serif)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {apartment.description}
                      </p>

                      {/* Property Details */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4" style={{ color: 'var(--gray)' }} />
                          <span 
                            className="text-sm"
                            style={{ color: 'var(--gray)', fontFamily: 'var(--font-family-sans-serif)' }}
                          >
                            Beds: {apartment.beds}
                          </span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-4 h-4" style={{ color: 'var(--gray)' }} />
                          <span 
                            className="text-sm"
                            style={{ color: 'var(--gray)', fontFamily: 'var(--font-family-sans-serif)' }}
                          >
                            Baths: {apartment.baths}
                          </span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1.5">
                          <Square className="w-4 h-4" style={{ color: 'var(--gray)' }} />
                          <span 
                            className="text-sm"
                            style={{ color: 'var(--gray)', fontFamily: 'var(--font-family-sans-serif)' }}
                          >
                            Sq Ft: {apartment.sqft}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxPosition + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? '16px' : '12px',
                height: index === currentIndex ? '12px' : '12px',
                backgroundColor: index === currentIndex ? 'var(--gray-dark)' : 'var(--gray)',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
