interface TeamMemberCardProps {
  userImage: string;
  name: string;
  email: string;
  countryFlag: string;
  countryName: string;
}

export default function TeamMemberCard({
  userImage,
  name,
  email,
  countryFlag,
  countryName,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white border-r-2 border-gray-200 py-10 flex justify-between items-start max-w-3xl">
      {/* Left side - User info */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 mb-3">
          <img
            src={userImage || "/placeholder.svg?height=80&width=80"}
            alt={name}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="text-center">
          <h3 className="text-gray-700 font-medium text-sm mb-1">{name}</h3>
          <div className="flex items-center text-gray-500 text-xs">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {email}
          </div>
        </div>
      </div>

      {/* Right side - Country info */}
      <div className="flex flex-col items-center ml-8 mr-6">
        <div className="w-16 h-12 mb-2 border border-gray-200 shadow-sm">
          <img
            src={countryFlag || "/placeholder.svg"}
            alt={`${countryName} flag`}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-gray-400 text-xs font-light tracking-wider uppercase">
          {countryName}
        </span>
      </div>
    </div>
  );
}
