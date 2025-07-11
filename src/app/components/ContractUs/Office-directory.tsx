import OfficeLocationCard from "./Office-location-card";

const officeData = [
  {
    countryFlag: "https://flagcdn.com/w320/in.png",
    countryName: "INDIA",
    locations: [
      {
        city: "Mumbai",
        email: "marketing@soundlinesgroup.com",
        phone: "+91 22 66283333",
        workingHours: "Mon To Fri: 10:00-19:00 | Sat 10:00-19:00",
        address:
          "4/58 Kamal Mansion, Haji N.A. Azmi Marg, Colaba, Mumbai - 400 005, India",
      },
      {
        city: "Delhi",
        email: "marketing@soundlinesgroup.com",
        workingHours: "Mon To Fri: 10:00-19:00 | Sat 10:00-19:00",
        address:
          "2nd Floor, Building No. 71-A, Tamoor Nagar, New Friends Colony, New Delhi- 110025",
      },
    ],
  },
  {
    countryFlag: "https://flagcdn.com/w320/sa.png",
    countryName: "KSA",
    locations: [
      {
        city: "Riyadh",
        email: "ksa@soundlinesgroup.com",
        phone: "966 112291125",
        workingHours: "Sun To Thu: 9:00-19:00 | Sat 12:30-18:00",
        address: "marketing@soundlinesgroup.com",
      },
      {
        city: "Dammam",
        email: "dammam@soundlinesgroup.com",
        phone: "966 13 8952635",
        workingHours: "Sun To Thu: 9:00-19:00 | Sat 12:00-18:00",
        address: "marketing@soundlinesgroup.com",
      },
      {
        city: "Jeddah",
        email: "jeddah@soundlinesgroup.com",
        phone: "+966126735635",
        workingHours: "Sun To Thu: 9:00-19:00 | Sat 12:30-18:00",
        address: "marketing@soundlinesgroup.com",
      },
    ],
  },
];

export default function OfficeDirectory() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {officeData.map((country, index) => (
        <OfficeLocationCard
          key={index}
          countryFlag={country.countryFlag}
          countryName={country.countryName}
          locations={country.locations}
        />
      ))}
    </div>
  );
}
