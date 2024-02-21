import { LuMonitorDot } from "react-icons/lu";
import { FaBed } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import { MdSportsTennis } from "react-icons/md";

const WhySouthwestern = () => {
  return (
    <>
      <div className="bg-darkPurple">
        <div className="container mx-auto sm:py-16 py-8">
          <div className="grid xl:grid-cols-4 sm: gap-4 items-center">
            <div className="col-span-3 xl:col-span-1 p-4 text-center">
              <p className="text-orange font-semibold text-sm">
                WORLD CLASS FACILITIES
              </p>
              <h3 className="text-white font-semibold text-xl sm:text-3xl tracking-wider">
                Why Southwestern Is Best Solution For Education
              </h3>
            </div>
            <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 p-4 gap-4 text-center">
              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <LuMonitorDot className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">
                  INTERACTIVE LEARNING
                </h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  The school will pursue its mission to develop independent
                  learners to prepare them for success.
                </p>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <FaBed className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">INFIRMARY</h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  The school has a separate and cheerful infirmary with a
                  qualified nurse who takes care of the health.
                </p>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <FaBusAlt className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">
                  SHUTTLE SERVICE
                </h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  SWS provides a unique shuttle service offering a pre-arranged
                  / pre-scheduled “shared ride” from school.
                </p>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <FaChalkboardTeacher className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">TEACHING STAFF</h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  We have been blessed at SWS with an outstanding and
                  experienced staff.
                </p>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <PiMusicNotesSimpleBold className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">MUSIC</h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  A variety of instruments including guitars, keyboards,
                  violins, drum sets, harmoniums and tablas for students .
                </p>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 border border-gray rounded-lg border-opacity-20 p-4">
                <MdSportsTennis className="text-orange text-5xl" />
                <h3 className="text-white font-bold sm:text-xl">
                  SPORTS FACILITIES
                </h3>
                <p className="text-center text-sm text-white text-opacity-60">
                  Along with academics, physical fitness is given importance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySouthwestern;
