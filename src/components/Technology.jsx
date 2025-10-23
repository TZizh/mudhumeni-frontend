import React from "react";
import { Wifi, ChartLine, Gpu, SignalHigh, LayoutDashboard } from "lucide-react";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4 sm:px-6 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/background1.png')", // Replace with your image
      }}
    >

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10">
          Powered by Mudhumeni Agentic Logic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center text-left">
          {/* 🟢 Left column (features list) */}
          <div className="bg-white/85 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-green-100">
            <ul className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
              <li className="flex items-start">
                <Wifi className="mr-3 text-green-700 shrink-0" />
                <span>
                  IoT sensors for temperature, humidity, and soil moisture
                </span>
              </li>
              <li className="flex items-start">
                <ChartLine className="mr-3 text-green-700 shrink-0" />
                <span>
                  AI vision & acoustic analysis for early pest and disease detection
                </span>
              </li>
              <li className="flex items-start">
                <Gpu className="mr-3 text-green-700 shrink-0" />
                <span>
                  Edge AI (Jetson) for low-latency, private decision processing
                </span>
              </li>
              <li className="flex items-start">
                <SignalHigh className="mr-3 text-green-700 shrink-0" />
                <span>4G/5G connectivity for continuous remote monitoring</span>
              </li>
              <li className="flex items-start">
                <LayoutDashboard className="mr-3 text-green-700 shrink-0" />
                <span>
                  Dashboard visualization with alerts and real-time growth analytics
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
