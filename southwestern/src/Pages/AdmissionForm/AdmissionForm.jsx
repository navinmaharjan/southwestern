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
          <h3>Admission Form</h3>
        </div>
        <div className="bg-orange opacity-80 w-1/5 h-20 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2  text-7xl font-bold text-white"></div>
      </div>

      <div className="container mx-auto py-16">
        <form className="mx-[100px] bg-gray  bg-opacity-10 p-10">
          <h3 className="font-semibold py-2 bg-gray text-center text-white uppercase tracking-wider mb-2">
            Student's Details
          </h3>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Admission sought to class:</h3>
              <input type="text" className="h-8 focus:outline-none" />
            </div>
            <div className="flex gap-4 items-center">
              <h3>Sex:</h3>
              <div className="flex">
                <input type="checkbox" />
                <h3>Male</h3>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <h3>Female</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex gap-4 items-center">
              <h3>Name: </h3>
              <input
                type="text"
                placeholder="First Name"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
              <input
                type="text"
                placeholder="Middle Name"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Date of birth: </h3>
              <input
                type="date"
                placeholder="First Name"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Place of birth</h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Address: </h3>
              <input
                type="text"
                placeholder="Address"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Mother Tongue: </h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Language Spoken At Home: </h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <h3 className="pt-5 font-semibold">Medical Information</h3>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Blood Group: </h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Allergies: </h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <h3>Physical Disability: </h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Any Other Health Problems:</h3>
              <input
                type="text"
                className=" focus:outline-none placeholder:text-sm h-8 w-96"
              />
            </div>
          </div>

          <h3 className="pt-5 font-semibold">
            School History (Most recent school first)
          </h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col gap-2 ">
              <p>S.no</p>
              <input type="text" className="h-8" />
              <input type="text" className="h-8" />
            </div>
            <div className="flex flex-col gap-2 ">
              <p>School</p>
              <input type="text" className="h-8" />
              <input type="text" className="h-8" />
            </div>
            <div className="flex flex-col gap-2 ">
              <p>Class</p>
              <input type="text" className="h-8" />
              <input type="text" className="h-8" />
            </div>
            <div className="flex flex-col gap-2 ">
              <p>Duration(Year)</p>
              <input type="text" className="h-8" />
              <input type="text" className="h-8" />
            </div>
          </div>

          <h3 className="pt-5 font-semibold">Club Activities</h3>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Football</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Basketball</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Cricket</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Dance</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Music</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Public Speaking</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Drama</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Art & Craft</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Karate/Taekwando/Wushu</p>
            </div>
          </div>

          <h3 className="font-semibold py-2 bg-gray text-center text-white uppercase tracking-wider my-2">
            Parent's Details
          </h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h3>Father</h3>
              <input type="text" placeholder="Father's Name" className="w-80 h-8" />
            </div>
            <div className="flex items-center">
              <h3>Academic Qualification</h3>
              <input type="text" placeholder="Father's Name" className="w-80 h-8" />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Occupation</h3>
              <input type="text" placeholder="Father's Name" className="w-80 h-8" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h3>Mother</h3>
              <input type="text" placeholder="Mother's Name" className="w-80 h-8" />
            </div>
            <div className="flex items-center">
              <h3>Academic Qualification</h3>
              <input type="text" placeholder="Father's Name" className="w-80 h-8" />
            </div>
            <div className="flex gap-2 items-center">
              <h3>Occupation</h3>
              <input type="text" placeholder="Father's Name" className="w-80 h-8" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
