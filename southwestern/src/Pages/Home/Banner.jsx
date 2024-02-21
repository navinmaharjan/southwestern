import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import BannerData from "../../Data/Banner";
import Logo2 from "../../assets/logo/logo2.jpeg";

const Banner = () => {
  return (
    <>
      <Swiper
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        speed={5000}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        // className="mySwiper"
      >
        {BannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[380px] 2xl:h-[600px]">
              <img src={item.bannerImage} alt="banner image" className="absolute w-full h-full object-cover" />
              <div className="fixed top-0 right-0 w-20  sm:w-32">
                <img src={Logo2} alt="" />
              </div>
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-1/2">
                <div className="flex flex-col uppercase text-white items-start justify-start">
                  <h3 className="text-xl xl:text-3xl font-bold">Welcome to</h3>
                  <h1 className="text-3xl md:text-5xl xl:text-5xl  font-extrabold text-start tracking-wide">
                    Southwestern School
                  </h1>
                  <h3 className="xl:text-xl font-bold text-orange tracking-wider">
                    the spirit makes the master
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
