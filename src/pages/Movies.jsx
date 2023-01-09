import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../servisec/api';
import MoviesList from '../components/MoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      try {
        const data = await getMovie(query);
        setMovies(data.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const hangleChange = e => {
    setCurrentQuery(e.currentTarget.value.trim());
  };

  const hangleSubmit = e => {
    e.preventDefault();
    if (currentQuery === '' || currentQuery === query) {
      return setIsLoading(false);
    }
    setSearchParams({ [e.currentTarget.name]: currentQuery });
    setIsLoading(true);
  };

  return (
    <main>
      <form onSubmit={hangleSubmit} name="query" value={query}>
        <input placeholder="Search movie" onChange={hangleChange} />
        <button type="submit">🔎</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
    </main>
  );
}
export default Movies;
