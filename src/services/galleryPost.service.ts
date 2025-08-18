// services/postService.ts
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPostsByPage = async (page: string, category?: string) => {
  try {
    // Construct the URL with query parameters
    const url = new URL(`${API_URL}/gallery/${page}`);
    if (category) {
      url.searchParams.append("category", category);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
