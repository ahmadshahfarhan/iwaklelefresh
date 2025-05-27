import Lelepeople from "../assets/svg/footer.svg";
import logo from "../assets/images/logo.png";

import { SocialMedia, whatsapp } from "../data/DataFooter";

import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-end sm:justify-center md:justify-center  items-center bg-[#242322] py-3 md:py-0 md:bg-transparent mb-[-1px]">
        <img src={Lelepeople} alt="" className=" md:w-[130px] w-[80px]" />
        <h1 className=" font-extrabold text-5xl md:text-8xl text-white md:text-[#ffbd59] relative z-10 anton-sc-regular transition-responsive">
          GET IN TOUCH
        </h1>
        <div className=" md:border-[2px] bg-transparent border-[#808080] rounded-r-4xl p-2 md:ml-[-14px] transition-responsive">
          <button className="bg-[#ef3534] md:px-8 px-3 md:py-3 py-2 md:text-2xl text-lg rounded-4xl font-bold text-white ">
            whatsapp
          </button>
        </div>
      </div>
      <div className="">
        <div className=" bg-[#242322] p-6 px-9 relative ">
          <div className=" flex justify-between items-center">
            <h1 className=" text-[#ffbd59] font-bold md:text-8xl text-[60px] leading-[60px] md:leading-[100px] max-w-[370px] anton-sc-regular transition-responsive">
              IWAK LELE FRESH
            </h1>
            <div>
              <h1 className=" text-white font-bold text-xl hidden md:block">Social Media</h1>
              <div className=" flex items-center justify-center text-center gap-3 mt-3">
                {SocialMedia.map((item, index) => {
                  const iconMap = {
                    instagram: FaInstagram,
                    whatsapp: FaWhatsapp,
                    tiktok: FaTiktok,
                    youtube: FaYoutube,
                    facebook: FaFacebook,
                  };
                  const IconComponent = iconMap[item.icon.toLowerCase()];
                  return (
                    <a target="_blank" href={item.link} key={index}>
                      <IconComponent className="text-2xl text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <img
            className=" md:w-[270px] w-[110px] bg-[#ffffff] rounded-e-full md:rounded-full md:p-6 p-3 absolute md:top-9 md:left-1/2 bottom-0 left-[-9px] top-[-60px] overflow-hidden transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-responsive"
            src={logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
