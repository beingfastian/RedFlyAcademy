import { AcademicCapIcon, UserGroupIcon, BookOpenIcon, ClipboardDocumentCheckIcon, PuzzlePieceIcon, UsersIcon, DocumentCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useState } from "react";

interface Service {
  id: number;
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Online Tutoring",
    href: "#",
    icon: AcademicCapIcon,
    description: "One-on-one personalized learning",
  },
  {
    id: 2,
    name: "Online Classes",
    href: "#",
    icon: UserGroupIcon,
    description: "Interactive group sessions",
  },
  {
    id: 3,
    name: "Subject Specific Tutoring",
    href: "#",
    icon: BookOpenIcon,
    description: "Expert subject guidance",
  },
  {
    id: 4,
    name: "Homework Help",
    href: "#",
    icon: ClipboardDocumentCheckIcon,
    description: "Assignment support",
  },
  {
    id: 5,
    name: "Study Aids",
    href: "#",
    icon: PuzzlePieceIcon,
    description: "Comprehensive resources",
  },
  {
    id: 6,
    name: "Learning Communities",
    href: "#",
    icon: UsersIcon,
    description: "Collaborative learning",
  },
  {
    id: 7,
    name: "Online Testing",
    href: "#",
    icon: DocumentCheckIcon,
    description: "Progress tracking",
  },
  {
    id: 8,
    name: "Special Needs Support",
    href: "#",
    icon: HeartIcon,
    description: "Specialized assistance",
  },
];

const SLIDES_TO_SHOW = 4; // Change to 1/2/3 for mobile responsiveness if needed

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - SLIDES_TO_SHOW : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === services.length - SLIDES_TO_SHOW ? 0 : prev + 1
    );
  };

  // For responsiveness, adjust SLIDES_TO_SHOW using a hook if you want (not shown here)
  const visibleServices = services.slice(
    currentIndex,
    currentIndex + SLIDES_TO_SHOW
  );

  // If at the end, show from the start for infinite looping
  const displayedServices =
    visibleServices.length < SLIDES_TO_SHOW
      ? [
          ...visibleServices,
          ...services.slice(0, SLIDES_TO_SHOW - visibleServices.length),
        ]
      : visibleServices;

  return (
    <div
      id="services-section"
      className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At Red Fly Academy, we know that the best way to help your child learn is through personalized, 
          interactive learning. That's why we offer our online tuition program, which allows you to complete 
          your courses from the comfort of your home.
        </p>
      </div>

      <div className="relative w-full mt-12">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-red-100 transition"
          onClick={prevSlide}
          aria-label="Previous"
        >
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="overflow-hidden">
          <div className="flex transition-all duration-500 ease-in-out">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col items-center flex-1 min-w-0 px-2"
                style={{ minWidth: `min(250px, 100%)`, maxWidth: "320px" }}
              >
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex items-center justify-center h-full w-full p-8">
                    <service.icon className="h-24 w-24 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="mt-4 flex justify-center w-full">
                  <div className="w-full">
                    <div className="border border-white rounded-lg -mt-8 bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-sm font-medium text-gray-900 text-center">
                        <a href={service.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {service.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-red-100 transition"
          onClick={nextSlide}
          aria-label="Next"
        >
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Services;