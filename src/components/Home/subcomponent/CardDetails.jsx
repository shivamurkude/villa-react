const items = [
  { number: 34, title: "Building Finished Now1", top: "15rem" },
  { number: 34, title: "Building Finished Now2", top: "15rem" },
  { number: 34, title: "Building Finished Now3", top: "15rem" },
];
const CardDetails = () => {
  return (
    <div className="h-[35rem] md:h-[25rem] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem] xl:gap-[8rem] items-center md:items-start md:justify-center bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[5.5rem] w-[13rem] lg:h-[7rem] lg:w-[17rem] bg-pink-200 rounded-lg relative"
          style={{ top: item.top }}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="text-red-500 font-bold font-serif lg:text-3xl md:text-xl p-4">
              <h1>{item.number}</h1>
            </div>
            <div className="text-black font-serif font-bold lg:text-[1.1rem] md:text-[1xl] p-4">
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className="absolute h-[2rem] w-[2rem] bg-red-500 rounded-full right-[-1rem] top-[-1rem]"></div>
        </div>
      ))}
    </div>
  );
};

export default CardDetails;
