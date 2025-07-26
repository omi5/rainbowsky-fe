import ImageGallery from "../components/gallery/ImageGallery";
import Navbar from "../components/HomePage/Navbar";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-12">
        <ImageGallery />
      </div>
    </main>
  );
}
