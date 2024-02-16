import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [admission, setAdmission] = useState(false);
  const [activities, setActivities] = useState(false);

  const dropdownAnimation = (other) => {
    return other ? "animate-dropdown" : "";
  };

  return (
    <>
      {/* --------- Top Header ------------ */}
      <div className="bg-blue py-1">
        <div className="container mx-auto  flex justify-between text-white text-sm">
          <p>Call us : 01-4961914 | 01-4956065 | 01-4960080</p>
        </div>
      </div>

      {/* --------- Second Header ---------- */}
      <div className="container mx-auto py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute w-full h-full">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-xl text-blue">
                Southwestern School
              </h1>
              <h3 className="text-xs text-orange">
                (ISO 9001:2015 QMS Certified School)
              </h3>
            </div>
          </div>

          <nav>
            <ul className="flex gap-4 text-sm tracking-wider text-slate-900 font-light">
              <Link to={"/"}>
                <li className="py-4 px-1">Home</li>
              </Link>

              <li
                className="py-4 px-1 relative flex justify-center items-center gap-1"
                onMouseEnter={() => setAboutUs(true)}
                onMouseLeave={() => setAboutUs(false)}
              >
                About Us <FaCaretDown />
                {aboutUs && (
                  <nav
                    className={`bg-white absolute top-[56px] left-0 w-[200px]  z-20 ${dropdownAnimation(
                      aboutUs
                    )}`}
                  >
                    <ul className="flex flex-col text-darkPurple">
                      <Link to={"/introduction"}>
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Introduction
                        </li>
                      </Link>
                      <Link to={"/our-mission"}>
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Our Mission
                        </li>
                      </Link>
                      <Link to={"/our-facilities"}>
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Our Facilities
                        </li>
                      </Link>
                      <Link to={"/our-team"}>
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Our Team
                        </li>
                      </Link>
                      <Link to={"/our-strength"}>
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Our Strength
                        </li>
                      </Link>
                    </ul>
                  </nav>
                )}
              </li>
              <Link to="/admission-form">
                <li className="py-4 px-1">Admission Form</li>
              </Link>
              <li
                className="py-4 px-1 relative flex justify-center items-center gap-1"
                onMouseEnter={() => setAdmission(true)}
                onMouseLeave={() => setAdmission(false)}
              >
                Admissions <FaCaretDown />
                {admission && (
                  <nav
                    className={`bg-white absolute top-[56px] left-0 w-[200px]  z-20 ${dropdownAnimation(
                      admission
                    )}`}
                  >
                    <ul className="flex flex-col text-darkPurple">
                      <Link to="/admission-policy">
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Admission Policy
                        </li>
                      </Link>
                      <Link to="/fee-structure">
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          Fee Structure
                        </li>
                      </Link>

                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        Scholarship Program
                      </li>
                      <Link to="/faq">
                        <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                          FAQs
                        </li>
                      </Link>
                    </ul>
                  </nav>
                )}
              </li>
              <li className="py-4 px-1">Academics</li>
              <li
                className="py-4 px-1 relative flex justify-center items-center gap-1"
                onMouseEnter={() => setActivities(true)}
                onMouseLeave={() => setActivities(false)}
              >
                Activities <FaCaretDown />
                {activities && (
                  <nav
                    className={`bg-white absolute top-[56px] left-0 w-[230px]  z-20 ${dropdownAnimation(
                      activities
                    )}`}
                  >
                    <ul className="flex flex-col text-darkPurple">
                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        Games & Sports
                      </li>
                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        Annual Function
                      </li>
                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        Parents Day
                      </li>
                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        CCA
                      </li>
                      <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                        Award & Achievements
                      </li>
                    </ul>
                  </nav>
                )}
              </li>
              <li className="py-4 px-1">Notice And Events</li>
              <li className="py-4 px-1">Career</li>
              <li className="py-4 px-1">Contact Us</li>
              <li className="py-4 px-1">Gallery</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
