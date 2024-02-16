import Logo from "../assets/logo/logo.png";

const Header = () => {
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
              <h1 className="font-semibold text-xl text-blue">Southwestern School</h1>
              <h3 className="text-xs text-orange">(ISO 9001:2015 QMS Certified School)</h3>
            </div>
          </div>

            <nav>
                <ul className="flex gap-8 text-sm tracking-wide">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Admission Form</li>
                    <li>Admissions</li>
                    <li>Academics</li>
                    <li>Activities</li>
                    <li>Notice & Events</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                    <li>Gallery</li>
                </ul>
            </nav>

        </div>
      </div>
    </>
  );
};

export default Header;
