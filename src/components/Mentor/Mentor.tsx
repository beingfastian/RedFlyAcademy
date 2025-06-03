import React, { useState, useEffect, useRef } from "react";
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  ClipboardDocumentCheckIcon, 
  PuzzlePieceIcon, 
  UsersIcon, 
  DocumentCheckIcon, 
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface Service {
  id: number;
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
  bgGradient: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    name: "Online Tutoring",
    href: "#",
    icon: AcademicCapIcon,
    description: "One-on-one personalized learning with expert tutors",
    color: "text-purple-600",
    bgGradient: "from-purple-400 to-purple-600",
    features: ["1-on-1 Sessions", "Flexible Timing", "Expert Tutors"]
  },
  {
    id: 2,
    name: "Online Classes",
    href: "#",
    icon: UserGroupIcon,
    description: "Interactive group sessions with collaborative learning",
    color: "text-blue-600",
    bgGradient: "from-blue-400 to-blue-600",
    features: ["Group Learning", "Interactive Sessions", "Peer Collaboration"]
  },
  {
    id: 3,
    name: "Subject Specific Tutoring",
    href: "#",
    icon: BookOpenIcon,
    description: "Expert guidance in specific subjects and topics",
    color: "text-green-600",
    bgGradient: "from-green-400 to-green-600",
    features: ["Subject Experts", "Focused Learning", "Deep Understanding"]
  },
  {
    id: 4,
    name: "Homework Help",
    href: "#",
    icon: ClipboardDocumentCheckIcon,
    description: "Assignment support and guidance for better grades",
    color: "text-yellow-600",
    bgGradient: "from-yellow-400 to-orange-500",
    features: ["Assignment Help", "Step-by-step Guide", "Quick Support"]
  },
  {
    id: 5,
    name: "Study Aids",
    href: "#",
    icon: PuzzlePieceIcon,
    description: "Comprehensive resources and study materials",
    color: "text-pink-600",
    bgGradient: "from-pink-400 to-red-500",
    features: ["Study Materials", "Practice Tests", "Reference Guides"]
  },
  {
    id: 6,
    name: "Learning Communities",
    href: "#",
    icon: UsersIcon,
    description: "Collaborative learning with like-minded students",
    color: "text-indigo-600",
    bgGradient: "from-indigo-400 to-purple-600",
    features: ["Community Support", "Study Groups", "Knowledge Sharing"]
  },
  {
    id: 7,
    name: "Online Testing",
    href: "#",
    icon: DocumentCheckIcon,
    description: "Progress tracking with comprehensive assessments",
    color: "text-teal-600",
    bgGradient: "from-teal-400 to-cyan-600",
    features: ["Progress Tracking", "Performance Analytics", "Skill Assessment"]
  },
  {
    id: 8,
    name: "Special Needs Support",
    href: "#",
    icon: HeartIcon,
    description: "Specialized assistance for students with unique needs",
    color: "text-rose-600",
    bgGradient: "from-rose-400 to-pink-600",
    features: ["Personalized Care", "Adaptive Learning", "Individual Attention"]
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else if (window.innerWidth < 1280) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= services.length - slidesToShow ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, services.length - slidesToShow) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= services.length - slidesToShow ? 0 : prev + 1
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + slidesToShow);
  const displayedServices = visibleServices.length < slidesToShow
    ? [...visibleServices, ...services.slice(0, slidesToShow - visibleServices.length)]
    : visibleServices;

  return (
    <div
      ref={ref}
      id="services-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-semibold text-sm mb-6 shadow-lg">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Red Fly Academy, we know that the best way to help your child learn is through{" "}
            <span className="font-semibold text-blue-600">personalized, interactive learning</span>. 
            That's why we offer our comprehensive online education program.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Previous services"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Next services"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-all duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${(services.length / slidesToShow) * 100}%`
              }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / services.length}%` }}
                >
                  <div
                    className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-white/80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden h-full ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Icon Section */}
                    <div className="relative p-8 text-center">
                      <div className={`relative mx-auto w-20 h-20 bg-gradient-to-r ${service.bgGradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 mb-6`}>
                        <service.icon className="w-10 h-10 text-white" />
                        
                        {/* Floating indicator */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.bgGradient} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                          hoveredCard === service.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 pb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-700 transition-colors duration-300">
                        {service.name}
                      </h4>
                      
                      <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.bgGradient} rounded-full mr-3 flex-shrink-0`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <button className={`w-full py-3 px-4 bg-gradient-to-r ${service.bgGradient} text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm`}>
                        Learn More
                      </button>
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient.replace('to-', 'to-opacity-10 to-')} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(services.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * slidesToShow)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / slidesToShow) === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start your learning journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose from our comprehensive range of services and get personalized learning experience.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span>Get Started Today</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;