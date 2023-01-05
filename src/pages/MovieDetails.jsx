import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../servisec/api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

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
  console.log('movie: ', movie.id);

  return (
    <main>
      <button type="button">Go back</button>
      {movie.id === +id && (
        <>
          <article>
            <h2>{title}</h2>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://scontent.fdnk3-1.fna.fbcdn.net/v/t39.30808-6/300614120_749109123105649_7622428468907354468_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nj1Gm9nirBoAX-dJjk4&_nc_ht=scontent.fdnk3-1.fna&oh=00_AfB1EUdkgwU_1P5CtK9vIDObWxzYJydKjw-mFgQQwC4HBA&oe=63BB0B8A'
              }
              alt={title}
              width="25%"
            />
            <p>{overview}</p>
          </article>
          <h3>Aditional information</h3>
          <NavLink to="cast">Cast</NavLink>
          <br />
          <NavLink to="reviews">Reviews</NavLink>
          <Outlet />
        </>
      )}
    </main>
  );
}

export default MovieDetails;
