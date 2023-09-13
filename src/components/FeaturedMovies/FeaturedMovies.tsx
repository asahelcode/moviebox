import { AiOutlineRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "..";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";


interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const FeaturedMovies = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const { genre } = state;

  const [movies, setMovies] = useState<Movie[]>([]);

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

      await axios(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=4e70b6bbc8758bbab9ac0e7c2f536199"
      ).then((res) => setMovies(res.data.results));
    })();
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl px-20 mx-auto mt-14">
      <div className="flex items-center justify-between my-10">
        <span className="lg:text-4xl text-md font-bold font-dmsans">
          Featured Movie
        </span>
        <div className="flex items-center justify-center space-x-2">
          <span className="lg:text-lg text-md font-dmsans text-rose-700">
            See more
          </span>
          <AiOutlineRight className="text-rose-700 lg:text-lg text-sm" />
        </div>
      </div>

      {/* Top Movies */}
      <div className="grid lg:grid-cols-4 gap-x-12 gap-y-24 grid-cols-1">
        {movies.map((movie) => (
          <button onClick={() => navigate(`/movie/${movie.id}`)}>
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
    </div>
  );
};

export default FeaturedMovies;
