"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Locations() {
  const highlights = [
    "Located in Heart of the City",
    "On Main City Road",
    "2 Floors for Parking",
    "Earthquake Resistance Structure",
    "Near to all Major Govt. Institutions",
    "100% Power Back-up in Common Area",
    "3-Tier Security",
    "Loan from all Leading Banks",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="pt-16 pb-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Location Advantages</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Highlights */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Highlights of Project</h2>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-4 text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-base font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/image.png"
                alt="Aerial city view with modern buildings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
