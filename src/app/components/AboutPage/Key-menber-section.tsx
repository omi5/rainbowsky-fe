export default function KeyMembersSection() {
  const keyMembers = [
    {
      name: "Muzammil Dadan",
      position: "VP Operations - India",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Toyendra Giri",
      position: "Country Head",
      location: "UAE & Qatar",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Tirtha Raj Khatri",
      position: "Director Sales",
      location: "UAE",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Noor Iqbal",
      position: "Director KSA",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Kaleem Mohammad",
      position: "General Manager",
      location: "Eastern Province",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Mohamed Ameen",
      position: "Regional Manager",
      location: "Central Province",
      image: "/placeholder.svg?height=150&width=150",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-light text-red-500 italic mb-4">
            Our Key Members
          </h3>
          <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {keyMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm">{member.position}</p>
              {member.location && (
                <p className="text-gray-600 text-sm">{member.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
