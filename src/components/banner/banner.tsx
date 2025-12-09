'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { banner1, banner2, bg, bg1, warehouseIndustrial, warehouseShot1, warehouseShot2, warehouseShot3 } from '@/assets';
import { warehouseConfig } from '@/config/warehouse-content';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Use warehouse images - can be easily changed in config
  // Default to warehouse images, fallback to original banners if needed
  const warehouseImages = [warehouseShot1, warehouseShot2, warehouseShot3].filter(Boolean);
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
      className="hero-section relative overflow-hidden pt-[100px] pb-20 bg-white" 
      id="home"
    >
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-[0.15] z-0"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      />
      <div className="text-block relative  max-w-7xl mx-auto z-10">
        <div className=" ">
          <div className="row flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 v-center w-full lg:w-[40%] flex flex-col justify-start ">
              <div className="header-heading">
                <h1 
                  className="font-bold text-[32px] md:text-[40px] lg:text-[45px] leading-[1.2] mb-[15px] md:mb-[18px] m-0 p-0 mt-0 text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal" 
                >
                  {warehouseConfig.banner.title}
                  {warehouseConfig.banner.subtitle && (
                    <>
                      <br className="leading-none" />
                      <span className="text-[24px] md:text-[28px] lg:text-[24px] leading-tight block mt-[0.3em]">
                        {warehouseConfig.banner.subtitle}
                      </span>
                    </>
                  )}
                </h1>
                <p 
                  className="text-[14px] md:text-[16px] leading-[1.5] mb-[20px] md:mb-[24px] font-medium text-[#505050] font-['Assistant',sans-serif] font-light" 
                >
                  {warehouseConfig.banner.description}
                </p>
                <a
                  href={warehouseConfig.banner.ctaLink}
                  className="cta learnmore inline-block px-8 py-4 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 w-fit border-2 bg-white text-black border-[#173C65] font-['Assistant',sans-serif]"
                >
                  {warehouseConfig.banner.ctaText}
                </a>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="col-lg-6 w-full lg:w-1/2 flex flex-col items-center ">
              <div className="single-image relative w-full ">
                <div className="relative w-full overflow-hidden h-auto min-h-[400px]">
                  <Image
                    src={banners[currentSlide]}
                    alt={warehouseConfig.banner.title}
                    width={800}
                    height={450}
                    className="w-full h-[450px] object-cover transition-opacity duration-500 rounded-[6px_6px_6px_50px]"
                    priority
                  />
                   {banners.length > 1 && (
                  <div className="flex items-center gap-2 mt-4 justify-center">
                    {banners.map((_, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-300 bg-[#173C65] rounded-[2px] ${
                          index === currentSlide ? 'w-4 h-4' : 'w-3 h-3'
                        }`}
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
