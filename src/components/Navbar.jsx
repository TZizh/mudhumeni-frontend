import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-600/35 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔹 Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src="/logo.png"
              alt="M.A.L Logo"
              className="h-14 w-14 object-contain"
            />
          </a>
        </div>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#technology" className="hover:text-green-600">Technology</a></li>
          <li><a href="#impact" className="hover:text-green-600">Impact</a></li>
          <li><a href="#model" className="hover:text-green-600">MaaS Model</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* 🔹 Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-primary-600 text-white/90 px-5 py-2 rounded-full hover:bg-primary-700 transition"
        >
          <b>Get Started</b>
        </a>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-green-800 hover:text-green-600 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* 🔹 Overlay (appears when menu is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 🔹 Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <img
            src="/logo.png"
            alt="M.A.L Logo"
            className="h-10 w-10 object-contain"
          />
          <button
            className="text-gray-700 hover:text-green-700 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 px-8 py-8 text-lg text-gray-800 font-medium">
          {[
            { name: "About", href: "#about" },
            { name: "Technology", href: "#technology" },
            { name: "Impact", href: "#impact" },
            { name: "MaaS Model", href: "#model" },
            { name: "Contact", href: "#contact" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-green-700 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-8">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-green-700 text-white px-5 py-3 rounded-full hover:bg-green-800 transition"
          >
            <b>Get Started</b>
          </a>
        </div>
      </div>
    </nav>
  );
}
