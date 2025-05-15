const Banner = (props) => {
  return (
    <>
      {props.Banners.map((banners, index) => {
        return (
          <div className=" flex justify-center" key={index}>
            <img
              className=" lg:rounded-4xl rounded-3xl w-[1490px] lg:h-[340px] h-auto object-cover transition-responsive"
              src={banners.img}
              alt={banners.title}
            />
          </div>
        );
      })}
    </>
  );
};

export default Banner;
