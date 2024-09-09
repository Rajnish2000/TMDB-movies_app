const HorizontalCards = ({ data }) => {
  return (
    // <div className="w-full min-h-[45vh] flex flex-col justify-around mb-10">
    <div className="w-full px-4 h-[41vh] overflow-x-auto overflow-y-hidden flex gap-3 mb-10">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className="lg:min-w-[220px] sm:min-w-[200px] h-full bg-zinc-900"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.profile_path
              }`}
              className="w-full h-[50%] mb-3 rounded-md bg-cover"
            />
            <div className="w-full h-[16vh] overflow-auto mt-6 px-4">
              <h3 className="text-xl text-white font-bold mb-2">
                {item.title ||
                  item.original_title ||
                  item.name ||
                  item.original_name}
              </h3>
              <p className="text-md text-white font-normal text-start">
                {item.overview.split(" ").slice(0, 9).join(" ")}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default HorizontalCards;
