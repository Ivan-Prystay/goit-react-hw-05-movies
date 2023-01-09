import { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../servisec/api';

import {
  ButtonBack,
  CardMovie,
  ImageWraper,
  TextWraper,
  NoImage,
  Image,
} from './MovieDetails.styled';

import { Loader } from '../components/Loader';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backLink = location.state ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieDetails();
  }, [id]);
  const { poster_path, title, overview, vote_average, release_date, genres } =
    movie;

  return (
    <>
      <ButtonBack type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </ButtonBack>
      {movie.id === +id && (
        <>
          <CardMovie>
            <ImageWraper>
              {poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              ) : (
                <NoImage />
              )}
            </ImageWraper>
            <TextWraper>
              <h2>{title}</h2>
              <p> {`(${new Date(release_date).getFullYear()})`} </p>
              <p>User score: {Number(vote_average * 10).toFixed(2)} %</p>
              <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
              <p>{overview}</p>
            </TextWraper>
          </CardMovie>
          <hr />
          <h3>Aditional information</h3>
          <NavLink to="cast" state={backLink}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={backLink}>
            Reviews
          </NavLink>
          <hr />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetails;
