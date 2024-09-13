import React, { useState } from "react";

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto -mb-20">
      <div className="flex justify-center">
        <img className="w-full" src="cta.png" alt="Call to Action" />
      </div>

      <div className="mt-12 mb-44">
        <h1 className="text-[#1C252C] text-center font-semibold mt-[40px] text-[40px]">
          Frequently Asked Questions
        </h1>

        <div className="mt-10 bg-white mx-32 mb-4">
          {/* Accordion Item 1 */}
          <div className="bg-[#F9FAFE] rounded-[10px] mb-4">
          <div className="mb-4">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rounded-t-xl   gap-3"
                onClick={() => handleToggle(1)}
                aria-expanded={openIndex === 1}
                aria-controls="accordion-collapse-body-1"
              >
                <span className="text-[#1C1B1B] font-semibold text-[25px]">
                  Why was Kai-Zen® Developed?
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openIndex === 1 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === 1 ? "block" : "hidden"
              }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5">
                <p className="mb-2 text-[18px] text-[#3A3939]">
                  Research tells us that 74% of how much you receive in
                  retirement is based on how much cash (capital) you have set
                  aside, and only 26% is a result of investment return. Put
                  another way, the retirement concern is not about how your
                  investments are doing, it is not having enough money to
                  invest. This underfunding for retirement income is the issue
                  Kai-Zen® is helping to resolve and Kai-Zen® is currently the
                  only plan on the market where you can obtain leverage to this
                  degree, without having to qualify for the loan and make
                  interest payments.
                </p>
              </div>
            </div>
          </div>
          </div>


          {/* Accordion Item 2 */}
          <div className="bg-[#F9FAFE] rounded-[10px] mb-4">
          <div className="mb-4">
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium gap-3"
                onClick={() => handleToggle(2)}
                aria-expanded={openIndex === 2}
                aria-controls="accordion-collapse-body-2"
              >
                <span className="text-[#1C1B1B] font-semibold text-[25px]">
                  What are the Qualification Requirements?
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openIndex === 2 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === 2 ? "block" : "hidden"
              }`}
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5">
                <p className="mb-2 text-[18px] text-[#3A3939]">
                  Research tells us that 74% of how much you receive in
                  retirement is based on how much cash (capital) you have set
                  aside, and only 26% is a result of investment return. Put
                  another way, the retirement concern is not about how your
                  investments are doing, it is not having enough money to
                  invest. This underfunding for retirement income is the issue
                  Kai-Zen® is helping to resolve and Kai-Zen® is currently the
                  only plan on the market where you can obtain leverage to this
                  degree, without having to qualify for the loan and make
                  interest payments.
                </p>
              </div>
            </div>
          </div>
          </div>


          {/* Accordion Item 3 */}
          <div className="bg-[#F9FAFE] rounded-[10px] mb-4">
          <div className="mb-4">
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium gap-3"
                onClick={() => handleToggle(3)}
                aria-expanded={openIndex === 3}
                aria-controls="accordion-collapse-body-3"
              >
                <span className="text-[#1C1B1B] font-semibold text-[25px]">
                It Sounds Too Good to be True. What's the Catch?
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openIndex === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === 3 ? "block" : "hidden"
              }`}
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-[18px] text-[#3A3939]">def</p>
              </div>
            </div>
          </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="bg-[#F9FAFE] rounded-[10px]  mb-4">
          <div className="mb-4">
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium gap-3"
                onClick={() => handleToggle(3)}
                aria-expanded={openIndex === 3}
                aria-controls="accordion-collapse-body-3"
              >
                <span className=" text-[#1C1B1B] font-semibold text-[25px]">
                  How Kai-Zen® works?
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openIndex === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === 3 ? "block" : "hidden"
              }`}
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-[18px] text-[#3A3939]">def</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <h2 className="text-[#1C1B1B] text-center font-bold mt-[40px] text-[25px]">
          Still have Any Questions?
        </h2>

        <div className="flex justify-center items-center mt-8 mb-2">
          <div className="btn">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
