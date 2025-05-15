import Lelepeople from "../assets/svg/Footer.svg";
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
      <div className=" flex justify-center items-center">
        <img src={Lelepeople} alt="" className=" w-[130px]" />
        <h1 className=" font-extrabold text-8xl text-[#ffbd59] relative z-10 anton-sc-regular">
          GET IN TOUCH
        </h1>
        <div className=" border-[2px] bg-transparent border-[#808080] rounded-r-4xl p-2 ml-[-14px]">
          <button className="bg-[#ef3534] px-8 py-3 rounded-4xl text-2xl font-bold text-white ">
            whatsapp
          </button>
        </div>
      </div>
      <div>
        <div className=" bg-[#242322] p-6 px-9 relative ">
          <div className=" flex justify-between items-center">
            <h1 className=" text-[#ffbd59] font-bold text-8xl max-w-[370px] anton-sc-regular">
              IWAK LELE FRESH
            </h1>
            <div>
              <h1 className=" text-white font-bold text-xl">Social Media</h1>
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
                      {IconComponent && (
                        <IconComponent className="text-2xl text-white" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <img
            className=" w-[270px] bg-[#efefef] rounded-full p-6 absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
