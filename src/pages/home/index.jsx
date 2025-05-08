import "../../style/home.css";
import Navbar from "../../components/Navbar";

import Kemasan from "../../assets/svg/kemasanlele.svg";
import Aset from "../../assets/svg/element.svg";
import Gojek from "../../assets/svg/rating.svg";

import HeroSection from "./components/HeroSection";
import Asymmetrical from "./components/Asymmetrical";
import {Testimoni} from "../../components/Testimoni";

const Home = () => {
  return (
    <>
      <Navbar />  
      <div className=" mt-[78px] container">
        <HeroSection Aset={Aset} Kemasan={Kemasan} Gojek={Gojek} />
        <Asymmetrical />
        <div className="mt-[30px]">
          <Testimoni />
        </div>
      </div>
    </>
  );
};

export default Home;
