import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const data = [
  {
    name: "Abhishek Kumar",
    video: `/Nature.mp4`,
    title: "Carey Finn",
  },
  {
    name: `Rahul Kumar`,
    video: `/images/02.jpg`,
    title: "John Wick",
  },
  {
    name: `Anshu Kumar`,
    video: `/images/03.jpg`,
    title: "Spider Man",
  },
  {
    name: "Raj Kumar",
    video: `/images/04.jpg`,
    title: "Thor",
  },
  {
    name: `Rajesh Kumar`,
    video: `/images/05.jpg`,
    title: "Mr Bean",
  },
  {
    name: `Shyamam Kumar`,
    video: `/images/06.jpg`,
    title: "Jack Roser",
  },
  {
    name: `Ranvijay Kumar`,
    video: `/images/07.jpg`,
    title: "Mr Bhem",
  },
];

const Accordion = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    arrows: false,
  };

  return (
    <>
      <div className="container mx-auto mt-24 ">
        <div className="flex flex-col  items-center ">
          <h1 className=" font-bold text-3xl items-center mt-6">
            What People are Saying about Us?
          </h1>
          <p className="w-[480px] text-[16px] text-center items-center mt-4 ">
            Hear from real customers how Kai-Zen has helped <br /> secure their
            financial future.
          </p>
        </div>

        {/* video section */}

        <div className="container mx-auto rounded-xl mt-2  mb-10  ">
          <div className="m-auto  ">
            <div className="mt-20 ">
              <Slider ref={sliderRef} {...settings}>
                {data.map((value) => (
                  <div className="flex flex-col justify-center items-start">
                    <video
                      preload="metadata"
                      loop
                      autoPlay
                      controls
                      muted
                      className="w-full rounded-lg"
                    >
                      <source src="Nature.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="flex flex-col rounded-xl">
                      <div className="text-blue-600 text-sm">{value.name}</div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-black">{value.title}</h1>
                        <p className="text-[12px]">Kai-Zen Testimonial</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="mt-7 mr-2 justify-center items-center gap-x-2 flex flex-row ">
                <button
                  className="rounded-full bg-slate-300 p-2 border text-xl font-bold"
                  onClick={handlePrevClick}
                >
                  {"<"}
                </button>
                <button
                  className="rounded-full bg-slate-300 p-2 border text-xl font-bold"
                  onClick={handleNextClick}
                >  {">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
