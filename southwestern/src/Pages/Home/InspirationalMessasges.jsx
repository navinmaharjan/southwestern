import Chairman from "../../assets/messages/chairman-1.png"
import Principal from "../../assets/messages/principal.png"

const InspirationalMessages = () => {
  return (
    <>
      <div className="bg-gray bg-opacity-10">
        <div className="container mx-auto">
          <div className="w-full flex justify-center items-center">
            <div className="container mx-auto py-4 xl:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 items-center">
               
                <div className="flex justify-center items-center flex-col xl:w-[570px] 2xl:w-[460px] shadow-xl  xl:pt-4 order-2 2xl:order-none">
                  <div className="relative w-[350px] xl:w-[400px] h-60">
                    <img src={Chairman} alt="chairman"  className="absolute w-full h-full object-contain" />
                   
                  </div>
                  <div className="flex justify-center items-center flex-col w-full">
                    <h3 className="text-xl uppercase font-semibold text-blue py-2">
                      Message from Chairman
                    </h3>
                    <p className="text-sm text-justify text-gray px-8 pb-8">
                      Welcome to Southwestern School, a school that focuses on
                      providing environment where students are encouraged and
                      supported to pursue their dreams and ambitions. At SWS, we
                      value each student as an individual and nurture him/her
                      towards becoming a responsible and...
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center flex-col xl:w-[570px] 2xl:w-[460px] shadow-xl pt-4 order-3 2xl:order-none">
                  <div className="relative w-[350px] xl:w-[400px] h-60">
                  <img src={Principal} alt="principal"  className="absolute w-full h-full object-contain" />
                  </div>
                  <div className="flex justify-center items-center flex-col w-full">
                    <h3 className="text-xl uppercase font-semibold text-blue py-2">
                      Message from Principal
                    </h3>
                    <p className="text-sm text-justify text-gray px-8 pb-8">
                      Welcome to Southwestern School, a school that focuses on
                      providing environment where students are encouraged and
                      supported to pursue their dreams and ambitions. At SWS, we
                      value each student as an individual and nurture him/her
                      towards becoming a responsible and...
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold bg-orange text-white py-4 px-8 text-center order-1 xl:order-none md:col-span-2 2xl:col-auto">
                  Inspirational Messages
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationalMessages;
