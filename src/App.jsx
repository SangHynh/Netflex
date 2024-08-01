import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { fetchMovies } from "./api/apiServices";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-black">
        <Header />
        <Banner />
        <MovieList title={"Phim Hot"} />
        <MovieList title={"Phim Đề Cử"} />
      </div>
    </>
  );
}

export default App;
