import { CiSearch, CiMicrophoneOn } from "react-icons/ci";
import { RiShoppingBasketFill } from "react-icons/ri";

const Produk = (props) => {
  return (
    <>
      <div>
        <div className=" inline-flex items-center gap-2 border-[2px] border-[#efefef] bg-[#efefef] p-2 rounded-3xl">
          <CiSearch className="text-[27px] font-bold" />
          <input className=" outline-none" type="text" name="" id="" />
          <CiMicrophoneOn className="text-[27px] font-bold" />
        </div>

        <div className=" flex justify-center w-full mt-12">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-12 gap-6 transition-responsive">
            {props.Produks.map((produk, index) => {
              return (
                <div key={index} className=" transition-responsive p-3">
                  <img
                    className=" md:w-[285px] md:h-[285px] w-[285px] h-[185px]"
                    src={produk.img}
                    alt={produk.title}
                  />
                  <h1 className=" font-semibold text-2xl">{produk.title}</h1>
                  <h2 className=" text-md">{produk.description}</h2>
                  <div className=" flex justify-between items-center flex-wrap gap-y-1 transition-responsive">
                    <h3 className=" font-bold text-2xl">
                      <span>Rp</span>
                      {produk.price}
                    </h3>
                    <div className=" flex justify-center items-center gap-1 bg-[#f9cb43] rounded-3xl px-2 py-1">
                      <RiShoppingBasketFill />
                      <button className=" font-semibold text-xs">
                        Add Chart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;
