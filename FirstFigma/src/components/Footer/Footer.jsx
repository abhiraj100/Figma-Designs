import React from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="w-full h-1 border-b-4 border-gray-200"></div>
      <div className="flex mt-[55px] flex-row justify-between">
        {/* first div */}
        <div className="">
          <img src="image 11.png" />
          <p className="mt-2 w-[250px] text-[#3A3939]">
            Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem ipsum
            reaned rekle, banat. Jasminmöte betrese Lörem ipsum reaned rekle,
            banat. Jasminmöte betrese Lörem
          </p>
          {/* <img className="mt-4" src="Group 6879.png" /> */}
          <div className="flex flex-row text-left text-2xl gap-x-1  mt-2">
            <div className="w-12 h-12 rounded-[50%] bg-[#F5F7FF] "> <FaFacebookF className="rounded-[50%]   mt-3 ml-3 bg-[#F5F7FF] text-[#2B53D6]"/> </div>
            <div className="w-12 h-12 rounded-[50%] bg-[#F5F7FF] "> <FaTwitter className="rounded-[50%] mt-3 ml-3 bg-[#F5F7FF] text-[#2B53D6]"/> </div>
            <div className="w-12 h-12 rounded-[50%] bg-[#F5F7FF] "> <FaYoutube className="rounded-[50%] mt-3 ml-3 bg-[#F5F7FF] text-[#2B53D6]"/> </div>
          </div>
        </div>

        {/* second div */}
        <div className="mt-[25px]">
          <h1 className="text-left font-semibold text-[#12171B]">Quick Links</h1>
          <ul>
            <li className="text-left mt-3 text-[#12171B]">Home</li>
            <li className="text-left mt-1 text-[#12171B]">About Ilia®</li>
            <li className="text-left mt-1 text-[#12171B]">About NIW® </li>
            <li className="text-left mt-1 text-[#12171B]">News</li>
            <li className="text-left mt-1 text-[#12171B]">Contact Us</li>
            <li className="text-left mt-1 text-[#12171B]">Wire Instructions</li>
          </ul>
        </div>

        {/* third div */}

        <div className="mt-[25px]">
          <h1 className="text-left font-semibold text-[#12171B]">Strategies</h1>
          <ul>
            <li className="text-left mt-3 text-[#12171B]">Kai-Zen®</li>
            <li className="text-left mt-1 text-[#12171B]">Tri-Zen®</li>
            <li className="text-left mt-1 text-[#12171B]">Leveraged Savings Plan</li>
            <li className="text-left mt-1 text-[#12171B]">Enhanced Split Dollar</li>
            <li className="text-left mt-1 text-[#12171B]">Cash Stream</li>
          </ul>
        </div>

        <div className="mt-[25px]">
          <h1 className="text-left "></h1>
          <ul className="m-8">
            <li className="text-left mt-3 text-[#12171B]">Kai-Zen®</li>
            <li className="text-left mt-1 text-[#12171B]">Tri-Zen®</li>
            <li className="text-left mt-1 text-[#12171B]">Leveraged Savings Plan</li>
            <li className="text-left mt-1 text-[#12171B]">Enhanced Split Dollar</li>
            <li className="text-left mt-1 text-[#12171B]">Cash Stream</li>
          </ul>
        </div>

        <div className="pr-7 mt-[25px]">
          <h1 className="text-left font-semibold text-[#12171B]">Contacts</h1>
          <ul className="mt-[20px] ">
                <div className="flex flex-row gap-4">
                    <div className="w-8 h-8 rounded-[50%] bg-[#F5F7FF]"><IoCallSharp className="rounded-[50%] mt-2 text-[#2B53D6]  bg-[#F5F7FF] ml-[6px] w-5 h-5 text-lg " /></div>
                    <div className="">800-294-9940</div>
                </div>

                <div className="flex flex-row mt-6 gap-4">
                    <div className="w-8 h-8 rounded-[50%] bg-[#F5F7FF]"><MdOutlineEmail className="text-[#2B53D6] rounded-[50%] bg-[#F5F7FF] ml-[6px] mt-1 w-5 h-5 text-lg " />
                    </div>
                    <div>support@abc.com</div>
                </div>
          </ul>
        </div>
      </div>

      <div className=" mt-12 mb-[40px] flex justify-between">
        <div className="text-left text-[#3A3939] text-lg">
          Copyright © 2024 NIW | All Rights Reserved
        </div>
        <div className=" text-gray-900 text-lg gap-2 flex justify-between">
          <div className="pr-5 text-right text-[#3A3939]">Privacy Policy</div>
          <div className="text-right text-[#3A3939]">Terms & Conditions</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
