"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  label?: string; // Now expects the translated text directly
  plusSign?: boolean;
}

export default function Counter({
  target,
  label,
  plusSign = false,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 16);

    let start = 0;
    const animate = () => {
      start += increment;
      const currentCount = Math.min(Math.floor(start), target);
      setCount(currentCount);

      if (currentCount < target) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [target]);

  return (
    <div className="p-6 text-center">
      <div className="text-4xl md:text-5xl font-sans-serif text-[#666666] mb-2">
        {count.toLocaleString()}
        {plusSign && "+"}
      </div>
      <div className="text-[#7A7A7A] font-sans-serif text-[22px]">
        {label} {/* Display the translated text directly */}
      </div>
    </div>
  );
}
