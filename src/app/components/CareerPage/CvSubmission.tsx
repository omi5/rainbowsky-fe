"use client";

import type React from "react";

import { useState } from "react";

export default function CVSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 bg-white mb-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-light text-gray-700 mb-2">
          Share Your CV for Exciting Opportunities!
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 transition-colors duration-200 text-gray-700 placeholder-gray-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 transition-colors duration-200 text-gray-700 placeholder-gray-500"
          />
        </div>

        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile *"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 transition-colors duration-200 text-gray-700 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-2">
            Resume in PDF,Word *
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 transition-colors duration-200 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
