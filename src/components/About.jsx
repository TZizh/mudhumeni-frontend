import React from "react";
import { Tractor } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-primary-400/50 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* 🔹 Icon Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="w-full h-full bg-[length:100px_100px] sm:bg-[length:120px_120px]">
          <div className="grid grid-cols-[repeat(auto-fill,100px)] sm:grid-cols-[repeat(auto-fill,120px)] w-full h-full">
            {[...Array(150)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Tractor size={40} className="text-primary-900" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Foreground Content */}
      <div className="relative max-w-6xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          Our Vision
        </h2>

        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2 leading-relaxed">
          We aim to empower smallholder farmers through{" "}
          <b>agentic AI-driven smart greenhouses</b>. Our mission is to transform
          greenhouse tomato farming into a self-regulating, high-yield, export-grade
          ecosystem.
        </p>

        {/* 🔹 Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left relative z-10">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 bg-green-50/80 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 mb-2 text-lg">
              Problem
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Small-scale farmers lack access to real-time monitoring and
              data-driven decisions — leading to low yields and delayed pest detection.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 bg-green-50/80 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 mb-2 text-lg">
              Solution
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              M.A.L automates monitoring, irrigation, and resource control while providing
              real-time insights through IoT sensors and AI vision.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 bg-green-50/80 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 mb-2 text-lg">
              Impact
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Reducing water and fertilizer waste by up to 40% while improving yields by
              more than 50% for smallholder farmers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
