'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { warehouseIndustrial, warehouseShot1, warehouseShot2, warehouseArea } from '@/assets';
import { Warehouse, Ruler, Building2, Layers } from 'lucide-react';
import { warehouseConfig } from '@/config/warehouse-content';
import { bg2 } from '@/assets';

export default function Apartments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Convert warehouse features to display cards
  const features = warehouseConfig.warehouseFeatures.features;
  const featureImages = [warehouseIndustrial, warehouseShot1, warehouseShot2, warehouseArea];
  
  // With features, we can show 3 at a time
  const maxPosition = Math.max(0, features.length - 3);

  useEffect(() => {
    if (features.length <= 3) return; // Don't auto-scroll if all fit
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxPosition + 1));
    }, 12000); // 12 seconds

    return () => clearInterval(interval);
  }, [maxPosition, features.length]);

  const bgImageUrl = typeof bg2 === 'string' ? bg2 : bg2.src || bg2;
  
  return (
    <section className="py-16 lg:py-24 bg-white relative" id="features" style={{ position: 'relative', overflow: 'hidden' }}>
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
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: '#173C65',
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontWeight: 400
            }}
          >
            {warehouseConfig.warehouseFeatures.title}
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: 'var(--gray)',
              fontFamily: 'var(--font-family-sans-serif)',
            }}
          >
            {warehouseConfig.warehouseFeatures.subtitle}
          </p>
        </div>

        {/* Warehouse Features Cards */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: features.length > 3 ? `translateX(-${currentIndex * (100 / 3)}%)` : 'translateX(0)',
            }}
          >
            {/* Render all feature cards - show 3 at a time */}
            {features.map((feature, index) => {
              const iconMap: Record<string, any> = {
                area: <Ruler className="w-6 h-6" style={{ color: '#173C65' }} />,
                rentable: <Building2 className="w-6 h-6" style={{ color: '#173C65' }} />,
                warehouse: <Warehouse className="w-6 h-6" style={{ color: '#173C65' }} />,
                mezzanine: <Layers className="w-6 h-6" style={{ color: '#173C65' }} />,
                height: <Ruler className="w-6 h-6" style={{ color: '#173C65' }} />,
                spacing: <Ruler className="w-6 h-6" style={{ color: '#173C65' }} />,
              };
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl border border-gray-100"
                    style={{
                      borderRadius: '8px',
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                      {featureImages[index % featureImages.length] && (
                        <Image
                          src={featureImages[index % featureImages.length]}
                          alt={feature.label}
                          fill
                          className="object-cover"
                          style={{
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-3">
                        {iconMap[feature.icon] || <Warehouse className="w-6 h-6" style={{ color: '#173C65' }} />}
                        <h3
                          className="text-xl font-bold"
                          style={{
                            color: '#173C65',
                            fontFamily: 'Libre Baskerville, Georgia, serif',
                            fontWeight: 400,
                            fontSize: '1.25rem',
                          }}
                        >
                          {feature.label}
                        </h3>
                      </div>

                      {/* Value */}
                      <div className="mb-2">
                        <span
                          className="text-2xl font-bold"
                          style={{
                            color: '#173C65',
                            fontFamily: 'var(--font-family-sans-serif)',
                          }}
                        >
                          {feature.value}
                        </span>
                      </div>

                      {/* Description */}
                      {feature.description && (
                        <p
                          className="text-sm"
                          style={{
                            color: 'var(--gray)',
                            fontFamily: 'var(--font-family-sans-serif)',
                          }}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Indicators - Only show if more than 3 features */}
        {features.length > 3 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxPosition + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300"
                style={{
                  width: index === currentIndex ? '16px' : '12px',
                  height: index === currentIndex ? '12px' : '12px',
                  backgroundColor: index === currentIndex ? '#173C65' : 'var(--gray)',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
