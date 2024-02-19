import FacilitiesData from "../../Data/OurFacilitiesData";
import BannerImage from "../../assets/banner/9.jpeg";

const Facilities = () => {
  return (
    <>
      <div className="relative w-full h-48">
      <img
          src={BannerImage}
          alt="banner image"
          className="absolute w-full h-full object-cover"
        />
      
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-4xl font-bold text-white z-10">
          <h3>Our Facilities</h3>
        </div>
        <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div>
      </div>
      <div className="container mx-auto py-16">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 w-2/3 ">
            <h3 className="uppercase text-2xl font-bold text-darkPurple">
              OUR FACILITIES
            </h3>
            <p className="text-justify text-slate-700">
              A growing body of research has found that school facilities can
              have a profound impact on both teacher and student outcomes. With
              respect to teachers, school facilities affect teacher recruitment,
              retention, commitment, and effort. With respect to students,
              school facilities affect health, behavior, engagement, learning,
              and growth in achievement. Thus, facility quality is an important
              predictor of teacher retention and student learning. Few are
              addressed below!
            </p>
            <h3 className="font-semibold">
              An additional information regarding school is mentioned below. We
              hope this help you know more about us:
            </h3>
            <div className="flex flex-col gap-3">
              {FacilitiesData.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.facilitiesHead}</h3>
                  <p className="text-justify text-slate-700">
                    {item.facilitiesDetail}
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

export default Facilities;
