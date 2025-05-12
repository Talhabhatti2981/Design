const Price = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h1 className="text-center text-3xl font-bold mb-12">Pricing</h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Starter</h2>
          <h3 className="text-4xl font-bold text-blue-600 mb-2">
            $2400<span className="text-base text-gray-600">/Mon</span>
          </h3>
          <p className="text-gray-600">Get started with all essential features.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">Professional</h2>
          <h3 className="text-4xl font-bold text-blue-600 mb-2">
            $4800<span className="text-base text-gray-600">/Mon</span>
          </h3>
          <p className="text-gray-600">Advanced tools and priority support.</p>
        </div>
      </div>

      <div className="  p-8 max-w-xl mx-auto flex flex-col items-center gap-4">
        <span className="text-xl font-semibold">250</span>
        <input type="range" min="1" max="500" defaultValue="250" className="w-full max-w-xs"
        />
        <p className="text-center text-gray-700">Ready To Get Started?</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Price;
