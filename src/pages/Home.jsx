import { useEffect, useState } from 'react';
import { getTrending } from '../servisec/api';
import MoviesList from '../components/MoviesList';
import { Loader } from '../components/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setisLoading(true);

      try {
        const data = await getTrending();
        setMovies(data.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
    </main>
  );
}
export default Home;
