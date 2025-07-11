import BGImage from "../../assets/getInTouchSectionBG.jpg";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[500px] overflow-hidden">
        <img
          src={BGImage.src}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>
    </section>
  );
}
