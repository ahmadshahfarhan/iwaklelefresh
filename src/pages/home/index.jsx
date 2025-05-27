import "../../style/home.css";
import Navbar from "../../components/Navbar";

import Kemasan from "../../assets/svg/kemasanlele.svg";
import Aset from "../../assets/svg/element.svg";
import Gojek from "../../assets/svg/rating.svg";

import HeroSection from "./componentsHome/HeroSection";
import Asymmetrical from "./componentsHome/Asymmetrical";
import { Testimoni } from "../../components/Testimoni";
import Banner from "../../components/Banner";
import Produk from "../../components/Produk/Produk";
import Footer from "../../components/Footer";

import { Banners } from "../../data/DataBanner";
import { reviews } from "../../data/DataTestimoni";
import { Produks } from "../../data/DataProduk";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-[78px] container">
        <HeroSection Aset={Aset} Kemasan={Kemasan} Gojek={Gojek} />
        <Asymmetrical />
        <div className="mt-[30px]">
          <Testimoni reviews={reviews} />
        </div>
        <div className="mt-[50px] md:space-y-12 space-y-8">
          <Banner Banners={Banners} />
          <Produk Produks={Produks} />
        </div>
      </div>
      <div className=" mt-[90px]">
        <Footer />
      </div>
    </>
  );
};

export default Home;
