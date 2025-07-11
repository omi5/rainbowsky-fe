"use client";

import { useState } from "react";

export default function WhyUsSection() {
  const [openItem, setOpenItem] = useState<number>(0); // Only one item open at a time

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index); // Close if same item, otherwise open the clicked item
  };

  const accordionItems = [
    {
      title: "ONE-STOP SOLUTION",
      content: {
        heading: "Wide range of Services, beyond HR & consultancy",
        description:
          "Our services enable our clients to focus on their business growth.",
      },
    },
    {
      title: "TRACK RECORD",
      content: {
        heading: "Proven Excellence in Service Delivery",
        description:
          "Years of successful partnerships and client satisfaction across multiple industries.",
      },
    },
    {
      title: "GLOBAL SERVICE REACH",
      content: {
        heading: "International Presence and Local Expertise",
        description:
          "Serving clients across multiple countries with localized solutions.",
      },
    },
    {
      title: "EXCELLENCE",
      content: {
        heading: "Commitment to Quality and Innovation",
        description:
          "Delivering exceptional results through continuous improvement and innovation.",
      },
    },
    {
      title: "EXTENSIVE WORLDWIDE NETWORK",
      content: {
        heading: "Connected Globally, Acting Locally",
        description:
          "Leveraging our international network to provide comprehensive solutions.",
      },
    },
    {
      title: "A STRATEGIC PARTNERSHIP",
      content: {
        heading: "Long-term Collaborative Relationships",
        description:
          "Building strategic partnerships that drive mutual growth and success.",
      },
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            <span className="border-b-2 border-red-500 pb-1">Why us?</span>
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-lg overflow-hidden"
            >
              <div className="flex">
                {/* Left side - Plus/Minus icon box */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    {openItem === index ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      {/* <div className="w-6 h-6 bg-gray-400 rounded-sm mr-4 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div> */}
                      <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                  </button>

                  {openItem === index && (
                    <div className="px-6 pb-6 ml-10 border-t border-gray-100 pt-4">
                      <h4 className="text-xl font-medium text-red-500 mb-3">
                        {item.content.heading}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        {item.content.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Experts Footer */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-red-500 italic">
            Our experts
          </h3>
        </div>
      </div>
    </section>
  );
}
