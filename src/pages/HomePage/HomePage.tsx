import {
  FeaturedMovies,
  Footer,
  Header,
  Hero,
  SearchResult,
} from "../../components";
import { useAppContext } from "../../context";

const HomePage = () => {
  const { state } = useAppContext();
  const { searchTerm } = state;

  console.log(state);
  return (
    <div className="relative">
      <Header />
      <Hero />
      {searchTerm ? <SearchResult /> : <FeaturedMovies />}
      <Footer />
    </div>
  );
};

export default HomePage;
