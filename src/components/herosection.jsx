import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div>
      <section>
        <Image
          height={80}
          width={80}
          src={
            "https://res.cloudinary.com/arifulislam/image/upload/v1704338323/Untitled__1_-removebg-preview_bhp268.png"
          }
          alt="logo"
          className="z-0 absolute   right-10 top-90 animate-pulse -translate-x-12 translate-y-2"
        />
        <Image
          height={380}
          width={380}
          src={
            "https://res.cloudinary.com/arifulislam/image/upload/v1704379085/homeNannerShape_wxzctp.png"
          }
          alt="logo"
          className="z-0 absolute   right-8 top-90 animate-pulse -translate-x-32 translate-y-24"
        />
      </section>
      <div className="bg-bg-color px-6 pt-16 lg:px-16 xl:px-32 flex  flex-col-reverse  lg:flex-row">
        <div className="w-full lg:w-2/4 md:pr-8 md:py-12 py-16 ">
          <p className="flex mb-4">
            <span className="animate-pulse">
              <Image
                src="https://i.ibb.co/fCdrZ9J/star.png"
                alt="star"
                width={20}
                height={20}
              />
            </span>
            <span className="ml-2 font-semibold">I AM A DEVELOPER</span>
          </p>
          <div>
            <p className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl  lg:font-extrabold font-bold mb-4">
              Creative Design and Web Solution
            </p>
            <p className="mb-4">
              I am a web developer for your business. I will make a professional
              website that will enhance your business. I am a web developer for
              your business. I will make a professional website that will
              enhance website that will enhance your business. I am a web
              developer for your business. I will make a professional website
              that will enhance website that will enhance your business. your
              business.
            </p>
            <button className="bg-button p-4 rounded my-4">
              Download My CV
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/4 md:pl-8 z-30">
          <Image
            style={{ height: "100%", width: "100%" }}
            width={500}
            height={400}
            src="https://res.cloudinary.com/arifulislam/image/upload/v1704313108/ariful_jacket-removebg-preview_1_izfgzs.png"
            alt="my profile"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Herosection;
