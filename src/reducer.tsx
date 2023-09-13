import { AppAction, AppState } from "./types";

export const initialState: AppState = {
  searchTerm: "",
  searchMovies: [],
  genre: [],
};

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_SEARCH_MOVIES":
      return { ...state, searchMovies: action.payload };
    case "SET_GENRES":
      return { ...state, genre: action.payload };
    default:
      return state;
  }
};
