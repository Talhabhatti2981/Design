import { FcSearch } from "react-icons/fc";
const PurposeSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Purpose of the Convoy is to Keep Your Team Connected
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empower collaboration, improve productivity, and build solutions
            that make a difference.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Built for Impact
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our platform is designed to help teams achieve more together.
              Whether you're building a startup or scaling an enterprise, we
              provide the tools to collaborate effectively, drive innovation,
              and create real impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Seamless Communication
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Enable your team to stay in sync with clear, consistent
              communication. From task management to shared goals, Convoy
              ensures everyone stays aligned, no matter where they are.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Secure & Scalable
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Protect your team's data and scale your operations with a secure
              platform. We ensure your organization is equipped for growth with
              secure and flexible solutions for any size team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
