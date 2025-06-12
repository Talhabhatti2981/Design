import { FcSearch } from "react-icons/fc";
import statsImg from "../assets/stats.webp"; // ✅ Correct import path

const Schedule = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <img
          src={statsImg}
          alt="Stats"
          className="w-full md:w-1/2 h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <FcSearch size={48} className="mx-auto mb-4" />
          <span className="text-amber-500 font-bold text-sm sm:text-base">SCHEDULE</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">
            Streamline Your Business With Smart Scheduling Solution
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl">
            Take control of your time and boost productivity with our intelligent scheduling system.
            Automate appointments, manage team availability, and deliver exceptional customer experiences
            through seamless calendar management.
          </p>
          <a
            href="#"
            className="text-blue-800 mt-6 inline-block font-bold text-base sm:text-lg hover:underline"
          >
            Explore Scheduling Features <span className="text-blue-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
