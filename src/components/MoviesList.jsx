import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  NoImage,
  Image,
  StyledLink,
  ListMovies,
  CardMovie,
  TitleParagraph,
  PopularityParagraph,
} from './MoviesList.styled';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title, poster_path, popularity }) => (
        <CardMovie key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            ) : (
              <NoImage> </NoImage>
            )}
            <TitleParagraph>{title}</TitleParagraph>
            <PopularityParagraph>
              Popularity: <b>{popularity}</b>
            </PopularityParagraph>
          </StyledLink>
        </CardMovie>
      ))}
    </ListMovies>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
