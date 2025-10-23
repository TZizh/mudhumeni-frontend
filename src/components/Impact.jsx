import React from "react";

export default function Impact() {
  const stats = [
    { label: "Yield Increase", value: "50%" },
    { label: "Reduced Waste", value: "40%" },
    { label: "Automation", value: "24/7" },
  ];

  return (
    <section
      id="impact"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/background2.png')", // 🖼️ your image path
      }}
    >
      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-green-900/50 z-0"></div>

      {/* 🔹 Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
          Impact & Benefits
        </h2>

        <p className="text-base sm:text-lg text-green-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          M.A.L transforms reactive farming into a predictive and autonomous system,
          boosting profitability and sustainability for farmers across Africa.
        </p>

        {/* 🔹 Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-green-200 hover:shadow-xl transition"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-green-800">
                {s.value}
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base uppercase tracking-wide font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
