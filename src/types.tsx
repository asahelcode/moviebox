interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface Genre {
  id: number;
  name: string;
}

export interface AppState {
  searchTerm: string;
  searchMovies: Movie[];
  genre: Genre[]
}

export type AppAction =
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_SEARCH_MOVIES"; payload: Movie[] }
  | { type: "SET_GENRES"; payload: Genre[] }
