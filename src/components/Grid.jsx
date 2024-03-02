import { reviews } from "./Helper";

const Grid = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-[94px] lg:pb-[138px] md:py-20 sm:py-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((value, index) => (
            <div
              key={index}
              className="group cursor-pointer relative flex justify-center"
            >
              <div className="h-full max-w-[500px] w-full rounded-2xl transition-all ease-in-out group-hover:rotate-[-3deg] duration-700 absolute bg-light-white"></div>
              <div className="w-full !max-w-[500px] rounded-2xl transition-all ease-in-out duration-700  group-hover:bg-green group-hover:border-Rich-Black border-2 border-light-white bg-light-white py-3.5 px-[18px] relative">
                {value.image}
                <h4 className="font-Oswald font-semibold uppercase transition-all ease-in-out duration-700 group-hover:text-light-white text-Rich-Black sm:text-md text-sm pt-[18px]">
                  {value.title}
                </h4>
                <p className="text-light-black font-Inter transition-all ease-in-out duration-700 group-hover:text-light-white font-normal sm:text-sm text-xsm pt-2">
                  {value.discripstion}
                </p>
                <p className="text-light-black font-Oswald transition-all ease-in-out duration-700 group-hover:text-light-white font-medium sm:text-sm text-xsm pt-[11px]">
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

export default Grid;
