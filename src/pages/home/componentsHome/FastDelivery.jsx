import { FaStar } from "react-icons/fa";

const FastDelivery = (props) => {
  return (
    <>
      <div className=" absolute top-[320px] lg:top-[430px] md:top-[320px] bottom-0 left-[120px] md:left-[-90px] z-20 transition-responsive">
        <div className="inline-flex items-center gap-x-2 bg-[#ebebeb] rounded-[100px] px-3 md:px-4 py-1 md:py-2">
          <img
            className=" bg-[#7ed95796] rounded-full py-1 px-1 w-[52px] md:w-[54px]"
            src={props.Gojek}
            alt="iwak lele fresh"
          />
          <div>
            <h1 className=" font-semibold text-xs md:text-sm">Fast Delivery</h1>
            <div className=" flex items-center gap-1 text-[11px] ">
              <FaStar className=" text-amber-300 text-[16px]" />
              <h2>4.5</h2>
              <h2>(10k Reviews)</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastDelivery;
