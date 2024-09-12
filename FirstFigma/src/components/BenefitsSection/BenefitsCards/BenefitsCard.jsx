import React from "react";

const BenefitsCard = () => {
  return (
    <div className="flex flew-row">
      {/* first div  */}
      <div className="mx-10 my-6">
        <img className="size-15 mb-4" src="Group 1000008287.png" />
        <div className="text-black text-left">
          <h1 className="font-bold">Protection for Life</h1>
          <p className="mr-4">
            Kai-Zen provides death benefit protection, as well as living
            benefits in the case of critical or chronic illness.
          </p>
        </div>
      </div>

      {/* second div  */}
      <div className="mx-10 my-6">
        <img className="size-15 mb-4" src="Group Lock.png" />
        <div className="text-black text-left">
          <h1 className="font-bold">
            Accumulate more wealth and maintain your current lifestyle
          </h1>
          <p className="mr-4">
            Kai-Zen is broken down into 5 easy payments. The lender adds up to
            3x your money, allowing for additional capital without putting a
            strain on your bank account.
          </p>
        </div>
      </div>

      {/* third div  */}
      <div className="mx-10 my-6">
        <img className="size-15 mb-4" src="Group Structure.png" />
        <div className="text-black text-left">
          <h1 className="font-bold">Results at your fingertips</h1>
          <p className="mr-4">
            With the MyILIA Servicing Portal, you can access your annual review,
            policy details, and change or add beneficiaries... Right from the
            palm of your hand.
          </p>
        </div>
      </div>


    </div>
  );
};

export default BenefitsCard;
