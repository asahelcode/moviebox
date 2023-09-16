import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/images/Logo2.svg";
import { GoHome } from "react-icons/go";
import { BiCameraMovie, BiCalendar } from "react-icons/bi";
import { PiVideoFill } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Ads from "../../assets/images/ads.png";
import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

interface movieDetail {
  original_title: string;
  overview: string;
  poster_path: string;
  genres: Genre[];
  release_date: string;
  runtime: number;
  adult: boolean;
  vote_average: number;
  budget: number;
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({} as movieDetail);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e70b6bbc8758bbab9ac0e7c2f536199`
        )
        .then((res) => {
          setMovie(res.data);
        });
    })();
  }, [id]);

  const url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/6 border-r-2 rounded-r-5xl flex flex-col justify-start items-center space-y-2">
        <img src={Logo} alt="" className="my-7" />
        <div className=" w-3/5 flex items-start justify-center flex-col">
          <div className="navItem">
            <GoHome className="navbarIcon" />
            <span className="navText">Home</span>
          </div>

          <div className="navItem">
            <BiCameraMovie className="navbarIcon" />
            <span className="navText">Movies</span>
          </div>
          <div className="navItem">
            <PiVideoFill className="navbarIcon" />
            <span className="navText">TV Series</span>
          </div>
          <div className="navItem">
            <BiCalendar className="navbarIcon" />
            <span className="navText">Upcoming</span>
          </div>
        </div>
        <div className="border-rose-300 bg-[#F8E7EB] border-solid border-2 rounded-3xl py-8 px-4 space-y-2 flex justify-center items-center flex-col">
          <div className="text-[15px] font-bold text-poppins text-gray-500">
            <span>Play movie quizzes</span>
            <br />
            <span>earn free</span>
            <br />
            <span>free ticket</span>
          </div>

          <div className="text-xs font-medium font-poppins text-gray-400">
            <span>50k people are playing</span>
            <br />
            <span>now</span>
          </div>

          <button className="bg-rose-200 rounded-full px-5 py-2">
            <span className="text-rose-500 font-medium text-xs font-poppins">
              Start playing
            </span>
          </button>
        </div>
        <div className="flex space-x-2 items-center justify-center">
          <IoIosLogOut className="text-2xl text-gray-400" />
          <span className="text-xl font-semibold font-poppins text-gray-400">
            Log out
          </span>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex-1 py-10 w-full space-y-6 relative">
        {/**Trailer */}
        <img
          src={`${url}${movie?.poster_path}`}
          className=" object-cover object-center w-full h-1/3 rounded-3xl absolute"
        />

        <div className="w-full px-5 flex mt-5 flex-col absolute bottom-5">
          {/*Title */}
          <div className="flex justify-between w-full">
            <div className="flex text-[23px] font-semibold font-poppins text-gray-700 items-center">
              <span data-testid="movie-title">{movie?.original_title}</span>
              <BsDot />
              <span data-testid="movie-release-date">
                {movie?.release_date?.substring(0, 15)}
              </span>
              <BsDot />
              {movie?.adult ? (
                <>
                  <span>"PG-13" </span>
                  <BsDot />
                </>
              ) : (
                ""
              )}
              <span data-testid="movie-runtime">{movie?.runtime}min</span>

              <div className="ml-4 space-x-2">
                {movie?.genres?.map((genre) => (
                  <span className="bg-transparent border-2 rounded-full border-rose-100 py-1 px-5 text-[15px] font-poppins text-[#B91C1C]">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MdStarRate className="text-2xl text-yellow-500" />
              <span className="text-[25px] font-poppins">
                {" "}
                <span className="text-[25px] text-gray-300">
                  {movie?.vote_average?.toFixed(1)}
                </span>{" "}
                |{movie?.budget / Math.pow(10, 7)}M
              </span>
            </div>
          </div>

          {/*Overview*/}
          <div className="flex justify-between w-full mt-5">
            <div className="flex flex-col space-y-4 font-poppins w-3/5 text-[18px]">
              <span
                className="font-poppins text-gray-700"
                data-testid="movie-overview"
              >
                {movie?.overview?.substring(0, 250)} ...
              </span>

              <span>
                Director: <span>Joseph Kosinki</span>{" "}
              </span>
              <span>
                Writers: <span>Jim Cash, Jack Epp Jr, Peter Craig</span>
              </span>
              <span>
                Stars: <span>Tom Cruise, Jennifer Connelly, Val Kilmer</span>
              </span>

              <div className="flex relative w-3/4">
                <button className="flex items-center z-10 justify-center space-x-3 px-8 text-lg py-2 rounded-md bg-rose-700 text-white">
                  Top rated movie #65
                </button>
                <select
                  name=""
                  id=""
                  className="focus:outline-none ml-2 border-2 absolute left-56 z-0 py-2 pb-1 w-3/4 rounded-xl pl-6"
                >
                  <option value="">Awards 9 Nomination </option>
                  <option value="">4 Grammy</option>
                  <option value="">5 AMVC</option>
                </select>
              </div>
            </div>

            {/*options */}
            <div className="flex-1 flex-col space-y-5 justify-end items-start w-2/5">
              <div className="flex flex-col justify-center items-end w-full space-y-2 font-poppins">
                <button className="flex items-center justify-center space-x-3 w-4/5 px-12 py-2 rounded-md bg-rose-700 text-white">
                  <IoTicketSharp />
                  <span className="">See Showtimes</span>
                </button>
                <button className="flex items-center justify-center border-2 border-rose-200 space-x-3 w-4/5 px-12 py-2 rounded-md bg-rose-100 text-black">
                  <TfiMenuAlt />
                  <span className="">More watch options</span>
                </button>
                <img src={Ads} alt="" className="w-4/5 object-fit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
