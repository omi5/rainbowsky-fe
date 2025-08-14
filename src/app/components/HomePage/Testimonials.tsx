"use client";
import { useTranslations } from "@/hooks/useTranslations";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      company: "Saudi Binladin Group",
      logo: "/placeholder.svg?height=60&width=120",
      text: 'SBG is pleased to have an admirable Business partner like "Soundlines HR Consultancy" and wish them all the success in their future endeavors.',
    },
    {
      id: 2,
      company: "NADEC",
      logo: "/placeholder.svg?height=60&width=120",
      text: "Soundlines have the ability to follow the cases for all their deployed candidates in all the regions so that they can solve the problems and social issues.",
    },
    {
      id: 3,
      company: "Al Alfanar",
      logo: "/placeholder.svg?height=60&width=120",
      text: "We look forward to working with Soundlines in the years ahead and would not hesitate in recommending their name to any Organization.",
    },
    {
      id: 4,
      company: "Taruseej",
      logo: "/placeholder.svg?height=60&width=120",
      text: "Soundlines Group deserves this testimonial, and we are very happy to provide it. Our relationship will also continue to grow and provide mutually beneficial outcomes for both parties, which we are confident about.",
    },
  ];
  const t = useTranslations("Testimonials");
  const [firstWord, ...restWords] = t("title").split(" ");
  const secondWord = restWords.join(" ");

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header and Description */}
          <div className="space-y-8">
            {/* Large Quote Icon */}
            <div className="flex justify-start">
              <svg
                className="w-16 h-16 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Section Header */}
            <div className="text-center">
              <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
                <span className="text-[#999999]">05</span>{" "}
                <span className="text-[#FE0000]">/</span> {firstWord}
              </span>
              <br />
              <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
                {secondWord}
              </span>
            </div>

            {/* Description Text */}
            <div className="text-gray-600 leading-relaxed text-justify max-w-lg">
              <p>
                Soundlines acts as a strategic overseas recruitment partner for
                clients by offering a complete workforce solution to find and
                supply the human resources needed to complete projects
                effectively. Our geographical reach and talent pool are
                unrivalled in the international manpower supply industry, with
                over 1000+ employees in over 24 offices worldwide and a
                candidate database with several thousands of profiles.
              </p>
            </div>
          </div>

          {/* Right Side - Testimonials Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Company Logo Section */}
                  <div className="bg-gray-600 p-4 flex items-center justify-center min-h-[80px]">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.company} logo`}
                      className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <div className="p-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* All Testimonials Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2">
                <span>All Testimonials</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
