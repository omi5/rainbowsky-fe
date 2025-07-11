export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col items-center">
      {/* Icon Image */}
      <div className="w-20 h-20 mb-4">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="text-center mt-6 pb-6">
        <h3 className="text-2xl font-sans-serif text-[#7A7A7A] mb-4">
          {title}
        </h3>
        <p className="text-base font-sans-serif text-[#909090]">
          {description}
        </p>
      </div>
    </div>
  );
}
