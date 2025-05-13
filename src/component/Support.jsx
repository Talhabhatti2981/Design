import { FcBarChart, FcIdea, FcPhone, FcHome } from "react-icons/fc";
const Support = () => {
  return (
    <section id='ourservices' className="bg-white py-16 shadow-md">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Future of Support with a New Shape
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discuss your goals, determine success metrics, and identify
            problems.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-800 rounded-full shadow-md"></div>
              <span className="text-gray-700 font-medium">
                UI Design & Content Strategy
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-800 rounded-full shadow-md"></div>
              <span className="text-gray-700 font-medium">
                Development Bring
              </span>
            </div>
          </div>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:scale-102">
            <FcBarChart className="text-4xl  mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Web Design
            </h3>
            <p className="text-gray-600 mb-4">
              One for all and all for one, Muskehounds are always ready
            </p>
            <a href="" className="text-blue-600 hover:underline font-bold">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:scale-102">
            <FcIdea className="text-4xl text-purple-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ad-Creatives
            </h3>
            <p className="text-gray-600 mb-4">
              Alphabet Village and the subline of her own road.
            </p>
            <a href="" className="text-blue-600 hover:underline font-bold">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:scale-102">
            <FcPhone className="text-4xl text-purple-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Little Blind Text should turn around and return.
            </p>
            <a href="" className="text-blue-600 hover:underline font-bold">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:scale-102">
            <FcHome className="text-4xl text-purple-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Infographics
            </h3>
            <p className="text-gray-600 mb-4">
              Nothing the copy said could convince her.
            </p>
            <a href="" className="text-blue-600 hover:underline font-bold">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
