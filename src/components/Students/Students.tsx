import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const BookFreeTrialForm = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    name: "",
    date: "",
    time: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(
      `Name: ${inputValues.name}, Date: ${inputValues.date} @ ${inputValues.time}, Email: ${inputValues.email}, Message: ${inputValues.message}`
    );
    setIsOpen(false);
  };

  // FORM SUBMIT
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <button
          type="button"
          className="text-15px font-medium space-links"
          onClick={openModal}
        >
          Booking
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/assets/logo/Logo.svg"
                      alt="Your Company"
                    />
                    <h2 className="text-2xl font-bold text-center mb-2 mt-4">
                      Book a Free Trial
                    </h2>
                    {/* <p className="mb-8 mt-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      If you’d like to make a reservation for one of our online classes, you can do so by visiting our website and clicking on the “Class Reservation” tab. From there, you will be able to choose the date and time of the class that you would like to attend, as well as select the type of class that you would like to take.
                    </p> */}
                    <div className="pb-6 text-center">
                      <p className="text-md font-semibold">
                        Call now: <a href="tel:+923339443980" className="text-purple">+92 3339443980</a>
                        <br />
                        Write to us: <a href="mailto:redflyacademy@gmail.com" className="text-purple">redflyacademy@gmail.com</a>
                      </p>
                    </div>
                    <form
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={inputValues.name}
                          onChange={handleChange}
                          type="text"
                          required
                          className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Name..."
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor="date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            mm/dd/yyyy
                          </label>
                          <input
                            id="date"
                            name="date"
                            value={inputValues.date}
                            onChange={handleChange}
                            type="date"
                            required
                            className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="time"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            @
                          </label>
                          <input
                            id="time"
                            name="time"
                            value={inputValues.time}
                            onChange={handleChange}
                            type="time"
                            required
                            className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={inputValues.email}
                          onChange={handleChange}
                          type="email"
                          required
                          className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={inputValues.message}
                          onChange={handleChange}
                          className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Write your message"
                          rows={4}
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={handleClick}
                        disabled={isDisabled}
                        className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-purple hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookFreeTrialForm;