// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ToastContainer } from "react-toastify";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Providers } from "./components/Providers";
// import { AuthProvider } from "./context/authContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "HR International Agency",
//   description: "HR International Agency",
// };
// const ClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <GoogleOAuthProvider clientId={ClientId}>
//           <AuthProvider>
//             {children}
//             <ToastContainer />
//           </AuthProvider>
//         </GoogleOAuthProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/authContext";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HR International Agency",
  description: "HR International Agency",
};

const ClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId={ClientId}>
          <AuthProvider>
            <LanguageProvider>
              {children}
              <ToastContainer />
            </LanguageProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
