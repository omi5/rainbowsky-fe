export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About us
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="flex justify-end">
          {" "}
          {/* This flex container pushes content to right */}
          <div className="w-full md:w-4/5 lg:w-3/4 p-8 ">
            {" "}
            {/* Right-aligned content container */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Soundlines was founded more than 20 years ago with a pioneering
                spirit and lofty objective to navigate the changing human
                resource landscape and create a positive business impact for our
                clients by delivering unmatched{" "}
                <span className="font-semibold text-blue-600">
                  comprehensive HR services
                </span>
                .
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                In pursuit of our ambition to become the one-stop solution for
                all your{" "}
                <span className="font-semibold text-blue-600">
                  human resources and manpower needs
                </span>
                , we have undergone remarkable development over the past few
                years.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Here's what sets us apart:
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-gray-700">
                We currently have our presence across India, Nepal, Morocco,
                Bangladesh, the Philippines, Sri Lanka, Nigeria, Kenya, Uganda,
                Ghana, Indonesia, and Egypt.
              </li>
              <li className="text-gray-700">
                We are a UAE and KSA-based recruitment, outsourcing, fit-out,
                and construction firm with an NSDC-approved evaluation center.
              </li>
              <li className="text-gray-700">
                We are a UAE and KSA-based MEP contracting company with two
                decades of experience.
              </li>
              <li className="text-gray-700">
                Enhanced relationship with MEGA Recruitment Companies and
                Government Bodies in Saudi Arabia has allowed us to give
                exceptional services to our clients with cost optimization,
                rapid turnaround, and faster growth.
              </li>
              <li className="text-gray-700">
                Established end-to-end consultancy services in the GCC, where we
                advise enterprises on business setup and workforce needs (right
                from visas and work permits to legal compliance).
              </li>
              <li className="text-gray-700">
                Soundlines serves the Chinese Gulf companies with manpower
                supply. During the Covid19 pandemic, we deployed Indian medical
                staff to the Gulf.
              </li>
              <li className="text-gray-700">
                Soundlines Recruitment is approved by Qatar's Supreme Committee,
                to recruit.
              </li>
              <li className="text-gray-700">
                We have provided labor for iconic projects like Expo 2020, FIFA
                World Cup 2022, and Vision 2030.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
