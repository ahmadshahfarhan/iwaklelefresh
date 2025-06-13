import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Produks } from "../../data/DataProduk";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import { SocialMedia } from "../../data/DataFooter";

import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const detailProduk = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const offset = currentPage * itemsPerPage;
  const currentItems = Produks.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Produks.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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
                  {produk.terjual}
                  <span className=" font-normal text-gray-400 text-[14px]">
                    {" "}
                    Terjual
                  </span>
                </h1>
                |
                <h1 className=" font-semibold text-black">
                  {produk.penilaian}
                  <span className=" font-normal text-gray-400 text-[14px]">
                    {" "}
                    Penilaian
                  </span>
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

      <div className="container mt-[50px]">
        <div className="flex flex-wrap justify-between max-w-[900px] mx-auto">
          <div>
            <h1 className=" font-semibold text-black text-[16px]">
              Description
            </h1>
            <h1 className=" font-semibold text-gray-500 text-sm max-w-[700px] w-full mt-2">
              {produk.description}
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-black text-[16px]">
              social media
            </h1>
            <span className="mt-2 flex items-center gap-x-2">
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
                    <IconComponent className="text-2xl text-black" />
                  </a>
                );
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="container mt-[50px] mb-[50px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-black font-semibold">Produk lainya</h1>
          <div className="relative mt-6">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              modules={[Navigation]}
              navigation={{
                nextEl: ".main-next-2",
                prevEl: ".main-prev-2",
              }}
              className="main-slider"
            >
              {currentItems.length > 0 ? (
                currentItems.map((produk, index) => {
                  return (
                    <SwiperSlide key={index} className="flex items-center">
                      <div
                        key={index}
                        onClick={() => navigate(`/produk/${produk.id}`)}
                        className=" transition-responsive p-3"
                      >
                        <img
                          className=" md:w-[285px] md:h-[285px] w-[270px] h-[170px]"
                          src={produk.img}
                          alt={produk.title}
                        />
                        <h1 className=" font-semibold text-xl">
                          {produk.title}
                        </h1>
                        {/* <h2 className=" text-md">{produk.description}</h2> */}
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
                    </SwiperSlide>
                  );
                })
              ) : (
                <div className="col-span-full flex justify-center items-center h-[100px]">
                  <h2 className="text-xl font-bold">Data tidak ditemukan</h2>
                </div>
              )}
            </Swiper>

            {/* Tombol Navigasi Main Slider */}
            <div className="absolute top-1/2 -left-6 z-10 cursor-pointer main-prev-2">
              <span>
                <GrPrevious />
              </span>
            </div>
            <div className="absolute top-1/2 -right-6 z-10 cursor-pointer main-next-2">
              <span>
                <GrNext />
              </span>
            </div>
          </div>
        </div>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </div>

      <Footer />
    </>
  );
};

export default detailProduk;
