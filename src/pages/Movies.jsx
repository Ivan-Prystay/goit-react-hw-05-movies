import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../servisec/api';
import MoviesList from '../components/MoviesList';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');

  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
    setSearchParams({ [e.currentTarget.name]: currentQuery });
    console.log('[e.currentTarget.name]: ', [e.currentTarget.name]);
    console.log('currentQuery: ', currentQuery);
  };

  console.log('query: ', query);

  return (
    <main>
      <form onSubmit={hangleSubmit} name="query" value={query}>
        <input placeholder="Search movie" onChange={hangleChange} />
        <button type="submit">🔎</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <MoviesList movies={movies} />
    </main>
  );
}
export default Movies;
