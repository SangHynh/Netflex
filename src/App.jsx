import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { fetchMovies, fetchMoviesRate } from "./api/apiServices";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesRate, setMoviesRate] = useState([]);

  useEffect(() => {
    fetchMovies().then((res) => {
      setMovies(res.results);
    });
    fetchMoviesRate().then((res) => {
      setMoviesRate(res.results);
    });
  }, []);

  return (
    <>
      <div className="bg-black">
        <Header />
        <Banner />
        <MovieList title={"Phim Hot"} data={movies}/>
        <MovieList title={"Phim Đề Cử"} data={moviesRate}/>
      </div>
    </>
  );
}

export default App;
