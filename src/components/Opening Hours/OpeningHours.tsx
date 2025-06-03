import React, { useState, useRef, useEffect } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ClockIcon, 
  SparklesIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const OpeningHours = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
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

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "redflyacademy@gmail.com",
      href: "mailto:redflyacademy@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Get detailed responses within 2 hours",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+92 333 944 3980",
      href: "tel:+923339443980",
      color: "from-green-500 to-emerald-500",
      description: "Instant support and quick queries",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: VideoCameraIcon,
      label: "Video Call",
      value: "Schedule a Call",
      href: "#",
      color: "from-purple-500 to-pink-500",
      description: "Face-to-face consultation sessions",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: "Live Chat",
      value: "Start Chat",
      href: "#",
      color: "from-orange-500 to-red-500",
      description: "Real-time messaging support",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  const features = [
    "Instant booking confirmation",
    "No waiting time - Available now", 
    "Flexible scheduling options",
    "Expert tutors ready to help"
  ];

  const openingHours = [
    { day: "Monday - Friday", time: "8:00 AM - 10:00 PM", status: "Open" },
    { day: "Saturday", time: "9:00 AM - 8:00 PM", status: "Open" },
    { day: "Sunday", time: "10:00 AM - 6:00 PM", status: "Open" },
    { day: "Holidays", time: "10:00 AM - 4:00 PM", status: "Limited" }
  ];

  const isCurrentlyOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    if (day >= 1 && day <= 5) { // Monday to Friday
      return hour >= 8 && hour < 22;
    } else if (day === 6) { // Saturday
      return hour >= 9 && hour < 20;
    } else { // Sunday
      return hour >= 10 && hour < 18;
    }
  };

  return (
    <div ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold text-sm mb-6 shadow-lg">
            <ClockIcon className="w-5 h-5 mr-2 animate-pulse" />
            Always Available
            <SparklesIcon className="w-4 h-4 ml-2 text-purple-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              We're Here
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              24/7
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your learning journey? Our expert tutors are available around the clock 
            to provide personalized support whenever you need it.
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20 animate-pulse"></div>
            
            <div className="relative p-8 md:p-12">
              
              {/* Live Status Bar */}
              <div className={`flex items-center justify-between mb-12 p-4 rounded-2xl border ${
                isCurrentlyOpen() 
                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-200' 
                  : 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full animate-pulse ${
                    isCurrentlyOpen() ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                  <span className={`font-semibold ${
                    isCurrentlyOpen() ? 'text-green-800' : 'text-orange-800'
                  }`}>
                    {isCurrentlyOpen() ? 'Online Now' : 'Available Soon'}
                  </span>
                  <GlobeAltIcon className={`w-5 h-5 ${
                    isCurrentlyOpen() ? 'text-green-600' : 'text-orange-600'
                  }`} />
                </div>
                <div className={`text-sm font-medium ${
                  isCurrentlyOpen() ? 'text-green-700' : 'text-orange-700'
                }`}>
                  {currentTime.toLocaleTimeString()} • Available Worldwide
                </div>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/50 hover:border-white/80 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100 + 600}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${method.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                            {method.label}
                          </h4>
                          <a
                            href={method.href}
                            className={`text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent hover:underline block mb-2 break-all`}
                          >
                            {method.value}
                          </a>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {method.description}
                          </p>
                          
                          {/* Response time indicator */}
                          <div className={`mt-3 inline-flex items-center px-2 py-1 ${method.bgColor} rounded-full text-xs font-medium ${method.textColor}`}>
                            <ClockIcon className="w-3 h-3 mr-1" />
                            {index === 0 ? 'Within 2 hours' : index === 1 ? 'Instant' : index === 2 ? 'Same day' : 'Real-time'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening Hours Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Opening Hours
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <CalendarDaysIcon className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">{schedule.time}</div>
                        <div className={`text-xs font-medium ${
                          schedule.status === 'Open' ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {schedule.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 bg-white/40 rounded-xl border border-white/30 transform transition-all duration-500 hover:bg-white/60 hover:scale-105 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100 + 1000}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Location & Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-bold text-blue-900">Our Location</h4>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Serving students worldwide through our online platform
                  </p>
                  <div className="mt-3 text-xs text-blue-600 font-medium">
                    🌍 Global Coverage • 🏠 Home-based Learning
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <PhoneIcon className="w-6 h-6 text-red-600" />
                    <h4 className="text-lg font-bold text-red-900">Emergency Contact</h4>
                  </div>
                  <p className="text-red-700 text-sm">
                    For urgent matters outside regular hours
                  </p>
                  <div className="mt-3">
                    <a href="tel:+923339443980" className="text-sm font-semibold text-red-600 hover:text-red-800">
                      +92 333 944 3980
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="text-center">
                <h3 className={`text-2xl font-bold text-gray-900 mb-6 transform transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Ready to get started?
                </h3>
                
                <div className={`space-y-4 transform transition-all duration-700 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <button className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative flex items-center justify-center space-x-3">
                      <CalendarDaysIcon className="w-6 h-6" />
                      <span>Book Free Consultation</span>
                      <SparklesIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </span>
                  </button>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Instant booking</span>
                    </div>
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>No waiting</span>
                    </div>
                    <div className="w-1 h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>Available now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transform transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { number: "10k+", label: "Happy Students", color: "text-purple-600" },
            { number: "500+", label: "Expert Tutors", color: "text-blue-600" },
            { number: "24/7", label: "Support Available", color: "text-green-600" },
            { number: "98%", label: "Success Rate", color: "text-pink-600" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
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

export default OpeningHours;