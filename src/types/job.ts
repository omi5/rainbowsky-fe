export interface Job {
  _id: string;
  title: string;
  details: string;
  date: string;
  imageUrl: string;
  country: string;
  industry: string;
  companyName: string;
  location?: string;
  applicants: any[];
  status: "active" | "inactive";
  workingHours: number;
  salary: number;
  currency: string;
  facilities: string[];
}
