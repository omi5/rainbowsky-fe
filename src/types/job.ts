export interface Job {
  id: string;
  title: string;
  details: string;
  date?: string;
  imageUrl: string;
  country: string;
  industry?: string;
  companyName?: string;
  location?: string;
}
