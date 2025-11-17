import { useState } from "react";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo booking submitted:", formData);

    // Format the message for WhatsApp
    const message = `Hello! I would like to book a free trial session.

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date}

Please confirm my booking. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919361922033?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", date: "" });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 transition-all duration-300 ${
        isOpen
          ? "bg-black/60 backdrop-blur-sm"
          : "bg-transparent backdrop-blur-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 w-full max-w-lg sm:max-w-md border-2 border-orange-500/50 shadow-2xl transition-all duration-500 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-white" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">
                BOOK YOUR
              </h2>
              <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                FREE DEMO
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                Join our community and experience world-class fitness
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-300 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 mt-4 sm:mt-6 text-sm sm:text-base"
              >
                CONFIRM BOOKING
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10 sm:py-12 animate-pulse">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              Booking Confirmed!
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              We'll contact you soon to confirm your free demo session.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
