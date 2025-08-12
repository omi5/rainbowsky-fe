export interface IUser extends Document {
  name: string;
  dob?: Date;
  gender?: "male" | "female" | "other";
  type: 1 | 2;
  email: string;
  phone?: string;
  password?: string;
  provider: "local" | "google";
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  googleId?: string;
  verified: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface SearchUsersParams {
  query?: string;
  type?: number;
  gender?: "male" | "female" | "other";
  verified?: boolean;
}

export const searchUsers = async (
  token: string,
  params: SearchUsersParams
): Promise<IUser[]> => {
  const queryParams = new URLSearchParams();

  if (params.query) queryParams.append("query", params.query);
  if (params.type) queryParams.append("type", params.type.toString());
  if (params.gender) queryParams.append("gender", params.gender);
  if (params.verified !== undefined)
    queryParams.append("verified", params.verified.toString());

  const response = await fetch(
    `${API_URL}/users/search?${queryParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to search users");
  }

  return response.json();
};

export const getUserById = async (
  token: string,
  userId: string
): Promise<IUser> => {
  const response = await fetch(`${API_URL}/users/edit/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

// Updated service functions to handle FormData properly
export const updateUser = async (
  token: string,
  userId: string,
  updates: FormData // Changed from Partial<IUser> to FormData
): Promise<IUser> => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      // Remove Content-Type header - let browser set it for FormData
    },
    body: updates, // Send FormData directly
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to update user");
  }

  return response.json();
};

export const createUser = async (
  token: string,
  userData: FormData // Changed from Partial<IUser> to FormData
): Promise<IUser> => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // Remove Content-Type header - let browser set it for FormData
    },
    body: userData, // Send FormData directly
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to create user");
  }

  return response.json();
};

export const deleteUser = async (
  token: string,
  userId: string
): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
};

// Keep existing profile functions
export const getProfile = async (token: string): Promise<IUser> => {
  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
};

export const updateProfile = async (
  token: string,
  updates: Partial<IUser>
): Promise<IUser> => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return response.json();
};

export const deleteProfile = async (
  token: string
): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete profile");
  }

  return response.json();
};
