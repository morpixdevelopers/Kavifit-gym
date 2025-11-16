import { Check, ArrowLeft, Calendar } from 'lucide-react';

interface PlansProps {
  onBack: () => void;
}

const plans = [
  {
    duration: '1 Month',
    price: 2000,
    icon: Calendar,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    bonus: null,
  },
  {
    duration: '3 Months',
    price: 4000,
    icon: Calendar,
    color: 'from-orange-500 to-red-600',
    popular: true,
    bonus: '+ 1 Month Free',
  },
  {
    duration: '6 Months',
    price: 6000,
    icon: Calendar,
    color: 'from-emerald-500 to-teal-600',
    popular: false,
    bonus: null,
  },
  {
    duration: '1 Year',
    price: 10000,
    icon: Calendar,
    color: 'from-purple-500 to-pink-600',
    popular: false,
    bonus: 'Best Value',
  },
];

const features = [
  'Unlimited gym access',
  '24/7 facility availability',
  'Free fitness assessment',
  'Mobile app access',
  'Locker room facilities',
  'Guest passes included',
  'Access to all equipment',
  'Community support',
];

export default function Plans({ onBack }: PlansProps) {
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
            CHOOSE YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              MEMBERSHIP
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan to match your fitness goals and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.duration}
                className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 flex flex-col ${
                  plan.popular
                    ? 'border-orange-500 shadow-2xl shadow-orange-500/20 md:scale-110'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {plan.bonus && !plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full">
                    {plan.bonus}
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{plan.duration}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-black text-white">{plan.price.toLocaleString()}</span>
                  </div>
                  {plan.bonus && plan.popular && (
                    <p className="text-orange-400 text-sm font-bold mt-2">{plan.bonus}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-gray-300 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                    plan.popular ? 'shadow-lg shadow-orange-500/30' : ''
                  }`}
                >
                  JOIN NOW
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Plan?</h3>
          <p className="text-gray-300 mb-6">
            Contact our team to create a personalized membership tailored to your specific needs
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
