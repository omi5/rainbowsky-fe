import heroImage from "../../assets/Hero.jpg";
export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      //   style={{ backgroundImage: "url('../assets/Hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-10 left-0 right-0 z-10 text-center px-4">
        <h1 className="text-3xl md:text-3xl font-medium text-white font-sans-serif mb-6">
          RELIABLE MANPOWER SOLUTIONS TO POWER YOUR BUSINESS
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-sans-serif py-3 px-8 rounded-full text-lg transition duration-300">
          GET A CALLBACK
        </button>
      </div>
    </section>
  );
}
