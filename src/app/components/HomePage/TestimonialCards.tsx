export default function TestimonialCard({
  quote,
  image,
}: {
  quote: string;
  image: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col">
      {/* Centered Top Image */}
      <div className="mb-4 flex justify-center">
        <img
          src={image}
          alt="Client logo"
          className="w-20 h-20 object-contain rounded-full border-2 border-blue-100 p-1"
        />
      </div>

      {/* Testimonial Text */}
      <div className="flex-grow flex items-center">
        <p className="text-gray-600 italic">"{quote}"</p>
      </div>
    </div>
  );
}
