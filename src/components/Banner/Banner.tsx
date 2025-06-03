import React, { useState, useEffect } from "react";
import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";
import Image from 'next/image';

const Banner = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Learn", "Grow", "Excel", "Succeed"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="space-y-8">
                
                {/* Enhanced Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold text-sm shadow-lg animate-bounce">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  #1 Online Learning Platform
                </div>
                
                {/* Main Heading with Animation */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Red Fly Academy
                    </span>
                    <br />
                    <span className="text-gray-900">
                      The place to{" "}
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                          {words[currentWord]}
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
                      </span>
                    </span>
                  </h1>
                </div>

                <p className="text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  Join us to achieve your{" "}
                  <span className="font-semibold text-purple-600">goals</span> with{" "}
                  <span className="font-semibold text-pink-600">personalized learning experiences</span>{" "}
                  designed just for you.
                </p>

                {/* Enhanced Dropdowns Section */}
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 space-y-6 transform hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <Dropdownone />
                    <Dropdowntwo />
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="flex items-center justify-center space-x-3">
                      <span>Start Learning Today</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Enhanced Social Proof */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex -space-x-4">
                      {/* Success Stories - Student Images */}
                      <Image
                        className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-purple-300"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Student success story"
                        width={56}
                        height={56}
                      />
                      <Image
                        className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-purple-300"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Student success story"
                        width={56}
                        height={56}
                      />
                      <Image
                        className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-purple-300"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Student success story"
                        width={56}
                        height={56}
                      />
                      <Image
                        className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-purple-300"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Student success story"
                        width={56}
                        height={56}
                      />
                      <Image
                        className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-purple-300"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Student success story"
                        width={56}
                        height={56}
                      />
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="text-3xl font-bold text-gray-900">4.9</span>
                        <Image 
                          src={"/assets/banner/Stars.svg"} 
                          alt="stars-icon"
                          width={70}
                          height={12}
                          className="transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        <span className="text-purple-600 font-bold">5,000+</span> students trust us
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-green-700">Free Demo</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-blue-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-sm font-medium text-purple-700">Expert Tutors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Illustration */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main illustration container */}
                <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-500">
                  <div className="aspect-square max-w-md mx-auto">
                    {/* Animated learning illustration */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      
                      {/* Central learning icon */}
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>

                      {/* Floating subject icons */}
                      <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>

                      <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>

                      <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '3s' }}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-bounce hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">10k+</div>
                    <div className="text-xs text-gray-600">Happy Students</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-bounce hover:scale-110 transition-transform duration-300" style={{ animationDelay: '500ms' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-bounce hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1000ms' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;