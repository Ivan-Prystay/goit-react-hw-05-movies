import { useEffect, useState } from 'react';
import { getTrending } from '../servisec/api';
import { NavLink } from 'react-router-dom';

function Home() {
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
  return (
    <div>
      <h1>Найпопулярніші фільми на сьогодні</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="150"
            />
            <br />
            <NavLink style={{ textDecoration: 'none' }}>
              {title}, ID: #{id}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
