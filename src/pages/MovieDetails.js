import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId: ', movieId);
  return (
    <div>
      <button type="button">Go back</button>
      <div>Now showing product with id - {movieId}</div>;<h1>MovieDetails</h1>
    </div>
  );
}

export default MovieDetails;
