import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialData from "../../Data/Testimonial";

const Testimonials = () => {
  return (
    <>
      <div className="bg-gray bg-opacity-10">
        <div className="container mx-auto py-8 sm:py-24">
          <div className="flex justify-center flex-col items-start sm:pb-8">
            <p className="text-darkOrange font-semibold sm:text-xl">TESTIMONIAL</p>
            <h3 className="text-darkPurple font-bold text-2xl sm:text-4xl">
              Explore the experience
            </h3>
          </div>
          <Swiper
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={false}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
          >
            {testimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col gap-2 bg-white  p-4 justify-center items-center border border-gray border-opacity-20 ">
                    <p className="text-center text-base text-gray">{item.testimonialDetail}</p>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <img src={item.testimonialImage} alt="testimonial image"  className="absolute w-full h-full object-cover" />
                     
                    </div>
                    <div className="text-center">
                      <p className="text-gray">{item.testimonialName}</p>
                      <p className="text-gray">{item.testimonialProfession}</p>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
           
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;




