import { Link } from "react-router-dom";
import BannerImage from "../../assets/banner/9.jpeg";
import parentsDayData from "../../Data/ParentsDayData"

const AdmissionPolicy = () => {
  return (
    <>
      <div className="relative w-full h-48">
        <img
          src={BannerImage}
          alt="banner image"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl font-bold text-white z-10">
          <div className="flex flex-col items-center">
            <h3>Parents Day</h3>
            <div className="flex justify-center text-sm font-light">
              <Link to="/">
                <p className="hover:text-darkOrange">Home</p>
              </Link>
              <p>/</p>
              <p>Activities</p>
              <p> / </p>
              <p className="text-darkOrange">Parents Day</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>

      <div className="container mx-auto py-16">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 w-2/3 ">
            <div className="flex flex-col gap-3">
              {parentsDayData.map((item, index) => (
                <div key={index}>
                  <p className="text-justify text-slate-700 font-semibold ">
                    {item.heading}
                  </p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPolicy;
