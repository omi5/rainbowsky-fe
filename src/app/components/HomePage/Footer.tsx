"use client";

import React, { useState, useRef, JSX } from "react";
import {
  Mail,
  Phone,
  Globe,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

/**
 * Exact place coordinates (from the iframe you pasted)
 * Place: Banani Breeze, Rd Number 2, Dhaka 1213
 */
const DEST_LAT = 23.7875186;
const DEST_LNG = 90.4004255;
const DEST_LABEL = "Banani Breeze, Rd Number 2, Dhaka 1213";

/** Useful links */
const GOOGLE_PLACE_URL = `https://www.google.com/maps/place/${DEST_LAT},${DEST_LNG}`;
const GOOGLE_DIRECTIONS_BASE = `https://www.google.com/maps/dir/?api=1&destination=${DEST_LAT},${DEST_LNG}`;

export default function Footer(): JSX.Element {
  const [gettingDirections, setGettingDirections] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openGoogleMapsDirections = () => {
    setGettingDirections(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${DEST_LAT},${DEST_LNG}&travelmode=driving`;
          openInNewTab(directionsUrl);
          setGettingDirections(false);
        },
        (err) => {
          // If user denies or there's an error, open the place page so they can hit Directions manually
          console.warn("Geolocation error:", err);
          openInNewTab(GOOGLE_PLACE_URL);
          setGettingDirections(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      // Geolocation not supported
      openInNewTab(GOOGLE_PLACE_URL);
      setGettingDirections(false);
    }
  };

  // Responsive Google Maps embed (exact coordinates)
  const googleEmbedUrl = `https://maps.google.com/maps?q=${DEST_LAT},${DEST_LNG}&z=16&output=embed`;

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
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

          {/* Important Links */}
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

            {/* Social */}
            <div className="flex space-x-3 pt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <FacebookIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-3 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <InstagramIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <YoutubeIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <LinkedinIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Visit Us
              <span className="ml-2 text-blue-400">🗺️</span>
            </h3>

            <div className="rounded-lg overflow-hidden border border-gray-700">
              <div
                role="button"
                tabIndex={0}
                onClick={openGoogleMapsDirections}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    openGoogleMapsDirections();
                }}
                className="relative w-full h-48 cursor-pointer"
                aria-label={`Open directions to ${DEST_LABEL}`}
              >
                <iframe
                  ref={iframeRef}
                  title="Location preview"
                  src={googleEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-end justify-end p-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGoogleMapsDirections();
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm shadow"
                  >
                    {gettingDirections
                      ? "Getting location..."
                      : "Get Directions"}
                  </button>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-900 text-gray-300 text-sm">
                <div className="font-medium text-white">{DEST_LABEL}</div>
                <div className="mt-1">
                  Click the map or "Get Directions" to open Google Maps
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  <a
                    href={GOOGLE_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2024 HR International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
