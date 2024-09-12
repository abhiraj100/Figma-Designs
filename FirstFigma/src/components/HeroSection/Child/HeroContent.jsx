import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const HeroContent = () => {
  return (
    <div className="mt-40">
      <div className="flex justify-between">
        <div className="pl-20 flex justify-between items-center">
          <div className="mb-40 flex justify-between">
            <div className="">
              <div className="text-left">
                <p className="mb-0 text-lg">
                  See your potential returns and see if Kai-Zen® is{" "}
                  <br className="my-0" /> right for you.
                </p>
              </div>{" "}
              <div className="flex text-lg justify-between mt-4">
                <div className="flex text-[#3A3939] font-semibold">Age</div>
                <div className="text-[#3A3939] text-lg">55</div>
              </div>
              <div className="flex justify-between text-left  mt-3">
                <div className="mb-0 text-[#3A3939] text-lg font-semibold">
                  Annual Contribution Amount <br className="my-0" />
                  (For 5 Years)
                </div>
                <div className="text-[#3A3939] text-lg">$45,000</div>
              </div>
              <div className="w-[100%] h-[5px] mt-3 border-b-2 border-slate-200"></div>
              <div>
                <h1 className="text-left mb-1 text-[#12171B] font-semibold text-3xl">
                  Your Results
                </h1>
                <div className="flex justify-between">
                  <div className="text-[#3A3939] text-1xl font-semibold">
                    Total Internal Rate of Return
                  </div>

                  <div className="flex  mt-[-20px] flex-col ">
                    <div className="text-right ">
                      <FontAwesomeIcon
                        icon={faCircleExclamation}
                        rotation={180}
                        size="1x"
                        style={{ color: "#b5b5b5" }}
                      />
                    </div>
                    <div>8.25%</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end flex-row space-x-4">
                <div className="flex items-center ">
                  <div className=" ">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="md"
                      style={{ color: "#2474ff" }}
                    />{" "}
                  </div>
                  <span className="ml-2">Protection</span>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="md"
                      style={{ color: "#00ff6e" }}
                    />{" "}
                  </div>
                  <span className="ml-2">Accumulation</span>
                </div>
              </div>
              <p className="mb-0 text-justify mt-4">
                Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade.
                Setreligt deliga. Lörem ipsum igt nese trifiering inte egogt.
                Ryväv nesm fasade. Setreligt deliga. Lörem ipsum igt nese
                trifiering inte egogt. Ryväv nesm fasade. Setreligt deliga.
                Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade.
                Setreligt deliga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
