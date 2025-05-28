import * as React from "react";
import {
  AcademicCapIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface Offering {
  id: number;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

const offerings: Offering[] = [
  {
    id: 1,
    title: "Online Tutorials",
    description: "Expert-led video tutorials tailored to each student's level",
    icon: AcademicCapIcon,
  },
  {
    id: 2,
    title: "Interactive Exercises",
    description: "Hands-on learning activities that reinforce concepts",
    icon: PuzzlePieceIcon,
  },
  {
    id: 3,
    title: "Customizable Learning Paths",
    description: "Personalized curriculum based on student's goals",
    icon: ArrowPathIcon,
  },
  {
    id: 4,
    title: "Personalized Feedback",
    description: "Regular feedback and progress tracking from instructors",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 5,
    title: "Online Support",
    description: "Dedicated support team to assist with any questions",
    icon: HeartIcon,
  },
  {
    id: 6,
    title: "24/7 Access",
    description: "Learn anytime, anywhere with round-the-clock availability",
    icon: ClockIcon,
  },
];

const AboutUs = () => {
  return (
    <div
      id="about-section"
      className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        {/* About Us Content */}
        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-8">
            About Us
          </h2>
          <div className="mt-6 text-gray-600 space-y-6">
            <p className="text-lg leading-8">
              Red Fly Academy is an online education company that specializes in
              providing customized, interactive learning experiences for children.
            </p>
            <p className="text-lg leading-8">
              Our programs offer a flexible schedule that allows children to learn
              at their own pace, and our online classes provide the perfect
              solution for families who want to learn from the comfort of their
              homes.
            </p>
            <p className="text-lg leading-8">
              Our programs are designed to provide children with the opportunity to
              learn at their own pace and to explore new areas of knowledge. With
              our online tuition program, children can learn at their own pace and
              customize their education to fit their individual needs.
            </p>
          </div>
        </div>

        {/* What We Offer Grid */}
        <div className="mt-12 lg:mt-0">
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="relative group bg-white p-6 rounded-xl border border-gray-200 hover:border-purple hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <offering.icon
                        className="h-8 w-8 text-red-500 group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {offering.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;