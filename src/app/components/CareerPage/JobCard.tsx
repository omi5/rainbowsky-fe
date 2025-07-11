interface JobCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
  readMoreLink: string;
}

export default function JobCard({
  image,
  title,
  description,
  location,
  readMoreLink,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{location}</span>
          <a
            href={readMoreLink}
            className="text-green-500 hover:text-green-600 text-xs font-medium transition-colors duration-200"
          >
            Read More »
          </a>
        </div>
      </div>
    </div>
  );
}
