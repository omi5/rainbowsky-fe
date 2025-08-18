"use client";

import Image from "next/image";

export default function Certificate() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Certification of Achievement
      </h2>
      <div className="w-full max-w-3xl">
        <img
          src="/images/rainbowsky-certificate.png"
          alt="Certificate of Achievement"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
