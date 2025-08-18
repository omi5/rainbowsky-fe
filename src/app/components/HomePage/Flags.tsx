"use client";

import Image from "next/image";
import React from "react";

type Flag = {
  country: string;
  image: string;
};

const DEFAULT_FLAGS: Flag[] = [
  { country: "KSA", image: "https://flagcdn.com/w320/sa.png" },
  { country: "Malaysia", image: "https://flagcdn.com/w320/my.png" },
  { country: "Singapore", image: "https://flagcdn.com/w320/sg.png" },
  { country: "Hungary", image: "https://flagcdn.com/w320/hu.png" },
  { country: "Serbia", image: "https://flagcdn.com/w320/rs.png" },
  { country: "Cambodia", image: "https://flagcdn.com/w320/kh.png" },
  { country: "Korea", image: "https://flagcdn.com/w320/kr.png" },
  { country: "Japan", image: "https://flagcdn.com/w320/jp.png" },
  { country: "Italy", image: "https://flagcdn.com/w320/it.png" },
  { country: "Kuwait", image: "https://flagcdn.com/w320/kw.png" },
  { country: "Qatar", image: "https://flagcdn.com/w320/qa.png" },
  { country: "Jordan", image: "https://flagcdn.com/w320/jo.png" },
  { country: "Oman", image: "https://flagcdn.com/w320/om.png" },
  { country: "Brunei", image: "https://flagcdn.com/w320/bn.png" },
  { country: "Uae", image: "https://flagcdn.com/w320/ae.png" },
];

interface FlagsGridProps {
  flags?: Flag[];
  className?: string;
}

export default function FlagsGrid({
  flags = DEFAULT_FLAGS,
  className = "",
}: FlagsGridProps) {
  return (
    <section className={`w-full p-4 sm:p-6 bg-gray-50 rounded-lg ${className}`}>
      <h2 className="text-lg sm:text-xl md:text-4xl font-semibold mb-4 text-center">
        Countries we work with
      </h2>

      {/* responsive grid: 2 cols mobile, 3 sm, 4 md, 5 lg */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {flags.map((f) => (
          <article
            key={f.country}
            className="rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-stretch"
          >
            <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-28">
              {/* next/image with fill keeps consistent size and object-cover */}
              <img
                src={f.image}
                alt={`${f.country} flag`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
              />

              {/* caption overlay at bottom of the flag */}
              <div className="absolute left-0 right-0 bottom-0 p-1 text-center backdrop-blur-sm bg-black/25">
                <span className="text-xs sm:text-sm font-medium text-white">
                  {f.country}
                </span>
              </div>
            </div>

            {/* small padding area below image for breathing room (optional) */}
            <div className="p-2" />
          </article>
        ))}
      </div>
    </section>
  );
}
