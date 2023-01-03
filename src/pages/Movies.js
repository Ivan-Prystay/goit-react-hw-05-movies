import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovie } from '../servisec/api';

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
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  const hangleChange = e => {
    setCurrentQuery(e.currentTarget.value);
  };

  const hangleSubmit = e => {
    e.preventDefault();
    setQuery(currentQuery);
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={hangleSubmit}>
        <input placeholder="Search movie" onChange={hangleChange} />
        <button type="submit">🔎</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <ul style={{ listStyle: 'none' }}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="150"
            />
            <br />
            <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
              {title}, ID: #{id}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

//https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg
