interface OfficeLocation {
  city: string;
  email: string;
  phone?: string;
  workingHours: string;
  address: string;
}

interface OfficeLocationCardProps {
  countryFlag: string;
  countryName: string;
  locations: OfficeLocation[];
}

export default function OfficeLocationCard({
  countryFlag,
  countryName,
  locations,
}: OfficeLocationCardProps) {
  return (
    <div className="bg-white p-6 mb-8">
      {/* Country header with flag and name */}
      <div className="flex flex-col items-start mb-6">
        <div className="w-16 h-12 mb-2 border border-gray-800 shadow-sm">
          <img
            src={countryFlag || "/placeholder.svg"}
            alt={`${countryName} flag`}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-blue-600 text-3xl font-light tracking-wider uppercase">
          {countryName}
        </h2>
      </div>

      {/* Border separator */}
      <div className="border-b border-gray-200 mb-6"></div>

      {/* Locations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-gray-700 text-xl font-light">
              {location.city}
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {location.email}
              </div>

              {location.phone && (
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-red-500">{location.phone}</span>
                </div>
              )}

              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{location.workingHours}</span>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-relaxed">{location.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
