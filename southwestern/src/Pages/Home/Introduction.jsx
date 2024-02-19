import IntroImage from "../../assets/banner/1-1.png";
import { IoMdPlay } from "react-icons/io";
import Video from "/video/video1.mp4";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <div className="bg-gray bg-opacity-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 py-8 items-center">
            <div className="p-4">
              <div className="relative w-full h-[414px] overflow-hidden shadow-2xl group cursor-pointer">
                <iframe
                  width="760"
                  height="415"
                  src="https://www.youtube.com/embed/XDqWLOXbjKE?si=DV-HXJ17BC5MmOZU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                {/* <img
                  src={IntroImage}
                  alt="introduction image"
                  className="absolute w-full h-full object-cover"
                /> */}
                {/* <div className="absolute w-full h-[144px] bg-black bottom-0 opacity-50"></div> */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange rounded-full z-20 flex justify-center items-center">
                  <IoMdPlay className="text-3xl text-white" />
                </div> */}

                {/* <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full bg-opacity-40 group-hover:scale-125 transition-all duration-300"></div>
                <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full bg-opacity-40 group-hover:scale-150 transition-all duration-300"></div>
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
                  <h3 className="text-white font-semibold text-xl">
                    Sneap Peek To School
                  </h3>
                </div> */}
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 items-start">
              <h3 className="uppercase text-2xl font-bold text-darkPurple">
                We at Southwestern
              </h3>
              <p className="text-gray text-sm text-justify">
                Southwestern School (SWS), an ISO 9001:2015 QMS certified
                organization-promoted by the team of academicians, researchers,
                planners and professionals at national and international
                levels-committed to providing quality education in Nepal which
                is equivalent to international standards. SWS is positioned
                ideally in proximity to Ring Road, has undoubtedly friendly,
                supportive and stimulating environment. At SWS, we are
                determined for providing our child with a safe and caring place
                to learn, grow, and have fun. Our goal is to help a child
                develop an affirmative attitude towards learning through
                relevant Curriculum and Pedagogy. Making all-rounder from every
                aspect is our main objectives.
              </p>
              <div className="bg-orange p-2 flex items-center gap-2 mt-2 relative overflow-hidden group">
                <Link to="/introduction">
                  <p className="text-xs uppercase font-semibold text-white tracking-wide">
                    find out more
                  </p>
                </Link>

                <IoMdPlay className="text-xs text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
