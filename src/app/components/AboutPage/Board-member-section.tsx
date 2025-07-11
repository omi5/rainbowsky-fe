export default function BoardMembersSection() {
  const boardMembers = [
    {
      name: "Obaid Shaikh",
      position: "Founder & Chief Strategist",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Bilal Dadan",
      position: "Group CEO",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Sandy Supreeth",
      position: "Group Managing Director",
      image: "/placeholder.svg?height=150&width=150",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-light text-red-500 italic mb-2">
            Our experts
          </h3>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Board Members
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-200"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
