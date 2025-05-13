import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    id: 2,
    name: "John De Marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "She had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. Always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Been using their services for over a year. The platform is intuitive and powerful.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded. Truly professional.",
  },
];

const Testimonialsection = () => {
  return (
    <section id='testimonials' className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          What Our Happy Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover how our clients transformed their businesses with our solutions.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 30 },
          1024: { slidesPerView: 3.5, spaceBetween: 40 },
        }}
        modules={[Pagination, Navigation]}
        className="pb-20 mb-8" 
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white hover:shadow-xl transition duration-300 shadow-md rounded-xl p-6 text-center h-full flex flex-col items-center border border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-blue-500"
              />
              <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">
                “{testimonial.text}”
              </p>
              <h4 className="text-base font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonialsection;
