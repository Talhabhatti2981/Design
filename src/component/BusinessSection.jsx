import { FcSearch } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";

const BusinessSection = () => {
  return (
    <section id='business' className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          How Can We Help Your Business?
        </h1>
        <p className="mt-4 text-gray-600">
          With Besnik, you build trust, enhance operations, and gain a partner
          committed to <br className="hidden sm:block" />
          your success.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
          <div className="text-4xl mb-4 flex justify-center">
            <FcSearch />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Find out what you need
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            We present you a proposal and discuss the details that matter most
            to your business.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
          <div className="text-4xl mb-4 flex justify-center text-blue-600">
            <FiSettings />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Work out the details
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            From communication protocols to engagement models, we keep things
            clear and efficient.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
          <div className="text-4xl mb-4 flex justify-center text-green-600">
            <TbRocket />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            We get to work fast
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            We move quickly with proven systems and transparent billing to meet
            your needs on time.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="font-bold bg-blue-700 px-6 py-3 rounded-2xl text-white hover:bg-blue-800 transition">
          Become A Partner
        </button>
      </div>
    </section>
  );
};

export default BusinessSection;
