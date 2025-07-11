"use client";

import type React from "react";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const certificationLogos = [
    {
      id: 1,
      name: "ISO Certification",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Quality Assurance",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Safety Standard",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "IAF Certification",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Excellence Award",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "Industry Standard",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 7,
      name: "Global Recognition",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 8,
      name: "Professional Cert",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 9,
      name: "Quality Mark",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 10,
      name: "Service Excellence",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 11,
      name: "Innovation Award",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 12,
      name: "Best Practice",
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Contact
              <span className="ml-2 text-blue-400">📍</span>
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">
                  📍 Head Quarters:
                </p>
                <p className="text-sm leading-relaxed">
                  Kamal Mansion, 4/58 A, Haji N. A. Azmi Marg,
                  <br />
                  Colaba, Mumbai, Maharashtra 400005
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <p>Co. Name - M/S Soundlines</p>
                  <p>License no - B-0586/Mum/Per/1000+/5/5396/99</p>
                  <p>DOI: 27.10.2000 DOE: 26.7.2026</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm flex items-center">
                  <span className="mr-2">📞</span>
                  Phone: +91 22 66283333
                </p>
                <p className="text-sm flex items-center">
                  <span className="mr-2">✉️</span>
                  Email: marketing@soundlinesgroup.com
                </p>
                <p className="text-sm flex items-center">
                  <span className="mr-2">🌐</span>
                  Website: soundlinesgroup.com
                </p>
              </div>
            </div>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Important Links
              <span className="ml-2 text-blue-400">🔗</span>
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">▶</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">▶</span>
                  Registration Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">▶</span>
                  Emigrant Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">▶</span>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Newsletter
              <span className="ml-2 text-blue-400">📧</span>
            </h3>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                To receive latest news, events & updates about Soundlines Group,
                sign up to our newsletter
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 transition-colors duration-300"
                >
                  Send
                </button>
              </form>

              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-2">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 p-2 rounded transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-800 p-2 rounded transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Certifications
              <span className="ml-2 text-blue-400">🏆</span>
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {certificationLogos.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white p-2 rounded hover:shadow-lg transition-shadow duration-300 group"
                >
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    className="w-full h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Soundlines Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
