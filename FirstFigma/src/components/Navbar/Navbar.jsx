
const Navbar = () => {

  return (
    <>
      <nav className="bg-[#0A2C52] w-full py-3">
        <div className="container mx-auto  h-[10%] flex justify-between">
          <div className="flex items-center lg:container lg:mx-auto lg:w-full text-xl lg:text-1xl">
            <img
              className="h-[40px] w-[40px] mr-4 lg:h-[50px] md:w-[50px]"
              src="NavImg.png"
              alt="NavLogo"
            />
            <div className="text-xs md:text-sm flex gap-2 flex-wrap">
              <p className="text-white md:text-lg font-bold">
                Your Family Advisor Jane welcomes you on board
              </p>
              <p className="underline underline-offset-2 mt-1 text-[#7592F2]">
                Learn More
              </p>
            </div>
          </div>

          <div className="hidden md:flex w-[20px] mr-[300px] text-right items-center space-x-6 ">
            {/* Phone  */}
            <div className="flex items-center space-x-1 relative">
              <img
                className="h-6 w-6"
                src="Ellipse47.png"
                alt="Phone Ellipse"
              />
              <img
                className="absolute inset-0 h-4 w-4 m-auto"
                src="phone-rounded_svgrepo.com.png"
                alt="Phone Icon"
              />
              <p className="text-white w-[120px] font-semibold text-xs md:text-sm ">
                800-294-9940
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-1  relative">
              <img
                className="h-6 w-6"
                src="Ellipse47.png"
                alt="Email Ellipse"
              />
              <img
                className="absolute inset-0 h-4 w-4 m-auto"
                src="email-1_svgrepo.com.png"
                alt="Email Icon"
              />
              <p className="text-white font-semibold text-xs md:text-sm  ">
                support@abc.com
              </p>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
