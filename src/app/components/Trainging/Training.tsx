// import { images } from "@/utils/imageData";

// export default function TrainingPage() {
//   const trainingImages = images.filter((img) => img.page === "training");

//   return (
//     <div className="min-h-screen py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Training</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Our training resources and materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {trainingImages.map((image) => (
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
import { ALL_CATEGORIES } from "../gallery/ImageGallery";

type TrainingPost = {
  _id: string;
  imageUrl: string;
  name: string;
  category: string;
};

export default function TrainingPage() {
  const [trainingPosts, setTrainingPosts] = useState<TrainingPost[]>([]);
  const [allPosts, setAllPosts] = useState<TrainingPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchTrainingPosts = async () => {
    setIsLoading(true);
    try {
      const data = await getPostsByPage("training");
      setAllPosts(data);
      if (selectedCategory) {
        setTrainingPosts(
          data.filter(
            (post: TrainingPost) => post.category === selectedCategory
          )
        );
      } else {
        setTrainingPosts(data);
      }
    } catch (error) {
      console.error("Failed to fetch training posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainingPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setTrainingPosts(
        allPosts.filter((post) => post.category === selectedCategory)
      );
    } else {
      setTrainingPosts(allPosts);
    }
  }, [selectedCategory, allPosts]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our training resources and materials
          </p>
        </div>

        {/* Category filter - shows all 5 options */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 cursor-pointer rounded-full hover:bg-blue-500 hover:text-white ${
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
              className={`px-4 py-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white ${
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
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : trainingPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {selectedCategory
                ? `No training materials available for "${selectedCategory}"`
                : "No training materials available"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trainingPosts.map((post) => (
              <div
                key={post._id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden  transition-shadow group"
              >
                {/* Image container */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Always visible text (smaller) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
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
