import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About us", "Contact us", "Opening Hours", "Services"],
  },
  {
    id: 2,
    section: "Support",
    link: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status",
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    if (email) {
      console.log("Email subscribed:", email);
      setEmail("");
      // Add your subscription logic here
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden -mt-64" id="first-section">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          
          {/* COLUMN-1 - Enhanced Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 space-y-6">
            
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">RF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Red Fly Academy
                </h3>
                <p className="text-purple-300 text-sm">Online Education Platform</p>
              </div>
            </div>
            
            <h3 className="text-white text-lg font-medium leading-9 mb-4 lg:mb-20">
              Level up your skills, and get dream <br /> job with passion. 
              <br />
              <span className="text-purple-300">Empowering students worldwide.</span>
            </h3>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="/"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <Image
                  src={"https://img.icons8.com/color/48/instagram-new--v1.png"}
                  alt="instagram"
                  className="filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                  width={24}
                  height={24}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              </Link>
          
              <Link 
                href="/"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <Image
                  src={"https://img.icons8.com/fluency/48/facebook-new.png"}
                  alt="facebook-new"
                  className="filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                  width={24}
                  height={24}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
              </Link>

              {/* Additional Social Links */}
              <Link 
                href="/"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-3 mt-8">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:redflyacademy@gmail.com" className="hover:text-purple-300">
                  redflyacademy@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923339443980" className="hover:text-purple-300">
                  +92 333 944 3980
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* COLUMNS-2/3 - Enhanced Navigation */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-1 lg:col-span-2">
              <h4 className="text-white text-xl font-semibold mb-6 relative">
                {product.section}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {product.link.map((link: string, index: number) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm"
                    >
                      <span className="relative z-10">{link}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMN-4 - Enhanced Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <h4 className="text-white text-xl font-semibold mb-6 relative">
              Stay up to date
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </h4>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates, learning tips, and exclusive offers.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 px-4 pr-12 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
                  placeholder="Your email address"
                />
                <button
                  onClick={handleEmailSubmit}
                  className="absolute inset-y-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Image 
                   src={"/assets/footer/inputIcon.svg"} 
                   alt="inputicon" 
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-xs text-gray-400">Subscribers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-white">5⭐</div>
                <div className="text-xs text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <h3 className="text-gray-400 text-sm">
                @2025 - All Rights Reserved by Red Fly Academy
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for better education
              </p>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Footer;