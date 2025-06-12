import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Produks } from "../../data/DataProduk";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const detailProduk = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const produk = Produks.find((item) => String(item.id) === id);

  if (!produk) {
    return <div>Produk tidak ditemukan</div>;
  }
  

  return (
    <>
      <Navbar />
      <div className="mt-[150px]">
        <div className=" container mx-auto justify-center flex">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start md:gap-x-[160px] lg:gap-x-[170px] max-w-[900px]">
            <div>
              {/* Main Slider */}
              <div className="relative">
                <Swiper
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  spaceBetween={0}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Thumbs, Navigation]}
                  navigation={{
                    nextEl: ".main-next",
                    prevEl: ".main-prev",
                  }}
                  className="main-slider"
                >
                  {[produk.img, ...produk.imgMultiple].map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`Product ${idx + 1}`}
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Tombol Navigasi Main Slider */}
                <div className="absolute top-1/2 -left-6 z-10 cursor-pointer main-prev">
                  <span>
                    <GrPrevious />
                  </span>
                </div>
                <div className="absolute top-1/2 -right-6 z-10 cursor-pointer main-next">
                  <span>
                    <GrNext />
                  </span>
                </div>
              </div>

              {/* Thumbnail Slider */}
              <div
                className={
                  produk.imgMultiple.length === 0 ? "hidden" : "relative mt-4"
                }
              >
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  watchSlidesProgress
                  modules={[Thumbs, Navigation]}
                  navigation={{
                    nextEl: ".thumb-next",
                    prevEl: ".thumb-prev",
                  }}
                  className="thumb-slider"
                >
                  {[produk.img, ...produk.imgMultiple].map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`Thumb ${idx + 1}`}
                        onMouseEnter={() => mainSwiperRef.current?.slideTo(idx)}
                        className="w-full h-20 max-w-[150px] mx-auto object-contain cursor-pointer md:border-[2px] border-[1px] hover:border-[#ffbd59] p-2 rounded-md transition"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Tombol Navigasi Thumbnails */}
                <div className="absolute top-[35px] -left-6 z-10 cursor-pointer thumb-prev">
                  <span>
                    <GrPrevious />
                  </span>
                </div>
                <div className="absolute top-[35px] -right-6 z-10 cursor-pointer thumb-next">
                  <span>
                    <GrNext />
                  </span>
                </div>
              </div>
            </div>

            {/* Kanan: Informasi Produk */}
            <div className="space-y-3 flex flex-col w-fit">
              <h1 className="font-bold text-4xl inline-flex">{produk.title}</h1>
              <div className=" flex gap-x-3">
                <h1 className=" font-semibold text-black">
                  217<span className=" font-normal text-gray-400 text-[14px]"> Terjual</span>
                </h1>
                |
               <h1 className=" font-semibold text-black">
                  200<span className=" font-normal text-gray-400 text-[14px]"> Penilaian</span>
                </h1>
              </div>
              <h2 className="font-bold text-[30px] text-[#ffbd59] inline-flex">
                <span>Rp</span>
                {produk.price}
              </h2>
              <div className=" flex-col inline-flex">
                <span className="text-black font-semibold text-sm inline-flex">
                  Size
                </span>
                <div className="flex gap-x-2 items-center mt-1">
                  {produk.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="bg-transparent hover:bg-black hover:text-white rounded-lg px-4 py-1 border border-gray-300 text-md text-black font-semibold"
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
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-10 text-center border border-gray-300 py-1"
                />
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="bg-[#ffbd59] rounded-lg px-7 py-2 text-md text-white font-semibold cursor-pointer w-fit mt-6">
                Continue Buying
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>{produk.description}</h1>
      </div>
      <Footer />
    </>
  );
};

export default detailProduk;
