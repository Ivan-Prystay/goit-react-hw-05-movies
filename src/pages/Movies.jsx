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
    <div>
      <h1>Movies</h1>
      <form onSubmit={hangleSubmit}>
        <input placeholder="Search movie" onChange={hangleChange} />
        <button type="submit">🔎</button>
      </form>
      {isLoading && <p>Loading...</p>}

      <ul style={{ listStyle: 'none' }}>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <li
            key={id}
            style={{
              border: '2px solid #87ceeb',
              borderRadius: '15px',
              marginTop: '15px',
              padding: '15px',
              width: '240px',
            }}
          >
            <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://via.placeholder.com/150x225/?text=No+image'
                }
                alt={title}
                width="150"
              />
              <br />
              {title}
              <br />
              ID: {id}
              <br />
              Release date: {release_date}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

//https://image.tmdb.org/t/p/w500//74xTEgt7R36Fpooo50r9T25onhq.jpg
