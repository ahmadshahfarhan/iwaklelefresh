import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";     
import { Produks } from "../../data/DataProduk";
import { useState } from "react";

const detailProduk = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const produk = Produks.find((item) => String(item.id) === id);

  if (!produk) {
    return <div>Produk tidak ditemukan</div>;
  }
  

  return (
    <>
      <Navbar />
      <div className="mt-[120px] container">
        <div className=" flex justify-center gap-x-[200px]">
          <img className=" w-[400px]" src={produk.img} alt="" />
          <div className=" space-y-3">
            <h1 className=" font-bold text-5xl ">{produk.title}</h1>
            <h2 className=" font-bold text-[30px] text-[#ffbd59]">
              <span>Rp</span>{produk.price}
            </h2>
            <div>
              <span className=" text-black font-semibold text-sm">Size</span>
              <div className=" flex gap-x-2 items-center mt-1">
                {produk.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-transparent hover:bg-black hover:text-white rounded-lg px-4 py-1 border-[1px] border-gray-300 text-md text-black font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="telp"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value)))}
                className="w-10 text-center border border-gray-300  py-1"
              />
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="bg-[#ffbd59] rounded-lg px-7 py-2 text-md text-white font-semibold cursor-pointer">
              Continue Buying
            </button>
          </div>
        </div>
        <div>
          <h1>{produk.description}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default detailProduk;
