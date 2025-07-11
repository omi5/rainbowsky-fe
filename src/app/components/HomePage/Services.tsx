import ServiceCard from "./ServicesCard";
import sectionBackgroundImage from "../../assets/services.jpg";
import hiringIcon from "../../assets/hiring.png";
import experienceIcon from "../../assets/experience.png";
import customerCareIcon from "../../assets/customer-care.png";
import managementIcon from "../../assets/management.png";

export default function Services() {
  const services = [
    {
      title: "Manpower Recruitment",
      description:
        "We provide comprehensive workforce recruitment services, including Screening, Sourcing, On-Boarding & Employment contracting.",
      icon: hiringIcon,
    },
    {
      title: "Employee Management",
      description:
        "We manage HR for global businesses, including Payroll, Banking/Juliette, Govt. Id., GOBJ, Medical Insurance, Driving License and more.",
      icon: experienceIcon,
    },
    {
      title: "HR Administration",
      description:
        "HR Policies, Employee Termination/Guidance/Planning, and Employee Database Maintenance are some of our HR administration services.",
      icon: customerCareIcon,
    },
    {
      title: "HR Services",
      description:
        "We serve businesses with HR solutions, including HR Advisory & Consulting, Government Regulation, Change Management and more.",
      icon: managementIcon,
    },
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        <div className="absolute inset-0">
          <img
            src={sectionBackgroundImage.src}
            alt="services"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="text-4xl text-center font-sans-serif text-[#ffffff] tracking-[10px]">
            <span className="text-[#fff]">02</span>{" "}
            <span className="text-[#FE0000]">/</span> OUR SERVICES
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
