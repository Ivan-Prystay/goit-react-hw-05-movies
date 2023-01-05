import axios from 'axios';
const API_KEY = 'd06f3f881af415394d900f66e6d54b92';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

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

export async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getCast(movie_id) {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(movie_id) {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
