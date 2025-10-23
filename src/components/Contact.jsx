import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-primary-600/90 text-white py-16 sm:py-20 px-4 sm:px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Get in Touch
        </h2>

        <p className="text-base sm:text-lg text-gray-100 mb-8 sm:mb-10 leading-relaxed px-2">
          Join the smart farming revolution. Contact us to learn how{" "}
          <b>M.A.L</b> can transform your greenhouse into an intelligent,
          self-optimizing ecosystem.
        </p>

        <a
          href="mailto:info@mudhumeni.africa"
          className="inline-block bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          info@mudhumeni.africa
        </a>

        {/* Optional social or location footer */}
        <div className="mt-10 text-sm text-green-100 opacity-80">
          © {new Date().getFullYear()} Mudhumeni Agentic Logic — Empowering
          farmers through AI-driven agriculture.
        </div>
      </div>
    </section>
  );
}
