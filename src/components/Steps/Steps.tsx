import React from 'react';

const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Get Started",
      description: "Write what you want to learn so the relevant tutor(s) can contact you within the platform. Your contact details remain private at all times.",
      action: "Register",
      timeLabel: "Takes few seconds",
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Create Request", 
      description: "Write what you want to learn so the relevant tutor(s) can contact you within the platform. Your contact details remain private at all times.",
      timeLabel: "Takes 1 min",
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      title: "Take Free Demo",
      description: "Check inbox, respond to tutors and schedule a free demo. Decide your fee and other details with the tutor.",
      timeLabel: "Takes < 1 day",
      color: "bg-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      id: 4,
      title: "Start Tuition",
      description: "Pay your fee to start classes. Classes are auto-recorded for transparency and are available on your dashboard. Payment is calculated per hour.",
      timeLabel: "Congratulations!",
      color: "bg-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with your learning journey in just 4 simple steps. 
            Our streamlined process ensures you find the perfect tutor and start learning quickly.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-300 z-0">
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-gray-300 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                </div>
              )}

              {/* Step Card */}
              <div className={`relative ${step.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white z-10`}>
                
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {step.id === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
                    {step.id === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                    {step.id === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                    {step.id === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Action Button */}
                  {step.action && (
                    <button className={`inline-flex items-center px-4 py-2 ${step.color} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300`}>
                      {step.action}
                    </button>
                  )}

                  {/* Time Label */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-green-600">
                      {step.timeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            <span>Get Started Today</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;