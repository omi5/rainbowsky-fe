// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/app/context/authContext";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { isAuthenticated, logout } = useAuth();
//   const pathname = usePathname();
//   // const user = localStorage.getItem("user");
//   // const userId = user ? JSON.parse(user).id : null;

//   const user =
//     typeof window !== "undefined" ? localStorage.getItem("user") : null;
//   const userId = user ? JSON.parse(user).id : null;

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-800 hover:text-blue-700 transition-colors"
//         >
//           HR International Agency
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link
//             href="/"
//             className={`text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className={`text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/about" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             About Us
//           </Link>
//           <Link
//             href="/contact"
//             className={`text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/contact" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/careers"
//             className={`text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/careers" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Manpower Recruitment
//           </Link>
//           <Link
//             href="/gallery"
//             className={`text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/gallery" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Gallery
//           </Link>

//           {/* Auth Buttons */}
//           <div className="flex items-center space-x-4 ml-6">
//             {isAuthenticated ? (
//               <>
//                 <Link
//                   href="/profile"
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     pathname === "/profile"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Profile
//                 </Link>
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600 transition-colors"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/login"
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     pathname === "/login"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={
//                 mobileMenuOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16M4 18h16"
//               }
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//           mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-white px-4 pt-2 pb-6 space-y-2 border-t border-gray-100">
//           <Link
//             href="/"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/about" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             About Us
//           </Link>
//           <Link
//             href="/contact"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/contact" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/careers"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/careers" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Manpower Recruitment
//           </Link>
//           <Link
//             href="/gallery"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
//               pathname === "/gallery" ? "text-blue-600 font-medium" : ""
//             }`}
//           >
//             Gallery
//           </Link>

//           <div className="pt-4 border-t border-gray-100 mt-2 space-y-2">
//             {isAuthenticated ? (
//               <>
//                 <Link
//                   href={`/profile/${userId}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block px-4 py-3 rounded-lg text-gray-700 transition-colors cursor-pointer ${
//                     pathname === "/profile"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   Profile
//                 </Link>
//                 <button
//                   onClick={() => {
//                     logout();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="block w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600 transition-colors cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/login"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block px-4 py-3 rounded-lg text-gray-700 transition-colors cursor-pointer ${
//                     pathname === "/login"
//                       ? "bg-blue-100 text-blue-600"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="block px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-center shadow-sm transition-colors cursor-pointer"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import { useTranslations } from "@/hooks/useTranslations";
import LanguageSwitcher from "../../../../src/components/common/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const userId = user ? JSON.parse(user).id : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-800 hover:text-blue-700 transition-colors"
        >
          HR International
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/about" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/contact"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/contact" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("contact")}
          </Link>
          <Link
            href="/careers"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/careers" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("careers")}
          </Link>
          <Link
            href="/gallery"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/gallery" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("gallery")}
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === "/profile"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t("profile")}
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600 transition-colors"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === "/login"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t("login")}
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
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
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 pt-2 pb-6 space-y-2 border-t border-gray-100">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/about" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/contact" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("contact")}
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/careers" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("careers")}
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 transition-colors ${
              pathname === "/gallery" ? "text-blue-600 font-medium" : ""
            }`}
          >
            {t("gallery")}
          </Link>

          {/* Language Switcher for Mobile */}
          <div className="px-4 py-3">
            <LanguageSwitcher />
          </div>

          <div className="pt-4 border-t border-gray-100 mt-2 space-y-2">
            {isAuthenticated ? (
              <>
                <Link
                  href={`/profile/${userId}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-gray-700 transition-colors cursor-pointer ${
                    pathname === "/profile"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {t("profile")}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-gray-700 transition-colors cursor-pointer ${
                    pathname === "/login"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {t("login")}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 text-center shadow-sm transition-colors cursor-pointer"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
