import JobCard from "./JobCard";

const jobData = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    title: "WE'RE HIRING IN RUSSIA",
    description: "Looking for a sharp, driven and versatile Individual",
    location: "Moscow, Russia",
    readMoreLink: "#",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    title: "URGENTLY REQUIRED For Domino's Pizza Restaurant in KSA",
    description:
      "Pizza Maker, Service Crew, Team Member, Assistant Waiter, Counter Staff",
    location: "Saudi Arabia",
    readMoreLink: "#",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    title: "WE ARE HIRING! For QCON in Qatar (Oil & Gas Project)",
    description: "Multiple positions available in construction and engineering",
    location: "Qatar",
    readMoreLink: "#",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300",
    title: "URGENT REQUIREMENT For Bader Al Mulla & Bros Co. in Kuwait",
    description:
      "Welding Supervisor, Pipe Fabricator and other technical positions",
    location: "Kuwait",
    readMoreLink: "#",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=300",
    title: "FREE RECRUITMENT POSITIONS",
    description:
      "MIG Welder, Structural Fabricator, Assistant Structural positions available",
    location: "Dubai, UAE",
    readMoreLink: "#",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=300",
    title: "POSITIONS Available",
    description:
      "Camp Boss & Catering Supervisor, Trainee Camp Boss, Assistant Cook, South Indian Cook",
    location: "Various Locations",
    readMoreLink: "#",
  },
];

export default function JobOpportunitiesGlobal() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Find International work opportunities around the globe
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Find your fit from the current international employment opportunities
          for blue-collar & White collar job seekers
        </p>
        <div className="w-16 h-0.5 bg-orange-400 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            image={job.image}
            title={job.title}
            description={job.description}
            location={job.location}
            readMoreLink={job.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
}
