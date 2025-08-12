// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// // Type of the user info returned from login response
// type AuthUser = {
//   id: string;
//   name: string;
//   email: string;
//   type: number;
// };

// type LoginPayload = {
//   token: string;
//   user: AuthUser;
// };

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: AuthUser | null;
//   login: (data: LoginPayload) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const userString = localStorage.getItem("user");
//     if (token && userString) {
//       try {
//         const parsedUser = JSON.parse(userString);
//         setIsAuthenticated(true);
//         setUser(parsedUser);
//       } catch (e) {
//         console.error("Failed to parse user from localStorage");
//         localStorage.removeItem("authToken");
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const login = (data: LoginPayload) => {
//     localStorage.setItem("authToken", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));
//     setIsAuthenticated(true);
//     setUser(data.user);
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     setUser(null);
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthUser = {
  id: string;
  name: string;
  email: string;
  type: number;
};

type LoginPayload = {
  token: string;
  user: AuthUser;
};

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  token: string | null; // Add token to the context type
  loading?: boolean; // Optional loading state
  login: (data: LoginPayload) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null); // Add token state
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const userString = localStorage.getItem("user");

    if (storedToken && userString) {
      try {
        const parsedUser = JSON.parse(userString);
        setIsAuthenticated(true);
        setUser(parsedUser);
        setToken(storedToken); // Set the token state
      } catch (e) {
        console.error("Failed to parse user from localStorage");
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (data: LoginPayload) => {
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setIsAuthenticated(true);
    setUser(data.user);
    setToken(data.token); // Set the token state on login
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    setToken(null); // Clear the token state on logout
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token, // Include token in the context value
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
