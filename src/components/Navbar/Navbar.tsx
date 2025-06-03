import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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

// Simple Contact Us Button
const ContactButton = () => (
  <button className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg transition-colors duration-200">
    Contact Us
  </button>
);

// Simple Students/Booking Button
const BookingButton = () => (
  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
    Book Now
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-sm"
      }`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  className="w-12 h-12 rounded-xl shadow-md"
                  src="/assets/logo/img.webp"
                  alt="Red Fly Academy"
                  width={48}
                  height={48}
                />
                <div>
                  <h1 className="text-xl font-bold text-purple-600">
                    Red Fly Academy
                  </h1>
                  <p className="text-xs text-gray-500">Online Education Platform</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    item.current
                      ? "text-purple-700 bg-purple-50 font-semibold"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <ContactButton />
              <BookingButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                      item.current
                        ? "text-purple-700 bg-purple-50 font-semibold"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base font-medium transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;