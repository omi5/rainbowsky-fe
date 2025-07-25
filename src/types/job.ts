export interface Job {
  _id: string;
  title: string;
  details: string;
  imageUrl: string;
  country: string;
  status: 'active' | 'inactive';
  workingHours: number;
  salary: number;
  currency: string;
  facilities: string[];
}
