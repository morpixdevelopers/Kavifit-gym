import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TransformationsProps {
  onBack: () => void;
}

const transformationImages = [
  {
    url: 'https://images.pexels.com/photos/3478098/pexels-photo-3478098.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Body Transformation',
    duration: '3 months',
  },
  {
    url: 'https://images.pexels.com/photos/3550632/pexels-photo-3550632.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Muscle Building',
    duration: '4 months',
  },
  {
    url: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Weight Loss Journey',
    duration: '5 months',
  },
  {
    url: 'https://images.pexels.com/photos/4164830/pexels-photo-4164830.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Strength Gains',
    duration: '3 months',
  },
  {
    url: 'https://images.pexels.com/photos/3557369/pexels-photo-3557369.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fitness Goal Achieved',
    duration: '6 months',
  },
  {
    url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Athletic Build',
    duration: '4 months',
  },
  {
    url: 'https://images.pexels.com/photos/3757511/pexels-photo-3757511.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Endurance Training',
    duration: '2 months',
  },
  {
    url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Complete Makeover',
    duration: '7 months',
  },
  {
    url: 'https://images.pexels.com/photos/4720278/pexels-photo-4720278.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Performance Boost',
    duration: '3 months',
  },
];

export default function Transformations({ onBack }: TransformationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<(typeof transformationImages)[0] | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformationImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformationImages.length) % transformationImages.length);
  };

  const getVisibleImages = (startIdx: number) => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIdx + i) % transformationImages.length;
      images.push(transformationImages[index]);
    }
    return images;
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-semibold">Back to Home</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            MEMBER
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              TRANSFORMATIONS
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from real people who committed to their fitness journey
          </p>
        </div>

        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="z-20 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={3} />
            </button>

            <div className="relative flex-1 max-w-5xl h-[450px] flex items-center justify-center gap-4">
              {getVisibleImages(currentIndex).map((image, idx) => (
                <div
                  key={`${image.url}-${currentIndex}-${idx}`}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                    idx === 1
                      ? 'z-10 scale-100 opacity-100'
                      : idx === 0
                      ? '-translate-x-[420px] scale-90 opacity-60'
                      : 'translate-x-[420px] scale-90 opacity-60'
                  }`}
                  style={{ width: '380px' }}
                  onClick={() => idx === 1 && setSelectedImage(image)}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[450px]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                        <p className="text-orange-400 text-sm font-semibold mt-2">
                          Transformation Period: {image.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="z-20 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {transformationImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-12 bg-orange-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to transformation ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {transformationImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                  <p className="text-orange-400 text-xs font-semibold">{image.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-2 border-orange-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Start Your <span className="text-orange-500">Transformation?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of members who have achieved incredible results. Your transformation journey starts here.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 text-lg">
            JOIN NOW & GET FREE DEMO
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/80 backdrop-blur-sm animate-pulse"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-pulse"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-3xl font-black mb-2">{selectedImage.title}</h3>
              <p className="text-orange-400 text-lg font-bold">
                Transformation Period: {selectedImage.duration}
              </p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
