"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const MyResume = () => {
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  return (
    <div className="px-4 py-10 pt-16 md:px-16 lg:px-32 bg-bg-color">
      <div>
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
            <span className="ml-2 font-semibold">My Resume</span>
          </p>
        </div>
        <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
          4+ YEARS OF EXPERIENCE
        </h1>
        {/* education section  */}
        <div
          ref={ref}
          className={`  ${
            inView
              ? "animate-fade-in-up-resume1 md:animate-fade-in-up-resume1lg"
              : ""
          }`}
        >
          <p className="font-bold md:font-extrabold md:text-4xl  py-4">
            Education
          </p>

          <div className=" bg-white flex flex-col lg:flex-row">
            <div className="p-2 lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                BSc in Computer Science and Engineering (CSE)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                National university of Bangladesh (2019-2023)
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
            <div className="hidden  lg:block w-1 max-h-fit my-10 bg-slate-600"></div>

            <div className="p-2 py-16 lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                Higher Secondary School Sertificate (HSC)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                Khamar Gram Degree College
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
            <div className="hidden  md:hidden lg:block w-1 max-h-fit my-10 bg-slate-600"></div>

            <div className="p-2  lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                Secondary School Certificate (SSC)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                Batil M.L High School
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
          </div>
        </div>

        {/* exprieacne section  */}
        <div
          ref={ref1}
          className={` my-16  ${
            inView1
              ? "animate-fade-in-up-resume2 md:animate-fade-in-up-resume2lg"
              : ""
          }`}
        >
          <p className=" font-bold md:font-extrabold md:text-4xl  py-4 ">
            {" "}
            Software & Skills
          </p>

          <div className="bg-white flex flex-col lg:flex-row">
            <div className="p-2 lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                BSc in Computer Science and Engineering (CSE)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                National university of Bangladesh (2019-2023)
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
            <div className="hidden  lg:block w-1 max-h-fit my-10 bg-slate-600"></div>

            <div className="p-2 py-16 lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                BSc in Computer Science and Engineering (CSE)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                National university of Bangladesh (2019-2023)
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
            <div className="hidden  md:hidden lg:block w-1 max-h-fit my-10 bg-slate-600"></div>

            <div className="p-2  lg:p-10">
              <h1 className="md:font-bold md:text-xl ">
                BSc in Computer Science and Engineering (CSE)
              </h1>
              <p className="py-4 md:text-xl text-text-color ">
                National university of Bangladesh (2019-2023)
              </p>
              <p className="text-text-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae velit voluptate illo aliquid placeat .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
