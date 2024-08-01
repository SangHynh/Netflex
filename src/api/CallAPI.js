import { configs } from "./Configs";

const url = 'https://api.themoviedb.org/3/authentication'


const fetchMovies = async () => {
    console.log(import.meta.env.VITE_API_KEY);
    const response = await fetch(url,configs);
    const data = await response.json();
    console.log(data);
    return data;
}

export {fetchMovies}