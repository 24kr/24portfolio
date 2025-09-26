import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Miriam was an absolute pleasure from start to finish. They took the time to truly understand our business needs and translated them into a stunning and highly functional website",
      date: "March 30, 2025",
      image: "https://i.postimg.cc/MTr9j4Yn/client1.jpg",
      name: "Chen Xiuying",
      position: "Marketing Director",
    },
    {
      id: 2,
      quote:
        "Miriam truly understood our business needs through her modern and sleek design, making a site incredibly user-friendly. With her help, we had a significant increase in engagement and customer sales",
      date: "January 18, 2025",
      image: "https://i.postimg.cc/wvV7f8rB/client2.jpg",
      name: "Joshua Middletown",
      position: "Sales Director",
    },
    {
      id: 3,
      quote:
        "I was blown away by the website Miriam created for my business! Miriam crafted a incredibly user-friendly, that allows our customers to access information on any device. Since the launch, I've seen a significant increase in inquiries and bookings",
      date: "November 29, 2024",
      image: "https://i.postimg.cc/pdP9DL0S/client3.jpg",
      name: "Melanie Stone",
      position: "Business Owner",
    },
  ];

  return (
    <section className="testimonials section">
      <h2 className="section-title" data-heading="My clients say">
        Testimonials
      </h2>

      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="testimonials-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card bg-box rounded-lg p-6 mb-8">
                <div className="testimonial-quote text-skin text-2xl mb-4">
                  <i className="bx bxs-quote-alt-left"></i>
                </div>
                <p className="testimonial-description text-sm mb-4 text-justify">
                  {testimonial.quote}
                </p>
                <h3 className="testimonial-date text-base mb-6">
                  {testimonial.date}
                </h3>

                <div className="testimonial-profile flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-profile-img w-14 h-14 rounded-full mr-4"
                  />

                  <div className="testimonial-profile-data">
                    <span className="testimonial-profile-name block text-lg font-medium text-title">
                      {testimonial.name}
                    </span>
                    <span className="testimonial-profile-detail block text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-8"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
