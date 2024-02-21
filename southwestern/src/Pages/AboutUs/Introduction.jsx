import { Link } from "react-router-dom";
import IntroductionDetail from "../../Data/IntroductionDetail";
import BannerImage from "../../assets/banner/9.jpeg"

const Introduction = () => {
  return (
    <>
      <div className="relative w-full h-28 sm:h-48">
        <img src={BannerImage} alt="banner Image"  className="absolute w-full h-full object-cover" />
      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl sm:text-4xl font-bold text-white z-10">
          <h3>Introduction</h3>
          <div className="flex justify-center text-xs sm:text-sm font-light">
            <Link to="/">
            <p className="hover:text-darkOrange">Home</p>
            </Link>
            <p>/</p>
            <p>About Us</p>
            <p> / </p>
            <p className="text-darkOrange"> Introduction</p>
          </div>
        </div>
        {/* <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>
      <div className="container mx-auto py-4 xl:py-16">
        <div className="flex sm:justify-center items-center">
          <div className="flex flex-col gap-4 xl:w-2/3 ">
            <h3 className="uppercase text-xl sm:text-2xl font-bold text-darkPurple">
              Introduction
            </h3>
            <p className="text-justify text-slate-700 text-sm sm:text-base">
              Southwestern School (SWS), an ISO 9001:2015 QMS certified
              organization-promoted by the team of academicians, researchers,
              planners and professionals at national and international
              levels-committed to providing quality education in Nepal which is
              equivalent to international standards. SWS is positioned ideally
              in proximity to Ring Road, has undoubtedly friendly, supportive
              and stimulating environment. At SWS, we are determined for
              providing our child with a safe and caring place to learn, grow,
              and have fun. Our goal is to help a child develop an affirmative
              attitude towards learning through relevant Curriculum and
              Pedagogy. Making all-rounder from every aspect is our main
              objectives.
            </p>
            <h3 className="font-semibold text-sm sm:text-base">
              An additional information regarding school is mentioned below. We
              hope this help you know more about us:
            </h3>
            <div className="flex flex-col gap-3">
              {IntroductionDetail.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.introHeading}</h3>
                  <p className="text-justify text-slate-700 text-sm sm:text-base">
                    {item.introDetail}
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

export default Introduction;
