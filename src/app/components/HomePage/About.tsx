"use client";
import { useRouter } from "next/navigation";
import Counter from "./Counter";
import { useTranslations } from "@/hooks/useTranslations";

export default function About() {
  const navigate = useRouter();
  const t = useTranslations("About");
  const t2 = useTranslations("stats");

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column - unchanged */}
          <div className="md:w-1/2">
            <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
              <span className="text-[#999999]">01</span>{" "}
              <span className="text-[#FE0000]">/</span> {t("title")}
            </span>

            <p className="text-[#909090] text-lg tracking-[0.5px] mb-8 mt-8">
              {t("content")}
            </p>

            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              onClick={() => navigate.push("/about")}
            >
              {t("button")}
            </button>
          </div>

          {/* Improved Right Column - Counters */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-y divide-gray-200">
                {/* Counter Item 1 */}
                <div className="p-4 sm:p-6 flex flex-col items-end justify-center h-full min-h-[7rem]">
                  <Counter target={25} label={t2("experience")} />
                </div>

                {/* Counter Item 2 */}
                <div className="p-4 sm:p-6 flex flex-col items-end justify-center h-full min-h-[7rem]">
                  <Counter target={22} label={t2("locations")} />
                </div>

                {/* Counter Item 3 */}
                <div className="p-4 sm:p-6 flex flex-col items-end justify-center h-full min-h-[7rem]">
                  <Counter
                    target={1000}
                    label={t2("clients")}
                    plusSign={true}
                  />
                </div>

                {/* Counter Item 4 */}
                <div className="p-4 sm:p-6 flex flex-col items-end justify-center h-full min-h-[7rem]">
                  <Counter
                    target={7000}
                    label={t2("candidates")}
                    plusSign={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
