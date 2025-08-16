"use client";

import { useState } from "react";
import certificationLogos from "@/utils/partnersImage/partnersImage";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  YoutubeIcon,
  LinkedinIcon,
  Mail,
  Phone,
  Globe,
  FacebookIcon,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

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
                  House 76, Road 2a, Block F, <br /> Banani, Dhaka, Bangladesh
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <p>Co. Name - M/S HR International</p>
                  <p>R.L No: 1134</p>
                  <p>
                    Dilkusha Center (4th floor), Suite-404, 28, Dilkusha C/A,
                    Dhaka-1000
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-400" />
                  +880 17 1199 4649
                </p>
                <p className="text-sm flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-400" />
                  H.R.Internationalrl1134@gmail.com
                </p>
                <p className="text-sm flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  hrinternational1134.com
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
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-3">
              <a
                href="https://www.facebook.com/hrinternationalbd/"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <FacebookIcon className="w-6 h-6 text-white" />{" "}
              </a>
              <a
                href="#"
                className="p-3 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <InstagramIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <YoutubeIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <LinkedinIcon className="w-6 h-6 text-white" />
              </a>
            </div>
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
            </div>
          </div>

          {/* Clients Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Clients
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
            © 2024 HR International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
