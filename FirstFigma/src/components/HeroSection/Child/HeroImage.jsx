import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const HeroImage = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto mr-5 pr-10 mt-20 pl-10">
        <img src="Group 1413374684.png" alt="Illustration" className="w-full" />
      
        {/* box */}
        <div className="flex container mx-auto py-4 px-20 justify-center bottom-28 items-center  gap-4 relative rounded-2xl">
          {/* Initial Death Benefit Card */}
          <div className="flex flex-col p-2 border border-1 border-[#DADADA] rounded-2xl text-center shadow-md bg-[#F3F9FF] md:w-[200px] w-[200px]">
            <div className="text-[#289BFF]  pt-1 font-bold text-[30px]">$935,926</div>
            <div className="text-[#12171B] pt-1 font-semibold text-[16px]">
              Initial death benefit&nbsp;
              <FontAwesomeIcon
                icon={faCircleExclamation}
                rotation={180}
                size="1x"
                style={{ color: "#b5b5b5" }}
              />{" "}
            </div>
            <div className="mt-2 text-[14px] text-[#474242]">Starting at Age 55</div>
          </div>

          {/* Tax-Free Distributions Card */}
          <div className="flex flex-col p-2 border border-1 border-[#DADADA] rounded-2xl text-center shadow-md bg-[#F2FFFB] md:w-[200px] w-[200px]">
            <div className="text-[#42E5AB] pt-1 font-bold text-[30px]">$53,053/yr</div>
            <div className="text-[#12171B] pt-1 font-semibold text-[16px]">
              Tax-free distributions&nbsp;
              <FontAwesomeIcon
                icon={faCircleExclamation}
                rotation={180}
                size="1x"
                style={{ color: "#b5b5b5" }}
              />{" "}
            </div>
            <div className="mt-2 text-[14px] text-[#474242]">Total Amount Available</div>
          </div>
        </div>

        <div className="mb-2 -mt-20">
        <p className="mb-2 text-[16px] text-[#3A3939] ">
          Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade.
          Setreligt deliga.{" "}
        </p>

        <div className="flex justify-center items-center w-full gap-2  font-semibold cursor-pointer p-5 mt-25">
          <button className="btn ">
            Learn More with FREE Course
          </button>
          <button className="btn2 ">
            Confirm your Invitation
          </button>
        </div>
        </div>


      </div>
    </div>
  );
};

export default HeroImage;
