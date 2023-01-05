import { useEffect, useState } from 'react';
import { getMovie } from '../servisec/api';
import MoviesList from '../components/MoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        setisLoading(false);
        return;
      }
      try {
        const data = await getMovie(query);
        setMovies(data.data.results);
        setisLoading(true);
      } catch (error) {
        console.log(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  const hangleChange = e => {
    setCurrentQuery(e.currentTarget.value.trim());
  };

  const hangleSubmit = e => {
    e.preventDefault();
    setQuery(currentQuery);
  };

  return (
    <main>
      <form onSubmit={hangleSubmit}>
        <input placeholder="Search movie" onChange={hangleChange} />
        <button type="submit">🔎</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <MoviesList movies={movies} />
    </main>
  );
}
export default Movies;
