import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-between gap-8 lg:flex-nowrap">
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full"></div>
              <h1 className="font-bold text-lg ml-2">The Next Design</h1>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              The copy warned the Little Blind Text that where it came from, it would have been rewritten a thousand times.
            </p>
            <div className="hidden lg:flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold mb-3 text-md">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Term of Use</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">How Its Work</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact US</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold mb-3 text-semimd">Get Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">Support Career</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">24h Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Quick Chat</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold mb-3 text-md">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Business</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold mb-3 text-md">Contact</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li><a href="#" className="hover:text-blue-600 transition">Whatsapp</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Support 24</a></li>
            </ul>
            <div className="flex lg:hidden gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;