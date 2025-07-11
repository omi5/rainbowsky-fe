import TeamMemberCard from "./Team-member-card";

const teamMembers = [
  {
    id: 1,
    userImage:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sanjay Devkota",
    email: "marketing@soundlinesgroup.com",
    countryFlag: "https://flagcdn.com/w320/np.png",
    countryName: "NEPAL",
  },
  {
    id: 2,
    userImage:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Altaf Ahmad Warsi",
    email: "marketing@soundlinesgroup.com",
    countryFlag: "https://flagcdn.com/w320/bd.png",
    countryName: "BANGLADESH",
  },
  {
    id: 3,
    userImage:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Erwin R. Relox",
    email: "marketing@soundlinesgroup.com",
    countryFlag: "https://flagcdn.com/w320/ph.png",
    countryName: "PHILIPPINES",
  },
  {
    id: 4,
    userImage:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hemantha Sapumohotti",
    email: "marketing@soundlinesgroup.com",
    countryFlag: "https://flagcdn.com/w320/lk.png",
    countryName: "SRI LANKA",
  },
];

export default function TeamDirectory() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            userImage={member.userImage}
            name={member.name}
            email={member.email}
            countryFlag={member.countryFlag}
            countryName={member.countryName}
          />
        ))}
      </div>
    </div>
  );
}
