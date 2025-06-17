import { useState, useEffect } from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import Pagination from "../Pagination";
import { FaArrowCircleRight } from "react-icons/fa";

const Produk = ({ id, Produks = [] }) => {
  const [Search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const navigate = useNavigate();

  const filterData = Produks.filter((item) =>
    item.title.toLowerCase().includes(Search.toLocaleLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const currentItems = filterData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filterData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [Search]);

  return (
    <>
      <div id={id} className="mb-[140px]">
        <Filter setSearch={setSearch} Search={Search} />
        <div className=" flex justify-center w-full md:mt-12 mt-3 cursor-pointer">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-12 gap-6 transition-responsive">
            {currentItems.length > 0 ? (
              currentItems.map((produk, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => navigate(`/produk/${produk.slug}`)}
                    className=" transition-responsive p-3"
                  >
                    <img
                      className=" md:w-[285px] md:h-[285px] w-[270px] h-[170px]"
                      src={produk.img}
                      alt={produk.title}
                    />
                    <h1 className=" font-semibold text-md leading-[17px] md:leading-[23px] md:text-xl">
                      {produk.title}
                    </h1>
                    {/* <h2 className=" text-md">{produk.description}</h2> */}
                    <div className=" flex justify-between items-center flex-wrap gap-y-1 transition-responsive">
                      <h3 className=" font-bold text-2xl">
                        <span>Rp</span>
                        {produk.sizes[0].price.toLocaleString("id-ID")}
                      </h3>
                      {/* <div className=" flex justify-center items-center gap-1 bg-[#f9cb43] rounded-3xl px-2 py-1">
                        <RiShoppingBasketFill />
                        <button className=" font-semibold text-xs">
                          Add Chart
                        </button>
                      </div> */}
                    </div>
                    <button
                      className="cursor-pointer mt-1 bg-green-100 hover:bg-green-200 transition px-2 py-1 rounded-md"
                      onClick={() => {
                        navigate(`/produk/${produk.slug}`);
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        });
                      }}
                    >
                      <span className=" flex items-center gap-x-2">
                        <h1 className=" font-semibold text-md">see more</h1>
                        <FaArrowCircleRight className="text-green-500" />
                      </span>
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full flex justify-center items-center h-[100px]">
                <h2 className="text-xl font-bold">Data tidak ditemukan</h2>
              </div>
            )}
          </div>
        </div>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </div>
    </>
  );
};

export default Produk;
