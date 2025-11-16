import { ArrowLeft, CheckCircle, Dumbbell } from 'lucide-react';

interface PersonalTrainingProps {
  onBack: () => void;
}

const clientRules = [
  'Arrive 10 minutes early for each session',
  'Maintain 80% attendance for optimal results',
  'Follow nutrition guidelines provided by trainer',
  'Stay hydrated during and after workouts',
  'Inform trainer about any injuries or pain',
  'No mobile phone distractions during sessions',
  'Maintain proper form over lifting heavy weights',
  'Communicate goals and progress regularly',
];

export default function PersonalTraining({ onBack }: PersonalTrainingProps) {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-semibold">Back to Home</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            PERSONAL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              TRAINING
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your body with our expert one-on-one training sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
                <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-white">1 MONTH</h2>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black text-white">₹7,000</span>
              <p className="text-gray-400 mt-2">4 sessions per week</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">16 personalized training sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">Custom workout plan</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">Form correction & guidance</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">Motivation & support</span>
              </li>
            </ul>

            <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              BOOK NOW
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-300 md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full">
              BEST VALUE
            </div>

            <div className="flex items-center gap-4 mb-6 mt-2">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-white">3 MONTHS</h2>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black text-white">₹18,000</span>
              <p className="text-gray-400 mt-2">Save ₹3,000 vs monthly</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-300">48 personalized training sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-300">Custom workout plan with progression</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-300">Nutrition consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-300">Monthly progress tracking</span>
              </li>
            </ul>

            <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-2 border-orange-500/30 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-4xl font-black text-white mb-8">CLIENT RULES & GUIDELINES</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {clientRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">{rule}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300">
              <span className="font-bold text-orange-400">Note:</span> Following these guidelines ensures maximum results and a positive training environment for all members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
