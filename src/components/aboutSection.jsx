"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  console.log(ref);
  return (
    <div className="pt-16 md:px-32 flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/4 relative overflow-hidden p-2 group">
        <Image
          className="object-cover w-full h-auto transition-opacity duration-300 ease-in-out transform group-hover:opacity-70"
          width={500}
          height={400}
          src="https://res.cloudinary.com/arifulislam/image/upload/v1704604224/ariful_jacket-removebg-preview_1-removebg-preview_c02fu2.png"
          alt="Your Alt Text"
        />
        <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="w-full lg:w-2/4 p-2 md:m-12 pt-28">
        <div className="flex mb-4">
          <span className="animate-pulse">
            <Image
              src="https://i.ibb.co/fCdrZ9J/star.png"
              alt="star"
              width={20}
              height={20}
            />
          </span>
          <span className="ml-2 font-semibold">I AM A DEVELOPER</span>
        </div>
        <p className="text-2xl md:text-4xl lg:text-5xl   lg:font-extrabold font-bold mb-4">
          I Can Design Anything You Want
        </p>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        </p>
        <div className="flex flex-col md:flex-row pt-16">
          <div className="w-full lg:w-2/4 ">
            <div className="flex mb-4">
              <Image
                src="https://credesign.vercel.app/multiPage/img/aboutIconOne.png"
                alt="star"
                width={60}
                height={60}
              />

              <div className="pl-2">
                <p className="ml-2 text-2xl font-extrabold text-button">75+</p>
                <p className="font-bold">Complete Project</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/4 ">
            <div className="flex mb-4">
              <span>
                <Image
                  src="https://credesign.vercel.app/multiPage/img/aboutIconTwo.png"
                  alt="star"
                  width={60}
                  height={60}
                />
              </span>
              <div className="pl-2">
                <p className="ml-2 text-2xl font-extrabold text-button">4+</p>
                <p className="font-bold">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex-row md:flex-row ">
          <div
            ref={ref}
            className={`flex mb-4 items-center ${
              inView ? "animate-fade-in-up-one" : ""
            }  scroll-smooth focus:scroll-auto `}
          >
            <Image
              src="https://res.cloudinary.com/arifulislam/image/upload/v1704610153/output-onlinepngtools_28_addhud.png"
              alt="star"
              width={30}
              height={30}
            />

            <div className="pl-2">
              <p>Work simple and clean design {inView ? "yes" : "no"} </p>
            </div>
          </div>
          <div
            ref={ref1}
            className={`flex mb-4  items-center ${
              inView1 ? "animate-fade-in-up-two" : ""
            }  scroll-smooth focus:scroll-auto `}
          >
            <Image
              src="https://res.cloudinary.com/arifulislam/image/upload/v1704610153/output-onlinepngtools_28_addhud.png"
              alt="star"
              width={30}
              height={30}
            />

            <div className="pl-2">
              <p>Working in FullStack web development </p>
            </div>
          </div>
          <div
            ref={ref2}
            className={`flex mb-4 items-center ${
              inView2 ? "animate-fade-in-up-three" : ""
            }  scroll-smooth focus:scroll-auto `}
          >
            <Image
              src="https://res.cloudinary.com/arifulislam/image/upload/v1704610153/output-onlinepngtools_28_addhud.png"
              alt="star"
              width={30}
              height={30}
              className="align-middle"
            />

            <div className="pl-2">
              <p>Making Email signature for all Email Clients</p>
            </div>
          </div>
          <div
            ref={ref3}
            className={`flex  mb-4 items-center ${
              inView3 ? "animate-fade-in-up-four" : ""
            }  scroll-smooth focus:scroll-auto `}
          >
            <Image
              src="https://res.cloudinary.com/arifulislam/image/upload/v1704610153/output-onlinepngtools_28_addhud.png"
              alt="star"
              width={30}
              height={30}
            />

            <div className="pl-2">
              <p>Revision Unlimited</p>
            </div>
          </div>
        </div>
        <div
          ref={ref4}
          className={` my-4 pt-16 ${
            inView4 ? "animate-fade-in-up-five" : ""
          }  scroll-smooth focus:scroll-auto `}
        >
          <button className="bg-button font-semibold text-xl text-white hover:text-button p-4 hover:bg-black  rounded">
            Download My CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
