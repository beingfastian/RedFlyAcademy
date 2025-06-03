import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "#courses-section", current: false },
  { name: "Services", href: "#mentors-section", current: false },
  { name: "Opening Hours", href: "#testimonial-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Mock components for demonstration - replace with actual implementations
const Contactus = () => (
  <button className="text-sm font-medium text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg transition-colors duration-200">
    Contact Us
  </button>
);

const Students = () => (
  <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
    Book Now
  </button>
);

const Signdialog = () => (
  <button className="text-sm font-medium text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg transition-colors duration-200">
    Sign In
  </button>
);

const Registerdialog = () => (
  <button className="text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
    Register
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Enhanced scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = navigation.map(item => item.href.replace('#', ''));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionName = navigation.find(nav => 
              nav.href === `#${entry.target.id}` || (nav.href === "/" && entry.target.id === "")
            )?.name || "Home";
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = () => setIsOpen(false);
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav className={classNames(
      "fixed w-full z-50 transition-all duration-500 ease-in-out",
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100/50" 
        : "bg-transparent"
    )}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0 flex items-center group">
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo with enhanced animations */}
                <div className="relative">
                  <Image
                    className={classNames(
                      "transition-all duration-500 ease-in-out transform group-hover:scale-110",
                      scrolled ? "w-12 h-12 rounded-xl" : "w-16 h-16 rounded-2xl",
                      "shadow-lg group-hover:shadow-xl border-2 border-white/50 group-hover:border-purple-300/50"
                    )}
                    src="/assets/logo/img.webp"
                    alt="Red Fly Academy"
                    width={scrolled ? 48 : 64}
                    height={scrolled ? 48 : 64}
                    style={{ width: scrolled ? "48px" : "64px", height: scrolled ? "48px" : "64px" }}
                  />
                  {/* Animated ring around logo */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                
                {/* Brand Text */}
                <div className={classNames(
                  "transition-all duration-500",
                  scrolled ? "opacity-100" : "opacity-90"
                )}>
                  <h1 className={classNames(
                    "font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300",
                    scrolled ? "text-xl" : "text-2xl"
                  )}>
                    Red Fly Academy
                  </h1>
                  <p className={classNames(
                    "text-xs text-gray-500 transition-all duration-300 font-medium",
                    scrolled ? "opacity-100" : "opacity-80"
                  )}>
                    Online Education Platform
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:ml-12">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "relative px-6 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ease-in-out group",
                      activeSection === item.name
                        ? "text-purple-700 font-semibold bg-purple-50/50"
                        : scrolled 
                          ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50/30"
                          : "text-gray-800 hover:text-purple-600 hover:bg-white/20"
                    )}
                    aria-current={activeSection === item.name ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.name && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
                
                {/* Contact and Booking */}
                <div className="flex items-center space-x-2 ml-4">
                  <Contactus />
                  <Students />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Auth Buttons and Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Signdialog />
              <Registerdialog />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
                className={classNames(
                  "relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 group",
                  scrolled
                    ? "bg-purple-50 hover:bg-purple-100 text-purple-600 shadow-lg"
                    : "bg-white/20 hover:bg-white/30 text-gray-800 backdrop-blur-sm"
                )}
                aria-label="Toggle mobile menu"
              >
                <Bars3Icon className={classNames(
                  "h-6 w-6 transition-transform duration-200",
                  isOpen ? "rotate-90" : "group-hover:rotate-180"
                )} />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 mx-4 md:hidden">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden animate-slide-down">
                <div className="p-6 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={classNames(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        activeSection === item.name
                          ? "text-purple-700 bg-purple-50 font-semibold"
                          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50/50 transition-all duration-200"
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className={classNames(
        "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-500",
        scrolled ? "w-full opacity-100" : "w-0 opacity-0"
      )}></div>

      {/* Floating Action Buttons (Mobile) */}
      <div className={classNames(
        "fixed bottom-6 right-6 flex flex-col space-y-3 md:hidden transition-all duration-500 z-40",
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;