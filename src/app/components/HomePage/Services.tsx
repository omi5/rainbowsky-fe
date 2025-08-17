// import ServiceCard from "./ServicesCard";
// import sectionBackgroundImage from "../../assets/services.jpg";
// import hiringIcon from "../../assets/hiring.png";
// import experienceIcon from "../../assets/experience.png";
// import customerCareIcon from "../../assets/customer-care.png";
// import managementIcon from "../../assets/management.png";

// export default function Services() {
//   const services = [
//     {
//       title: "Manpower Recruitment",
//       description:
//         "End‑to‑end workforce recruitment, including screening, sourcing, training, onboarding and employment contracting.",
//       icon: hiringIcon,
//     },
//     {
//       title: "Visa Processing",
//       description:
//         "Comprehensive visa handling—from document prep to submission and follow‑up—for seamless overseas employment.",
//       icon: experienceIcon,
//     },
//     {
//       title: "One Stop Solution Services for Overseas Workers",
//       description:
//         "All‑in‑one support: pre‑departure training, visa & travel arrangements, post‑arrival assistance and legal advice.",
//       icon: customerCareIcon,
//     },
//     {
//       title: "Immigration Consultancy",
//       description:
//         "Expert guidance on visas, work permits, residency and citizenship to ensure a smooth, efficient immigration journey.",
//       icon: managementIcon,
//     },
//   ];

//   return (
//     <section id="services" className="relative py-20">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
//       >
//         <div className="absolute inset-0">
//           <img
//             src={sectionBackgroundImage.src}
//             alt="services"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center">
//           <span className="text-4xl font-sans text-white tracking-[10px]">
//             02 <span className="text-red-600">/</span> OUR SERVICES
//           </span>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           {services.map((service, idx) => (
//             <ServiceCard
//               key={idx}
//               title={service.title}
//               description={service.description}
//               icon={service.icon.src}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import ServiceCard from "./ServicesCard";
import sectionBackgroundImage from "../../assets/services.jpg";
import hiringIcon from "../../assets/hiring.png";
import experienceIcon from "../../assets/experience.png";
import customerCareIcon from "../../assets/customer-care.png";
import managementIcon from "../../assets/management.png";
import { useTranslations } from "@/hooks/useTranslations";

export default function Services() {
  const t = useTranslations("Services");

  // Get services data properly
  const servicesData = t("services");
  // const servicesArray =
  //   servicesData && servicesData.services ? servicesData.services : [];

  // console.log("Processed services array:", servicesArray);

  // Icons array
  const serviceIcons = [
    hiringIcon,
    experienceIcon,
    customerCareIcon,
    managementIcon,
  ];

  return (
    <section id="services" className="relative py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={sectionBackgroundImage.src}
          alt="services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="text-4xl font-sans text-white tracking-[10px]">
            02 <span className="text-red-600">/</span> {t("heading")}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {servicesData.map((service: any, idx: number) => (
            <ServiceCard
              key={idx}
              title={service?.title || "Service Title"}
              description={service?.description || "Service description"}
              icon={serviceIcons[idx]?.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
