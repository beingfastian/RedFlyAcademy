import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";
import { Students } from "..";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" 
      className={classNames(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-lg" 
          : "bg-gradient-to-r from-purple-100/90 via-pink-100/90 to-purple-100/90"
      )}
    >
      <>
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="relative flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center flex-1">
              <div className="flex-shrink-0 flex items-center">
                {/* Large Logo */}
                <Image
                  className={classNames(
                    "hidden lg:block transition-transform duration-300 hover:scale-105",
                    scrolled ? "rounded-xl" : "rounded-2xl",
                    "border-2 border-purple-300/50 shadow-lg"
                  )}
                  src="/assets/logo/img.webp"
                  alt="Courses-Logo"
                  width={80}
                  height={80}
                  style={{ width: "80px", height: "80px" }}
                />
                <Image
                  className={classNames(
                    "block lg:hidden transition-transform duration-300 hover:scale-105",
                    scrolled ? "rounded-lg" : "rounded-xl",
                    "border-2 border-purple-300/50 shadow-md"
                  )}
                  src="/assets/logo/img.webp"
                  alt="Courses-Logo"
                  width={50}
                  height={50}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              {/* Desktop Navigation Links */}
              <div className="hidden sm:ml-14 md:flex md:items-center">
                <div className="flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "relative px-5 py-2 rounded-lg text-base font-medium tracking-wide transition-all duration-300 ease-in-out",
                        item.current
                          ? "text-purple-700 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-purple-500 after:rounded-full"
                          : "text-gray-600 hover:text-purple-600",
                        scrolled ? "hover:bg-purple-50/50" : "hover:bg-white/30"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Contactus />
                  <Students/>
                </div>
              </div>
            </div>
            {/* Right Side: Auth Buttons and Mobile Drawer */}
            <div className="flex items-center space-x-4">
              <Signdialog />
              <Registerdialog />
              {/* Mobile Drawer Icon */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className={classNames(
                    "p-2 rounded-lg transition-all duration-300",
                    scrolled
                      ? "bg-purple-100 hover:bg-purple-200 text-purple-600"
                      : "bg-white/30 hover:bg-white/50 text-purple-700"
                  )}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            {/* Drawer for Mobile */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;