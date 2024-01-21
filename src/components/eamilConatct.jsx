// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgnbdey");
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/"); // Navigate to the home page after successful submission
  };

  if (state.succeeded) {
    return <p>Thanks for joining! Redirecting...</p>;
  }

  return (
    <div className="py-28 px-4 md:px-16 lg:px-32">
      <div className="flex mb-4 justify-center">
        <p className="flex">
          <span className="animate-pulse">
            <Image
              src="https://i.ibb.co/fCdrZ9J/star.png"
              alt="star"
              width={20}
              height={20}
            />
          </span>
          <span className="ml-2 font-semibold">My Contact</span>
        </p>
      </div>
      <h1 className="text-center font-bold md:font-extrabold text-xl md:text-5xl pt-4 pb-24">
        I WANT TO HEAR FROM YOU
      </h1>
      <div className="flex flex-col  md:flex-row">
        <div className="basis-4/6 pr-12">
          <form
            action="https://formspree.io/f/mrgnbdey"
            method="POST"
            onSubmit={async (e) => {
              await handleSubmit(e);
              if (state.succeeded) {
                handleSuccess();
              }
            }}
          >
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 px-4 ">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-700"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 p-2 border border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  className="mt-1 p-2 border border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-700"
                />
                <ValidationError
                  prefix="Mobile"
                  field="mobile"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="tel"
                  name="subject"
                  className="mt-1 p-2 border border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-700"
                />
                <ValidationError
                  prefix="subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 border border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-700"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-button font-semibold md:text-xl text-white hover:text-button p-4 hover:bg-black  rounded"
            >
              Send Me Message
            </button>
          </form>
        </div>
        <div className="basis-1/3  py-6 md:py-0">
          <div className="flex items-center ">
            <Image
              width={50}
              height={50}
              className="bg-hover-testimonial rounded p-3"
              src={
                "https://res.cloudinary.com/arifulislam/image/upload/v1705567502/output-onlinepngtools_h04rqd.png"
              }
            />

            <div className="pl-2">
              <p className="md:text-2xl font-semibold font-serif ">Phone</p>
              <a href="tel:01872297660" className="">
                +880-1872 297660
              </a>
            </div>
          </div>
          <div className="flex py-12 items-center">
            <Image
              width={50}
              height={50}
              className="bg-hover-testimonial rounded p-3"
              src={
                "https://res.cloudinary.com/arifulislam/image/upload/v1705567502/output-onlinepngtools_1_inrn5c.png"
              }
            />

            <div className="pl-2">
              <p className="md:text-2xl font-semibold font-serif ">Email</p>
              <a href="mailto:arifulislam10111999@gmail.com" className="">
                arifulislam10111999@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              width={50}
              height={50}
              className="bg-hover-testimonial rounded  p-2"
              src={
                "https://res.cloudinary.com/arifulislam/image/upload/v1705567502/output-onlinepngtools_2_podpuu.png"
              }
            />

            <div className="pl-2">
              <p className="md:text-2xl font-semibold font-serif ">Address</p>
              <p className="">127 mojib sorok Sirajgonj, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
