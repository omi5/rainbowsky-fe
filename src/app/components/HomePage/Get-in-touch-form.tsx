"use client";

import BGImage from "../../assets/getInTouchSectionBG.jpg";
import { useState } from "react";
import { sendQuery } from "@/services/queryService";
import { toast } from "react-toastify";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendQuery(formData);
      toast.success("Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <img
          src={BGImage.src}
          alt="bgImage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl ml-auto mr-20 px-6">
        <h2 className="text-white text-3xl font-light text-center mb-8 tracking-wider">
          GET IN TOUCH
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 px-6 font-medium tracking-wider hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {loading ? "Sending..." : "GET A QUOTE"}
          </button>
        </form>
      </div>
    </div>
  );
}
