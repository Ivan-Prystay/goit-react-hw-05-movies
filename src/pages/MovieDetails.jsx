import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../servisec/api';
import noImage from '../images/no-image.png';

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
  const { poster_path, title, overview } = movie;

  return (
    <main>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </button>
      {movie.id === +id && (
        <>
          <article>
            <h2>{title}</h2>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
              alt={title}
              width="50%"
            />
            <p>{overview}</p>
          </article>
          <h3>Aditional information</h3>
          <NavLink to="cast" state={backLink}>
            Cast
          </NavLink>
          <br />
          <NavLink to="reviews" state={backLink}>
            Reviews
          </NavLink>
          <Outlet />
        </>
      )}
    </main>
  );
}

export default MovieDetails;
