import Image from "next/image";
import { expertise } from "./Helper";
import { Distinctiveness, Experience, Operations } from "./Icon";

const Expertise = () => {
  return (
    <div className="bg-Expertise-bg bg-cover" id="AboutUs">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[94px] lg:pb-[90px] md:py-16 sm:py-14 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((value, index) => (
            <div key={index} className="relative w-full flex justify-center">
              <Image
                className="max-w-[500px] hover:scale-105 transition-all ease-in-out duration-700 w-full sm:h-[356px] min-[400px]:h-[300px] h-[200px] object-cover rounded-[14px]"
                width={364}
                height={356}
                src={value.image}
                alt="expertise"
              />
              <p className="absolute sm:bottom-[8%] bottom-[6%] left-[50%] translate-x-[-50%] text-light-white font-Oswald font-semibold sm:text-lg text-sm">
                {value.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center flex-wrap justify-center xl:mt-24 lg:mt-20 md:mt-14 mt-8">
          <div className="lg:w-5/12 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <h3 className="font-Oswald font-bold uppercase md:text-2xl sm:text-xl text-lg text-light-white lg:text-start text-center">
                  Who <span className="text-green">We Are</span>
                </h3>
                <p className="font-Inter font-normal sm:text-sm text-xsm me-3 lg:text-start text-center text-light-white opacity-80 max-w-[409px] md:pt-4 sm:pt-2">
                  Ullamcorper id consequat metus ullamcorper semper sit erat
                  justo ultricies. Purus at eleifend risus viverra pellentesque.
                  Egestas in purus facilisi a donec vitae et in. Quis eget
                  fermentum orci odio pulvinar convallis accumsan egestas.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 w-full lg:mt-0 mt-10">
            <div className="flex min-[576px]:flex-row flex-col lg:justify-end justify-center items-center gap-8">
              <div className="flex flex-col gap-[29px]">
                <div className="group cursor-pointer relative">
                  <div className="h-full w-full rounded-2xl transition-all ease-in-out group-hover:rotate-[-3deg] duration-700 absolute bg-light-white"></div>
                  <div className="max-w-[311px] min-h-[351px] rounded-2xl transition-all ease-in-out duration-700  group-hover:bg-green group-hover:border-Rich-Black border-2 border-light-white bg-light-white py-3 px-[19px] relative">
                    <div className="w-[52px] h-[52px] group-hover:bg-light-white bg-green rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
                      <Experience />
                    </div>
                    <h4 className="font-Oswald font-semibold uppercase transition-all ease-in-out duration-700 group-hover:text-light-white text-Rich-Black sm:text-md text-sm pt-[15px]">
                      Expertise
                    </h4>
                    <p className="text-light-black font-Inter transition-all ease-in-out duration-700 group-hover:text-light-white font-normal sm:text-sm text-xsm pt-1.5">
                      With a collective experience spanning over a decade in the
                      financial markets and finance sector, AMX Capital brings
                      forth a wealth of proven expertise.
                    </p>
                  </div>
                </div>
                <div className="group cursor-pointer relative">
                  <div className="h-full w-full rounded-2xl transition-all ease-in-out group-hover:rotate-[-3deg] duration-700 absolute bg-light-white "></div>
                  <div className="max-w-[311px] min-h-[351px] rounded-2xl transition-all ease-in-out duration-700  group-hover:bg-green group-hover:border-Rich-Black border-2 border-light-white bg-light-white py-3 px-[19px] relative">
                    <div className="w-[52px] h-[52px] group-hover:bg-light-white bg-green rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
                      <Operations />
                    </div>
                    <h4 className="font-Oswald font-semibold transition-all uppercase ease-in-out duration-700 group-hover:text-light-white text-Rich-Black sm:text-md text-sm pt-[15px]">
                      Operations
                    </h4>
                    <p className="text-light-black font-Inter transition-all ease-in-out duration-700 group-hover:text-light-white font-normal sm:text-sm text-xsm pt-1.5">
                      Situated in the heart of Nottingham City Centre at our
                      headquarters, our team of expert analysts work tirelessly
                      to provide a service that consistently surpasses
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative">
                <div className="h-full w-full rounded-2xl transition-all ease-in-out group-hover:rotate-[-3deg] duration-700 absolute bg-light-white "></div>
                <div className="max-w-[311px] min-h-[351px] rounded-2xl transition-all ease-in-out duration-700  group-hover:bg-green group-hover:border-Rich-Black border-2 border-light-white bg-light-white py-3 px-[19px] relative">
                  <div className="w-[52px] h-[52px] group-hover:bg-light-white bg-green rounded-full flex justify-center items-center transition-all ease-in-out duration-700">
                    <Distinctiveness />
                  </div>
                  <h4 className="font-Oswald font-semibold uppercase transition-all ease-in-out duration-700 group-hover:text-light-white text-Rich-Black sm:text-md text-sm pt-[15px]">
                    Distinctiveness
                  </h4>
                  <p className="text-light-black font-Inter transition-all ease-in-out duration-700 group-hover:text-light-white font-normal sm:text-sm text-xsm pt-1.5">
                    At the core of our values is a commitment to a professional,
                    innovative and sophisticated approach to the financial
                    markets. We take pride in delivering a bespoke investment
                    service and tailored guidance, ensuring our clients not only
                    meet but exceed their financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
