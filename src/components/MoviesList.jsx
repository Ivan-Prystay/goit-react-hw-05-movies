import { useLocation } from 'react-router-dom';
// import noImage from '../images/no-image.png';
// import { FaUserAlt } from 'react-icons/fa';
import { NoImage, Image, StyledLink } from './MoviesList.styled';

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
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            ) : (
              <NoImage> </NoImage>
            )}
            <br />
            {title}
            <br />
            Release date: {release_date}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
