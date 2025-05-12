const Navbar = () => {
  return (

    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex">
          <div className="w-4 h-4 rounded-full bg-blue-800 hover:bg-blue-500 transition-colors"></div>
          <div className="w-4 h-4 rounded-full -ml-1 bg-red-600 hover:bg-red-500 transition-colors"></div>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 text-sm">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Our Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
        </ul>
        <div className="hidden md:block">
          <button className="py-2 px-4 rounded-2xl bg-blue-800 hover:bg-blue-600 text-white transition-colors">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <label htmlFor="menu-toggle" className="cursor-pointer text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <div className="peer-checked:block hidden md:hidden px-6 pb-4">
        <ul className="flex flex-col gap-3 text-gray-700 text-sm">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Our Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
        </ul>
        <div className="mt-4">
          <button className="w-full py-2 px-4 rounded-2xl bg-blue-800 hover:bg-blue-600 text-white transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
