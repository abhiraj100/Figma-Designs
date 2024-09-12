import React from 'react'

const FeedBack = () => {
  return (
    <div className='container mx-auto'>
    <div className="className='container mx-auto flex flex-row justify-between rounded-1xl p-8 mb-8 mt-8 bg-slate-50">

    <div className="w-[600px] h-[1000px]">
        <img src="image 8.png" />
      </div>

      <div className="ml-8 w-[50%]">
        <h1 className="text-4xl font-bold text-left mt-2 mb-4">
          More Money. More Protection. More Confidence.
        </h1>
        <p className="mt-2 text-2xl text-left mb-4">
          This isn't just a slogan, it's how we do business. Kai-Zen provides
          the opportunity to add capital to your plan, without the typical risks
          associated with borrowing.
        </p>
        <h1 className="text-3xl font-bold text-left mt-10 mb-4">
          Benefits of Smart Leverage
        </h1>

        <div className="mt-4 flex flex-row justify-between">
          <div>
            <div className="gap-2">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">No credit checks.</p>
              </div>
            </div>
            <div className="gap-2 mt-4">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">No personal guarantees.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="gap-2">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">No loan documents.</p>
              </div>
            </div>
            <div className="gap-2 mt-4">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">No interest payments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd sub-heading */}
        <h1 className="text-3xl font-bold text-left mt-10 mb-4">
          Benefits of More Protection
        </h1>
        <div className="mt-4 flex flex-col  justify-between">
          <div className="gap-2">
            <div className="flex flex-row gap-2">
              <img src="check.png" />
              <p className="text-2xl">
                Death benefit with living benefit riders.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-row justify-between">
            <div className="gap-2">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">Chronic illness</p>
              </div>
            </div>
            <div className="gap-2 mr-16">
              <div className="flex flex-row gap-2">
                <img src="check.png" />
                <p className="text-2xl">Terminal illness</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd subheading */}
        <h1 className="text-3xl font-bold text-left mt-8 mb-4">
          Benefits of More Growth
        </h1>
        <div className="mt-4 flex flex-col  justify-between">
          <div className="mb-2 mt-2">
            <div className="flex flex-row gap-2 mb-2 mt-2">
              <img src="check.png" />
              <p className="text-2xl">Upside crediting (subject to cap)</p>
            </div>
            <div className="flex flex-row gap-2 mb-2 mt-2">
              <img src="check.png" />
              <p className="text-2xl">
                No negative returns due to market decline.
              </p>
            </div>
            <div className="flex flex-row gap-2 mb-2 mt-2">
              <img className="size-9" src="check.png" />
              <p className="text-2xl  text-left">
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
