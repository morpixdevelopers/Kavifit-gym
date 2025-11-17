import { useState } from "react";
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
  onContactUsClick,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            setOpen(false);
            onHomeClick();
          }}
        >
          <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
            <Dumbbell
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              strokeWidth={3}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm sm:text-xl font-black text-white tracking-wider">
              KAVIFIT
            </h1>
            <p className="text-[10px] sm:text-xs text-orange-400 font-bold -mt-1">
              UNISEX GYM
            </p>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button
            onClick={onHomeClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-orange-500 hover:text-white relative"
          >
            HOME
          </button>

          <button
            onClick={onContactUsClick}
            className="text-xs lg:text-sm font-bold transition-all duration-300 text-gray-300 hover:text-white"
          >
            CONTACT US
          </button>

          <button
            onClick={onDemoClick}
            className="px-3 lg:px-6 py-1.5 lg:py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-xs lg:text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            BOOK A FREE TRIAL
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-200 hover:bg-white/5 transition"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile expanded menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-gray-800 bg-slate-900/95">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setOpen(false);
                onHomeClick();
              }}
              className="text-sm font-bold text-orange-500 text-left"
            >
              HOME
            </button>

            <button
              onClick={() => {
                setOpen(false);
                onContactUsClick();
              }}
              className="text-sm font-bold text-gray-300 text-left"
            >
              CONTACT US
            </button>

            <button
              onClick={() => {
                setOpen(false);
                onDemoClick();
              }}
              className="w-full mt-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
