import Image from "next/image";
import React from "react";
import { Instagram, Twitter } from "./Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-reviews-bg bg-cover">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-14 lg:pb-16 md:py-12 sm:py-10 py-8">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center">
          <div className="flex flex-col">
            <Image
              className="md:w-[208px] md:h-[104px] sm:w-[180px] sm:h-[80px]"
              src="/assets/header/logo.png"
              width={150}
              height={60}
              alt="Logo"
            />
            <p className="font-Inter font-normal sm:text-sm text-xsm lg:max-w-[455px] md:max-w-[420px] sm:max-w-[300px] text-light-white opacity-80 pt-3">
              At AMX Capital our mission is to assist you in wealth creation,
              multiplication & preservation. We’re committed to providing a
              holistic financial service and guidance to ensure our clients
              achieve their financial goals.
            </p>
          </div>
          <div className="flex justify-start lg:gap-[57px] gap-9 sm:mt-0 mt-8">
            <ul>
              <li className="text-light-white sm:text-sm text-xsm font-Oswald font-semibold uppercase">
                Main Links
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                Home
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                About Us
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                What We Do
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                Why Choose Us
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                Reviews
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                FAQ
              </li>
            </ul>
            <ul>
              <li className="text-light-white sm:text-sm text-xsm font-Oswald font-semibold uppercase">
                Links
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-3.5">
                Terms & Conditions
              </li>
              <li className="text-light-white hover:text-green cursor-pointer transition-all ease-in-out duration-300 sm:text-sm text-xsm font-Inter font-normal mt-1">
                Privacy Policy
              </li>
              <li className="text-light-white sm:text-sm text-xsm font-Oswald font-semibold uppercase mt-6">
                Follow us
              </li>
              <div className="flex gap-[13px] mt-3.5">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/"
                  className="hover:translate-y-[-5px] transition-all ease-in-out duration-300"
                >
                  <Instagram />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/"
                  className="hover:translate-y-[-5px] transition-all ease-in-out duration-300"
                >
                  <Twitter />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="opacity-[38%] bg-light-white h-[2px] w-full"></div>
      <p className="text-center font-Inter font-normal text-xsm text-light-white sm:pt-5 sm:pb-[27px] py-4">
        © 2024 AMX Capital. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
