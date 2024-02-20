import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "../assets/logo/logo.png";
import Logo2 from "../assets/logo/logo2.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <div className="bg-darkPurple p-2  sm:p-16">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <img
                  src={Logo}
                  alt="logo"
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-semibold text-xl text-blue">
                  Southwestern School
                </h1>
                <h3 className="text-xs text-orange">
                  (ISO 9001:2015 QMS Certified School)
                </h3>
                <div className="relative w-32 h-14 mt-4">
                  <img
                    src={Logo2}
                    alt="logo2"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl border-b border-orange tracking-wider uppercase font-medium">
                Contact
              </h3>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-blue" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xs">Address Line-1</h3>
                  <h3 className="text-white text-xs">
                    Address Line-2, Kathmandu, Nepal
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xs">
                    {" "}
                    01-4961914 | 01-4956065 | 01-4960080
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoMdMail className="text-blue" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xs">
                    {" "}
                    info@southwestern.com.np
                  </h3>
                </div>
              </div>

              <h3 className="text-darkOrange text-xl  tracking-wider  font-medium">
                Follow us on:
              </h3>
              <div className="flex gap-4">
                <Link to="https://facebook.com" target="_blank">
                  <FaFacebook className="hover:text-darkOrange cursor-pointer transitio duration-300 text-white" />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <FaTwitter className="hover:text-darkOrange cursor-pointer transitio duration-300 text-white" />
                </Link>
                <Link
                  to="https://www.youtube.com/@southwesternschoolkathmand1783"
                  target="_blank"
                >
                  <FaYoutube className="hover:text-darkOrange cursor-pointer transitio duration-300 text-white" />
                </Link>
              </div>
            </div>

            {/* Quicl Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl border-b border-orange tracking-wider uppercase font-medium">
                Quick Links
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                About Us
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                Admission Form
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                Activities
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                Academics
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                Upcoming Events
              </h3>
              <h3 className="text-white text-xs tracking-wider transition-all duration-300 hover:translate-x-2">
                Career
              </h3>
            </div>

            {/* Gallery */}
            <div className="h-60"></div>
          </div>
        </div>
      </div>
      <div className="bg-blue">
        <div className="container mx-auto w-full flex justify-center py-1">
          <p className="text-xs text-white tracking-wide">
            Southwestern School © {year}. All rights reserved | Powered by
            Radiant InfoTech
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
