import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-gray-100 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm leading-relaxed">
        <p className="mb-2">
          © {new Date().getFullYear()} <b>Mudhumeni Agentic Logic</b> —{" "}
          <span className="text-green-300 font-medium">
            Where Tradition Meets Intelligence
          </span>.
        </p>
        <p className="text-green-100/80">
          Designed with 🌱 by the M.A.L Smart Farming Initiative
        </p>
      </div>
    </footer>
  );
}
