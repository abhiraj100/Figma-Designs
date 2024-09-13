import React from "react";
import BenefitsCard from "./BenefitsCards/BenefitsCard";

const BenefitsSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-200 mb-16">
        <h1 className="text-center text-[#12171B] mt-10 font-bold text-[40px]">
          Benefits of Kai-Zen®
        </h1>
        <p className="text-center text-[#3A3939] text-[18px] mx-[350px] ">
          We have all used leverage to purchase a nicer home, or to buy a better
          car. Kai-Zen® uses leverage for the potential to accumulate cash,
          providing up to 60 - 100% more benefits, than using your money alone.
        </p>
      </div>

      <BenefitsCard />

      {/* button */}
      <div className="cursor-pointer flex justify-center  items-center mt-4">
        <button className="btn">
          Learn With FREE Course
        </button>
      </div>

    </div>
  );
};

export default BenefitsSection;
