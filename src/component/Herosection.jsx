const Herosection = () => {
  return (
    <section id="home" className="container flex  flex-col md:flex-row justify-between items-center mx-auto pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex items-center gap-2 bg-gray-300 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
          <span className="text-blue-600 text-lg leading-none group-hover:scale-110 transition-transform">
            ⭐
          </span>
          <span className="text-sm font-medium leading-none">
            Jump Start Your Growth
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We boost the growth for{" "}
          <span className="text-blue-500">Startup to Fortune 500 </span>
          Companies
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversion,
          tools and more - all within the same one billing
        </p>

<div className="flex items-center gap-0 md:gap-4">
  <input
    type="email"
    placeholder="Email Address"
    className="h-[52px] md:h-14 flex-1 px-6 border border-black rounded-l-xl md:rounded-xl rounded-r-none md:rounded-r-xl focus:outline-none focus:border-blue-600"
  />
  <button
    className="h-[54px] md:h-14 px-8 bg-blue-500 text-white rounded-r-xl md:rounded-xl rounded-l-none md:rounded-l-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500"
  >
    →
  </button>
</div>
 </div>
<div className="w-full md:w-1/2 mt-[20px] md:mt-0 md:pl-12">
        <div className="relative w-full">
          <img
            src="/src/assets/hero-image.png"
            alt="Hero Image"
            className="w-full h-auto rounded-lg relative z-10 hover:scale-105 transition-transform"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Herosection;
