import Link from "next/link";
import { Job } from "@/types/job";

interface JobCardProps
  extends Pick<
    Job,
    | "_id"
    | "title"
    | "details"
    | "imageUrl"
    | "country"
    | "status"
    | "workingHours"
    | "salary"
    | "currency"
    | "facilities"
  > {}

export default function JobCard({
  _id,
  title,
  details,
  imageUrl,
  country,
  status,
  workingHours,
  salary,
  currency,
  facilities = [],
}: JobCardProps) {
  return (
    <Link
      href={`/jobs/${_id}`}
      className="group block transform transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden group-hover:shadow-xl">
        <div className="relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-44 object-cover"
          />
          <span
            className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${
              status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-gray-900 font-semibold text-lg line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{details}</p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
              {country}
            </span>
            <span className="inline-block bg-yellow-50 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              💰 {salary} {currency}
            </span>
            <span className="inline-block bg-purple-50 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
              ⏰ {workingHours}h/wk
            </span>
          </div>
          {facilities.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {facilities.map((f) => (
                <span
                  key={f}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
