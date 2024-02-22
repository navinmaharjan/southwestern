import { Link } from "react-router-dom";
import BannerImage from "../../assets/banner/9.jpeg";
import { useState, useEffect } from "react";

const NoticeEvents = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleActiveBox = (index) => {
    setActiveBox(index);
  };
  useEffect(() => {
    handleActiveBox(activeBox);
  }, [activeBox]);


  return (
    <>
      <div className="relative w-full h-28 sm:h-48">
        <img
          src={BannerImage}
          alt="banner image"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-2xl sm:text-4xl font-bold text-white z-10">
          <div className="flex flex-col items-center">
            <h3>Notice And Events</h3>
            <div className="flex justify-center text-xs sm:text-sm font-light">
              <Link to="/">
                <p className="hover:text-darkOrange">Home</p>
              </Link>
              <p>/</p>

              <p className="text-darkOrange">Notice And Events</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>

      <div className="container mx-auto py-4 xl:py-16">
       
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center gap-4">
                <p onClick={() => handleActiveBox(0)} className={`${activeBox === 0 ? "text-orange underline" : "text-slate-700"} cursor-pointer text-lg font-semibold`}>Notice</p>

                <p onClick={() => handleActiveBox(1)} className={`${activeBox === 1 ? "text-orange underline" : "text-slate-700"} cursor-pointer text-lg font-semibold`}>Events</p>
              </div>

              <div
                className={`${
                  activeBox === 0 ? "flex" : "hidden"
                } w-full h-80 justify-center items-center`}
              >
                Notice
              </div>
              <div
                className={`${
                  activeBox === 1 ? "flex" : "hidden"
                } w-full h-80 justify-center items-center`}
              >
                Events
              </div>
            </div>
          </div>
   
      </div>
    </>
  );
};

export default NoticeEvents;
