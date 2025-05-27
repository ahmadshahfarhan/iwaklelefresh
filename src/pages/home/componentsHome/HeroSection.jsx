import FastDelivery from "./FastDelivery";

const HeroSection = ({ Aset, Kemasan, Gojek }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const span = `text-[#ffbd59] stroke-black stroke-1 
    [text-shadow:_-3px_-3px_0_#ffffff,_3px_-3px_0_#ffffff,_-3px_3px_0_#ffffff,_3px_3px_0_#ffffff,_0px_0px_2px_#ffffff]`;

  return (
    <>
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-[5px] sm:gap-[10px] md:gap-[15px] lg:gap-[120px] pt-6 transition-responsive">
        <div className=" relative z-20 transition-responsive">
          <img
            className="absolute top-[-70px] left-[-140px] z-[-1] w-[132px] hidden lg:block"
            src={Aset}
            alt="iwak lele fresh"
          />
          <h1 className=" font-bold text-[66px] md:text-6xl lg:text-7xl max-w-[370px] md:max-w-[508px] leading-[57px]">
            Fresh, <span className={span}>Higenis</span> dan siap sesuai{" "}
            <span className={span}>Request</span>
          </h1>
          <h2 className=" font-bold text-xl mt-6 max-w-[300px] md:max-w-[481px]">
            Jual Lele Frozen, Segar (konsumsi) & Bibit, Bisa ecer dan grosir.
          </h2>
          <button
            onClick={() => scrollToSection("produk")}
            className=" mt-7 font-bold text-lg py-3 px-6 rounded-4xl bg-[#ffbd59] hover:bg-transparent hover:text-red-500 hover:underline underline-offset-8 transition-all duration-300"
          >
            Shop now
          </button>
        </div>
        <div className="relative">
          <img
            className=" w-[310px] md:w-[480px] relative z-20 transition-responsive"
            src={Kemasan}
            alt="iwak lele fresh"
          />
          <FastDelivery Gojek={Gojek} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
