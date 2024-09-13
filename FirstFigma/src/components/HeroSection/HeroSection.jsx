import React from "react";
import HeroContent from "./Child/HeroContent";
import HeroImage from "./Child/HeroImage";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mt-20 text-bold text-center font-bold text-[35px]">
        {" "}
        Your <span className="text-[#2B53D6] ">Grandpa Jack Mathew</span> brought
        you <br /> <span className="text-[#2B53D6]">$46,0353</span> plan for
        Great Wealth Transfer
      </h1>
      
      <div className="container mx-auto flex flex-row">
      <HeroContent />
      <HeroImage />
      </div>

    </div>
  );
};

export default HeroSection;
