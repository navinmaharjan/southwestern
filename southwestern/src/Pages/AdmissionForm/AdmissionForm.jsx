import BannerImage from "../../assets/banner/9.jpeg";

const AdmissionForm = () => {
  return (
    <>
      <div className="relative w-full h-48">
        <img
          src={BannerImage}
          alt="banner Image"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-4xl font-bold text-white z-10">
          <h3>Online Admission Form</h3>
        </div>
        {/* <div className="bg-orange opacity-80 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div> */}
      </div>

      <div className="container mx-auto py-16">
        <form className="mx-[100px] p-10">
          <h3 className="text-slate-700 font-semibold">
            Student's Name (IN BLOCK LETTERS)
          </h3>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col">
              <p className="text-sm">First Name</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Middle Name</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
          </div>

          <h3 className="text-slate-700 font-semibold mt-4">Date of Birth</h3>
          <div className="flex gap-[52px] mt-2 items-center">
            <div className="flex flex-col">
              <p className="text-sm">Date of Birth</p>
              <input
                type="date"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Gender</p>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="bg-offWhite border border-gray border-opacity-20 w-4 p-1 focus:outline-none rounded-md"
                  />
                  <p>Male</p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="bg-offWhite border border-gray border-opacity-20 w-4 p-1 focus:outline-none rounded-md"
                  />
                  <p>Female</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex flex-col">
              <p className="text-sm">Address</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Admission For Grade</p>
              <select
                name="gradeAdmission"
                id="gradeAdmission"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              >
                <option value="none" className="text-sm">
                  Select Class
                </option>
                <option value="pre nursery" className="text-sm">
                  Pre Nursery
                </option>
                <option value="nursery" className="text-sm">
                  Nursery
                </option>
                <option value="lkg" className="text-sm">
                  LKG
                </option>
                <option value="ukg" className="text-sm">
                  UKG
                </option>
                <option value="1" className="text-sm">
                  1 (One)
                </option>
                <option value="2" className="text-sm">
                  2 (Two)
                </option>
                <option value="3" className="text-sm">
                  3 (Three)
                </option>
                <option value="4" className="text-sm">
                  4 (Four)
                </option>
                <option value="5" className="text-sm">
                  5 (Five)
                </option>
                <option value="6" className="text-sm">
                  6 (Six)
                </option>
                <option value="7" className="text-sm">
                  7 (Seven)
                </option>
                <option value="8" className="text-sm">
                  8 (Eight)
                </option>
                <option value="9" className="text-sm">
                  9 (Nine)
                </option>
                <option value="10" className="text-sm">
                  10 (Ten)
                </option>
                <option value="11" className="text-sm">
                  11 (Eleven)
                </option>
                <option value="12" className="text-sm">
                  12 (Twelve)
                </option>
                <option value="bachelor" className="text-sm">
                  Bachelor
                </option>
              </select>
              {/* <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              /> */}
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Name of the school last attended Name</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-[54px] mt-8">
            <div className=" flex flex-col gap-2">
              <p className="text-slate-700 font-semibold">
                Father's Information
              </p>
              <div className="flex flex-col">
                <p className="text-sm">Full Name</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Mobile Number</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Office Name</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Phone Number(Office)</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Email</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Occupation</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className="text-slate-700 font-semibold">
                Mother's Information
              </p>
              <div className="flex flex-col">
                <p className="text-sm">Full Name</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Mobile Number</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Office Name</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Phone Number(Office)</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Email</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Occupation</p>
                <input
                  type="text"
                  className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
                />
              </div>
            </div>
          </div>

          <h3 className="text-slate-700 font-semibold mt-8">
            Local Guardian/Contact Person
          </h3>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <p className="text-sm">Full Name</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Relation</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Mobile No.</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <p className="text-sm">Phone Number(Office)</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Email</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Occupation</p>
              <input
                type="text"
                className="bg-offWhite border border-gray border-opacity-20 w-96 p-1 focus:outline-none rounded-md"
              />
            </div>
          </div>

          <h3 className="text-slate-700 font-semibold mt-8">
            Please tick (✓) the appropriate box if the student needs any/all the
            following services (optional).
          </h3>
          <div className="flex gap-16 mt-4">
            <div className="flex gap-4">
              <p className="text-slate-700 font-semibold">Hostel</p>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="radio" name="hostel" />
                  <p>Yes</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="hostel" />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-slate-700 font-semibold">Bus</p>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="radio" name="bus" />
                  <p>Yes</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="bus" />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-slate-700 font-semibold">
                Lunch (Day Scholar)
              </p>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="radio" name="lunch" />
                  <p>Yes</p>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="lunch" />
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-slate-700 font-semibold mt-16">
            Any particular disease(s)/illness(es) student is suffering from? If
            yes, please give details.
          </h3>
          <input
            type="text"
            className="bg-offWhite border border-gray border-opacity-20 w-full p-1 focus:outline-none rounded-md mt-4"
          />

          <h3 className="text-slate-700 font-semibold mt-16">
            Does the student have any allergy? Is he/she under any medication?
            If yes, please give details.
          </h3>
          <input
            type="text"
            className="bg-offWhite border border-gray border-opacity-20 w-full p-1 focus:outline-none rounded-md mt-4"
          />

          <h3 className="text-slate-700 font-semibold mt-16">
            By checking the checkbox below you have confirmed the eligibility
            criteria to apply and you are ready for further application process.
          </h3>
          <div className="flex gap-1 mt-4">
            <input type="checkbox" />
            <p>I Agree</p>
          </div>

          <button className="bg-blue text-white w-full p-2 mt-8 hover:opacity-85">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
