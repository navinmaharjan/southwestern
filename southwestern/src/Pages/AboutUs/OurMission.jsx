import { Link } from "react-router-dom";
import missionData from "../../Data/OurMissionDetail";
import BannerImage from "../../assets/banner/9.jpeg";

const Mission = () => {
  return (
    <>
      <div className="relative w-full h-28 sm:h-48">
        <img
          src={BannerImage}
          alt="banner image"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl sm:text-4xl font-bold text-white z-10">
          <h3>Our Mission</h3>
          <div className="flex justify-center text-xs sm:text-sm font-light">
            <Link to="/">
            <p className="hover:text-darkOrange">Home</p>
            </Link>
            <p>/</p>
            <p>About Us</p>
            <p> / </p>
            <p className="text-darkOrange"> Our Mission</p>
          </div>
        </div>
        {/* <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>

      <div className="container mx-auto py-4 sm:py-16">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 sm:w-2/3 ">
            <div className="flex flex-col gap-3">
              {missionData.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.missionHead}</h3>
                  <p className="text-justify text-slate-700 text-sm sm:text-base">
                    {item.missionDetaail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
