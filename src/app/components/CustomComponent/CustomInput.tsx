"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textColor?: string;
  placeholder: string;
  type: string;
  className?: string;
  editable?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
  textColor,
  placeholder,
  type,
  className,
  editable = true,
  value = "",
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editable && onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        {...props}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        readOnly={!editable}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-12 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 font-medium placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border ${
            isFocused ? "border-blue-500" : "border-gray-200"
          } transition-all duration-200 ${
          !editable ? "cursor-not-allowed opacity-70" : ""
        }`}
      />
      {type === "password" && editable && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
