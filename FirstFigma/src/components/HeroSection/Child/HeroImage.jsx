import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const HeroImage = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto mr-5 pr-10 mt-20 pl-10">
        <img src="Group 1413374684.png" alt="Illustration" className="w-full" />

        {/* box */}
        <div className="flex flex-row items-center  justify-center  p-4 relative rounded-2xl  ">
          <div className="flex flex-col w-[38%] p-2 rounded-2xl  absolute mb-[100px] text-center z-40 left-[60px] shadow-md bg-white">
            <div className="text-blue-500 font-bold text-3xl">$935,926</div>
            <div className="text-black mt-4 font-semibold text-1xl">
              Initial death benefit&nbsp;
              <FontAwesomeIcon
                icon={faCircleExclamation}
                rotation={180}
                size="1x"
                style={{ color: "#b5b5b5" }}
              />{" "}
            </div>
            <div className="mt-2 text-gray-600">Starting at Age 55</div>
          </div>

          <div className="flex flex-col mb-[100px] p-2 text-center rounded-2xl  absolute z-40  left-[300px] shadow-md bg-white">
            <div
              className="text-[#42E5AB]
 font-bold text-3xl"
            >
              $53,053/yr
            </div>
            <div className="text-black mt-4  font-semibold text-1xl">
              Tax-free distributions&nbsp;
              <FontAwesomeIcon
                icon={faCircleExclamation}
                rotation={180}
                size="1x"
                style={{ color: "#b5b5b5" }}
              />{" "}
            </div>
            <div className="mt-2 text-gray-600">Starting at Age 55</div>
          </div>
        </div>

        <p className="mt-[20px]">
          Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade.
          Setreligt deliga.{" "}
        </p>

        <div className=" flex justify-around cursor-pointer p-5 mt-25">
          <div className="bg-blue-600 w-[260px] h-[50px] font-sans font-bold rounded-3xl px-5 py-3 text-white">
            Learn More with FREE Course
          </div>
          <div className="bg-blue-900 w-[260px] h-[50px] font-sans font-bold rounded-3xl px-10 py-3 text-white">
            Confirm your Invitation
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
