import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../servisec/api';
import MoviesList from '../components/MoviesList';
import { notify } from '../servisec/notify';
import { Loader } from '../components/Loader';
import {
  MoviesBox,
  MoviesForm,
  SearchInput,
  SearchButton,
} from './PageStyle.styled';

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

        if (data.data.results.length === 0) {
          console.log('data.data.results.length: ', data.data.results.length);
          notify('Nothing was found for your request.');
        }

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
      notify('Nothing has changed in your query or the query is empty.');
      setIsLoading(false);
      return;
    }
    setSearchParams({ [e.currentTarget.name]: currentQuery });
    setIsLoading(true);
  };

  return (
    <MoviesBox>
      <MoviesForm onSubmit={hangleSubmit} name="query" value={query}>
        <SearchInput placeholder="Search movie" onChange={hangleChange} />
        <SearchButton type="submit">🔎</SearchButton>
      </MoviesForm>
      {isLoading && <Loader />}
      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
    </MoviesBox>
  );
}
export default Movies;