import React from "react";

const BenefitsCard = () => {
  return (
    <div className="flex flew-row gap-x-1 px-12 ">
      {/* first div  */}
      <div className="my-6 bg-[#F9FAFE] w-[850px] h-[400px] rounded-[10px]">
      <div className="ml-10">
        <img className="size-15 mt-8 mb-4" src="Group 1000008287.png" />
        <div className="text-black text-left">
          <h1 className="mt-8 text-[25px] text-[#3A3939] font-semibold">Protection for Life</h1>
          <p className="mr-4 text-[#3A3939] text-[18px]">
            Kai-Zen provides death benefit protection, as well as living
            benefits in the case of critical or chronic illness.
          </p>
        </div>
        </div>
      </div>

      {/* second div  */}
      <div className="mx-10 my-6 bg-[#F9FAFE]  w-[850px] h-[400px] rounded-[10px]">
      <div className="ml-10">
        <img className="size-15 mt-8 mb-4" src="Group Lock.png" />
        <div className="text-black text-left">
          <h1 className="mt-8 text-[25px] text-[#3A3939] font-semibold">
            Accumulate more wealth and maintain your current lifestyle
          </h1>
          <p className="mr-4 text-[#3A3939] text-[18px]">
            Kai-Zen is broken down into 5 easy payments. The lender adds up to
            3x your money, allowing for additional capital without putting a
            strain on your bank account.
          </p>
        </div>
        </div>
      </div>

      {/* third div  */}
      <div className=" my-6 bg-[#F9FAFE] w-[850px] h-[400px] rounded-[10px]">
      <div className="ml-10">
        <img className="size-15 mt-8 mb-4" src="Group Structure.png" />
        <div className="text-black text-left">
          <h1 className="mt-8 text-[25px] text-[#3A3939] font-semibold">Results at your fingertips</h1>
          <p className="mr-4 text-[#3A3939] text-[18px]">
            With the MyILIA Servicing Portal, you can access your annual review,
            policy details, and change or add beneficiaries... Right from the
            palm of your hand.
          </p>
        </div>
        </div>
      </div>


    </div>
  );
};

export default BenefitsCard;
