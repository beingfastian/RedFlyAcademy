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
                  width={256}
                  height={256}
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                  width={256}
                  height={256}
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                  width={256}
                  height={256}
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                  width={256}
                  height={256}
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Student success story"
                  width={256}
                  height={256}
                />
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">4.9</h3>
                  <Image 
                    src={"/assets/banner/Stars.svg"} 
                    alt="stars-icon"
                    width={70}
                    height={12}
                  />
                </div>
                <div>
                  <h3 className="text-sm">Trusted by thousands of students.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;