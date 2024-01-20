import Image from "next/image";
import React from "react";

const Services = () => {
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
          <span className="ml-2 font-semibold">My Service</span>
        </p>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
        SERVICES I OFFER
      </h1>
      {/* card area now  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-14 p-4">
        <div className="max-w-md mx-auto bg-white hover:bg-bg-color rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 mb-4 border ">
          {/* Top Image */}
          <img
            className="w-full h-60 object-cover  "
            src="https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704758400&semt=ais"
            alt="Card Image"
          />

          {/* Card Content */}
          <div className="p-6">
            {/* Title */}
            <div className="font-bold text-center text-xl mb-2">
              Web Developer
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nulla vel ex congue, in varius purus consectetur.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white hover:bg-bg-color rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 mb-4 border ">
          {/* Top Image */}
          <img
            className="w-full h-60  object-cover"
            src="https://marketingzoo.co.za/wp-content/uploads/2020/04/gmail-email-signature-mockup-peleg-01.jpg"
            alt="Card Image"
          />

          {/* Card Content */}
          <div className="p-6">
            {/* Title */}
            <div className="font-bold text-center text-xl mb-2">
              Email Signature
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nulla vel ex congue, in varius purus consectetur.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white hover:bg-bg-color rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 mb-4  border ">
          {/* Top Image */}
          <img
            className="w-full h-60  object-cover"
            src="https://melapress.com/wp-content/uploads/2023/07/change-wordpress-login-page-url.png"
            alt="Card Image"
          />

          {/* Card Content */}
          <div className="p-6">
            {/* Title */}
            <div className="font-bold text-center text-xl mb-2">
              WordPress Plagien{" "}
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nulla vel ex congue, in varius purus consectetur.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white hover:bg-bg-color rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 mb-4 border ">
          {/* Top Image */}
          <img
            className="w-full h-60  object-cover"
            src="https://media.licdn.com/dms/image/D5612AQHUtfE_NZiYBQ/article-cover_image-shrink_600_2000/0/1681155201571?e=2147483647&v=beta&t=gU-iBZwXLMnIw61DhAytfuTrSobeQlmeBSM9ixCuDhs"
            alt="Card Image"
          />

          {/* Card Content */}
          <div className="p-6">
            {/* Title */}
            <div className="font-bold text-center text-xl mb-2">Rest API </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nulla vel ex congue, in varius purus consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
