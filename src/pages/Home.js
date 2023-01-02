import { useEffect, useState } from 'react';
import getTrending from '../servisec/api';
import { NavLink } from 'react-router-dom';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState([null]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrending();
        setMovies(data.data.results);
        setisLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchTrending();
  }, []);
  // console.log('movies: ', movies);

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink style={{ textDecoration: 'none' }}>
              {movie.original_title}, ID: {movie.id}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setisLoading] = useState([null]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setisLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchCountries();
  }, []);
*/
