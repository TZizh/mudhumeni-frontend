import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/hero1.png')",
      }}
    >
      {/* 🔹 Subtle Overlay */}
      <div className="absolute inset-0 bg-green-900/20 z-0"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center min-h-[100vh]">
        
        {/* 🟢 Left Content */}
        <div className="bg-white/85 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-green-800">
            Smart Farming with <br className="hidden sm:block" /> Mudhumeni (M.A.L)
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Empowering farmers through AI-driven greenhouse management.
            <br />
            <b>Mudhumeni Agentic Logic</b> acts as your digital extension officer —
            automating irrigation, pest control, and resource optimization.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center sm:items-start justify-center md:justify-start">
            <a
              href="#technology"
              className="bg-primary-400 text-primary-900/90 px-8 py-3 rounded-full font-medium hover:bg-primary-400/70 transition w-full sm:w-auto text-center"
            >
              Explore Technology
            </a>
            <a
              href="#contact"
              className="border border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-100 transition w-full sm:w-auto text-center"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* 🖼️ Optional Side Image or Empty Space for Layout Balance */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
