import { EnvelopeIcon, PhoneIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ContactBookingCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="mx-auto max-w-3xl py-16 px-6 flex flex-col items-center">
      <div className="w-full relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
        
        {/* Main card */}
        <div className="relative w-full rounded-3xl shadow-2xl bg-white overflow-hidden border border-white/20 backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-red-50/80"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-10 animate-bounce" style={{animationDelay: '1s'}}></div>
          
          <div className="relative p-10">
            {/* Header section */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="relative">
                <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-2xl font-bold text-base shadow-lg border border-purple-200/50">
                  <ClockIcon className="w-6 h-6 animate-pulse" />
                  Opening Hours
                  <SparklesIcon className="w-5 h-5 text-purple-600" />
                </span>
              </div>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-red-800 mb-2">
                  We are available
                </h2>
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse">
                  24/7
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-4 h-4 rounded-full"></div>
              </div>
            </div>

            {/* Contact information */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-red-100">
                <div className="flex flex-col items-center gap-4">
                  <span className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-xl font-bold text-sm shadow-md">
                    <EnvelopeIcon className="w-6 h-6 group-hover:animate-bounce" />
                    Email
                  </span>
                  <a
                    href="mailto:redflyacademy@gmail.com"
                    className="text-xl font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-all duration-300 text-center break-all"
                  >
                    redflyacademy@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-100">
                <div className="flex flex-col items-center gap-4">
                  <span className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-xl font-bold text-sm shadow-md">
                    <PhoneIcon className="w-6 h-6 group-hover:animate-bounce" />
                    Phone
                  </span>
                  <a
                    href="tel:+923339443980"
                    className="text-xl font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    +92 333 944 3980
                  </a>
                </div>
              </div>
            </div>

            {/* Booking section */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ready to get started?
              </h3>
              <div className="relative">
                <button
                  className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center gap-3">
                    Book Now
                    <SparklesIcon className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
                  </span>
                </button>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 font-medium">
                  Instant booking • No waiting • Available now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBookingCard;