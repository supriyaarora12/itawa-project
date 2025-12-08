'use client';

import { warehouseConfig } from '@/config/warehouse-content';
import { Package, Truck, Store, Factory, Pill, Car } from 'lucide-react';

export default function IdealFor() {
  const industries = warehouseConfig.targetIndustries.industries;

  const iconMap: Record<string, any> = {
    'E-commerce': <Package className="w-8 h-8" />,
    'Logistics & Distribution': <Truck className="w-8 h-8" />,
    'Retail Supply Chain': <Store className="w-8 h-8" />,
    'Manufacturing': <Factory className="w-8 h-8" />,
    'Pharmaceutical': <Pill className="w-8 h-8" />,
    'Automotive': <Car className="w-8 h-8" />,
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white" id="ideal-for">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: '#173C65',
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontWeight: 400
            }}
          >
            {warehouseConfig.targetIndustries.title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'Assistant, sans-serif',
            }}
          >
            {warehouseConfig.targetIndustries.subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="bg-white rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {/* Left Column */}
            <div className="divide-y divide-gray-300">
              {industries.filter((_, index) => index % 2 === 0).map((industry, colIndex) => {
                const originalIndex = colIndex * 2;
                return (
                  <div key={originalIndex} className="flex items-start gap-6 p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundColor: '#EFF6FF',
                        color: '#173C65',
                      }}
                    >
                      {iconMap[industry.name] || <Package className="w-8 h-8" />}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: '#173C65',
                          fontFamily: 'Libre Baskerville, Georgia, serif',
                          fontWeight: 400
                        }}
                      >
                        {industry.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        style={{
                          fontFamily: 'Assistant, sans-serif',
                        }}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right Column */}
            <div className="divide-y divide-gray-300">
              {industries.filter((_, index) => index % 2 === 1).map((industry, colIndex) => {
                const originalIndex = colIndex * 2 + 1;
                return (
                  <div key={originalIndex} className="flex items-start gap-6 p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundColor: '#EFF6FF',
                        color: '#173C65',
                      }}
                    >
                      {iconMap[industry.name] || <Package className="w-8 h-8" />}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: '#173C65',
                          fontFamily: 'Libre Baskerville, Georgia, serif',
                          fontWeight: 400
                        }}
                      >
                        {industry.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        style={{
                          fontFamily: 'Assistant, sans-serif',
                        }}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

