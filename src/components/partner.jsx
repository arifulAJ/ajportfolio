"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
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
    <div className="pt-24 px-1 md:px-16 lg:px-32  ">
      <div className="flex mb-4 justify-center  ">
        <p className="flex ">
          {" "}
          <span className="animate-pulse">
            <Image
              src="https://i.ibb.co/fCdrZ9J/star.png"
              alt="star"
              width={20}
              height={20}
            />
          </span>
          <span className="ml-2 font-semibold">Partners</span>
        </p>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
        REPUTED PARTNER
      </h1>
      <div>
        <Slider {...settings}>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
          <div className="border-orange-200 border-2 rounded p-6 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
