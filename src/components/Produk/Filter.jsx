import { CiSearch, CiMicrophoneOn } from "react-icons/ci";

const FilterProduk = ({ setSearch, Search }) => {
  return (
    <div className=" inline-flex items-center gap-2 border-[2px] border-[#efefef] bg-[#efefef] p-2 rounded-3xl">
      <CiSearch className="text-[27px] font-bold" />
      <input
        className=" outline-none"
        type="text"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CiMicrophoneOn className="text-[27px] font-bold" />
    </div>
  );
};

export default FilterProduk;
