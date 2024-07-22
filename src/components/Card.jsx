const Card = (props) => {
  const { cardData } = props;
  return (
    <div className="flex drop-shadow-2xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-md  my-4 md:mx-5 md:max-w-96">
      <div className="w-1/3 overflow-hidden">
        <img
          src={
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" +
            cardData.poster_path
          }
          alt="poster"
          className="hover:scale-[1.3] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-2/3 px-2">
        <h2 className="text-lg text-white">
          {cardData.title || cardData.name}
        </h2>
        <div className="flex justify-evenly text-xs text-slate-300 py-3">
          <p>
            {props?.media_type == "tv"
              ? "Series"
              : cardData.media_type == "tv"
              ? "Series"
              : "Movie"}
          </p>
          <p>{cardData.original_language.toUpperCase()}</p>
          <p>
            {new Date(
              cardData.release_date || cardData.first_air_date
            ).getFullYear()}
          </p>
        </div>
        <p className="text-xs text-slate-300">
          {cardData.overview.substring(0, 160) + "..."}
        </p>
        <p className="bg-green-500 inline-block px-1  text-black mt-1">
          <i className="bi bi-star-half"></i> : {cardData.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Card;
