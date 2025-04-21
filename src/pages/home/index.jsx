import React from "react";
import Kemasan from "../../assets/svg/kemasanlele.svg";
import Aset from "../../assets/svg/element.svg";
import Gojek from "../../assets/svg/rating.svg";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className=" mt-[84px]">
        <div className="flex items-center justify-center flex-wrap gap-[120px] pt-6 ">
          <div className=" lg:mt-[-20px] relative">
            <img
              className="absolute top-[-70px] left-[-140px] z-[-1] w-[132px]"
              src={Aset}
              alt="iwak lele fresh"
            />
            <h1 className=" font-bold text-7xl max-w-[508px]">
              Fresh, <span className=" text-[#ffbd59] ">Higenis</span> dan siap
              sesuai <span className=" text-[#ffbd59]">Request</span>
            </h1>
            <h2 className=" font-bold text-2xl mt-6 max-w-[481px]">
              Jual Lele Frozen, Segar (konsumsi) & Bibit, Bisa ecer dan grosir.
            </h2>
            <button className=" mt-7 font-bold text-lg py-3 px-6 rounded-4xl bg-[#ffbd59] hover:bg-transparent hover:text-red-500 hover:underline underline-offset-8 transition-all duration-300">
              Shop now
            </button>
          </div>
          <div className=" relative">
            <img
              className=" w-[480px] relative z-20"
              src={Kemasan}
              alt="iwak lele fresh"
            />
            <div className=" absolute top-[430px] bottom-0 left-[-90px] z-20">
              <div className="inline-flex items-center gap-x-2 bg-[#ebebeb] rounded-[100px] px-4 py-2">
                <img
                  className=" bg-[#7ed95796] rounded-full py-1 px-1 w-[54px]"
                  src={Gojek}
                  alt="iwak lele fresh"
                />
                <div>
                  <h1 className=" font-semibold">Fast Delivery</h1>
                  <div className=" flex items-center gap-1 text-[11px]">
                    <FaStar className=" text-amber-300 text-[16px]" />
                    <span>4.5</span>
                    <span>(10k Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className=" absolute top-0 right-0 z-[-1] "
          width="400"
          height="640"
          viewBox="0 0 400 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M80  0 L400 0 L400 640 L30 610 Z" fill="#FDBA58" />
        </svg>
        <div className=" absolute right-[-28px] z-10 top-24">
          <h1 className="font-bold text-[97px] text-[#f5f3f37f] [writing-mode:vertical-rl]">
            IWAK LELE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
