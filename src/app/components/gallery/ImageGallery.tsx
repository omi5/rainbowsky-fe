// import Image from "next/image";

// export default function ImageGallery() {
//   const images = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
//       alt: "Mountain Sunset",
//       title: "Mountain Sunset",
//       aspectRatio: "3/2",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop",
//       alt: "Ocean Waves",
//       title: "Ocean Waves",
//       aspectRatio: "4/5",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
//       alt: "Forest Path",
//       title: "Forest Path",
//       aspectRatio: "3/2",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop",
//       alt: "City Skyline",
//       title: "City Skyline",
//       aspectRatio: "2/3",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
//       alt: "Desert Dunes",
//       title: "Desert Dunes",
//       aspectRatio: "3/2",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1432889490240-84df33d47091?w=500&h=500&fit=crop",
//       alt: "Waterfall",
//       title: "Waterfall",
//       aspectRatio: "1/1",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=400&fit=crop",
//       alt: "Cherry Blossom",
//       title: "Cherry Blossom",
//       aspectRatio: "3/2",
//     },
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=600&fit=crop",
//       alt: "Northern Lights",
//       title: "Northern Lights",
//       aspectRatio: "2/3",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
//       alt: "Tropical Beach",
//       title: "Tropical Beach",
//       aspectRatio: "3/2",
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop",
//       alt: "Snow Mountains",
//       title: "Snow Mountains",
//       aspectRatio: "4/5",
//     },
//   ];

//   return (
//     <div className="min-h-screen  py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover stunning images from around the world. Each photograph
//             tells a unique story.
//           </p>
//         </div>

//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
//           {images.map((image, index) => (
//             <div
//               key={image.id}
//               className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 break-inside-avoid mb-6 ${
//                 index % 12 === 0 ? "sm:w-full" : ""
//               }`}
//             >
//               <div
//                 className="relative w-full"
//                 style={{ aspectRatio: image.aspectRatio }}
//               >
//                 <img
//                   src={image.src || "/placeholder.svg"}
//                   alt={image.alt}
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Title overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
//                   <div className="w-8 h-0.5 bg-white/60"></div>
//                 </div>

//                 {/* Hover effect border */}
//                 <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load more button */}
//         <div className="text-center mt-12">
//           <button className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
//             Load More Images
//             <svg
//               className="ml-2 w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { images } from "@/utils/imageData";

export default function GalleryPage() {
  const galleryImages = images.filter((img) => img.page === "gallery");

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stunning images from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
