import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer text-white  p-2 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 md:py-36  px-4 md:px-32">
        <div className=" pr-16 ">
          <Image
            width={90}
            height={90}
            src={
              "https://res.cloudinary.com/arifulislam/image/upload/v1705572808/LOGO_AJ_pfv0sf.png"
            }
          />
          <p className="text-wrap py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium voluptatum optio sequi quam accusantium voluptatem.
            Quaerat aliquid{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" ">
            <h1 className="text-2xl font-serif pb-6 pt-6 md:pt-0 md:pb-16">
              Explore Link
            </h1>
            <p>About</p>
            <p className="py-6">Resume</p>
            <p>Portfolio</p>
            <p className="pt-6">Blog</p>
          </div>
          <div>
            <h1 className="text-2xl font-serif pb-6 pt-6 md:pt-0 md:pb-16">
              My Services
            </h1>
            <p>Web development</p>
            <p className="py-6">Email Signature</p>
            <p>Wordpress developer</p>
            <p className="pt-6">REST API</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-serif pb-6 pt-6 md:pt-0 md:pb-16">
            Follow Me
          </h1>
          <div className="flex space-x-4 ">
            <div className="group relative ">
              <a href="https://www.facebook.com/arifulislamaj10">
                <Image
                  width={30}
                  height={30}
                  className="transition bg-orange-500 duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0 rounded"
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1705576492/3057625_facebook_media_network_social_icon_rwj0eh.png"
                />
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 rounded">
                <a href="https://www.facebook.com/arifulislamaj10">
                  <Image
                    width={30}
                    height={30}
                    className="transition duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0"
                    src="https://res.cloudinary.com/arifulislam/image/upload/v1705926780/output-onlinepngtools_4_eyzdva.png"
                  />
                </a>
              </div>
            </div>
            <div className="group relative rounded">
              <Image
                width={30}
                height={30}
                className="transition bg-orange-500 duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0 rounded"
                src="https://res.cloudinary.com/arifulislam/image/upload/v1705932581/WHITE_b7rdzv.png"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 rounded">
                <a href="https://www.linkedin.com/in/arifulislamaj10">
                  <Image
                    width={30}
                    height={30}
                    className="transition duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0"
                    src="https://res.cloudinary.com/arifulislam/image/upload/v1705932581/orenge_edgwfz.png"
                  />
                </a>
              </div>
            </div>
            <div className="group relative rounded">
              <Image
                width={30}
                height={30}
                className="transition bg-orange-500 duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0 rounded"
                src="https://res.cloudinary.com/arifulislam/image/upload/v1705934039/WHITE_of7pti.png"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 rounded">
                <a href="https://twitter.com/arifulislamaj10">
                  <Image
                    width={30}
                    height={30}
                    className="transition duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0"
                    src="https://res.cloudinary.com/arifulislam/image/upload/v1705934038/orengx_o9ydow.png"
                  />
                </a>
              </div>
            </div>
            <div className="group relative rounded">
              <Image
                width={30}
                height={30}
                className="transition p-1 bg-orange-500 duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0 rounded"
                src="https://res.cloudinary.com/arifulislam/image/upload/v1706088312/insta_fx09re.png"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 rounded">
                <a href="https://www.instagram.com/arifulislamaj10">
                  <Image
                    width={30}
                    height={30}
                    className="transition p-1 duration-300 ease-in-out hover:opacity-80 group-hover:filter group-hover:grayscale-0"
                    src="https://res.cloudinary.com/arifulislam/image/upload/v1706088312/instaoreng_mnf6ik.png"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="basis-1/3 px-2 ">
            <div className="flex items-center py-6 ">
              <Image
                width={20}
                height={20}
                src={
                  "https://res.cloudinary.com/arifulislam/image/upload/v1705567502/output-onlinepngtools_h04rqd.png"
                }
              />

              <div className="">
                <a href="tel:01872297660">+880-1872 297660</a>
              </div>
            </div>

            <div className="flex items-center">
              <Image
                width={20}
                height={20}
                src={
                  "https://res.cloudinary.com/arifulislam/image/upload/v1705567502/output-onlinepngtools_2_podpuu.png"
                }
              />

              <div className="">
                <p>
                  127 mojib sorok Sirajgonj,
                  <br /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white w-full" />
      <div className="px-4 md:px-32 py-8 flex flex-col md:flex-row ">
        <p className="basis-1/2">All rights reserved © 2024 Aj web solution</p>
        <p className="basis-1/4">Terms and condition</p>
        <p className="basis-1/4">privecy policy</p>
      </div>
    </div>
  );
};

export default Footer;
