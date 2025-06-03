import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async () => {
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const benefits = [
    {
      icon: "🎯",
      title: "Exclusive Content",
      description: "Get access to premium learning materials and resources"
    },
    {
      icon: "📚",
      title: "Learning Tips",
      description: "Weekly study strategies and educational insights"
    },
    {
      icon: "🎁",
      title: "Special Offers",
      description: "Early access to courses and exclusive discounts"
    },
    {
      icon: "📈",
      title: "Progress Updates",
      description: "Track your learning journey with detailed analytics"
    }
  ];

  const stats = [
    { number: "50k+", label: "Subscribers" },
    { number: "95%", label: "Open Rate" },
    { number: "Weekly", label: "Updates" },
    { number: "Free", label: "Forever" }
  ];

  return (
    <div ref={ref} className="relative -mt-32 z-10 px-4 sm:px-6 lg:px-8">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
            
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Join 50,000+ Learners
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Stay Ahead with Our
                  <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                    Newsletter
                  </span>
                </h3>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Get exclusive learning resources, study tips, and special offers delivered 
                  straight to your inbox every week.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="space-y-6">
                {!isSubscribed ? (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full py-4 px-6 text-gray-900 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 placeholder-gray-500"
                          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={isLoading || !email}
                        className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-white/80 text-sm leading-relaxed">
                      Join our community of learners. No spam, unsubscribe anytime.
                      By subscribing, you agree to our privacy policy.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white">Successfully Subscribed!</h4>
                    </div>
                    <p className="text-white/90">
                      Welcome to our learning community! Check your email for a confirmation message.
                    </p>
                  </div>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Benefits & Illustration */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              {/* Newsletter Benefits */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6">
                  What you'll get:
                </h4>
                
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                      style={{ 
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      <div className="text-2xl flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h5>
                        <p className="text-white/80 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Illustration */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center space-y-6">
                    
                    {/* Email Icon Animation */}
                    <div className="relative mx-auto w-32 h-32">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      <div className="absolute inset-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-8 bg-white/40 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-lg font-bold text-white">
                        Weekly Learning Digest
                      </h5>
                      <p className="text-white/80 text-sm">
                        Curated content delivered every Tuesday
                      </p>
                    </div>

                    {/* Sample Email Preview */}
                    <div className="bg-white/20 rounded-xl p-4 text-left">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/40 rounded w-3/4"></div>
                        <div className="h-2 bg-white/30 rounded w-1/2"></div>
                        <div className="h-2 bg-white/20 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '500ms' }}></div>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
        </div>

        {/* Social Proof Section */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            {
              name: "Sarah Johnson",
              role: "Computer Science Student",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "The weekly tips helped me improve my study habits significantly!"
            },
            {
              name: "Michael Chen",
              role: "Mathematics Major",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "Exclusive content and early access to courses are amazing benefits."
            },
            {
              name: "Emily Rodriguez",
              role: "High School Senior",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "Best educational newsletter I've ever subscribed to!"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.quote}"</p>
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;