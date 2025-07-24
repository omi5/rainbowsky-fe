"use client";

import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId="976865510755-ocjo3q0jf15bc5g9s37k4pqaoknhpr5r.apps.googleusercontent.com">
      {children}
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}
