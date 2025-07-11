import React from "react";
import Signup from "../components/SignUpPage/SignupPage";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl px-4 py-8">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
