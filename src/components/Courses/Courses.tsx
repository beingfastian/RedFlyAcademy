import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  AcademicCapIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface Offering {
  id: number;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
}

const offerings: Offering[] = [
  {
    id: 1,
    title: "Online Tutorials",
    description: "Expert-led video tutorials tailored to each student's level",
    icon: AcademicCapIcon,
    color: "text-purple-600",
    bgColor: "from-purple-100 to-purple-200"
  },
  {
    id: 2,
    title: "Interactive Exercises",
    description: "Hands-on learning activities that reinforce concepts",
    icon: PuzzlePieceIcon,
    color: "text-blue-600",
    bgColor: "from-blue-100 to-blue-200"
  },
  {
    id: 3,
    title: "Customizable Learning Paths",
    description: "Personalized curriculum based on student's goals",
    icon: ArrowPathIcon,
    color: "text-green-600",
    bgColor: "from-green-100 to-green-200"
  },
  {
    id: 4,
    title: "Personalized Feedback",
    description: "Regular feedback and progress tracking from instructors",
    icon: ChatBubbleBottomCenterTextIcon,
    color: "text-pink-600",
    bgColor: "from-pink-100 to-pink-200"
  },
  {
    id: 5,
    title: "Online Support",
    description: "Dedicated support team to assist with any questions",
    icon: HeartIcon,
    color: "text-red-600",
    bgColor: "from-red-100 to-red-200"
  },
  {
    id: 6,
    title: "24/7 Access",
    description: "Learn anytime, anywhere with round-the-clock availability",
    icon: ClockIcon,
    color: "text-indigo-600",
    bgColor: "from-indigo-100 to-indigo-200"
  },
];

const useIntersectionObserver = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [callback]);

  return ref;
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <div
      ref={ref}
      id="about-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
          
          {/* About Us Content */}
          <div className="lg:col-span-5 relative">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold text-sm mb-6 shadow-lg">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                About Red Fly Academy
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Future Leaders
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <p className="pl-8">
                    Red Fly Academy is an online education company that specializes in
                    providing <span className="font-semibold text-purple-600">customized, interactive learning experiences</span> for children.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
                  <p className="pl-8">
                    Our programs offer a <span className="font-semibold text-blue-600">flexible schedule</span> that allows children to learn
                    at their own pace, and our online classes provide the perfect
                    solution for families who want to learn from the comfort of their
                    homes.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-yellow-400 rounded-full"></div>
                  <p className="pl-8">
                    Our programs are designed to provide children with the opportunity to
                    learn at their own pace and to explore new areas of knowledge. With
                    our online tuition program, children can <span className="font-semibold text-green-600">customize their education</span> to fit their individual needs.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10k+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Enrolled</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="lg:col-span-7 mt-16 lg:mt-0">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              {/* Section Header */}
              <div className="text-center lg:text-left mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full font-semibold text-sm mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Our Services
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What We <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Offer</span>
                </h3>
                <p className="text-lg text-gray-600">
                  Comprehensive learning solutions tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <div
                    key={offering.id}
                    className={`relative group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:border-white/80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100 + 600}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onMouseEnter={() => setHoveredCard(offering.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${offering.bgColor} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <offering.icon
                            className={`h-8 w-8 ${offering.color}`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                            {offering.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                            {offering.description}
                          </p>
                        </div>
                      </div>

                      {/* Hover effect arrow */}
                      <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
                        hoveredCard === offering.id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                      }`}>
                        <svg className={`w-5 h-5 ${offering.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span>Explore All Services</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
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

export default AboutUs;