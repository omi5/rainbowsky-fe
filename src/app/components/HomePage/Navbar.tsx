"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomButton from "../CustomComponent/CustomButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Add bg when scrolled > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm border-gray-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-800 hover:text-blue-700 transition-colors"
        >
          HR International Agency
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            Manpower Recruitment
          </Link>
          <Link
            href="/gallery"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>

          <div className="flex items-center space-x-4 ml-4">
            <Link href="/login">
              <CustomButton
                type="button"
                variant="outline"
                size="small"
                className="px-4"
              >
                Login
              </CustomButton>
            </Link>
            <Link href="/signup">
              <CustomButton
                type="button"
                variant="primary"
                size="small"
                className="px-4"
              >
                Sign Up
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Careers */}
            Manpower Recruitment
          </Link>
          <Link
            href="/gallery"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>
          <div className="pt-2 space-y-2">
            <Link
              href="/login"
              className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-blue-600 hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
