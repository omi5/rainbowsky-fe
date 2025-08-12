// src/types/user.ts
export interface IUser {
  _id: string;
  name: string;
  email: string;
  type: 1 | 2;
  gender?: "male" | "female" | "other";
  dob?: string;
  phone?: string;
  verified: boolean;
  provider: "local" | "google";
  createdAt: string;
  updatedAt: string;
  image: string;
}

export interface SearchParams {
  query?: string;
  type?: number;
  gender?: string;
  verified?: boolean;
}
