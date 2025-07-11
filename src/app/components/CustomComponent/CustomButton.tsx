import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "block";
  variant?: "primary" | "secondary" | "outline";
  type: "button" | "submit";
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  size = "medium",
  variant = "primary",
  type,
  icon,
  children = "",
  className,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "py-2 px-3 text-sm h-10",
    medium: "py-2.5 px-5 text-base h-12",
    block: "w-full py-2.5 px-5 text-base h-12",
  };

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white shadow-sm",
    outline:
      "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
        flex items-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      <span className="whitespace-nowrap">
        {isLoading && !icon ? "Processing..." : children}
      </span>
    </button>
  );
};

export default CustomButton;
