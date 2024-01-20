import Image from "next/image";
import React from "react";

const MyBlog = () => {
  return (
    <div className="pt-36 px-1 md:px-16 lg:px-32  ">
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
          <span className="ml-2 font-semibold">My Blog</span>
        </p>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
        LATEST BLOG
      </h1>
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className=" border border-orange-200 rounded">
          <Image
            height={600}
            width={600}
            src={
              "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1705449600&semt=ais"
            }
          />

          <div className=" px-6">
            <h1 className="py-8">21 January 2023</h1>
            <p className="font-bold text-2xl">
              Become a web developer with carier fundrey
            </p>
            <p className="text-orange-500 text-xl  py-8">Read More --</p>
          </div>
        </div>
        <div className=" border border-orange-200 rounded">
          <Image
            height={600}
            width={600}
            src={
              "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1705449600&semt=ais"
            }
          />

          <div className=" px-6">
            <h1 className="py-8">21 January 2023</h1>
            <p className="font-bold text-2xl">
              Become a web developer with carier fundrey
            </p>
            <p className="text-orange-500 text-xl  py-8">Read More --</p>
          </div>
        </div>
        <div className=" border border-orange-200 rounded">
          <Image
            height={600}
            width={600}
            src={
              "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1705449600&semt=ais"
            }
          />

          <div className=" px-6">
            <h1 className="py-8">21 January 2023</h1>
            <p className="font-bold text-2xl">
              Become a web developer with carier fundrey
            </p>
            <p className="text-orange-500 text-xl  py-8">Read More --</p>
          </div>
        </div>
        <div className=" border border-orange-200 rounded">
          <Image
            height={600}
            width={600}
            src={
              "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1705449600&semt=ais"
            }
          />

          <div className=" px-6">
            <h1 className="py-8">21 January 2023</h1>
            <p className="font-bold text-2xl">
              Become a web developer with carier fundrey
            </p>
            <p className="text-orange-500 text-xl  py-8">Read More --</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
