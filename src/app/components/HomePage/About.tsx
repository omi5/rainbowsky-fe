"use client";
import { useRouter } from "next/navigation";
import Counter from "./Counter";

export default function About() {
  const navigate = useRouter();
  return (
    <section id="about" className="py-20 bg-gray-50 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="md:w-1/2">
            <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
              <span className="text-[#999999]">01</span>{" "}
              <span className="text-[#FE0000]">/</span> ABOUT US
            </span>
            <p className="text-[#909090] text-lg tracking-[0.5px]  mb-8 mt-8">
              H.R. International Agency, bearing the recruiting license number
              1134, is a well-established and trusted recruitment firm based in
              Bangladesh with over 12 years of dedicated experience in the human
              resource industry. Throughout their years of operation, the agency
              has built a strong reputation for integrity, professionalism, and
              reliability in the field of international recruitment. They have
              successfully facilitated the movement of thousands of skilled,
              semi-skilled, and unskilled workers to more than 20 diverse
              countries, including Saudi Arabia, Qatar, Kuwait, Oman, Malaysia,
              Korea, Singapore, Hungary, and Russia. Their extensive network and
              expertise enable them to source talented candidates suitable for
              various industries and employment sectors.
            </p>
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              onClick={() => navigate.push("/about")}
            >
              READ MORE ►
            </button>
          </div>

          {/* Right Column - Counters */}
          {/* <div className="md:w-1/2 grid grid-cols-2 ">
            <Counter target={25} label="Years of Experience" />
            <Counter target={22} label="International Locations" />
            <Counter target={1000} label="Happy Clients" plusSign={true} />
            <Counter
              target={7000}
              label="Candidates Deployed"
              plusSign={true}
            />
          </div> */}
          <div className="md:w-1/2 grid grid-cols-2  relative">
            <div className="border-b border-r border-gray-300 ">
              <Counter target={25} label="Years of Experience" />
            </div>
            <div className="border-b border-l border-gray-300">
              <Counter target={22} label="International Locations" />
            </div>
            <div className="border-t border-r border-gray-300">
              <Counter target={1000} label="Happy Clients" plusSign={true} />
            </div>
            <div className="border-t border-l border-gray-300">
              <Counter
                target={7000}
                label="Candidates Deployed"
                plusSign={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
