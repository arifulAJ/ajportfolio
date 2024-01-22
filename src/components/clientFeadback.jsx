"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedback = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="px-6  py-16 pt-16 md:px-16 lg:px-32">
      <div>
        <div className="flex mb-4 justify-center">
          <p className="flex">
            {" "}
            <span className="animate-pulse">
              <Image
                src="https://i.ibb.co/fCdrZ9J/star.png"
                alt="star"
                width={20}
                height={20}
              />
            </span>
            <span className="ml-2 font-semibold">Testimonial</span>
          </p>
        </div>
        <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
          CLIENT FEEDBACK
        </h1>
      </div>
      <Slider {...settings}>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around  ">
            <Image
              className="rounded-full overflow-hidden lg:w-24 lg:h-24"
              height={100}
              width={100}
              src={
                "https://image9.photobiz.com/8584/14_20230502153638_11134158_large.jpg"
              }
            />
            <div>
              <h1 className="text-xl md:text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate,
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around  ">
            <Image
              className="rounded-full overflow-hidden lg:w-24 lg:h-24"
              height={100}
              width={100}
              src={
                "https://image9.photobiz.com/8584/14_20230502153638_11134158_large.jpg"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate,
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around  ">
            <Image
              className="rounded-full overflow-hidden lg:w-24 lg:h-24"
              height={100}
              width={100}
              src={
                "https://www.ovcphotography.com/images/headshots/hs-8-lg.jpg"
              }
            />
            <div>
              <h1 className="text-xl md:text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate,
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around  ">
            <Image
              className="rounded-full overflow-hidden lg:w-24 lg:h-24"
              height={100}
              width={100}
              src={
                "https://image9.photobiz.com/8584/14_20230502153638_11134158_large.jpg"
              }
            />
            <div>
              <h1 className="text-xl  md:text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate,
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ClientFeedback;
