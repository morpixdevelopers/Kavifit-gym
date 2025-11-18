import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import facility images from assets folder
// Images should be named photo1.JPG through photo8.JPG in UI/src/assets/facilities/
import photo1 from "../assets/facilities/photo1.png";
import photo2 from "../assets/facilities/photo2.png";
import photo3 from "../assets/facilities/photo3.png";
import photo4 from "../assets/facilities/photo4.png";
import photo5 from "../assets/facilities/photo5.png";
import photo6 from "../assets/facilities/photo6.png";
import photo7 from "../assets/facilities/photo7.png";
import photo8 from "../assets/facilities/photo8.png";

const gymImages = [
  {
    image: photo1,
    title: "Strength Training Zone",
  },
  {
    image: photo2,
    title: "Cardio Zone",
  },
  {
    image: photo3,
    title: "Weightlifting and Muscle Building",
  },
  {
    image: photo4,
    title: "Powerlifting & Machine Training Section",
  },
  {
    image: photo5,
    title: "Dumbbell Training & Weight Zone",
  },
  {
    image: photo6,
    title: "Lower Body Workout & Strength Machines",
  },
  {
    image: photo7,
    title: "Cardio Cycling Zone",
  },
  {
    image: photo8,
    title: "Treadmill Zone",
  },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gymImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gymImages.length) % gymImages.length);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % gymImages.length;
      images.push({ ...gymImages[index], position: i });
    }
    return images;
  };

  return (
    <div id="facilities" className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              FACILITIES
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-400">
            Experience world-class training environment
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[240px] sm:min-h-[320px] md:min-h-[400px]">
            <button
              onClick={prevSlide}
              className="z-20 p-2 sm:p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={3} />
            </button>

            <div className="relative flex-1 max-w-5xl h-[240px] sm:h-[320px] md:h-[400px] flex items-center justify-center gap-3 sm:gap-4">
              {getVisibleImages().map((image, idx) => (
                <div
                  key={`${image.title}-${idx}`}
                  className={`absolute transition-all duration-700 ease-out ${
                    idx === 1
                      ? "z-10 scale-105 opacity-100"
                      : idx === 0
                      ? "-translate-x-40 sm:-translate-x-80 scale-95 opacity-70"
                      : "translate-x-40 sm:translate-x-80 scale-95 opacity-70"
                  }`}
                  style={{
                    width: idx === 1 ? "80%" : "52%",
                    maxWidth: 350,
                  }}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white text-sm sm:text-2xl font-bold">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="z-20 p-2 sm:p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={3} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {gymImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-10 sm:w-12 bg-orange-500"
                    : "w-2 sm:w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}