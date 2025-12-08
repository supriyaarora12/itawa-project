"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { locationImage, bg2 } from "@/assets"
import { warehouseConfig } from "@/config/warehouse-content"

export default function Locations() {
  const highlights = warehouseConfig.locations.highlights

  const bgImageUrl = typeof bg2 === 'string' ? bg2 : bg2.src || bg2;
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative" id="locations" style={{ position: 'relative', overflow: 'hidden' }}>
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="pt-16 pb-12 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#173C65', fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 400 }}>{warehouseConfig.locations.title}</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            {warehouseConfig.locations.subtitle}
          </p>
          {warehouseConfig.locations.description && (
            <p className="max-w-3xl mx-auto text-base text-slate-500 leading-relaxed mt-4">
              {warehouseConfig.locations.description}
            </p>
          )}
        </div>

        {/* Main Content Section */}
        <div className="pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Highlights */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#173C65', fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 400 }}>Strategic Access Points</h2>
            <ul className="space-y-4 flex-grow">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-4 text-slate-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#173C65' }} />
                  <span className="text-base font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center h-full">
            <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={locationImage}
                alt="Aerial city view with modern buildings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
