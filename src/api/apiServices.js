import { configs } from "./configs";

const url1 = "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
const url2 = "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

const fetchMovies = async () => {
  const response = await fetch(url1, configs);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchMoviesRate = async () => {
  const response = await fetch(url2, configs);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchMovieTrailer = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=vi`;
  const response = await fetch(url, configs);
  const data = await response.json();
  return data;
};

const fetchSearchMovies = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`
    const response = await fetch(url, configs);
    const data = await response.json();
    return data;
};

export { fetchMovies, fetchMoviesRate, fetchMovieTrailer, fetchSearchMovies };
