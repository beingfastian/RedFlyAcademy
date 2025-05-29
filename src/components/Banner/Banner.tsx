import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";
import Image from 'next/image';
const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
              Red Fly Academy <br /> The place to learn and grow
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              Join us to achieve your goals with personalized learning experiences 
              designed just for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                {/* Success Stories - Student Images */}
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                />
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">4.9</h3>
                  <Image src={"/assets/banner/Stars.svg"} alt="stars-icon" />
                </div>
                <div>
                  <h3 className="text-sm">Trusted by thousands of students.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section
          <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
              <div className="col-span-3">
                <Dropdownone />
              </div>
              <div className="col-span-3">
                <Dropdowntwo />
              </div>
              <div className="col-span-3 sm:col-span-2 mt-2">
                <button className="bg-purple w-full hover:bg-purple/90 text-white font-bold py-4 px-3 rounded transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div> */}

          {/* Additional Features */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Tailored to your unique needs and goals</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Study at your own pace, anywhere</p>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Banner;