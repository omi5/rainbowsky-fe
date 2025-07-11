// "use client";
// import React, { useState } from "react";
// import InputLabel from "../CustomComponent/InputLabel";
// import CustomInput from "../CustomComponent/CustomInput";
// import CustomButton from "../CustomComponent/CustomButton";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",
//     gender: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords don't match");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           password: formData.password,
//           dob: formData.dob,
//           gender: formData.gender,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Account created successfully!");
//         router.push("/login");
//       } else {
//         toast.error(data.message || "Signup failed");
//       }
//     } catch (err) {
//       toast.error("Failed to create account");
//       console.error("Signup error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md w-full">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Create your account
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <InputLabel text="Full Name" isRequired />
//           <CustomInput
//             type="text"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <InputLabel text="Email" isRequired />
//           <CustomInput
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <InputLabel text="Phone Number" isRequired />
//           <CustomInput
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <InputLabel text="Date of Birth" isRequired />
//           <CustomInput
//             type="date"
//             placeholder="Enter your date of birth"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <InputLabel text="Gender" isRequired />
//           <div className="flex space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//                 className="mr-2"
//                 required
//               />
//               Male
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Female
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 checked={formData.gender === "other"}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Other
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <InputLabel text="Password" isRequired />
//           <CustomInput
//             type="password"
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <InputLabel text="Confirm Password" isRequired />
//           <CustomInput
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <CustomButton
//           type="submit"
//           size="block"
//           variant="primary"
//           className="font-medium mb-6"
//           disabled={loading}
//         >
//           {loading ? "Creating account..." : "Create Account"}
//         </CustomButton>
//       </form>

//       <div className="text-center text-sm text-gray-600">
//         Already have an account?{" "}
//         <Link
//           href="/login"
//           className="text-blue-600 hover:underline font-medium"
//         >
//           Log in
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Signup;

"use client";
import React, { useState } from "react";
import InputLabel from "../CustomComponent/InputLabel";
import CustomInput from "../CustomComponent/CustomInput";
import CustomButton from "../CustomComponent/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    setIsLoading(true);
    try {
      const { confirmPassword, ...payload } = formData;
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account created successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (err) {
      toast.error("Failed to create account");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start your journey with us today
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <InputLabel text="Full name" isRequired />
              <CustomInput
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <InputLabel text="Email address" isRequired />
              <CustomInput
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <InputLabel text="Phone number" isRequired />
              <CustomInput
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <InputLabel text="Date of birth" isRequired />
              <CustomInput
                placeholder="Enter your date of birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <InputLabel text="Gender" isRequired />
              <div className="mt-2 flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>

            <div>
              <InputLabel text="Password" isRequired />
              <CustomInput
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <InputLabel text="Confirm password" isRequired />
              <CustomInput
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
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
              Create account
            </CustomButton>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
