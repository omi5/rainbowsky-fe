import React from "react";
import Login from "../components/LoginPage/LoginPage";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl px-4 py-8">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
