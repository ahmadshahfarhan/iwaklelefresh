import { useState, useEffect } from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import Filter from "./Filter";
import Pagination from "../Pagination";

const Produk = ({ Produks = [] }) => {
  const [Search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

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
      <div>
        <Filter setSearch={setSearch} Search={Search} />
        <div className=" flex justify-center w-full mt-12">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-12 gap-6 transition-responsive">
            {currentItems.length > 0 ? (
              currentItems.map((produk, index) => {
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
