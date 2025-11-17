import { useState } from "react";
import { Check, Calendar } from 'lucide-react';

type Plan = {
  duration: string;
  price: number;
  icon: any;
  color?: string;
  popular?: boolean;
  bonus?: string | null;
};

const plans: Plan[] = [
  { duration: '1 Month', price: 2000, icon: Calendar, color: 'from-blue-500 to-cyan-500', popular: false, bonus: null },
  { duration: '3 Months', price: 4000, icon: Calendar, color: 'from-orange-500 to-red-600', popular: false, bonus: null },
  { duration: '6 Months', price: 6000, icon: Calendar, color: 'from-emerald-500 to-teal-600', popular: false, bonus: null },
  { duration: '1 Year', price: 8000, icon: Calendar, color: 'from-purple-500 to-pink-600', popular: false, bonus: 'Best Value' },
];

const morePlans: Plan[] = [
  { duration: '1 Month', price: 7000, icon: Calendar, color: 'from-yellow-500 to-orange-600' },
  { duration: '3 Month', price: 18000, icon: Calendar, color: 'from-red-500 to-pink-600' },
];

const features = ['Diet Plans', 'Zumba Classes'];

interface PlansSectionProps {
  onJoinClick: (selectedPlan?: Plan) => void; // optional selected plan passed
}

export default function PlansSection({ onJoinClick }: PlansSectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [bookingProcessing, setBookingProcessing] = useState(false);

  const handleBookNow = () => {
    if (selectedIndex === null) return;
    const selectedPlan = morePlans[selectedIndex];

    setBookingProcessing(true);

    // demo: log booking. Replace with API/Firebase save as needed.
    const booking = {
      plan: selectedPlan.duration,
      price: selectedPlan.price,
      bookedAt: new Date().toISOString(),
    };
    console.log("Personal Training booked:", booking);

    // call parent handler (if they want the plan info)
    try {
      onJoinClick?.(selectedPlan);
    } catch (err) {
      console.warn("onJoinClick threw:", err);
    }

    // simple UX: show tiny processing state then close
    setTimeout(() => {
      setBookingProcessing(false);
      setSelectedIndex(null);
      setShowModal(false);
    }, 700);
  };

  return (
    <section id="packages" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            CHOOSE YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              MEMBERSHIP
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan to match your fitness goals and lifestyle
          </p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.duration} className="flex justify-center">
                <div className={`w-full max-w-xs relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 flex flex-col ${
                    plan.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/20' : 'border-gray-700 hover:border-gray-600'
                  }`}>
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${plan.color ?? 'from-slate-500 to-slate-600'} mb-4`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">{plan.duration}</h3>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-black text-white">₹{plan.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color ?? 'from-slate-500 to-slate-600'} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={4} />
                        </div>
                        <span className="text-gray-300 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      try { onJoinClick?.(plan); } catch {}
                    }}
                    className={`w-full py-3 bg-gradient-to-r ${plan.color ?? 'from-slate-500 to-slate-600'} text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95`}
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Options Button */}
        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white text-lg font-semibold"
          >
            PERSONAL TRAINING OPTIONS
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="bg-slate-900 rounded-3xl p-8 max-w-2xl w-full relative border border-white/10">
              {/* Close */}
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedIndex(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-3xl font-bold text-white mb-6 text-center">Personal Training Options</h3>

              {/* Plans list as selectable cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {morePlans.map((plan, idx) => {
                  const Icon = plan.icon;
                  const selected = selectedIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between focus:outline-none
                        ${selected ? 'border-orange-400 shadow-lg bg-gradient-to-r from-orange-500/10 to-transparent' : 'border-white/10 bg-white/5 hover:bg-white/10'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/10 rounded-xl">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{plan.duration}</div>
                          <div className="text-sm text-gray-400">Personal coaching sessions</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-white font-bold text-lg">₹{plan.price.toLocaleString()}</div>
                        {selected && (
                          <div className="text-sm text-orange-400 font-bold">Selected</div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Book Now button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="text-sm text-gray-300">
                  {selectedIndex === null ? "Choose a plan to enable booking." : `Selected: ${morePlans[selectedIndex].duration} — ₹${morePlans[selectedIndex].price.toLocaleString()}`}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedIndex(null);
                    }}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition"
                  >
                    Clear
                  </button>

                  <button
                    onClick={handleBookNow}
                    disabled={selectedIndex === null || bookingProcessing}
                    className={`px-6 py-2 rounded-xl font-semibold text-white transition
                      ${selectedIndex === null ? 'bg-gray-600/40 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105'}
                      ${bookingProcessing ? 'opacity-80' : ''}
                    `}
                  >
                    {bookingProcessing ? 'Booking...' : 'BOOK NOW'}
                  </button>
                </div>
              </div>

              {/* Close modal CTA */}
              <button
                onClick={() => { setShowModal(false); setSelectedIndex(null); }}
                className="w-full mt-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300 font-semibold rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
