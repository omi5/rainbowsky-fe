import Counter from "./Counter";

export default function About() {
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
              Soundlines is a multi-award-winning overseas workforce management
              company servicing clients globally across UAE, KSA, Kuwait, Qatar,
              Bahrain, Egypt, India, Nepal & Bangladesh. Soundlines Group offers
              comprehensive workforce solutions for all your international human
              resource requirement. With more than two decades in business, we
              have considerable experience and a knowledgeable team to assist
              you with all your overseas staffing needs. Over the years, we have
              modified and organised our manpower supply services to pioneer the
              dynamic needs of the global market.
            </p>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
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
