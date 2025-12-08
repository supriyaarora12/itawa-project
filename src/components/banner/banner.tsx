'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { banner1, banner2, bg, bg1, warehouseIndustrial, warehouseShot1, warehouseShot2 } from '@/assets';
import { warehouseConfig } from '@/config/warehouse-content';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Use warehouse images - can be easily changed in config
  // Default to warehouse images, fallback to original banners if needed
  const warehouseImages = [warehouseIndustrial, warehouseShot1, warehouseShot2].filter(Boolean);
  const banners = warehouseImages.length > 0 ? warehouseImages : [banner1, banner2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const bgImageUrl = typeof bg1 === 'string' ? bg1 : bg1.src || bg1;
  
  return (
    <section 
      className="hero-section" 
      id="home"
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '20px',
        paddingBottom: '80px',
        backgroundColor: '#fff',
      }}
    >
      {/* Background Image with Opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          opacity: 0.15,
          zIndex: 0,
        }}
      />
      <div className="text-block relative z-10">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="row flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-8 lg:py-12">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 v-center w-full lg:w-[40%] flex flex-col justify-center lg:ml-22">
              <div className="header-heading">
                <h1 
                  className="font-bold text-[32px] md:text-[40px] lg:text-[45px] leading-[1.2] mb-[15px] md:mb-[18px] m-0 p-0 mt-0" 
                  style={{ 
                    color: '#173C65',
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontWeight: 400
                  }}
                >
                  {warehouseConfig.banner.title}
                  {warehouseConfig.banner.subtitle && (
                    <>
                      <br className="leading-none" />
                      <span className="text-[24px] md:text-[28px] lg:text-[24px] leading-tight" style={{ display: 'block', marginTop: '0.3em' }}>
                        {warehouseConfig.banner.subtitle}
                      </span>
                    </>
                  )}
                </h1>
                <p 
                  className="text-[14px] md:text-[16px] leading-[1.5] mb-[20px] md:mb-[24px] font-medium" 
                  style={{ 
                    color: '#505050',
                    fontFamily: 'Assistant, sans-serif',
                    fontWeight: 300
                  }}
                >
                  {warehouseConfig.banner.description}
                </p>
                <a
                  href={warehouseConfig.banner.ctaLink}
                  className="cta learnmore inline-block px-8 py-4 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 w-fit border-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#173C65',
                    fontFamily: 'Assistant, sans-serif'
                  }}
                >
                  {warehouseConfig.banner.ctaText}
                </a>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="col-lg-6 w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-end">
              <div className="single-image relative w-full max-w-lg">
                <div className="relative w-full overflow-hidden" style={{ height: 'auto', minHeight: '520px' }}>
                  <Image
                    src={banners[currentSlide]}
                    alt={warehouseConfig.banner.title}
                    className="w-full h-auto object-cover transition-opacity duration-500"
                    style={{ borderRadius: '6px 6px 6px 50px', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                   {banners.length > 1 && (
                  <div className="flex items-center gap-2 mt-4 justify-center">
                    {banners.map((_, index) => (
                      <div
                        key={index}
                        className="transition-all duration-300"
                        style={{
                          width: index === currentSlide ? '16px' : '12px',
                          height: index === currentSlide ? '16px' : '12px',
                          backgroundColor: '#173C65',
                          borderRadius: '2px'
                        }}
                      />
                    ))}
                  </div>
                )}
                </div>
                {/* Slider Indicators */}
               
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
            fill="#EFF6FF"
          />
        </svg>
      </div>
    </section>
  );
}
