'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  warehouseIndustrial, 
  warehouseShot1, 
  warehouseShot2, 
  warehouseShot3, 
  warehouseShot4,
  bg2, 
  warehouseDrone, 
  warehouseLayout, 
  warehouseLoc1, 
  warehouseLoc2, 
  warehouseLoc3, 
  warehouseLoc4 
} from '@/assets';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: warehouseIndustrial, alt: 'Industrial warehouse exterior' },
    { src: warehouseShot1, alt: 'Warehouse interior shot 1' },
    { src: warehouseShot2, alt: 'Warehouse interior shot 2' },
    { src: warehouseShot3, alt: 'Warehouse interior shot 3' },
    { src: warehouseShot4, alt: 'Warehouse interior shot 4' },
    { src: warehouseDrone, alt: 'Aerial drone view of warehouse' },
    { src: warehouseLayout, alt: 'Warehouse floor plan layout' },
    { src: warehouseLoc1, alt: 'Location view 1' },
    { src: warehouseLoc2, alt: 'Location view 2' },
    { src: warehouseLoc3, alt: 'Location view 3' },
    { src: warehouseLoc4, alt: 'Location view 4' },
  ].filter(img => img.src); // Filter out any undefined images

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-12 lg:py-16 bg-white relative" id="gallery" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Image with Opacity */}
        {(() => {
          const bgImageUrl = typeof bg2 === 'string' ? bg2 : bg2.src || bg2;
          return (
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
          );
        })()}
        <div className="w-full px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-10 max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                color: '#173C65',
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontWeight: 400
              }}
            >
              Gallery
            </h2>
            <p
              className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'Assistant, sans-serif',
              }}
            >
              Explore our state-of-the-art warehouse facilities through our photo gallery. See the quality and features that make our spaces ideal for your operations.
            </p>
          </div>

          {/* Gallery Masonry Grid */}
          {galleryImages.length > 0 ? (
            <div className="w-full">
              <div 
                className="grid gap-3 lg:gap-4"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gridAutoRows: '200px',
                  gridAutoFlow: 'row dense'
                }}
              >
                {galleryImages.map((image, index) => {
                  // Create varied sizes for masonry effect
                  const getSize = (idx: number) => {
                    const sizes = [
                      { row: 'span 2', col: 'span 1' }, // Tall
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 2', col: 'span 2' }, // Large
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 2', col: 'span 1' }, // Tall
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 2', col: 'span 1' }, // Tall
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 2', col: 'span 2' }, // Large
                    ];
                    return sizes[idx % sizes.length];
                  };
                  
                  const size = getSize(index);
                  
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => openModal(index)}
                      style={{ 
                        backgroundColor: '#f3f4f6',
                        gridRow: size.row,
                        gridColumn: size.col,
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 pointer-events-none bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>No images available</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {/* Navigation */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : (prev || 0) - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Previous image"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => ((prev || 0) + 1) % galleryImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                aria-label="Next image"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

