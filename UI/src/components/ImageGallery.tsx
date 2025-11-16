import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gymImages = [
  {
    url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'State-of-the-Art Equipment',
  },
  {
    url: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Personal Training Sessions',
  },
  {
    url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cardio Zone',
  },
  {
    url: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Free Weights Area',
  },
  {
    url: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Group Classes',
  },
  {
    url: 'https://images.pexels.com/photos/4164830/pexels-photo-4164830.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Yoga Studio',
  },
  {
    url: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'CrossFit Area',
  },
  {
    url: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Recovery Zone',
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
    <div id="facilities" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">FACILITIES</span>
          </h2>
          <p className="text-gray-400 text-lg">Experience world-class training environment</p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-6 min-h-[400px]">
            <button
              onClick={prevSlide}
              className="z-20 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={3} />
            </button>

            <div className="relative flex-1 max-w-5xl h-[400px] flex items-center justify-center gap-4">
              {getVisibleImages().map((image, idx) => (
                <div
                  key={`${image.url}-${idx}`}
                  className={`absolute transition-all duration-700 ease-out ${
                    idx === 1
                      ? 'z-10 scale-110 opacity-100'
                      : idx === 0
                      ? '-translate-x-[380px] scale-90 opacity-70'
                      : 'translate-x-[380px] scale-90 opacity-70'
                  }`}
                  style={{
                    width: '350px',
                  }}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="z-20 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {gymImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-12 bg-orange-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
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
