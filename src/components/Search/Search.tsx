import { AiOutlineSearch } from "react-icons/ai";
import { useAppContext } from "../../context";
import { ChangeEvent } from "react";

const Search = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="relative items-center justify-center hidden w-3/6 lg:flex">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="w-full px-4 py-1 text-white placeholder-white bg-transparent border border-gray-300 border-opacity-75 rounded-md focus:outline-none focus:bg-transparent"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
        }}
      />
      <AiOutlineSearch className="absolute right-0 mr-2 text-lg text-white" />
    </div>
  );
};

export default Search;
