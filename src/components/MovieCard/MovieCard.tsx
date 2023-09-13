import { BsSuitHeartFill } from "react-icons/bs";
import ImdbIcon from "../../assets/images/imdb.svg";
import TomatoIcon from "../../assets/images/berry.svg";

interface MovieCardProp {
  genre: string[];
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieCard = ({
  genre,
  original_title,
  popularity,
  poster_path,
  release_date,
  vote_average,
}: MovieCardProp) => {
  const url = "https://image.tmdb.org/t/p/original";

  return (
    <div data-testid="movie-card">
      <div className="relative">
        <img
          src={`${url}${poster_path}`}
          alt=""
          className="w-[250px] h-[370px]"
          data-testid="movie-poster"
        />
        <div className="bg-[#F3F4F6] p-2 w-fit bg-opacity-50 rounded-full absolute top-5 right-6 flex items-center justify-center">
          <BsSuitHeartFill className="text-lg text-gray-300" />
        </div>
      </div>

      <div className="flex flex-col mt-4 space-y-2 justify-start items-start">
        <div className="text-xs font-bold text-gray-400 font-dmsans">
          <span>USA, </span>
          <span data-testid="movie-release-date">{release_date.substring(0, 4)}</span>
        </div>
        <div className="text-lg font-bold text-gray-900 font-dmsans flex justify-start w-full">
          <span data-testid="movie-title">{original_title}</span>
        </div>
        <div className="flex items-center space-x-24">
          <div className="flex items-center space-x-2">
            <img src={ImdbIcon} alt="" />
            <span className="text-xs">
              {(vote_average * 10).toFixed(1)} / 100
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={TomatoIcon} alt="" />
            <span className="text-xs">
              {Math.ceil(popularity) < 100
                ? Math.ceil(popularity)
                : Math.ceil(popularity) - 100}{" "}
              %
            </span>
          </div>
        </div>
        <div className="font-dmsans font-bold text-gray-400 text-xs">
          {genre.map((name) => (
            <span>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
