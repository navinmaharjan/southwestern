import boardDirectorsData from "../../Data/BoardDirectors";

const BoardOfDirectors = () => {
  return (
    <>
      <div className="bg-darkPurple">
        <div className="container mx-auto py-16">
          <div className="flex justify-center flex-col items-center">
            <p className="text-darkOrange font-semibold sm:text-xl">MEET OUR</p>
            <h3 className="text-white font-bold text-2xl  sm:text-4xl">
              BOARD OF DIRECTORS
            </h3>
          </div>
          <div className="grid grid-cols-1 items-center py-8">
            <div className="col-span-3">
              <div className="flex flex-wrap justify-center gap-8 w-full items-center sm:px-32">
                {boardDirectorsData.map((item, index) => (
                  <div className="flex flex-col justify-center items-center gap-2 flex-wrap"  key={index}>
                    <div
                      className="relative w-48 h-60 border border-gray border-opacity-20 flex flex-col justify-center items-center"
                     
                    >
                        <img src={item.boardMemberImage} alt="board members"  className="absolute w-full h-full object-cover" />
                    
                    </div>
                    <h3 className="text-sm uppercase font-bold text-white">
                      {item.boardMemberName}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardOfDirectors;
