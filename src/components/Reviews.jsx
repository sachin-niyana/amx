import Image from "next/image";
import { reviews } from "./Helper";
import { GreenStar, Star } from "./Icon";

const Reviews = () => {
  return (
    <div className="bg-reviews-bg bg-cover">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[91px] lg:pb-[116px] md:py-20 sm:py-16 py-12">
        <h3 className="font-Oswald font-bold uppercase md:text-2xl sm:text-xl text-lg text-light-white text-center">
          Re<span className="text-green">views</span>
        </h3>
        <div className="flex justify-center sm:mt-[19px] mt-3">
          <Image
            width={190}
            height={34}
            src="/assets/reviews/star.png"
            alt="reviews"
          />
        </div>
        <div className="flex justify-center items-center mt-3.5 gap-3">
          <div className="flex justify-center gap-2.5 items-center">
            <GreenStar />
            <p className="text-light-white font-medium sm:text-sm text-xsm">
              Trustpilot
            </p>
          </div>
          <div className="w-[2px] h-[28px] bg-light-white opacity-20"></div>
          <p className="text-light-white font-medium sm:text-sm text-xsm">
            See All Reviews
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-[42px] mt-7">
          {reviews.map((value, index) => (
            <div
              key={index}
              className="group cursor-pointer relative flex justify-center"
            >
              <div className="h-full max-w-[500px] w-full rounded-2xl transition-all ease-in-out group-hover:rotate-[-3deg] duration-700 absolute bg-light-white"></div>
              <div className="w-full !max-w-[500px] rounded-2xl transition-all ease-in-out duration-700  group-hover:bg-green group-hover:border-white border-2 border-light-color bg-light-white py-3.5 px-[18px] relative">
                {value.image}
                <h4 className="font-Oswald font-semibold uppercase transition-all ease-in-out duration-700 group-hover:text-light-white text-Rich-Black sm:text-md text-sm pt-[18px]">
                  {value.title}
                </h4>
                <p className="text-light-black font-Inter transition-all ease-in-out duration-700 group-hover:text-light-white font-normal sm:text-sm text-xsm pt-2">
                  {value.discripstion}
                </p>
                <p className="text-light-black font-Oswald uppercase transition-all ease-in-out duration-700 group-hover:text-light-white font-medium sm:text-sm text-xsm pt-[11px]">
                  {value.link}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
