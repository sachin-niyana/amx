import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-header-bg bg-cover">
      <Navbar />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[122px] pt-24 sm:pb-[52px] pb-12">
        <h1 className="text-green font-bold font-Oswald xl:text-4xl lg:text-3xl md:text-2xl text-xl uppercase text-start leading-[120%] xl:max-w-[930px] lg:max-w-[720px] md:max-w-[640px] min-[560px]:max-w-[530px] max-w-[300px] sm:mx-auto">
          Investment{" "}
          <span className="text-light-white">Optimization Strategies</span>
        </h1>
        <div className="flex sm:flex-row flex-col flex-wrap mt-2">
          <div className="md:w-5/12 sm:w-6/12"></div>
          <div className="md:w-7/12 sm:w-6/12">
            <div className="flex items-center md:ms-20">
              <div className="w-[2px] bg-dark-gray h-[106px]"></div>
              <p className="text-light-gray font-Inter font-normal ps-[25px] sm:text-sm text-xsm max-w-[385px] w-full leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Tortor leo consequat
                sollicitudin metus urna sed ante duis. Iaculis neque erat
                venenatis sed pulvinar quam integer proin.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end me-20 mt-[34px]">
          <div className="group rounded-full">
            <div className="sm:w-[148px] cursor-pointer sm:h-[148px] w-32 h-32 border-2 group-hover:border-opacity-0 transition-all ease-in-out !duration-1000 border-black-gray rounded-full flex justify-center items-center relative overflow-hidden">
              <p className="font-Oswald font-semibold z-10 sm:text-sm flex items-center text-xsm text-bomboy group-hover:text-light-white transition-all ease-in-out duration-300">
                Get Started{" "}
                <span>
                  <GoArrowUpRight className="h-6 w-5" />
                </span>
              </p>
              <div className="absolute right-[-10%] bottom-[-10%] group-hover:bottom-0 group-hover:right-0 transition-all ease-in-out duration-300">
                <div className="w-[62px] h-[62px] sm:group-hover:w-[150px] sm:group-hover:h-[150px] group-hover:w-32 group-hover:h-32 bg-green rounded-full transition-all ease-in-out duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
