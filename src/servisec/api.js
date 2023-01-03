import axios from 'axios';
const API_KEY = 'd06f3f881af415394d900f66e6d54b92';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

/*
Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть використовуватися наступні ендпоінти.

/trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
/search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
/movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
/movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
/movies/get-movie-reviews запит оглядів для сторінки кінофільму.
*/
// https://api.themoviedb.org/3/trending/movie/day?api_key=d06f3f881af415394d900f66e6d54b92

export async function getTrending() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie(query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
