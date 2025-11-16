import { Dumbbell } from "lucide-react";

interface NavbarProps {
  onHomeClick: () => void;
  onDemoClick: () => void;
  onWhyChooseUsClick: () => void;
  onPackagesClick: () => void;
  onTransformationClick: () => void;
  onFacilitiesClick: () => void;
  onContactUsClick: () => void;
}

export default function Navbar({
  onHomeClick,
  onDemoClick,
  onWhyChooseUsClick,
  onPackagesClick,
  onTransformationClick,
  onFacilitiesClick,
  onContactUsClick,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={onHomeClick}
        >
          <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
            <Dumbbell className="w-6 h-6 text-white" strokeWidth={3} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-white tracking-wider">
              IRON
            </h1>
            <p className="text-xs text-orange-400 font-bold -mt-1">FITNESS</p>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
          <button
            onClick={onHomeClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-orange-500 hover:text-white relative"
          >
            HOME
          </button>
          <button
            onClick={onWhyChooseUsClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            WHY CHOOSE US
          </button>
          <button
            onClick={onPackagesClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            PACKAGES
          </button>
          <button
            onClick={onTransformationClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            TRANSFORMATION
          </button>
          <button
            onClick={onFacilitiesClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            FACILITIES
          </button>
          <button
            onClick={onContactUsClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            CONTACT US
          </button>
          <button
            onClick={onDemoClick}
            className="px-4 lg:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-xs lg:text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            BOOK A FREE TRIAL
          </button>
        </div>
      </div>
    </nav>
  );
}
