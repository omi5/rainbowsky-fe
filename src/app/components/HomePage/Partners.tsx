import React from "react";

const logoUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Saudi_Binladin_Group_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/JLL_logo.svg/512px-JLL_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Nesma_%26_Partners_Contracting_Company_logo.png/400px-Nesma_%26_Partners_Contracting_Company_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Alfanar_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Saudi_Arabian_Oil_Company_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Sipchem_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/Orascom_Construction_Industries_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/3/3b/El_Seif_Engineering_Contracting_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4b/China_State_Construction_Engineering_Corporation_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/4/4e/SAPAC_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/1/17/Saudi_Railways_Company_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/Saudi_Arabian_Airlines_logo.svg",
  // Add more if needed
];

export default function PartnersGrid() {
  return (
    <section className="py-16 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="text-center mb-10">
          <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
            <span className="text-[#999999]">06</span>{" "}
            <span className="text-[#FE0000]">/</span> Clients
          </span>
        </div>
      
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {logoUrls.map((url, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-sm rounded-sm flex items-center justify-center p-4 bg-white hover:shadow-md transition duration-300"
          >
            <img
              src={url}
              alt={`Client ${index + 1}`}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      {/* <div className="text-center mt-10">
        <button className="bg-black text-white px-6 py-2 uppercase text-sm tracking-wide hover:bg-gray-800 transition">
          to view more →
        </button>
      </div> */}
    </section>
  );
}
