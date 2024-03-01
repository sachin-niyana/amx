import Image from "next/image";
import { whatsCard } from "./Helper";

const Choose = () => {
  return (
    <div className="bg-choose-bg bg-cover" id="WhatWeDo">
      <div className="container max-w-[1172px] mx-auto px-3 lg:pt-[94px] lg:pb-[138px] md:py-20 sm:py-16 py-12">
        <h3 className="font-Oswald font-bold md:text-2xl sm:text-xl text-lg text-light-white text-center">
          WHAT <span className="text-green">WE DO?</span>
        </h3>
        <div className="flex flex-wrap justify-center md:mt-12 sm:mt-10 mt-8">
          {whatsCard.map((value, index) => (
            <div
              key={index}
              className="lg:w-3/12 md:w-4/12 min-[576px]:w-6/12 w-full flex justify-center min-[576px]:p-2.5 py-2.5"
            >
              <div className="group">
                <div className="max-w-[270px] min-h-[439px] px-3 py-5 bg-dark-black rounded-[14px] border-2 border-light-green group-hover:border-green group-hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
                  <div className="w-[70px] h-[70px] group-hover:bg-green mx-auto bg-light-white rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
                    {value.image}
                  </div>
                  <p className="text-center text-gray font-Inter font-normal sm:txt-sm text-xsm pt-[15px]">
                    {value.discripstion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-Oswald font-bold md:text-2xl sm:text-xl text-lg text-light-white text-center lg:mt-28 md:mt-20 sm:mt-16 mt-12">
          WHY <span className="text-green">CHOOSE US</span>
        </h3>
        <div className="flex flex-wrap justify-center md:mt-[52px] sm:mt-10 mt-7">
          <div className="sm:w-6/12 w-full flex justify-center sm:p-3 py-3">
            <div className="max-w-[558px] sm:min-h-[545px] p-6 bg-dark-black rounded-[14px] border-2 border-light-green hover:border-green hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
              <Image
                width={558}
                height={545}
                src="/assets/choose/delivering.png"
                alt="delivering"
              />
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm pt-[18px]">
                At AMX Capital, we are dedicated to delivering an unparalleled
                and innovative world-class experience to our clients.
              </p>
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm">
                Our unwavering commitment to risk management and capital
                preservation is the cornerstone of everything we do, ensuring a
                secure and prosperous journey for each client we serve.
              </p>
            </div>
          </div>
          <div className="sm:w-6/12 w-full flex justify-center sm:p-3 py-3">
            <div className="max-w-[558px] sm:min-h-[545px] p-6 bg-dark-black rounded-[14px] border-2 border-light-green hover:border-green hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
              <Image
                width={558}
                height={545}
                src="/assets/choose/delivering.png"
                alt="delivering"
              />
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm pt-[18px]">
                At AMX Capital, we are dedicated to delivering an unparalleled
                and innovative world-class experience to our clients.
              </p>
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm">
                Our unwavering commitment to risk management and capital
                preservation is the cornerstone of everything we do, ensuring a
                secure and prosperous journey for each client we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
