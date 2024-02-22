import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [admission, setAdmission] = useState(false);
  const [activities, setActivities] = useState(false);
  const [academics, setAcademics] = useState(false);
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const dropdownAnimation = (other) => {
    return other ? "animate-dropdown" : "";
  };

  const handleBurgerMenu = () => {
    setNav(!nav);
  };

  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };

  const handleAdmission = () => {
    setAdmission(!admission);
  };

  const handleAcademics = () => {
    setAcademics(!academics);
  };

  const handleActivities = () => {
    setActivities(!activities);
  };

  return (
    <>
      {/* --------- Top Header ------------ */}
      <div className="bg-blue py-1 hidden sm:block">
        <div className="container flex justify-between items-center text-white text-sm">
          <p>Call us : 01-4961914 | 01-4956065 | 01-4960080</p>
          <div className="flex gap-4">
            <Link to="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-darkOrange cursor-pointer transitio duration-300" />
            </Link>
            <Link to="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-darkOrange cursor-pointer transitio duration-300" />
            </Link>
            <Link
              to="https://www.youtube.com/@southwesternschoolkathmand1783"
              target="_blank"
            >
              <FaYoutube className="hover:text-darkOrange cursor-pointer transitio duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* --------- Second Header ---------- */}
      <div className="sticky top-0 left-0 bg-white z-30 shadow-md">
        <div className="container py-1 sm:py-0">
          <div className="flex justify-between items-center">
            <Link to="/">
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
            </Link>

            {/* -------- Desktop Menu ------- */}
            <nav className="hidden xl:block">
              <ul className="flex gap-4 text-sm tracking-wide text-slate-900 font-normal xl:flex-wrap ">
                <Link to={"/"}>
                  <li className="py-5 px-1">Home</li>
                </Link>

                <li
                  className="py-5 px-1 relative flex justify-center items-center gap-1"
                  onMouseEnter={() => setAboutUs(true)}
                  onMouseLeave={() => setAboutUs(false)}
                >
                  About Us <FaCaretDown />
                  {aboutUs && (
                    <nav
                      className={`bg-white absolute top-[60px] left-0 w-[200px]  z-20 ${dropdownAnimation(
                        aboutUs
                      )}`}
                    >
                      <ul className="flex flex-col text-darkPurple shadow-lg">
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

                <li
                  className="py-5 px-1 relative flex justify-center items-center gap-1"
                  onMouseEnter={() => setAdmission(true)}
                  onMouseLeave={() => setAdmission(false)}
                >
                  Admissions <FaCaretDown />
                  {admission && (
                    <nav
                      className={`bg-white absolute top-[60px] left-0 w-[200px]  z-20 ${dropdownAnimation(
                        admission
                      )}`}
                    >
                      <ul className="flex flex-col text-darkPurple shadow-lg">
                        <Link to="/admission-form">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Admission Form
                          </li>
                        </Link>
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

                <li
                  className="py-5 px-1 relative flex justify-center items-center gap-1"
                  onMouseEnter={() => setAcademics(true)}
                  onMouseLeave={() => setAcademics(false)}
                >
                  Academics <FaCaretDown />
                  {academics && (
                    <nav
                      className={`bg-white absolute top-[60px] left-0 w-[230px]  z-20 ${dropdownAnimation(
                        academics
                      )}`}
                    >
                      <ul className="flex flex-col text-darkPurple shadow-lg">
                        <Link to="/pre-primary">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Pre-Primary
                          </li>
                        </Link>
                        <Link to="/primary">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Primary
                          </li>
                        </Link>
                        <Link to="/lower-secondary">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Lower-Secondary
                          </li>
                        </Link>
                        <Link to="/secondary">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Secondary
                          </li>
                        </Link>
                      </ul>
                    </nav>
                  )}
                </li>

                <li
                  className="py-5 px-1 relative flex justify-center items-center gap-1"
                  onMouseEnter={() => setActivities(true)}
                  onMouseLeave={() => setActivities(false)}
                >
                  Activities <FaCaretDown />
                  {activities && (
                    <nav
                      className={`bg-white absolute top-[60px] left-0 w-[230px]  z-20 ${dropdownAnimation(
                        activities
                      )}`}
                    >
                      <ul className="flex flex-col text-darkPurple shadow-lg">
                        <Link to="/games-sports">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Games & Sports
                          </li>
                        </Link>
                        <Link to="/annual-function">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Annual Function
                          </li>
                        </Link>
                        <Link to="/parents-day">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Parents Day
                          </li>
                        </Link>
                        <Link to="/cca">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            CCA
                          </li>
                        </Link>
                        <Link to="/award-and-achievement">
                          <li className="p-4 font-medium hover:bg-blue hover:bg-opacity-10 border-t border-gray border-opacity-25">
                            Award & Achievements
                          </li>
                        </Link>
                      </ul>
                    </nav>
                  )}
                </li>

                <Link to="/notice-and-events">
                  <li className="py-5 px-1">Notice And Events</li>
                </Link>
                <Link to="/career">
                  <li className="py-5 px-1">Career</li>
                </Link>
                <Link to="/contact-us">
                  <li className="py-5 px-1">Contact Us</li>
                </Link>
                <Link to="/gallery">
                  <li className="py-5 px-1">Gallery</li>
                </Link>
              </ul>
            </nav>

            <div className="mr-2 xl:hidden" onClick={handleBurgerMenu}>
              <RxHamburgerMenu className="text-2xl" />
            </div>
          </div>

          {/* --------- mobile menu --------- */}
          <div
            // ref={navRef}
            // style={{
            //   maxHeight: `${nav ? `${navRef.current.scrollHeight}px` : "0px"}`,
            // }}
            className={`w-full xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${nav ? 'h-auto' : 'h-0 overflow-scroll'}`}
          >
            <ul className="flex flex-col gap-6  uppercase text-sm py-4 font-medium p-2">
              <Link to="/" onClick={handleBurgerMenu}>
                <li>Home</li>
              </Link>

              <li
                className="flex items-center gap-1 relative"
                onClick={handleAboutUs}
              >
                About Us <FaCaretDown />{" "}
              </li>
              {aboutUs && (
                <ul className="w-[200px] top-10 left-0 flex flex-col gap-4 ml-4">
                  <Link to="/introduction" onClick={handleBurgerMenu}>
                    <li>Introduction</li>
                  </Link>
                  <Link to="/our-mission" onClick={handleBurgerMenu}>
                    <li>Our Mission</li>
                  </Link>
                  <Link to="/our-facilities" onClick={handleBurgerMenu}>
                    <li>Our Facilities</li>
                  </Link>
                  <Link to="/our-team" onClick={handleBurgerMenu}>
                    <li>Our Team</li>
                  </Link>
                  <Link to="/our-strength" onClick={handleBurgerMenu}>
                    <li>Our Strength</li>
                  </Link>
                </ul>
              )}

              <li className="flex items-center gap-1" onClick={handleAdmission}>
                Admissions <FaCaretDown />
              </li>
              {admission && (
                <ul className="w-[200px] top-10 left-0 flex flex-col gap-4 ml-4">
                  <Link to="/admission-form" onClick={handleBurgerMenu}>
                    <li>Admission Form</li>
                  </Link>
                  <Link to="admission-policy" onClick={handleBurgerMenu}>
                    <li>Admission Policy</li>
                  </Link>
                  <Link to="/fee-structure" onClick={handleBurgerMenu}>
                    <li>Fee Structure</li>
                  </Link>
                  <Link to="/scholarship-program" onClick={handleBurgerMenu}>
                    <li>Scholarship Program</li>
                  </Link>
                  <Link to="/faq" onClick={handleBurgerMenu}>
                    <li>FAQs</li>
                  </Link>
                </ul>
              )}

              <li className="flex items-center gap-1" onClick={handleAcademics}>
                Academics <FaCaretDown />
              </li>
              {academics && (
                <ul className="w-[200px] top-10 left-0 flex flex-col gap-4 ml-4">
                  <Link to="pre-primary" onClick={handleBurgerMenu}>
                    <li>Pre Primary</li>
                  </Link>
                  <Link to="/primary" onClick={handleBurgerMenu}>
                    <li>Primary</li>
                  </Link>
                  <Link to="/lower-secondary" onClick={handleBurgerMenu}>
                    <li>Lower Secondary</li>
                  </Link>
                  <Link to="/secondary" onClick={handleBurgerMenu}>
                    <li>Secondary</li>
                  </Link>
                </ul>
              )}

              <li
                className="flex items-center gap-1"
                onClick={handleActivities}
              >
                Activities <FaCaretDown />
              </li>
              {activities && (
                <ul className="w-[200px] top-10 left-0 flex flex-col gap-4 ml-4">
                  <Link to="/games-sports" onClick={handleBurgerMenu}>
                    <li>Games & Sports</li>
                  </Link>
                  <Link to="/annual-function" onClick={handleBurgerMenu}>
                    <li>Annual Function</li>
                  </Link>
                  <Link to="/parents-day" onClick={handleBurgerMenu}>
                    <li>Parents Day</li>
                  </Link>
                  <Link to="/cca" onClick={handleBurgerMenu}>
                    <li>CCA</li>
                  </Link>
                  <Link to="/award-and-achievement" onClick={handleBurgerMenu}>
                    <li>Awards & Achievements</li>
                  </Link>
                </ul>
              )}

              <Link to="/notice-and-events" onClick={handleBurgerMenu}>
                <li>Notice And Events</li>
              </Link>

              <Link to="/career" onClick={handleBurgerMenu}>
                <li>Career</li>
              </Link>

              <Link to="/contact-us" onClick={handleBurgerMenu}>
                <li>Contact Us</li>
              </Link>

              <Link to="/gallery" onClick={handleBurgerMenu}>
                <li>Gallery</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
