import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero, { TransformationGallery, WhyChooseUs } from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import PlansSection from "./components/PlansSection";
import DemoModal from "./components/DemoModal";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Navigation,
  MessageCircle,
} from "lucide-react";

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navbar
        onHomeClick={scrollToTop}
        onDemoClick={() => setDemoModalOpen(true)}
        onWhyChooseUsClick={() => scrollToSection("why-choose-us")}
        onPackagesClick={() => scrollToSection("packages")}
        onTransformationClick={() => scrollToSection("transformation")}
        onFacilitiesClick={() => scrollToSection("facilities")}
        onContactUsClick={() => scrollToSection("contact-us")}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <div className="pt-16">
        <Hero onJoinClick={() => setDemoModalOpen(true)} />
        <WhyChooseUs />
        <PlansSection onJoinClick={() => setDemoModalOpen(true)} />
        <TransformationGallery />
        <ImageGallery />

        {/* Location and Hours Section */}
        <section
          id="contact-us"
          className="py-12 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Side - 2 Cards Stacked */}
              <div className="space-y-4">
                {/* Opening Hours Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white">
                      OPENING HOURS
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base font-bold text-white">
                        Mon - Sat
                      </span>
                      <span className="text-base text-orange-400 font-semibold">
                        5:30 AM - 10:30 AM | 5:00 PM - 9:30 PM
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-base font-bold text-white">
                        Sunday
                      </span>
                      <span className="text-base font-semibold text-red-500">
                        Closed
                      </span>
                    </div>

                    <button
                      onClick={() => setDemoModalOpen(true)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-base font-bold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Book a Free Trial
                    </button>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white">
                      LOCATION
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-base font-bold text-white">
                      Kavifit Gym
                    </p>
                    <p className="text-sm">9/29, 2nd St, Kumar Nagar</p>
                    <p className="text-sm">Indira Nagar, Tiruppur</p>
                    <p className="text-sm">Tamil Nadu 641603</p>
                    <p className="text-sm">Phone: +91 9361922033</p>
                    <p className="text-sm">Email: kavigym9361@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-orange-500/20 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d77.35!3d11.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzAwLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kavifit Gym Location"
                ></iframe>
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=KAVIFIT+Advance+Unisex+Gym,+Indira+Nagar,+Tirupur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-4 px-6 bg-slate-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Developed by{" "}
            <a
              href="https://www.instagram.com/morpix._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold hover:text-orange-400 transition-colors duration-300"
            >
              morpix._
            </a>
          </p>
        </div>
      </footer>

      {/* Fixed Contact Icons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a
          href="tel:+919361922033"
          className="group relative p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </a>
        <a
          href="https://wa.me/919361922033"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
        </a>
        <a
          href="https://www.instagram.com/kavifit_unisex_gym/?igsh=dHdwbTc1anJidGts#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-6 h-6 text-white" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

export default App;
