import { NavLink, useLocation } from 'react-router-dom';
import noImage from '../images/no-image.png';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 320px)',
        gap: '16px',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
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
          <NavLink
            to={`/movies/${id}`}
            state={{ from: location }}
            style={{ textDecoration: 'none' }}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
              alt={title}
              width="200px"
            />
            <br />
            {title}
            <br />
            Release date: {release_date}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
