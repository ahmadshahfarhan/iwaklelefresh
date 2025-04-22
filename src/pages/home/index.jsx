import React from "react";
import './index.css';
import Kemasan from "../../assets/svg/kemasanlele.svg";
import Aset from "../../assets/svg/element.svg";
import Gojek from "../../assets/svg/rating.svg";
import { FaStar } from "react-icons/fa";


const Home = () => {
  const span =
   `text-[#ffbd59] stroke-black stroke-1 
   [text-shadow:_-3px_-3px_0_#ffffff,_3px_-3px_0_#ffffff,_-3px_3px_0_#ffffff,_3px_3px_0_#ffffff,_0px_0px_2px_#ffffff]`;

  return (
    <>
      <div className=" pt-[84px]">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-[5px] sm:gap-[10px] md:gap-[15px] lg:gap-[120px] pt-6 overflow-y-hidden">
          <div className=" lg:mt-[-20px] relative z-20">
            <img
              className="absolute top-[-70px] left-[-140px] z-[-1] w-[132px]"
              src={Aset}
              alt="iwak lele fresh"
            />
            <h1 className=" font-bold text-[63px] md:text-6xl lg:text-7xl max-w-[508px] leading-none">
              Fresh, <span className={span}>Higenis</span> dan siap sesuai{" "}
              <span className={span}>Request</span>
            </h1>
            <h2 className=" font-bold text-xl mt-6 max-w-[300px] md:max-w-[481px]">
              Jual Lele Frozen, Segar (konsumsi) & Bibit, Bisa ecer dan grosir.
            </h2>
            <button className=" mt-7 font-bold text-lg py-3 px-6 rounded-4xl bg-[#ffbd59] hover:bg-transparent hover:text-red-500 hover:underline underline-offset-8 transition-all duration-300">
              Shop now
            </button>
          </div>
          <div className=" relative">
            <img
              className=" w-[320px] md:w-[480px] relative z-20 mt-[-80px] md:mt-0"
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
          className=" absolute top-0 right-0 z-[-1] hidden md:block"
          width="400"
          height="640"
          viewBox="0 0 400 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M80  0 L400 0 L400 640 L30 610 Z" fill="#FDBA58" />
        </svg>
        <svg
          className=" absolute top-0 right-0 z-[-1] block md:hidden"
          width="400"
          height="640"
          viewBox="0 0 400 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240  0 L400 0 L400 640 L30 2000 Z" fill="#FDBA58" />
        </svg>
        <div className=" absolute right-[-28px] z-10 top-24 hidden md:block">
          <h1 className="font-bold text-[97px] text-[#f5f3f37f] [writing-mode:vertical-rl] leading-none tracking-tight">
            IWAK LELE
          </h1>
        </div>
        <div className=" absolute right-0 z-10 top-[100px] block md:hidden overflow-hidden">
          <h1 className="font-bold text-[54px] text-[#f5f3f37f] [writing-mode:vertical-rl] leading-none tracking-tight">
            IWAK LELE FRESH
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
