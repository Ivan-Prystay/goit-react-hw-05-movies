import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';

import {
  ButtonBack,
  CardMovie,
  TextWraper,
  NoImage,
  Image,
  YearRelease,
  Title,
  UserScore,
  Genres,
  Overview,
  AditionalTitle,
  AditionalMenu,
  AditionaLink,
} from './MovieDetails.styled';

import { Loader } from '../../components/Loader';

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
        console.error(error.message);
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
            {poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            ) : (
              <NoImage />
            )}
            <TextWraper>
              <Title>{title}</Title>
              <YearRelease>
                {`(${new Date(release_date).getFullYear()})`}
              </YearRelease>
              <UserScore>
                User score: <b>{Number(vote_average * 10).toFixed(2)}</b>%
              </UserScore>
              <Genres>
                <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
              </Genres>
              <Overview>{overview}</Overview>
            </TextWraper>
          </CardMovie>
          <hr />
          <AditionalTitle>Aditional information</AditionalTitle>
          <AditionalMenu>
            <AditionaLink to="cast" state={backLink}>
              Cast
            </AditionaLink>
            <AditionaLink to="reviews" state={backLink}>
              Reviews
            </AditionaLink>
          </AditionalMenu>
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
