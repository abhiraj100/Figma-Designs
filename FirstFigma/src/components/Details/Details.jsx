import React from "react";

const Details = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="justify-center items-center  ">
          <img className="w-full" src="cta.png" />
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-black text-center  items-center font-bold mt-[40px] text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="mt-10 pl-[200px]">
            <h2 className="text-left text-black font-bold text-2xl">
              Why was Kai-Zen® Developed?
            </h2>
            <p className="mt-3 text-left text-black  text-1xl">
              Research tells us that 74% of how much you receive in retirement
              is based on how much cash (capital) you have set aside, and only
              26% is a result of investment return. Put another way, the
              retirement concern is not about how your investments are doing, it
              is not having enough money to invest. This underfunding for
              retirement income is the issue Kai-Zen® is helping to resolve and
              Kai-Zen® is currently the only plan on the market where you can
              obtain leverage to this degree, without having to qualify for the
              loan and make interest payments.
            </p>
          </div>
          <h2 className="mt-11 pl-[200px] text-left text-black font-bold text-2xl">
            What are the Qualification Requirements?
          </h2>
          <h2 className="mt-11 pl-[200px] text-left text-black font-bold text-2xl">
            It Sounds Too Good to be True. What's the Catch?
          </h2>
          <h2 className="mt-11 pl-[200px] text-left text-black font-bold text-2xl">
            How Kai-Zen® works ?
          </h2>
        </div>

        <h2 className="text-black text-center items-center font-bold mt-[40px] text-4xl">
          Still have Any Questions ?
        </h2>

        <div className="flex justify-center items-center mt-8 mb-16">
          <div className="bg-blue-600 pt-2 text-white text-center text-2xl h-[50px] w-[150px] rounded-3xl">
            Contact Us
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Details;
