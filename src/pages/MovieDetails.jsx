import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../servisec/api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieDetails();
  });

  console.log('movie: ', movie);
  console.log('movie: ');

  return (
    <div>
      <button type="button">Go back</button>
      <div>Now showing product with id - {movieId}</div>;<h1>MovieDetails</h1>
    </div>
  );
}

export default MovieDetails;
