import React from "react";
import BenefitsCard from "./BenefitsCards/BenefitsCard";

const BenefitsSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-200 mb-16">
        <h1 className="text-center mt-10 font-bold text-4xl">
          Benefits of Kai-Zen®
        </h1>
        <p className="text-center text-[17px] mx-[350px] ">
          We have all used leverage to purchase a nicer home, or to buy a better
          car. Kai-Zen® uses leverage for the potential to accumulate cash,
          providing up to 60 - 100% more benefits, than using your money alone.
        </p>
      </div>

      <BenefitsCard />

      {/* button */}
      <div className=" cursor-pointer mt-4">
        <div className="bg-blue-600 ml-[420px] text-center justify-center font-sans font-bold text-white w-[260px] h-[55px] rounded-3xl px-3 py-3">
          Learn With FREE Course
        </div>
      </div>

    </div>
  );
};

export default BenefitsSection;
