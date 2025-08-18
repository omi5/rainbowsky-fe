// import { images } from "@/utils/imageData";

// export default function GalleryPage() {
//   const galleryImages = images.filter((img) => img.page === "gallery");

//   return (
//     <div className="min-h-screen py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover stunning images from our collection
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryImages.map((image) => (
//             <div
//               key={image.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//             >
//               <div className="h-48 w-full overflow-hidden">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="font-medium text-gray-900 truncate">
//                   {image.title}
//                 </h3>
//                 <p className="text-sm text-gray-500">{image.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { getPostsByPage } from "@/services/galleryPost.service";

type GalleryPost = {
  _id: string;
  imageUrl: string;
  name: string;
  category: string;
};

export const ALL_CATEGORIES = [
  "Nature",
  "Urban",
  "People",
  "Animals",
  "Technology",
];

export default function GalleryPage() {
  const [galleryPosts, setGalleryPosts] = useState<GalleryPost[]>([]);
  const [allPosts, setAllPosts] = useState<GalleryPost[]>([]); // Store all posts
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchGalleryPosts = async () => {
    setIsLoading(true);
    try {
      const data = await getPostsByPage("gallery");
      setAllPosts(data); // Store all posts
      if (selectedCategory) {
        setGalleryPosts(
          data.filter((post: GalleryPost) => post.category === selectedCategory)
        );
      } else {
        setGalleryPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch gallery posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryPosts();
  }, []);

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory) {
      setGalleryPosts(
        allPosts.filter((post) => post.category === selectedCategory)
      );
    } else {
      setGalleryPosts(allPosts);
    }
  }, [selectedCategory, allPosts]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stunning images from our collection
          </p>
        </div>

        {/* Category filter - shows all 5 options */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white ${
              !selectedCategory
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All
          </button>
          {ALL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 cursor-pointer rounded-full hover:bg-blue-500 hover:text-white ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        ) : galleryPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {selectedCategory
                ? `No posts found for "${selectedCategory}"`
                : "No posts available"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryPosts.map((post) => (
              <div
                key={post._id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image container */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
                    loading="lazy"
                  />
                </div>

                {/* Always visible text (smaller) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="font-medium text-white text-sm truncate">
                    {post.name}
                  </h3>
                  <p className="text-xs text-gray-300">{post.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
