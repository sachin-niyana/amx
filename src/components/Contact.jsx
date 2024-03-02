"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Location, Message } from "./Icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // Use the correct emailjs.send method with the template parameters
    emailjs.sendForm(
      "service_7v41gw7",
      "template_1tzdvgw",
      e.target,
      "LW2Wm7Cttqkugc2Tf"
    );
  };
  return (
    <div className="bg-contact-bg bg-cover">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[99px] lg:pb-[114px] md:py-20 sm:py-16 py-12">
        <div className="bg-black-green rounded-[14px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4">
            <div className="flex justify-center w-full">
              <form
                onSubmit={submitHandler}
                className=" flex flex-col sm:gap-6 gap-4 w-full lg:p-7 md:p-5 p-4"
              >
                <h3 className="font-Oswald uppercase font-bold md:text-2xl sm:text-xl text-lg text-light-white text-center mb-1">
                  contact <span className="text-green">US</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3.5 gap-4">
                  <div className="flex flex-col">
                    <p className="font-inter font-normal sm:text-sm text-xsm text-light-white opacity-60 pb-1">
                      First Name
                    </p>
                    <input
                      required
                      className="w-full border-2 border-white-green h-[46px] outline-none text-white px-2 hover:border-light-white rounded-[5px] bg-transparent transition-all ease-in-out duration-700 cursor-pointer"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-inter font-normal sm:text-sm text-xsm text-light-white opacity-60 pb-1">
                      Last Name
                    </p>
                    <input
                      required
                      className="w-full border-2 border-white-green h-[46px] outline-none text-white px-2 hover:border-light-white rounded-[5px] bg-transparent transition-all ease-in-out duration-700 cursor-pointer"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-inter font-normal sm:text-sm text-xsm text-light-white opacity-60 pb-1">
                    Email
                  </p>
                  <input
                    required
                    className="w-full border-2 border-white-green h-[46px] outline-none text-white px-2 hover:border-light-white rounded-[5px] bg-transparent transition-all ease-in-out duration-700 cursor-pointer"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-inter font-normal sm:text-sm text-xsm text-light-white opacity-60 pb-1">
                    Message
                  </p>
                  <textarea
                    required
                    className="w-full border-2 border-white-green outline-none text-white px-2 hover:border-light-white rounded-[5px] bg-transparent transition-all ease-in-out duration-700 cursor-pointer"
                    type="text"
                    name="message"
                    value={formData.message}
                    rows="5"
                    onChange={(e) => setFormData(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-light-white w-full bg-green mt-[22px] hover:text-Rich-Black hover:bg-light-white transition-all ease-in-out duration-300 py-[13px] px-[19px] rounded-lg font-Oswald font-semibold sm:text-sm text-xsm"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
            <div className="w-full flex justify-center">
              <iframe
                src="https://maps.google.com/maps?q=radial%20code&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameborder="0"
                className="w-full h-full min-h-[608px]"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-center md:gap-[58px] sm:gap-8 gap-4 sm:mt-[50px] mt-8">
          <div className="group flex items-center cursor-pointer justify-center gap-2.5">
            <div className="w-[52px] h-[52px] group-hover:bg-light-white bg-green rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
              <Message />
            </div>
            <p className="text-light-gray font-Inter font-normal sm:text-sm text-xsm">
              contact@amxcapital.co.uk
            </p>
          </div>
          <div className="flex justify-center">
            <div className="sm:w-[2px] w-[230px] sm:h-[47px] h-[2px] bg-blue-green"></div>
          </div>
          <div className="group flex items-center cursor-pointer justify-center gap-2.5">
            <div className="w-[52px] h-[52px] group-hover:bg-light-white bg-green rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
              <Location />
            </div>
            <p className="text-light-gray font-Inter font-normal sm:text-sm text-xsm">
              contact@amxcapital.co.uk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
