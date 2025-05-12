const Herosection = () => {
  return (
    <section className="container flex  flex-col md:flex-row justify-between items-center mx-auto pt-24 pb-6 px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-black rounded-xl focus:outline-none focus:border-blue-600"
          />
          <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500">
            →
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:mt-0 md:pl-12">
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
