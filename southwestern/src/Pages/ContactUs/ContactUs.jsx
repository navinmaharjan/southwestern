import { Link } from "react-router-dom";
import BannerImage from "../../assets/banner/9.jpeg";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AdmissionPolicy = () => {
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
            <h3>Contact Us</h3>
            <div className="flex justify-center text-xs sm:text-sm font-light">
              <Link to="/">
                <p className="hover:text-darkOrange">Home</p>
              </Link>
              <p>/</p>

              <p className="text-darkOrange">Contact Us</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-orange opacity-60 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>

      <div className="container mx-auto py-4 sm:py-16">
        <div className="flex xl:items-center bg-[#FAFAFA] shadow-lg flex-col xl:flex-row">
          <div className="xl:w-1/2 p-4 xl:p-8 flex flex-col gap-2">
            <h3 className="text-slate-700 font-semibold">Contact Us</h3>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-blue" />
              <div className="flex flex-col gap-2">
                <h3 className="text-sm"> info@southwestern.com.np</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue" />
              <div className="flex flex-col gap-2">
                <h3 className=" text-sm">
                  {" "}
                  01-4961914 | 01-4956065 | 01-4960080
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-blue" />
              <div className="flex flex-col gap-2">
                <h3 className=" text-sm">Basundhara, Kathmandu, Nepal</h3>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-slate-700 font-semibold">
                Drop Us A Message
              </h3>
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 placeholder:text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 placeholder:text-sm"
                />
                <input
                  type="text-area"
                  placeholder="Your Message"
                  className="p-2 placeholder:text-sm"
                />
                <button type="submit" className="bg-blue p-2 text-white">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="xl:w-1/2 p-4 sm:p-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.288472148348!2d85.32247367631062!3d27.73924707616439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194353e92535%3A0x16ac466d4804b3f0!2ssouthwestern%20school!5e0!3m2!1sen!2snp!4v1708336579455!5m2!1sen!2snp"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPolicy;
