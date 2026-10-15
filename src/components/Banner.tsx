import banner from "../assets/banner-stack.png"
const Banner = () => {
    return (
      <div className="container mx-auto flex justify-between mt-20">
        <div className="mt-25">
          <h1 className="text-5xl font-bold">
            Build Your Ideal <br />{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text inline-block">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-600 max-w-md pt-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-10">
            <button className="btn font-bold text-white bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 rounded-xl mr-2">
              Explore Technologies
            </button>
            <button className="btn rounded-xl ">Learn More</button>
          </div>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    );
};

export default Banner;