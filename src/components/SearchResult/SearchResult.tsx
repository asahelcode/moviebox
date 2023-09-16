import { AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import { MovieCard } from "..";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";
import { Circles } from "react-loader-spinner";

const SearchResult = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const { searchTerm, genre, searchMovies } = state;

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_MOVIES", payload: [] });
    setTimeout(() => {
      (async () =>
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=4e70b6bbc8758bbab9ac0e7c2f536199`
          )
          .then((res) =>
            dispatch({ type: "SET_SEARCH_MOVIES", payload: res.data.results })
          ))();
    }, 8000);
  }, [searchTerm, dispatch]);

  const getGenreNames = (genreIds: number[]) => {
    return genreIds.map((genreId: number) => {
      const matchedGenre = genre.find((item) => item.id === genreId);
      return matchedGenre
        ? matchedGenre.id == genreIds[genreIds.length - 1]
          ? matchedGenre.name
          : matchedGenre.name + ", "
        : "";
    });
  };

  useEffect(() => {
    (async () => {
      await axios(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4e70b6bbc8758bbab9ac0e7c2f536199"
      ).then((res) =>
        dispatch({ type: "SET_GENRES", payload: res.data.genres })
      );
    })();
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl px-20 mx-auto mt-14">
      <div className="flex items-center justify-between my-10">
        <span className="lg:text-4xl text-md font-bold font-dmsans">
          Searched Result
        </span>
        <div className="flex items-center justify-center space-x-2">
          <span className="lg:text-lg text-md font-dmsans text-rose-700">
            See more
          </span>
          <AiOutlineRight className="text-rose-700 lg:text-lg text-sm" />
        </div>
      </div>

      {searchMovies.length === 0 ? (
        <div className=" flex justify-center items-center">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 gap-x-12 gap-y-24 grid-cols-1">
          {searchMovies.slice(0, 10).map((movie) => (
            <button onClick={() => navigate(`/movies/${movie.id}`)}>
              <MovieCard
                genre={getGenreNames(movie.genre_ids)}
                original_title={movie.original_title}
                popularity={movie.popularity}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
              />
            </button>
          ))}
        </div>
      )}
      {/* Top Movies */}
    </div>
  );
};

export default SearchResult;
