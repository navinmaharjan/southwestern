import LifeAtData from "../../Data/LifeAt";

const LifeAt = () => {
    return (
    <>
      <div>
        <div className="grid grid-cols-3 relative w-full group">
          {LifeAtData.map((item, index) => (
            <div
              className="relative h-80 w-full overflow-hidden bg-darkPurple"
              key={index}
            >
                <img src={item.lifeAtImage} alt="life at images" className="absolute w-full h-full object-cover" />
            
              <div className="absolute w-full h-80 bg-darkPurple transition-all duration-500 bg-opacity-80 hover:bg-opacity-0 overflow-hidden"></div>
            </div>
          ))}
          <div className="absolute top-[47%] right-[35%] -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300 group-hover:opacity-0">
            <div className="flex flex-col uppercase text-white items-start">
              <h3 className="text-3xl font-bold">Life At</h3>
              <h1 className="text-7xl font-extrabold text-start tracking-wide text-orange">
                Southwestern
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeAt;
