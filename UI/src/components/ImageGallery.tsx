import { useState } from "react";
import { Check, Calendar } from "lucide-react";

type Plan = {
  duration: string;
  price: number;
  icon: any;
  color?: string;
  popular?: boolean;
  bonus?: string | null;
};

const plans: Plan[] = [
  { duration: "1 Month", price: 2000, icon: Calendar, color: "from-blue-500 to-cyan-500", popular: false, bonus: null },
  { duration: "3 Months", price: 4000, icon: Calendar, color: "from-orange-500 to-red-600", popular: false, bonus: null },
  { duration: "6 Months", price: 6000, icon: Calendar, color: "from-emerald-500 to-teal-600", popular: false, bonus: null },
  { duration: "1 Year", price: 8000, icon: Calendar, color: "from-purple-500 to-pink-600", popular: false, bonus: "Best Value" },
];

const morePlans: Plan[] = [
  { duration: "1 Month", price: 7000, icon: Calendar, color: "from-yellow-500 to-orange-600" },
  { duration: "3 Month", price: 18000, icon: Calendar, color: "from-red-500 to-pink-600" },
];

const features = ["Diet Plans", "Zumba Classes"];

interface PlansSectionProps {
  onJoinClick: (data: { plan?: Plan; phone?: string }) => void;
}

export default function PlansSection({ onJoinClick }: PlansSectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [joinPlan, setJoinPlan] = useState<Plan | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      return "Enter a valid 10-digit mobile number.";
    }
    return "";
  };

  const openJoinPopupFromCard = (plan: Plan) => {
    setJoinPlan(plan);
    setPhone("");
    setPhoneError("");
    setSubmitted(false);
    setShowJoinPopup(true);
  };

  const handleBookNow = () => {
    if (selectedIndex === null) return;
    const selectedPlan = morePlans[selectedIndex];
    setShowModal(false);
    setJoinPlan(selectedPlan);
    setPhone("");
    setPhoneError("");
    setSubmitted(false);
    setShowJoinPopup(true);
  };

  const sendWhatsApp = (digits: string, plan?: Plan) => {
    const planText = plan ? `Plan: ${plan.duration} — ₹${plan.price.toLocaleString()}` : "";
    const message = `Hello! I would like to book a personal training session.\n\n${planText}\nPhone: ${digits}\n\nPlease contact me to confirm. Thank you!`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919500848503?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmitPhone = () => {
    const err = validatePhone(phone);
    setPhoneError(err);
    if (err) return;
    setSubmitting(true);
    const digits = phone.replace(/\D/g, "");
    const payload = {
      plan: joinPlan ?? undefined,
      phone: digits,
    };
    console.log('entering number',digits)
    sendWhatsApp(digits, joinPlan ?? undefined);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        onJoinClick?.(payload);
      } catch (e) {
        console.warn(e);
      }
      sendWhatsApp(digits, joinPlan ?? undefined);
      setTimeout(() => {
        setShowJoinPopup(false);
        setJoinPlan(null);
        setPhone("");
        setSubmitted(false);
      }, 1400);
    }, 800);
  };

  return (
    <section id="packages" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            CHOOSE YOUR{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> MEMBERSHIP </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"> Select the perfect plan to match your fitness goals and lifestyle </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.duration} className="flex justify-center">
                <div
                  className={`w-full max-w-xs relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 flex flex-col ${
                    plan.popular ? "border-orange-500 shadow-2xl shadow-orange-500/20" : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${plan.color ?? "from-slate-500 to-slate-600"} mb-4`}>
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
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color ?? "from-slate-500 to-slate-600"} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={4} />
                        </div>
                        <span className="text-gray-300 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openJoinPopupFromCard(plan)}
                    className={`w-full py-3 bg-gradient-to-r ${plan.color ?? "from-slate-500 to-slate-600"} text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95`}
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white text-lg font-semibold"
          >
            PERSONAL TRAINING OPTIONS
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="bg-slate-900 rounded-3xl p-8 max-w-2xl w-full relative border border-white/10">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {morePlans.map((plan, idx) => {
                  const Icon = plan.icon;
                  const selected = selectedIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between focus:outline-none ${
                        selected ? "border-orange-400 shadow-lg bg-gradient-to-r from-orange-500/10 to-transparent" : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
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
                        {selected && <div className="text-sm text-orange-400 font-bold">Selected</div>}
                      </div>
                    </button>
                  );
                })}
              </div>

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
                    disabled={selectedIndex === null}
                    className={`px-6 py-2 rounded-xl font-semibold text-white transition ${selectedIndex === null ? "bg-gray-600/40 cursor-not-allowed" : "bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105"}`}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedIndex(null);
                }}
                className="w-full mt-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300 font-semibold rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {showJoinPopup && joinPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowJoinPopup(false)} />
            <div className="relative bg-slate-900 rounded-3xl p-6 max-w-md w-full mx-auto border border-white/10">
              <button
                onClick={() => {
                  setShowJoinPopup(false);
                  setJoinPlan(null);
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">Thanks for choosing {joinPlan.duration}!</h3>
                  <p className="text-sm text-gray-300 mb-4 text-center">Please enter your phone number and we'll reach you out shortly.</p>

                  <div className="space-y-3">
                    <label className="block text-sm text-gray-300">Phone number</label>
                    <input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError) setPhoneError("");
                      }}
                      type="tel"
                      inputMode="numeric"
                      placeholder="e.g. 9876543210"
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white"
                    />
                    {phoneError && <div className="text-xs text-rose-400">{phoneError}</div>}

                    <div className="flex gap-3 justify-end mt-2">
                      <button
                        onClick={() => {
                          setShowJoinPopup(false);
                          setJoinPlan(null);
                        }}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={handleSubmitPhone}
                        disabled={submitting}
                        className={`px-5 py-2 rounded-xl font-semibold text-white transition ${submitting ? "bg-gray-600/40" : "bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105"}`}
                      >
                        {submitting ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4 text-3xl">🎉</div>
                  <h4 className="text-xl font-bold text-white mb-2">Thanks — we got it!</h4>
                  <p className="text-sm text-gray-300">We will reach you shortly on {phone.replace(/\D/g, "")} to confirm your {joinPlan.duration} plan.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
