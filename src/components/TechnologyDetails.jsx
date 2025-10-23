import React from "react";
import {
  Cpu,
  Droplets,
  Brain,
  Cloud,
  Leaf,
  Wifi,
  Gauge,
  Database,
} from "lucide-react";

export default function TechnologyDetails() {
  return (
    <section
      id="tech-details"
      className="relative bg-gradient-to-br from-primary-400 to-primary-600 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden text-gray-900"
    >
      {/* 🔹 Icon Overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="grid grid-cols-[repeat(auto-fill,120px)] sm:grid-cols-[repeat(auto-fill,160px)] w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              {i % 3 === 0 ? (
                <Cpu size={36} className="text-green-700" />
              ) : i % 3 === 1 ? (
                <Wifi size={36} className="text-green-600" />
              ) : (
                <Brain size={36} className="text-green-800" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Foreground Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-8 sm:mb-12">
          Mudhumeni Technology Deep Dive
        </h2>

        {/* 🔹 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Droplets className="text-green-700 w-10 h-10 mb-4" />,
              title: "IoT Sensor Network",
              desc: "M.A.L integrates soil moisture, temperature, and humidity sensors to track crop conditions in real-time. The data is collected via LoRa or Wi-Fi and sent to a central gateway for action triggers.",
            },
            {
              icon: <Cpu className="text-green-700 w-10 h-10 mb-4" />,
              title: "Edge AI Processing",
              desc: "Using NVIDIA Jetson or Raspberry Pi AI modules, M.A.L analyzes image and sound data locally to detect pest infestations or anomalies — without relying on the cloud.",
            },
            {
              icon: <Cloud className="text-green-700 w-10 h-10 mb-4" />,
              title: "Cloud-Based Intelligence",
              desc: "Processed data is securely sent to the Mudhumeni Cloud, where AI models aggregate farm data for predictive analytics — the backbone of MaaS.",
            },
            {
              icon: <Brain className="text-green-700 w-10 h-10 mb-4" />,
              title: "AI Vision & Acoustics",
              desc: "Camera and microphone modules analyze plant appearance and ambient sounds to detect early disease or stress indicators before yield loss occurs.",
            },
            {
              icon: <Database className="text-green-700 w-10 h-10 mb-4" />,
              title: "Analytics Dashboard",
              desc: "The Mudhumeni dashboard visualizes performance via live graphs, growth tracking, and automated alerts — enabling real-time, data-driven decisions.",
            },
            {
              icon: <Gauge className="text-green-700 w-10 h-10 mb-4" />,
              title: "Smart Irrigation Control",
              desc: "Soil moisture readings trigger precision irrigation using micro-valves. The system adapts schedules based on weather forecasts and plant uptake patterns.",
            },
            {
              icon: <Wifi className="text-green-700 w-10 h-10 mb-4" />,
              title: "Seamless Connectivity",
              desc: "M.A.L operates in rural and semi-urban areas using LoRa, GSM, or Wi-Fi mesh networks — ensuring continuous operation even in low-connectivity regions.",
            },
            {
              icon: <Leaf className="text-green-700 w-10 h-10 mb-4" />,
              title: "Sustainability & Energy",
              desc: "The entire system runs on solar-powered microgrids, promoting eco-friendly farming while reducing operational costs for smallholder farmers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/85 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl border border-green-100 transition"
            >
              {item.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
