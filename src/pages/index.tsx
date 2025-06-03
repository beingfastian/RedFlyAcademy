import Head from "next/head";
import {
  Navbar,
  Banner,
  Companies,
  Tabs,
  OpeningHours,
  Mentor,
  Students,
  Newsletter,
  Footer,
} from "@/components";

// Simple ProcessFlow component that definitely works
const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Get Started",
      description: "Register and create your profile",
      timeLabel: "Takes few seconds",
      icon: "📝"
    },
    {
      id: 2,
      title: "Create Request", 
      description: "Tell us what you want to learn",
      timeLabel: "Takes 1 min",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Take Free Demo",
      description: "Schedule a demo with our tutors",
      timeLabel: "Takes < 1 day",
      icon: "👥"
    },
    {
      id: 4,
      title: "Start Tuition",
      description: "Begin your learning journey",
      timeLabel: "Congratulations!",
      icon: "🚀"
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
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              
              {/* Step Number */}
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4">
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Fly Academy</title>
        <meta name="description" content="Transform your learning journey with Red Fly Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/assets/logo/logo.svg" />
      </Head>
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Banner />
        
        {/* Add the ProcessFlow component */}
        <ProcessFlow />
        
        {/* Your existing components */}
        <Tabs />
        <Mentor />
        <OpeningHours />

        <div className="mt-20">
          <Newsletter />
        </div>
        <Footer />
      </main>
    </>
  );
}