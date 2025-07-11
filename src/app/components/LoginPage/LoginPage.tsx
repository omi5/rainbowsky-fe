// "use client";
// import React, { useState } from "react";
// import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
// import InputLabel from "../CustomComponent/InputLabel";
// import CustomInput from "../CustomComponent/CustomInput";
// import CustomButton from "../CustomComponent/CustomButton";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// interface LoginProps {
//   route?: string;
// }

// const Login: React.FC<LoginProps> = ({ route }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailLoading, setEmailLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [resetEmail, setResetEmail] = useState("");
//   const [showResetModal, setShowResetModal] = useState(false);
//   const router = useRouter();

//   const handleLogin = async () => {
//     setEmailLoading(true);
//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Logged in successfully");
//         router.push("/dashboard");
//       } else {
//         toast.error(data.message || "Login failed");
//       }
//     } catch (err) {
//       toast.error("Failed to login");
//       console.error("Login error:", err);
//     } finally {
//       setEmailLoading(false);
//     }
//   };

//   const handleResetPasswordModal = () => {
//     setShowResetModal(true);
//   };

//   const handleResetPassword = async () => {
//     if (!resetEmail) {
//       toast.error("Please enter your email");
//       return;
//     }
//     try {
//       const response = await fetch("/api/auth/forgot-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Reset password link sent to your email");
//         setShowResetModal(false);
//       } else {
//         toast.error(data.message || "Failed to send reset link");
//       }
//     } catch (err) {
//       toast.error("Failed to send reset password email");
//       console.error("Reset password error:", err);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Log in to your account
//       </h2>

//       <div className="mb-6">
//         <InputLabel text="Email" />
//         <CustomInput
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="mb-6">
//         <InputLabel text="Password" />
//         <CustomInput
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <CustomButton
//         type="submit"
//         size="block"
//         variant="primary"
//         className="font-medium mb-6"
//         onClick={handleLogin}
//         disabled={emailLoading}
//       >
//         {emailLoading ? "Logging in..." : "Log in"}
//       </CustomButton>

//       <div className="text-center text-sm text-gray-600 mb-6">
//         Don't have an account?{" "}
//         <Link
//           href="/signup"
//           className="text-blue-600 hover:underline font-medium"
//         >
//           Sign up
//         </Link>
//       </div>

//       <div className="text-center text-sm text-gray-600 mb-8">
//         Forgot your password?{" "}
//         <button
//           onClick={handleResetPasswordModal}
//           className="text-blue-600 hover:underline font-medium"
//         >
//           Reset password
//         </button>
//       </div>

//       {route !== "mentor-auth" && (
//         <>
//           <div className="relative mb-6">
//             <div className="flex items-center justify-center">
//               <span className="block w-1/2 border-t border-gray-200"></span>
//               <span className="mx-4 text-gray-400 text-sm">OR</span>
//               <span className="block w-1/2 border-t border-gray-200"></span>
//             </div>
//           </div>

//           <div className="mb-6">
//             <CustomButton
//               type="button"
//               size="block"
//               icon={<FaGoogle className="text-red-500" />}
//               variant="transparent"
//               onClick={() => {}}
//               disabled={googleLoading}
//             >
//               {googleLoading ? "Logging in..." : "Continue with Google"}
//             </CustomButton>
//           </div>
//         </>
//       )}

//       {showResetModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full">
//             <h3 className="text-lg font-bold mb-4">Reset password</h3>
//             <p className="text-gray-600 mb-4">
//               Please enter your email address, and we'll send you a link to
//               reset your password.
//             </p>
//             <CustomInput
//               type="email"
//               placeholder="your@email.com"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="mb-4"
//             />
//             <div className="flex justify-end space-x-3">
//               <CustomButton
//                 type="button"
//                 size="medium"
//                 variant="transparent"
//                 onClick={() => setShowResetModal(false)}
//               >
//                 Cancel
//               </CustomButton>
//               <CustomButton
//                 type="button"
//                 size="medium"
//                 variant="primary"
//                 onClick={handleResetPassword}
//               >
//                 Send Link
//               </CustomButton>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import InputLabel from "../CustomComponent/InputLabel";
import CustomInput from "../CustomComponent/CustomInput";
import CustomButton from "../CustomComponent/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginProps {
  route?: string;
}

const Login: React.FC<LoginProps> = ({ route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Logged in successfully");
        router.push("/dashboard");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Failed to login");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Reset password link sent to your email");
        setShowResetModal(false);
      } else {
        toast.error(data.message || "Failed to send reset link");
      }
    } catch (err) {
      toast.error("Failed to send reset password email");
      console.error("Reset password error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="space-y-4">
            <div>
              <InputLabel text="Email address" isRequired />
              <CustomInput
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <InputLabel text="Password" isRequired />
                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>
              <CustomInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <CustomButton
              type="submit"
              size="block"
              variant="primary"
              isLoading={isLoading}
            >
              Sign in
            </CustomButton>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <CustomButton
              type="button"
              variant="outline"
              icon={<FaGoogle className="text-red-500" />}
            >
              Google
            </CustomButton>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-900">
                Reset password
              </h3>
              <button
                onClick={() => setShowResetModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <div className="mb-4">
                <InputLabel text="Email address" isRequired />
                <CustomInput
                  type="email"
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <CustomButton
                  type="button"
                  variant="outline"
                  onClick={() => setShowResetModal(false)}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="button"
                  variant="primary"
                  onClick={handleResetPassword}
                >
                  Send link
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
