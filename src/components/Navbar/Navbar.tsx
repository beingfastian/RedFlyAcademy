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

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-pink-100 via-purple-50 to-pink-200 shadow-xl rounded-b-3xl navbar">
      <>
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          <div className="relative flex h-[110px] items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center flex-1">
              <div className="flex-shrink-0 flex items-center">
                {/* Large Logo */}
                <Image
                  className="hidden lg:block rounded-2xl border-4 border-purple-200 shadow-lg"
                  src="/assets/logo/img.webp"
                  alt="Courses-Logo"
                  width={120}  // Add this
                  height={120} // Add this
                  style={{ width: "120px", height: "120px", maxWidth: "600px", maxHeight: "600px" }}
                />
                <Image
                  className="block lg:hidden rounded-xl border-2 border-purple-200 shadow"
                  src="/assets/logo/img.webp"
                  alt="Courses-Logo"
                  width={60}   // Add this
                  height={60}  // Add this
                  style={{ width: "60px", height: "60px", maxWidth: "600px", maxHeight: "600px" }}
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
                        item.current
                          ? "text-purple-700 font-bold border-b-4 border-purple-400 bg-white/70 shadow-inner"
                          : "text-gray-700 hover:text-purple-700 hover:bg-white/50 hover:shadow px-4 transition-colors",
                        "px-5 py-3 rounded-xl text-lg tracking-wide duration-150 ease-in-out"
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
            <div className="flex items-center space-x-3">
              <Signdialog />
              <Registerdialog />
              {/* Mobile Drawer Icon */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2 rounded-full bg-gradient-to-br from-purple-200 to-pink-300 hover:from-pink-300 hover:to-purple-200 shadow-lg focus:outline-none transition"
                >
                  <Bars3Icon className="h-8 w-8 text-purple-700" aria-hidden="true" />
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