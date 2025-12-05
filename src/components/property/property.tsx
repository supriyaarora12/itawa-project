"use client"
import { useState } from "react"
import { Check } from "lucide-react"
import image from "@/assets/propert/image.png"
import Image from "next/image"
export default function PropertySpecification() {
  const [activeTab, setActiveTab] = useState("wall")
  const specifications = {
    wall: {
      title: "Wall Finishing",
      items: [
        "External - Texture Paint",
        "Internal - POP Finished Walls & Plastic Emulsion Paint.",
        "Lift Cladding - Granite/Marble",
        "External - Texture Paint",
        "Internal - POP Finished Walls & Plastic Emulsion Paint.",
        "Lift Cladding - Granite/Marble",
      ],
    },
    flooring: {
      title: "Flooring",
      items: ["Ceramic Tiles - 24x24 inches", "Anti-slip Flooring", "Marble Finishing"],
    },
    toilet: {
      title: "Toilet Fittings",
      items: ["Ceramic Water Closet", "Stainless Steel Accessories", "Premium Faucets"],
    },
    kitchen: {
      title: "Kitchen",
      items: ["Modular Kitchen Design", "Granite Countertops", "Stainless Steel Sink"],
    },
  }
  const tabs = [
    { id: "wall", label: "Wall Finishing" },
    { id: "flooring", label: "Flooring" },
    { id: "toilet", label: "Toilet Fittings" },
    { id: "kitchen", label: "Kitchen" },
  ]
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-12 px-6 sm:px-12">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-6">Property Specification</h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center gap-4 px-6 sm:px-12 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-serif text-lg transition-all duration-200 ${
              activeTab === tab.id ? "bg-red-400 text-white shadow-lg" : "bg-pink-200 text-slate-800 hover:bg-pink-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content Section */}
      <div className="px-6 sm:px-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Specifications List */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {specifications[activeTab as keyof typeof specifications].title}
            </h2>
            <ul className="space-y-4">
              {specifications[activeTab as keyof typeof specifications].items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                                  src={image}
                                  alt="Dream House"
                                  className="w-full h-auto object-cover transition-opacity duration-500"
                                  style={{ borderRadius: '6px 6px 6px 50px' }}
                                  priority
                                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}