import BGImage from "../../assets/getInTouchSectionBG.jpg";

export default function CTASection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={BGImage.src}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wider uppercase">
          {"LET'S HEAR YOU!"}
        </h2>

        <div className="mb-12 space-y-4">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            {"Ready to take it a step further? Let's start talking about"}
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            your project or idea and find out how we can help you.
          </p>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 text-lg uppercase tracking-wide transition-colors duration-300">
          REQUEST A FREE QUOTE
        </button>
      </div>
    </section>
  );
}
