'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { banner1, banner2, bg } from '@/assets';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner1, banner2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const bgImageUrl = typeof bg === 'string' ? bg : bg.src || bg;
  
  return (
    <section 
      className="hero-section" 
      id="home"
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        background: `url(${bgImageUrl}) #fff`,
        paddingTop: '30px',
        paddingBottom: '170px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-block relative z-10">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="row flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-16 lg:py-24">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 v-center w-full lg:w-[40%] flex flex-col justify-center lg:ml-22">
              <div className="header-heading">
                <h1 
                  className="font-bold text-[62px] leading-[1.3] mb-[25px] m-0 p-0 mt-0 font-serif" 
                  style={{ 
                    color: '#2E3440',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700
                  }}
                >
                  Your Dream<br />
                  House is Waiting<br />
                  For You
                </h1>
                <p 
                  className="text-[18px] leading-[1.5] mb-[35px] font-medium" 
                  style={{ 
                    color: '#505050',
                    fontFamily: 'Assistant, sans-serif',
                    fontWeight: 300
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a
                  href="#form"
                  className="cta learnmore inline-block px-8 py-4 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 w-fit"
                  style={{
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontFamily: 'Assistant, sans-serif'
                  }}
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="col-lg-6 w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-end">
              <div className="single-image relative w-full max-w-lg">
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={banners[currentSlide]}
                    alt="Dream House"
                    className="w-full h-auto object-cover transition-opacity duration-500"
                    style={{ borderRadius: '6px 6px 6px 50px' }}
                    priority
                  />
                </div>
                {/* Slider Indicators */}
                <div className="flex items-center gap-2 mt-4 justify-center">
                  {banners.map((_, index) => (
                    <div
                      key={index}
                      className="transition-all duration-300"
                      style={{
                        width: index === currentSlide ? '16px' : '12px',
                        height: index === currentSlide ? '16px' : '12px',
                        backgroundColor: '#EF4444',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full h-80 lg:h-96 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path
            d="M 0 400 L 0 240 Q 200 200 400 220 T 800 210 T 1200 200 L 1200 400 Z"
            fill="#FCEEEB"
          />
        </svg>
      </div>
    </section>
  );
}
