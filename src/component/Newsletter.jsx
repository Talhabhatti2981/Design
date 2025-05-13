const Newslettersection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-2xl overflow-hidden relative">
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <div className="w-1/2 h-full absolute top-0 right-0 bg-blue-700 clip-path-slant" />
        </div>
        <div className="relative z-10 px-6 md:px-16 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-blue-100 text-base">
                Join our newsletter to stay updated with the latest news,
                offers, and exclusive <br /> content delivered straight to your
                inbox.
              </p>
            </div>
            <div className="flex w-full max-w-md items-stretch">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow h-14 px-5 rounded-l-xl text-sm border border-white focus:outline-none"
              />
              <button className="h-14 bg-white text-blue-700 font-semibold px-5 rounded-r-xl hover:bg-blue-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newslettersection;
