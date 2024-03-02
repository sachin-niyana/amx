import Image from "next/image";
import { whatsCard } from "./Helper";

const Choose = () => {
  return (
    <div className="bg-choose-bg bg-cover" id="WhatWeDo">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[94px] lg:pb-[138px] md:py-20 sm:py-16 py-12">
        <h3 className="font-Oswald font-bold md:text-2xl sm:text-xl text-lg text-light-white text-center">
          WHAT <span className="text-green">WE DO?</span>
        </h3>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 md:mt-12 sm:mt-10 mt-7">
          {whatsCard.map((value, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="group">
                <div className="w-full min-[1050px]:min-h-[439px] md:min-h-[465px] min-[450px]:min-h-[420px] min-h-[320px] px-3 py-5 bg-dark-black rounded-[14px] border-2 border-light-green group-hover:border-green group-hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
                  <div className="w-[70px] h-[70px] group-hover:bg-green mx-auto bg-light-white rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
                    {value.image}
                  </div>
                  <p className="text-center text-gray font-Inter font-normal sm:text-sm text-xsm pt-[15px]">
                    {value.discripstion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3
          className="font-Oswald font-bold md:text-2xl sm:text-xl text-lg text-light-white text-center lg:mt-28 md:mt-20 sm:mt-16 mt-12"
          id="WhyChooseUs"
        >
          WHY <span className="text-green">CHOOSE US</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-[52px] sm:mt-10 mt-7">
          <div className="w-full flex justify-center">
            <div className="max-w-[558px] sm:min-h-[545px] md:p-6 sm:p-5 p-4 bg-dark-black rounded-[14px] border-2 border-light-green hover:border-green hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
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
          <div className="w-full flex justify-center">
            <div className="max-w-[558px] sm:min-h-[545px] md:p-6 sm:p-5 p-4 bg-dark-black rounded-[14px] border-2 border-light-green hover:border-green hover:shadow-greenShadow transition-all ease-in-out duration-700 cursor-pointer">
              <Image
                width={558}
                height={545}
                src="/assets/choose/delivering.png"
                alt="delivering"
              />
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm pt-[18px]">
                We leverage cutting-edge technology and our analysts' advanced
                comprehension of both fundamental and macroeconomics to deliver
                a distinctive service that sets us apart.
              </p>
              <p className="font-Inter font-normal text-light-white sm:text-xmd text-sm">
                Our in-house research team consistently explores global
                opportunities in leading industries, empowering our clients to
                capitalise on strategic investment prospects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
