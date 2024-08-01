import { configs } from "./configs";

const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1'
const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1'


const fetchMovies = async () => {
    console.log(import.meta.env.VITE_API_KEY);
    const response = await fetch(url1,configs);
    const data = await response.json();
    console.log(data);
    return data;
}

const fetchMoviesRate = async () => {
    console.log(import.meta.env.VITE_API_KEY);
    const response = await fetch(url2,configs);
    const data = await response.json();
    console.log(data);
    return data;
}

export {fetchMovies, fetchMoviesRate}