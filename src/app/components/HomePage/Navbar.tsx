"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/authContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-800 hover:text-blue-700"
        >
          HR International Agency
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
          <Link href="/careers" className="text-gray-700 hover:text-blue-600">
            Manpower Recruitment
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600">
            Gallery
          </Link>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
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
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-white shadow-lg px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Manpower Recruitment
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Gallery
          </Link>

          <div className="pt-4 border-t mt-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block text-red-600 hover:underline mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-2 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
