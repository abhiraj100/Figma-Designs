import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const FeedBack = () => {
  return (
    <div className='container mx-auto'>
    <div className=" container mx-auto h-[900px] flex flex-row rounded-1xl p-8 mb-8 mt-20 bg-[#F9FAFE]">

    <div className=" w-[600px] h-[800px] ">
        <img className='w-[600px] h-[800px]' src="image 8.png" />
      </div>

      <div className="ml-20  w-[600px] h-[1000px] ">
        <h1 className="text-[40px] font-semibold text-[#12171B] text-left mt-2 mb-4">
          More Money. More Protection. More Confidence.
        </h1>
        <p className="mt-2 text-[18px] text-[#3A3939] text-left mb-4">
          This isn't just a slogan, it's how we do business. Kai-Zen provides
          the opportunity to add capital to your plan, without the typical risks
          associated with borrowing.
        </p>
        <h1 className="text-[25px] font-semibold text-[#272D39] text-left mt-10 mb-4">
          Benefits of Smart Leverage
        </h1>

        <div className="mt-4 flex flex-row justify-between">
          <div>
            <div className="gap-2">
              <div className="flex flex-row gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl "/>
                <p className="text-[18px] text-[#3A3939]">No credit checks.</p>
              </div>
            </div>
            <div className="gap-2 mt-4">
              <div className="flex flex-row  gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl"/>
                <p className="text-[18px] text-[#3A3939]">No personal guarantees.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="gap-2">
              <div className="flex flex-row  gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl"/>
                <p className="text-[18px] text-[#3A3939]">No loan documents.</p>
              </div>
            </div>
            <div className="gap-2 mt-4">
              <div className="flex flex-row gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl"/>
                <p className="text-[18px] text-[#3A3939]">No interest payments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd sub-heading */}
        <h1 className="text-[25px] font-semibold text-left mt-10 mb-4">
          Benefits of More Protection
        </h1>
        <div className="mt-4 flex flex-col  justify-between">
          <div className="gap-2">
            <div className="flex flex-row  gap-4">
              <FaCheckCircle className="text-[#2BD081] text-2xl"/>
              <p className="text-[18px] text-[#3A3939]">
                Death benefit with living benefit riders.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-row justify-between">
            <div className="gap-2">
              <div className="flex flex-row  gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl"/>
                <p className="text-[18px] text-[#3A3939]">Chronic illness</p>
              </div>
            </div>
            <div className="gap-2 mr-16">
              <div className="flex flex-row gap-2 gap-4">
                <FaCheckCircle className="text-[#2BD081] text-2xl"/>
                <p className="text-[18px] text-[#3A3939]">Terminal illness</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd subheading */}
        <h1 className="text-[25px] font-semibold text-left mt-8 mb-4">
          Benefits of More Growth
        </h1>
        <div className="mt-4 flex flex-col  justify-between">
          <div className="mb-2 mt-2">
            <div className="flex flex-row gap-4 mb-2 mt-2">
              <FaCheckCircle className="text-[#2BD081] text-2xl"/>
              <p className="text-[18px] text-[#3A3939]">Upside crediting (subject to cap)</p>
            </div>
            <div className="flex flex-row gap-4 mb-2 mt-2">
              <FaCheckCircle className="text-[#2BD081] text-2xl"/>
              <p className="text-[18px] text-[#3A3939]">
                No negative returns due to market decline.
              </p>
            </div>
            <div className="flex flex-row gap-4 mb-2 mt-2">
            <FaCheckCircle className="text-[#2BD081] text-3xl"/>
              <p className="text-[18px] text-[#3A3939] ">
                Tax-free distributions with potential to access cash value using
                tax-free policy loans.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
      
    </div>
  )
}

export default FeedBack
