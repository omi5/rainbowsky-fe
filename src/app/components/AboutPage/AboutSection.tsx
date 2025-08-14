// export default function AboutUs() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             About us
//           </h1>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
//         </div>

//         <div className="flex justify-end">
//           {" "}
//           {/* This flex container pushes content to right */}
//           <div className="w-full md:w-4/5 lg:w-3/4 p-8 ">
//             {" "}
//             {/* Right-aligned content container */}
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 H.R. International Agency, bearing the recruiting license number
//                 1134, is a well-established and trusted recruitment firm based
//                 in Bangladesh with over 12 years of dedicated experience in the
//                 human resource industry. Throughout their years of operation,
//                 the agency has built a strong reputation for integrity,
//                 professionalism, and reliability in the field of international
//                 recruitment. They have successfully facilitated the movement of
//                 thousands of skilled, semi-skilled, and unskilled workers to
//                 more than 20 diverse countries, including Saudi Arabia, Qatar,
//                 Kuwait, Oman, Malaysia, Korea, Singapore, Hungary, and Russia.
//                 Their extensive network and expertise enable them to source
//                 talented candidates suitable for various industries and
//                 employment sectors.
//               </p>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 H.R. International Agency specializes in providing end-to-end
//                 recruitment solutions, which include sourcing candidates,
//                 managing training programs, securing valid work visas, and
//                 handling employee contract management to ensure legal compliance
//                 and smooth employment processes. They pride themselves on their
//                 ability to secure legitimate work visas, thereby assuring both
//                 employers and employees of a secure and transparent immigration
//                 and employment process.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 In addition to recruitment services, the agency offers
//                 comprehensive visa processing solutions for numerous countries,
//                 including Canada, Saudi Arabia, Malaysia, Korea, and most
//                 European nations. Their experienced team simplifies the complex
//                 visa procedures, making the process swift and hassle-free for
//                 their clients. Moreover, H.R. International Agency provides
//                 expert immigration consultancy services, guiding individuals and
//                 families through the intricate pathways of immigration and
//                 emigration, ensuring they are well-informed and prepared for
//                 their international relocation.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Overall, H.R. International Agency stands out as a reliable and
//                 professional partner for both employers seeking qualified
//                 manpower and individuals aspiring to work or settle abroad,
//                 supported by their extensive experience, broad service
//                 offerings, and commitment to client satisfaction.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function AboutUs() {
  const t = useTranslations("AboutUsPage");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="flex justify-end">
          <div className="w-full md:w-4/5 lg:w-3/4 p-8">
            <div className="space-y-6">
              {t("paragraphs").map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
