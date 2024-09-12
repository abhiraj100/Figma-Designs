import React from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="w-full h-1 border-b-4 border-gray-200"></div>
      <div className="flex mt-[55px] flex-row justify-between">
        {/* first div */}
        <div className="">
          <img src="image 11.png" />
          <p className="mt-2 w-[250px]">
            Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem ipsum
            reaned rekle, banat. Jasminmöte betrese Lörem ipsum reaned rekle,
            banat. Jasminmöte betrese Lörem
          </p>
          <img className="mt-4" src="Group 6879.png" />
        </div>

        {/* second div */}
        <div className="mt-[25px]">
          <h1 className="text-left font-bold">Quick Links</h1>
          <ul>
            <li className="text-left mt-3">Home</li>
            <li className="text-left mt-1">About Ilia®</li>
            <li className="text-left mt-1">About NIW® </li>
            <li className="text-left mt-1">News</li>
            <li className="text-left mt-1">Contact Us</li>
            <li className="text-left mt-1">Wire Instructions</li>
          </ul>
        </div>

        {/* third div */}

        <div className="mt-[25px]">
          <h1 className="text-left font-bold">Strategies</h1>
          <ul>
            <li className="text-left mt-3">Kai-Zen®</li>
            <li className="text-left mt-1">Tri-Zen®</li>
            <li className="text-left mt-1">Leveraged Savings Plan</li>
            <li className="text-left mt-1">Enhanced Split Dollar</li>
            <li className="text-left mt-1">Cash Stream</li>
          </ul>
        </div>

        <div className="mt-[25px]">
          <h1 className="text-left font-bold"></h1>
          <ul className="m-8">
            <li className="text-left mt-3">Kai-Zen®</li>
            <li className="text-left mt-1">Tri-Zen®</li>
            <li className="text-left mt-1">Leveraged Savings Plan</li>
            <li className="text-left mt-1">Enhanced Split Dollar</li>
            <li className="text-left mt-1">Cash Stream</li>
          </ul>
        </div>

        <div className="pr-7 mt-[25px]">
          <h1 className="text-left font-bold">Contacts</h1>
          <ul className="mt-[20px]">
                <div className="flex flex-row gap-2">
                    <div><CiPhone className="text-blue-600 mt-1 rounded-[80px] text-lg bg-blue-100" /></div>
                    <div>800-294-9940</div>
                </div>

                <div className="flex flex-row gap-2">
                    <div><MdOutlineEmail className="text-blue-600 mt-1 rounded-[80px] text-lg bg-blue-100" />
                    </div>
                    <div>support@abc.com</div>
                </div>
          </ul>
        </div>
      </div>

      <div className=" mt-[20px] mb-[40px] flex justify-between">
        <div className="text-left text-lg">
          Copyright © 2024 NIW | All Rights Reserved
        </div>
        <div className=" text-gray-900 text-lg gap-2 flex justify-between">
          <div className="pr-5 text-right">Privacy Policy</div>
          <div className="text-right">Terms & Conditions</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
