import * as React from "react";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
          TRANSFORM YOUR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            BODY & MIND
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
          Push your limits. Break your barriers. Become the strongest version of
          yourself.
        </p>

        <button
          onClick={onJoinClick}
          className="group relative px-16 py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl md:text-2xl font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            START FREE TRIAL
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}

const transformationImages = [
  {
    url: "https://images.pexels.com/photos/3478098/pexels-photo-3478098.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Body Transformation",
    duration: "3 months",
  },
  {
    url: "https://images.pexels.com/photos/3550632/pexels-photo-3550632.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Muscle Building",
    duration: "4 months",
  },
  {
    url: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Weight Loss",
    duration: "5 months",
  },
  {
    url: "https://images.pexels.com/photos/4164830/pexels-photo-4164830.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Strength Gains",
    duration: "3 months",
  },
  {
    url: "https://images.pexels.com/photos/3557369/pexels-photo-3557369.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fitness Goals",
    duration: "6 months",
  },
];

const memberReviews = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    text: "The trainers here are absolutely amazing! I lost 15kg in 3 months and gained so much strength. Highly recommended!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
    transformation: transformationImages[0],
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    text: "Best gym in the city! The facilities are top-notch and the atmosphere is so motivating. Been a member for 2 years!",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
    transformation: transformationImages[1],
  },
  {
    name: "Arjun Singh",
    role: "Entrepreneur",
    text: "Transformed my body completely! The personal training program is worth every penny. Amazing results in 6 months.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
    transformation: transformationImages[2],
  },
  {
    name: "Neha Patel",
    role: "Fitness Enthusiast",
    text: "Never felt this confident before! The team is supportive and the equipment is world-class. 10/10 experience!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
    transformation: transformationImages[3],
  },
  {
    name: "Vikram Mehta",
    role: "Business Analyst",
    text: "Incredible transformation! Lost 20kg and built lean muscle. The support system here is unmatched.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
    transformation: transformationImages[4],
  },
];

export function TransformationGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTransformation = () => {
    setCurrentIndex((prev) => (prev + 1) % memberReviews.length);
  };

  const prevTransformation = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + memberReviews.length) % memberReviews.length
    );
  };

  const currentMember = memberReviews[currentIndex];

  return (
    <section
      id="transformation"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            MEMBER
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              TRANSFORMATIONS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Inspiring results from people like you who transformed their lives
          </p>
        </div>

        {/* Split Page Layout: Left Image, Right Review - Same Card Size */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Transformation Image/Video */}
          <div className="relative group rounded-3xl overflow-hidden border-2 border-orange-500/30 bg-black h-[500px]">
            <img
              src={currentMember.transformation.url}
              alt={currentMember.transformation.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {currentMember.transformation.title}
                </h3>
                <p className="text-orange-400 text-base font-semibold">
                  Transformation Period: {currentMember.transformation.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Customer Review */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-orange-500/30 p-8 md:p-12 flex flex-col justify-center h-[500px]">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-20 h-20 rounded-full object-cover border-3 border-orange-500"
              />
              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {currentMember.name}
                </h3>
                <p className="text-orange-400 font-bold text-base mb-3">
                  {currentMember.role}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: currentMember.rating }).map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 text-orange-500/20 text-6xl font-black">
                "
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic relative z-10">
                "{currentMember.text}"
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTransformation}
            className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous transformation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {memberReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-12 bg-orange-500"
                    : "w-3 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to transformation ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTransformation}
            className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Next transformation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {memberReviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    text: "The trainers here are absolutely amazing! I lost 15kg in 3 months and gained so much strength. Highly recommended!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    text: "Best gym in the city! The facilities are top-notch and the atmosphere is so motivating. Been a member for 2 years!",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    role: "Entrepreneur",
    text: "Transformed my body completely! The personal training program is worth every penny. Amazing results in 6 months.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "Fitness Enthusiast",
    text: "Never felt this confident before! The team is supportive and the equipment is world-class. 10/10 experience!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 5,
  },
];

const whyChooseUsFeatures = [
  {
    icon: "🏆",
    title: "Proven Best Results",
    description:
      "Visible results with members achieving weight loss, muscle gain, and overall transformation.",
  },
  {
    icon: "🏋️‍♂️",
    title: "Standard Equipment",
    description:
      "Top-quality machines and certified trainers to ensure a safe, effective, and well-guided workout experience.",
  },
  {
    icon: "🎉",
    title:
      "Exclusive Friday                                                                                                                                                               Classes",
    description:
      "High-energy Zumba sessions every Friday to make your workouts fun, refreshing, and calorie-burning.",
  },
  {
    icon: "📋",
    title: "Personalized Diet Charts",
    description:
      "CCustom meal plans designed to match your personal health goals, body type, and lifestyle.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            WHY CHOOSE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Kavifit unisex gym
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to achieve your fitness dreams
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="relative group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl group-hover:from-orange-500/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerFeedback() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            WHAT OUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              MEMBERS SAY
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of satisfied members achieving their fitness goals
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-orange-500/30 p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-orange-500/20 text-8xl font-black">
            "
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-3 border-orange-500"
              />
              <div>
                <h3 className="text-2xl font-black text-white">
                  {testimonial.name}
                </h3>
                <p className="text-orange-400 font-bold">{testimonial.role}</p>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed font-medium italic mb-8">
              "{testimonial.text}"
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial
                      ? "w-12 bg-orange-500"
                      : "w-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {testimonials.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentTestimonial(idx)}
              className={`cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-300 ${
                idx === currentTestimonial
                  ? "ring-2 ring-orange-500 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <div>
                  <p className="text-white font-bold text-sm">{member.name}</p>
                  <p className="text-orange-400 text-xs">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
