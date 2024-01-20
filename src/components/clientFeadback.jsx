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
    <div className="px-4 py-16 pt-16 md:px-16 lg:px-32">
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
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
        <div className="bg-testimonial hover:bg-hover-testimonial p-6 rounded">
          <div className="flex items-center justify-around m-4 ">
            <Image
              className="rounded-full overflow-hidden w-24 h-24"
              height={200}
              width={200}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58gGkjIFofQgvH4BjVqSqJ03uDB4PQeYynrm9Zb8xZER-7vn4rT2VohxqfJfiKl1LDK8&usqp=CAU"
              }
            />
            <div>
              <h1 className="text-2xl ">jems bond</h1>
              <p>ceo of cart</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            beatae quia sapiente voluptate, sit optio facilis explicabo qui,
            odio nesciunt, perspiciatis vel. Atque, officiis fugit quibusdam rem
            sunt facilis.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ClientFeedback;
