import Billboard from "../components/Billboard";
import NavBar from "../components/NavBar";
import useMoviesList from "../hooks/useMoviesList";
import MovieList from "./MovieList";

export default function BrowsePage() {
  const {data, loading, error} = useMoviesList();

  console.log({data, loading, error});
  return (
    <div>
      <NavBar/>
      <Billboard/>
      <div className="pb-5">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <MovieList movies = {data}/>}


      </div>
    </div>
  )
}
