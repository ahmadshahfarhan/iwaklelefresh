const Asymmetrical = () => {
  return (
    <>
      <svg
        className=" absolute top-0 right-0 z-[1] hidden md:block"
        width="400"
        height="640"
        viewBox="0 0 400 640"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80  0 L400 0 L400 640 L30 610 Z" fill="#FDBA58" />
      </svg>
      <svg
        className=" absolute top-0 right-0 z-[1] block md:hidden"
        width="400"
        height="640"
        viewBox="0 0 400 640"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M240  0 L400 0 L400 640 L30 2000 Z" fill="#FDBA58" />
      </svg>
      <div className=" absolute right-0 z-10 top-24 hidden md:block overflow-hidden transition-responsive">
        <h1 className="font-bold text-[97px] text-[#f5f3f37f] [writing-mode:vertical-rl] leading-none tracking-tight">
          IWAK LELE
        </h1>
      </div>
      <div className=" absolute right-0 z-10 top-[100px] block md:hidden overflow-hidden transition-responsive">
        <h1 className="font-bold text-[54px] text-[#f5f3f37f] [writing-mode:vertical-rl] leading-none tracking-tight">
          IWAK LELE FRESH
        </h1>
      </div>
    </>
  );
};

export default Asymmetrical;
