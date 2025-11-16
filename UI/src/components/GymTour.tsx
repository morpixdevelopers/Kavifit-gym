import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface GymTourProps {
  onBack: () => void;
}

const gymViews = [
  {
    id: 1,
    title: 'Main Training Floor',
    description: 'State-of-the-art equipment and spacious workout area',
    url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Cardio Equipment', 'Weight Training', 'Free Weights', 'Olympic Platforms'],
  },
  {
    id: 2,
    title: 'Cardio Section',
    description: 'Premium treadmills and cardio machines with digital screens',
    url: 'https://images.pexels.com/photos/3550632/pexels-photo-3550632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Treadmills', 'Elliptical Machines', 'Stationary Bikes', 'Rowing Machines'],
  },
  {
    id: 3,
    title: 'Weight Training Zone',
    description: 'Complete range of dumbbells and strength training equipment',
    url: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Dumbbells', 'Barbells', 'Weight Machines', 'Benches'],
  },
  {
    id: 4,
    title: 'Functional Training Area',
    description: 'Dedicated space for crossfit and functional fitness',
    url: 'https://images.pexels.com/photos/3757511/pexels-photo-3757511.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Battle Ropes', 'Tire Flips', 'Kettlebells', 'Suspension Training'],
  },
  {
    id: 5,
    title: 'Yoga & Flexibility Studio',
    description: 'Peaceful studio with mirrors and premium flooring',
    url: 'https://images.pexels.com/photos/4720278/pexels-photo-4720278.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Yoga Mats', 'Mirrors', 'Sound System', 'Air Conditioning'],
  },
  {
    id: 6,
    title: 'Locker Rooms',
    description: 'Clean and secure locker facilities with showers',
    url: 'https://images.pexels.com/photos/3552472/pexels-photo-3552472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Lockers', 'Showers', 'Changing Rooms', 'Amenities'],
  },
];

export default function GymTour({ onBack }: GymTourProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenView, setFullscreenView] = useState<(typeof gymViews)[0] | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const nextView = () => {
    setCurrentIndex((prev) => (prev + 1) % gymViews.length);
  };

  const prevView = () => {
    setCurrentIndex((prev) => (prev - 1 + gymViews.length) % gymViews.length);
  };

  const currentView = gymViews[currentIndex];

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
            360° GYM
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              TOUR
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our world-class facilities and premium equipment
          </p>
        </div>

        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] bg-black">
            <img
              src={currentView.url}
              alt={currentView.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                    {currentView.title}
                  </h2>
                  <p className="text-gray-300 text-lg">{currentView.description}</p>
                </div>
                <button
                  onClick={() => setFullscreenView(currentView)}
                  className="flex-shrink-0 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Fullscreen view"
                >
                  <Maximize2 className="w-6 h-6" strokeWidth={2.5} />
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentView.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-orange-500/20 text-orange-300 text-sm font-bold rounded-full border border-orange-500/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-bold">
                  {currentIndex + 1} / {gymViews.length}
                </span>
              </div>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  autoRotate
                    ? 'bg-orange-500/80 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {autoRotate ? 'Auto Rotate: ON' : 'Auto Rotate: OFF'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevView}
              className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Previous view"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={3} />
            </button>

            <div className="flex flex-wrap gap-3 justify-center flex-1 px-6">
              {gymViews.map((view, idx) => (
                <button
                  key={view.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-orange-500 text-white scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {view.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <button
              onClick={nextView}
              className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
              aria-label="Next view"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {gymViews.map((view, idx) => (
            <div
              key={view.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative group overflow-hidden rounded-2xl h-48 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${
                idx === currentIndex ? 'border-orange-500' : 'border-transparent'
              }`}
            >
              <img
                src={view.url}
                alt={view.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold">{view.title}</h3>
                  <p className="text-orange-400 text-xs font-semibold mt-1">
                    Click to view {view.features.length} features
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-2 border-orange-500/30 rounded-3xl p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-orange-500 mb-3">10,000+</div>
              <div className="text-gray-300">Sq. Ft. Facility</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-500 mb-3">100+</div>
              <div className="text-gray-300">Pieces of Equipment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-500 mb-3">6</div>
              <div className="text-gray-300">Specialized Training Zones</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to Visit Our Gym?
            </h2>
            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 text-lg">
              BOOK FREE DEMO NOW
            </button>
          </div>
        </div>
      </div>

      {fullscreenView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/95 backdrop-blur-sm"
          onClick={() => setFullscreenView(null)}
        >
          <div className="relative w-full max-w-5xl h-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={fullscreenView.url}
              alt={fullscreenView.title}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h2 className="text-4xl font-black text-white mb-3">{fullscreenView.title}</h2>
              <p className="text-gray-300 text-lg mb-4">{fullscreenView.description}</p>
              <div className="flex flex-wrap gap-3">
                {fullscreenView.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-orange-500/30 text-orange-300 text-sm font-bold rounded-full border border-orange-500/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFullscreenView(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
