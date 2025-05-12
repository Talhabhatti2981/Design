import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import sitepoint from '../assets/sitepoint.png';
import meundies from '../assets/meundies.png';
import woocommerce from '../assets/woocommerce.png';
const Company = () => {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 items-center">
        <div className="sm:w-[300px] w-full px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 font-semibold text-left shrink-0">
          Proud Partner at <br /> Hubspot & Segment
        </div>
        <div className="overflow-hidden w-full relative">
          <div className="flex animate-slide gap-10 w-max">
            <img src={slack} alt="Slack" className="h-10 object-contain" />
            <img src={amazon} alt="Amazon" className="h-10 object-contain" />
            <img src={sitepoint} alt="Sitepoint" className="h-10 object-contain" />
            <img src={meundies} alt="Meundies" className="h-10 object-contain" />
            <img src={woocommerce} alt="WooCommerce" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
