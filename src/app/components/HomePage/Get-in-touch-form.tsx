"use client";

import type React from "react";
import BGImage from "../../assets/getInTouchSectionBG.jpg";
import { useState } from "react";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workPhone: "",
    organization: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0">
          <img
            src={BGImage.src}
            alt="bgImage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl ml-auto mr-20 px-6">
        {/* Title */}
        <h2 className="text-white text-3xl font-light text-center mb-8 tracking-wider">
          GET IN TOUCH
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-90 border-0 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all duration-300"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-90 border-0 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all duration-300"
              required
            />
          </div>

          {/* Work Phone Field */}
          <div>
            <input
              type="tel"
              name="workPhone"
              placeholder="Work Phone"
              value={formData.workPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-90 border-0 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
          </div>

          {/* Organization Field */}
          <div>
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-90 border-0 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-90 border-0 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 font-medium tracking-wider hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              GET A QUOTE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
