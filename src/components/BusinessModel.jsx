import React from "react";

export default function BusinessModel() {
  return (
    <section
      id="model"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4 sm:px-6 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/background3.png')",
      }}
    >
      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-green-900/40"></div>

      {/* 🔹 Foreground Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          Mudhumeni-as-a-Service (MaaS)
        </h2>

        <p className="text-base sm:text-lg text-green-100 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Our business model provides affordable, scalable access to smart farming
          technology through flexible subscription plans — empowering every farmer to
          benefit from AI-driven agricultural insights.
        </p>

        {/* 🔹 Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 🟢 Starter Plan */}
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2 sm:mb-3">
              Starter
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Basic IoT kit with mobile monitoring. Ideal for pilot farmers starting
              their smart farming journey.
            </p>
          </div>

          {/* 🟩 Professional Plan */}
          <div className="bg-green-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-green-600 transform sm:scale-105 hover:scale-105 transition">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Professional
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              AI-powered greenhouse control, advanced dashboard analytics, and
              predictive SMS alerts for optimized performance.
            </p>
          </div>

          {/* ⚪ Enterprise Plan */}
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2 sm:mb-3">
              Enterprise
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Full MaaS integration with multi-site analytics, on-site advisory
              support, and access to climate and market intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
