"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function AboutUs() {
  const t = useTranslations("AboutUsPage");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="flex justify-end">
          <div className="w-full md:w-4/5 lg:w-3/4 p-8">
            <div className="space-y-6">
              {t("paragraphs").map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
