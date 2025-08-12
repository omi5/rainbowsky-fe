// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "react-toastify";
// import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

// import { login as loginService, googleSignIn } from "@/services/authService";
// import { useAuth } from "@/app/context/authContext";
// import InputLabel from "../CustomComponent/InputLabel";
// import CustomInput from "../CustomComponent/CustomInput";
// import CustomButton from "../CustomComponent/CustomButton";
// import Link from "next/link";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const router = useRouter();
//   const { login } = useAuth();
//   const searchParams = useSearchParams();

//   const redirectTo = searchParams.get("redirect") || "/";

//   useEffect(() => {
//     const isRedirect = searchParams.has("redirect");
//     if (isRedirect) toast.info("Please log in to continue.");
//   }, [searchParams]);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const data = await loginService({ email, password });
//       login(data);
//       toast.success("Logged in successfully");
//       router.push(redirectTo);
//     } catch (err: any) {
//       toast.error(err.message);
//       if (err.message.toLowerCase().includes("invalid")) setPassword("");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleSuccess = async (res: CredentialResponse) => {
//     if (!res.credential) {
//       toast.error("Google sign‑in failed: no credential");
//       return;
//     }
//     setGoogleLoading(true);
//     try {
//       const data = await googleSignIn(res.credential);
//       login(data);
//       toast.success("Logged in with Google");
//       router.push(redirectTo);
//     } catch (err: any) {
//       toast.error(err.message);
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center">
//           Welcome back
//         </h2>

//         <form onSubmit={handleLogin} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             <div>
//               <InputLabel text="Email address" isRequired />
//               <CustomInput
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <InputLabel text="Password" isRequired />
//               <CustomInput
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <CustomButton
//             type="submit"
//             size="block"
//             variant="primary"
//             isLoading={isLoading}
//           >
//             Log in
//           </CustomButton>
//         </form>

//         <div className="relative flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300" />
//           <span className="px-4 text-gray-500">Or continue with</span>
//           <div className="flex-grow border-t border-gray-300" />
//         </div>

//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={() => toast.error("Google sign‑in failed")}
//             useOneTap
//             width="280"
//             text="signin_with"
//           />
//         </div>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don&apos;t have an account?{" "}
//           <Link href="/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { login as loginService, googleSignIn } from "@/services/authService";
import { useAuth } from "@/app/context/authContext";
import InputLabel from "../CustomComponent/InputLabel";
import CustomInput from "../CustomComponent/CustomInput";
import CustomButton from "../CustomComponent/CustomButton";
import Link from "next/link";

// Create a wrapper component that handles the search params
const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/";

  useEffect(() => {
    const isRedirect = searchParams.has("redirect");
    if (isRedirect) toast.info("Please log in to continue.");
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await loginService({ email, password });
      login(data);
      toast.success("Logged in successfully");
      router.push(redirectTo);
    } catch (err: any) {
      toast.error(err.message);
      if (err.message.toLowerCase().includes("invalid")) setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (res: CredentialResponse) => {
    if (!res.credential) {
      toast.error("Google sign‑in failed: no credential");
      return;
    }
    setGoogleLoading(true);
    try {
      const data = await googleSignIn(res.credential);
      login(data);
      toast.success("Logged in with Google");
      router.push(redirectTo);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Welcome back
        </h2>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <InputLabel text="Email address" isRequired />
              <CustomInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <InputLabel text="Password" isRequired />
              <CustomInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <CustomButton
            type="submit"
            size="block"
            variant="primary"
            isLoading={isLoading}
          >
            Log in
          </CustomButton>
        </form>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error("Google sign‑in failed")}
            useOneTap
            width="280"
            text="signin_with"
          />
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

// Main Login component with Suspense boundary
const Login: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
};

export default Login;
