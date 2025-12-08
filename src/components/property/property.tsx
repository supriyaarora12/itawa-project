"use client"
import { useState } from "react"
import { Check } from "lucide-react"
import { propertyImage, warehouseLayout, bg2 } from "@/assets"
import Image from "next/image"
import { warehouseConfig } from "@/config/warehouse-content"

export default function PropertySpecification() {
  const [activeTab, setActiveTab] = useState(warehouseConfig.specifications.tabs[0]?.id || "building")
  
  // Convert config tabs to the format needed
  const specifications = warehouseConfig.specifications.tabs.reduce((acc, tab) => {
    acc[tab.id] = {
      title: tab.label,
      items: tab.items,
    }
    return acc
  }, {} as Record<string, { title: string; items: string[] }>)

  const tabs = warehouseConfig.specifications.tabs

  const activeSpec = specifications[activeTab] || specifications[tabs[0]?.id || "building"]
  const bgImageUrl = typeof bg2 === 'string' ? bg2 : bg2.src || bg2;

  return (
    <div className="min-h-screen bg-white relative" id="specifications" style={{ position: 'relative', overflow: 'hidden' }}>
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
        <div className="py-12">
          <h1 className="text-5xl font-bold text-center mb-6" style={{ color: '#173C65', fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 400 }}>{warehouseConfig.specifications.title}</h1>
          <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {warehouseConfig.specifications.subtitle}
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-serif text-lg transition-all duration-200 ${
                activeTab === tab.id ? "text-white shadow-lg" : "bg-blue-50 text-slate-800 hover:bg-blue-100"
              }`}
              style={{
                backgroundColor: activeTab === tab.id ? '#173C65' : undefined,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Content Section */}
        <div className="pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Specifications List */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#173C65', fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 400 }}>
              {activeSpec.title}
            </h2>
            <ul className="space-y-4 flex-grow">
              {activeSpec.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-6 h-6" style={{ color: '#173C65' }} />
                  </div>
                  <span className="text-slate-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column - Image */}
          <div className="flex justify-center h-full">
            <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={warehouseLayout || propertyImage}
                alt="Warehouse Layout"
                fill
                className="object-cover transition-opacity duration-500"
                style={{ borderRadius: '6px 6px 6px 50px' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}