import { CiSearch, CiMicrophoneOn } from "react-icons/ci";

const FilterProduk = ({ setSearch, Search }) => {
  return (
    <div className=" inline-flex items-center gap-2 border-[2px] border-[#dadada] bg-[#ebebeb] p-2 rounded-3xl">
      <CiSearch className="text-[27px] font-bold" />
      <input
        className=" outline-none w-[100px] md:w-auto"
        type="text"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <CiMicrophoneOn className="text-[27px] font-bold" /> */}
    </div>
  );
};

export default FilterProduk;
