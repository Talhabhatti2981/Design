import Navbar from './component/navbar';
import Herosection from './component/Herosection';
import Logo from './component/logo';
import Purposesection from './component/Purposesection';
import BusinessSection from './component/BusinessSection';
import Schedule from './component/Schedule';
import Price from './component/Price';
import Support from './component/Support';
import Testimonial from './component/testimonial';
import Newslettersection from './component/Newsletter';
import Footer from './component/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Logo/>
      <Purposesection/>
      <BusinessSection/>
      <Schedule/>
      <Price/>
      <Support/>
      <Testimonial/>
      <Newslettersection/>
      <Footer/>
    </div>
  );
}

export default App;
