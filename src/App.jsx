import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import {
  fetchMovies,
  fetchMoviesRate,
  fetchSearchMovies,
} from "./api/apiServices";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesRate, setMoviesRate] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);

  useEffect(() => {
    fetchMovies().then((res) => {
      setMovies(res.results);
    });
    fetchMoviesRate().then((res) => {
      setMoviesRate(res.results);
    });
  }, []);

  const handleSearch = async (searchValue) => {
    fetchSearchMovies(searchValue).then((res)=>{
      setMoviesSearch(res.results)
    }).catch((err)=>console.log(err))
  };

  return (
    <>
      <div className="bg-black">
        <Header onSearch={handleSearch} />
        <Banner />
        {moviesSearch.length > 0 ? (
          <MovieSearch title={"Kết quả tìm kiếm"} data={moviesSearch}/>
        ) : (
          <>
            <MovieList title={"Phim Hot"} data={movies} />
            <MovieList title={"Phim Đề Cử"} data={moviesRate} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
